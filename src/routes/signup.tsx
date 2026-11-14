import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { createDemoProfile, saveDemoProfile } from "@/lib/demo-account";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [
    { title: "Demo sign up — Amoriva" },
    { name: "description", content: "Try the Amoriva demo sign-up experience." },
    { property: "og:title", content: "Demo sign up — Amoriva" },
    { property: "og:description", content: "Try the Amoriva demo sign-up experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }), component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setBusy(true);
    const data = new FormData(event.currentTarget);
    try {
      saveDemoProfile(createDemoProfile(String(data.get("displayName") || ""), String(data.get("email") || "")));
      await navigate({ to: "/account" });
    } catch { setError("The demo could not save in this tab. Allow browser storage and try again."); setBusy(false); }
  }
  return <main className="demo-page"><section className="demo-content">
    <Link to="/" className="demo-brand"><img src="/site-assets/20d745d21dcfa2ed.png" alt="" />Amoriva</Link>
    <span className="demo-label">Demo only · No real account</span>
    <h1>Create a demo profile</h1>
    <form onSubmit={submit} className="demo-form">
      <label htmlFor="displayName">Display name</label><input id="displayName" name="displayName" autoComplete="nickname" required maxLength={80} />
      <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required />
      {error && <p role="alert" className="demo-error">{error}</p>}
      <Button variant="demo" type="submit" disabled={busy}>{busy ? "Opening…" : "Continue to demo"}</Button>
    </form>
    <p className="demo-note">Demo profile stays in this tab. No password or email confirmation.</p>
    <Button variant="demoLink" asChild><Link to="/login">Already tried it? Demo sign in</Link></Button>
  </section></main>;
}