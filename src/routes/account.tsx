import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { clearDemoProfile, readDemoProfile, type DemoProfile } from "@/lib/demo-account";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [
    { title: "Your demo profile — Amoriva" },
    { name: "description", content: "View your Amoriva demo profile." },
    { property: "og:title", content: "Your demo profile — Amoriva" },
    { property: "og:description", content: "View your Amoriva demo profile." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Account,
});

function Account() {
  const [profile, setProfile] = useState<DemoProfile | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => { setProfile(readDemoProfile()); setReady(true); }, []);
  async function signOut() {
    try {
      clearDemoProfile();
      setProfile(null);
      await navigate({ to: "/login" });
    } catch { setError("Could not sign out. Allow browser storage and try again."); }
  }
  return <main className="demo-page"><section className="demo-content">
    <Link to="/" className="demo-brand"><img src="/site-assets/20d745d21dcfa2ed.png" alt="" />Amoriva</Link>
    <span className="demo-label">Demo only · No real account</span>
    {!ready ? <p>Loading…</p> : profile ? <>
      <h1>Welcome, {profile.displayName}</h1>
      <dl className="demo-profile"><dt>Display name</dt><dd>{profile.displayName}</dd><dt>Email</dt><dd>{profile.email}</dd></dl>
      <Button variant="demo" onClick={signOut}>Sign out of demo</Button>
    </> : <><h1>Your demo profile</h1><Button variant="demo" asChild><Link to="/login">Demo sign in</Link></Button></>}
    {error && <p role="alert" className="demo-error">{error}</p>}
  </section></main>;
}