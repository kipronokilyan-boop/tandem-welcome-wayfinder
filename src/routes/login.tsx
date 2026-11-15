import { createFileRoute, Link, useNavigate, useHydrated } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { signInDemo } from "@/lib/demo-account";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Demo sign in — Amoriva" },
    { name: "description", content: "Try the Amoriva demo sign-in experience." },
    { property: "og:title", content: "Demo sign in — Amoriva" },
    { property: "og:description", content: "Try the Amoriva demo sign-in experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }), component: Login,
});

function Login() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setBusy(true);
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim().toLowerCase();
    try {
      signInDemo(email);
      await navigate({ to: "/account" });
    } catch (error) {
      setError(error instanceof Error && error.name === "Error" ? error.message : "The demo could not save in this tab. Allow browser storage and try again.");
    } finally { setBusy(false); }
  }
  return <main className="demo-page"><section className="demo-content">
    <Link to="/" className="demo-brand"><img src="/site-assets/20d745d21dcfa2ed.png" alt="" />Amoriva</Link>
    <span className="demo-label">Demo only · No real account</span>
    <h1>Demo sign in</h1>
    <form onSubmit={submit} className="demo-form">
      <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required />
      {error && <p role="alert" className="demo-error">{error}</p>}
      <Button variant="demo" type="submit" disabled={busy || !hydrated}>{busy ? "Opening…" : "Sign in"}</Button>
    </form>
    <p className="demo-note">Use the email you signed up with in this tab. No password is required; this is not secure sign-in.</p>
    <Button variant="demoLink" asChild><Link to="/signup">Create a demo profile</Link></Button>
  </section></main>;
}