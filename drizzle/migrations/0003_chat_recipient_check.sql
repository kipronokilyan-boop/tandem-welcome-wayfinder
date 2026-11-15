CREATE OR REPLACE FUNCTION public.is_chat_member(_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.profiles WHERE id = _id);
$$;
REVOKE ALL ON FUNCTION public.is_chat_member(uuid) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.is_chat_member(uuid) TO authenticated;
DROP POLICY "Members send as themselves to real members" ON public.messages;
CREATE POLICY "Members send as themselves to real members" ON public.messages FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = sender_id AND public.is_chat_member(recipient_id));