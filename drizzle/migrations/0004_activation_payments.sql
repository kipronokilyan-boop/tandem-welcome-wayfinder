CREATE TYPE public.app_role AS ENUM ('verifier');
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members read their own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE TABLE public.activation_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  network text NOT NULL CHECK (network IN ('mtn','airtel')),
  transaction_id text NOT NULL CHECK (char_length(btrim(transaction_id)) BETWEEN 4 AND 40),
  payer_phone text NOT NULL CHECK (char_length(btrim(payer_phone)) BETWEEN 9 AND 16),
  amount_ugx numeric(12,2) NOT NULL DEFAULT 5576.92,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  review_note text,
  reviewed_by uuid,
  reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX activation_payments_txn_unique ON public.activation_payments (network, upper(btrim(transaction_id)));
GRANT SELECT, INSERT, UPDATE ON public.activation_payments TO authenticated;
GRANT ALL ON public.activation_payments TO service_role;
ALTER TABLE public.activation_payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members see own payments" ON public.activation_payments FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'verifier'));
CREATE POLICY "Members submit own pending payment" ON public.activation_payments FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND status = 'pending' AND reviewed_by IS NULL AND reviewed_at IS NULL AND review_note IS NULL AND amount_ugx = 5576.92);
CREATE POLICY "Verifiers review payments" ON public.activation_payments FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'verifier'))
  WITH CHECK (public.has_role(auth.uid(), 'verifier') AND reviewed_by = auth.uid());

CREATE OR REPLACE FUNCTION public.is_activated(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.activation_payments WHERE user_id = _user_id AND status = 'approved');
$$;
REVOKE ALL ON FUNCTION public.is_activated(uuid) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.is_activated(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.list_payment_payers()
RETURNS TABLE (id uuid, display_name text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT p.id, p.display_name FROM public.profiles p
  WHERE public.has_role(auth.uid(), 'verifier') AND p.id IN (SELECT user_id FROM public.activation_payments);
$$;
REVOKE ALL ON FUNCTION public.list_payment_payers() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.list_payment_payers() TO authenticated;

DROP POLICY "Members send as themselves to real members" ON public.messages;
CREATE POLICY "Activated members send to real members" ON public.messages FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = sender_id AND public.is_chat_member(recipient_id) AND (
    public.is_activated(auth.uid()) OR public.has_role(auth.uid(), 'verifier') OR public.has_role(recipient_id, 'verifier')));