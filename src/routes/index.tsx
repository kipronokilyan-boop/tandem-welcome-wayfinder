import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import welcomeCSS from "../styles/welcome.css?raw";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Amoriva — Global Cultural & Language Exchange" },
    { name: "description", content: "Connect with international members, practice languages and share your culture with Amoriva." },
    { property: "og:title", content: "Amoriva — Global Cultural & Language Exchange" },
    { property: "og:description", content: "Connect with international members, practice languages and share your culture with Amoriva." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const [slide, setSlide] = useState(1);
  const [dark, setDark] = useState(false);
  return (
    <>
      <style>{slide === 1 ? capturedCSS : welcomeCSS}</style>
      <div id="root">
        <div className={`landing-theme-wrapper flex justify-center [max-width:100vw] [overflow-x:hidden] [transition:background_0.3s] [@media(max-width:640px)]:[margin:0px]! ${dark ? "dark-theme" : ""}`}>
          <div className="landing-slide-container flex flex-col justify-between relative [overflow:hidden]">
            <header className="slide-top-header items-center flex justify-between [padding-bottom:0.75rem] [z-index:10]">
              <div role="button" tabIndex={0} aria-label="Amoriva home" onClick={() => setSlide(1)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSlide(1); } }} className="slide-brand-logo items-center flex [cursor:pointer] [gap:0.5rem]">
                <img className="Amoriva-app-icon block [max-width:100%]" alt="Amoriva logo" width="28" height="28" src="/site-assets/20d745d21dcfa2ed.png" />
                <span className="slide-brand-title items-center flex gap-[0.35rem] [font-size:1.25rem] [font-weight:900]! [letter-spacing:-0.02em]">Amoriva<span className="slide-brand-pro [font-size:0.65rem] [font-weight:800]! [letter-spacing:0.05em] [padding:0.15rem_0.4rem]">PRO</span></span>
              </div>
              <div className="slide-top-controls items-center flex [gap:0.5rem]">
                <button className="theme-switch-btn [cursor:pointer] [transition:0.18s]" type="button" title="Toggle theme" onClick={() => setDark(value => !value)}>{dark ? "☀️ Light" : "🌙 Dark"}</button>
                {slide !== 3 && <button onClick={() => setSlide(3)} className="skip-slide-btn [cursor:pointer] [transition:0.18s]" type="button">Skip</button>}
              </div>
            </header>
            {slide === 1 && <div key="slide-1" className="landing-slide flex flex-1 flex-col justify-between [animation:0.32s_ease-out_0s_1_normal_none_running_slideFadeIn]">
              <div className="slide-top-content marketing-slide-1 flex flex-col gap-[0.85rem] [padding:0.5rem_0px_0.85rem]">
                <div className="hero-marketing-badge items-center flex gap-[0.85rem] [box-shadow:rgba(0,0,0,0.4)_0px_8px_24px]! [padding:0.85rem_1rem]">
                  <div className="badge-logo-wrap items-center flex justify-center [box-shadow:rgba(124,58,237,0.15)_0px_4px_12px] [flex-shrink:0]">
                    <img className="Amoriva-hero-icon block [max-width:100%]" alt="Amoriva" width="48" height="48" src="/site-assets/20d745d21dcfa2ed.png" />
                  </div>
                  <div className="badge-text-col">
                    <span className="platform-tag block [font-size:0.725rem] [font-weight:800]! [letter-spacing:0.02em]">🌍 Global Cultural &amp; Language Exchange</span>
                    <h3 className="platform-name [font-size:1.15rem] [font-weight:900]! [margin:0.15rem_0px_0px]">Amoriva Official</h3>
                  </div>
                </div>
                <div className="marketing-features-grid flex flex-col gap-[0.65rem] [margin-top:0.25rem]">
                  <div className="marketing-feature-card items-center flex [box-shadow:rgba(0,0,0,0.35)_0px_6px_18px]! [gap:0.75rem] [padding:0.75rem_0.85rem] [transition:transform_0.18s,border-color_0.18s]">
                    <div className="feature-icon-box green-bg items-center flex justify-center [flex-shrink:0] [font-size:1.25rem]">💬</div>
                    <div className="feature-text flex-1 [min-width:0px]">
                      <strong>Practice Through Conversation</strong>
                      <p>Have meaningful conversations with people from different countries and practice languages naturally.</p>
                    </div>
                    <span className="feature-rate-pill whitespace-nowrap [font-size:0.7rem] [font-weight:800]! [padding:0.2rem_0.5rem]">Language</span>
                  </div>
                  <div className="marketing-feature-card items-center flex [box-shadow:rgba(0,0,0,0.35)_0px_6px_18px]! [gap:0.75rem] [padding:0.75rem_0.85rem] [transition:transform_0.18s,border-color_0.18s]">
                    <div className="feature-icon-box teal-bg items-center flex justify-center [flex-shrink:0] [font-size:1.25rem]">🌎</div>
                    <div className="feature-text flex-1 [min-width:0px]">
                      <strong>Discover New Cultures</strong>
                      <p>Learn about traditions, lifestyles, food, languages and everyday life from people around the world.</p>
                    </div>
                    <span className="feature-rate-pill whitespace-nowrap [font-size:0.7rem] [font-weight:800]! [padding:0.2rem_0.5rem]">Explore</span>
                  </div>
                  <div className="marketing-feature-card items-center flex [box-shadow:rgba(0,0,0,0.35)_0px_6px_18px]! [gap:0.75rem] [padding:0.75rem_0.85rem] [transition:transform_0.18s,border-color_0.18s]">
                    <div className="feature-icon-box orange-bg items-center flex justify-center [flex-shrink:0] [font-size:1.25rem]">🤝</div>
                    <div className="feature-text flex-1 [min-width:0px]">
                      <strong>Meet International People</strong>
                      <p>Connect with members from different backgrounds who are interested in friendly cultural conversations.</p>
                    </div>
                    <span className="feature-rate-pill whitespace-nowrap [font-size:0.7rem] [font-weight:800]! [padding:0.2rem_0.5rem]">Connect</span>
                  </div>
                </div>
              </div>
              <div className="slide-bottom-content items-center flex flex-col text-center [gap:0.75rem] [padding-top:0.5rem]">
                <h1 className="slide-main-heading [font-size:1.85rem] [letter-spacing:-0.02em] [line-height:1.25] [margin:0px]">Connect, Exchange &amp;<br />Discover New Cultures</h1>
                <p className="slide-main-subtext max-w-[94%] [font-size:0.875rem] [line-height:1.45] [margin:0px]">Chat about languages, culture and everyday life with international members from around the world.</p>
                <div className="slide-pagination-dots items-center flex gap-[0.45rem] justify-center [padding:0.35rem_0px]">
                  <button className="pag-dot active [box-shadow:rgba(76,1,33,0.6)_0px_0px_12px]! [cursor:pointer] [padding:0px] [transition:0.25s]" type="button" onClick={() => setSlide(1)} aria-label="Slide 1" />
                  <button className="pag-dot [cursor:pointer] [padding:0px] [transition:0.25s]" type="button" onClick={() => setSlide(2)} aria-label="Slide 2" />
                  <button className="pag-dot [cursor:pointer] [padding:0px] [transition:0.25s]" type="button" onClick={() => setSlide(3)} aria-label="Slide 3" />
                </div>
                <button className="slide-cta-btn primary-teal-btn items-center flex justify-center no-underline [transition:transform_0.18s,background_0.18s,box-shadow_0.18s]" type="button" onClick={() => setSlide(2)}>Next →</button>
              </div>
            </div>}
            {slide === 2 && <div className="landing-slide slide-step-2 animate-slide"><div className="slide-top-content static-content-no-scroll"><div className="slide-2-heading-block"><h2 className="slide-main-heading tight">People Around the World</h2><p className="slide-main-subtext small">Discover international members and start friendly conversations about language and culture.</p></div><div className="three-typing-chats-list"><div className="live-typing-mini-card"><div className="typing-mini-header"><div className="typing-mini-user"><img alt="Margaret" className="typing-avatar-sm" src="/__l5e/assets-v1/438ba1a1-28eb-404b-9a96-a1eb8379379a/margaret.jpg" /><div ><strong >Margaret W. 🇺🇸</strong><span className="typing-status-badge online-status">🟢 Online</span></div></div><span className="typing-rate-tag">USA</span></div><div className="typing-bubble-mini looking-bubble"><span className="bubble-mode-tag">💬 Looking to chat</span><span className="typing-msg-preview">“Active now · Looking for someone to chat with”</span></div></div><div className="live-typing-mini-card"><div className="typing-mini-header"><div className="typing-mini-user"><img alt="Hans" className="typing-avatar-sm" src="/__l5e/assets-v1/e0ce3f04-211f-4224-bb47-aad6841c40ea/hans.jpg" /><div ><strong >Hans W. 🇩🇪</strong><span className="typing-status-badge typing-status">🟢 Typing...</span></div></div><span className="typing-rate-tag">Germany</span></div><div className="typing-bubble-mini"><div className="typing-dots-sm"><span className="tdot"></span><span className="tdot"></span><span className="tdot"></span></div><span className="typing-msg-preview">“I want to learn about your traditions &amp; local culture...”</span></div></div><div className="live-typing-mini-card"><div className="typing-mini-header"><div className="typing-mini-user"><img alt="Pierre" className="typing-avatar-sm" src="/__l5e/assets-v1/bcde6375-971a-447d-970c-4729f7e76b36/pierre.jpg" /><div ><strong >Pierre D. 🇫🇷</strong><span className="typing-status-badge looking-status">💬 Looking to chat</span></div></div><span className="typing-rate-tag">France</span></div><div className="typing-bubble-mini looking-bubble"><span className="bubble-mode-tag">💬 Looking to chat</span><span className="typing-msg-preview">“Hello! What is your favorite traditional local food?”</span></div></div></div><div className="single-review-card"><div className="review-card-header"><div className="review-sender-info"><span className="reviewer-flag">🇿🇦</span><div ><strong >Davis Lerato</strong><span className="reviewer-city">South African Member</span></div></div><span className="review-stars">★★★★★</span></div><p className="review-text-body">“A great platform for discovering different cultures and having interesting conversations with people from around the world.”</p></div></div><div className="slide-bottom-content"><div className="slide-pagination-dots"><button type="button" className="pag-dot" aria-label="Slide 1" onClick={() => setSlide(1)}></button><button type="button" className="pag-dot active" aria-label="Slide 2" onClick={() => setSlide(2)}></button><button type="button" className="pag-dot" aria-label="Slide 3" onClick={() => setSlide(3)}></button></div><button type="button" className="slide-cta-btn primary-teal-btn" onClick={() => setSlide(3)}>Get Started →</button></div></div>}
            {slide === 3 && <div className="landing-slide slide-step-3 animate-slide"><div className="slide-top-content slide-3-marketing"><div className="slide-3-hot-badge"><span className="fire-icon">🌍</span><span >GLOBAL LANGUAGE &amp; CULTURAL COMMUNITY</span></div><div className="slide-3-hero-card"><div className="hero-logo-ring"><img alt="Amoriva logo" width="64" height="64" className="Amoriva-main-logo" src="/site-assets/20d745d21dcfa2ed.png" /></div><h1 className="hero-title-bold">Amoriva Official</h1><p className="hero-tagline-bold">Connect with international members, practice languages and share your culture.</p><div className="bonus-promo-ribbon"><span >🌎 Explore languages. Discover cultures. Connect.</span></div></div><div className="slide-3-perks-row"><div className="perk-card"><span className="perk-icon">💬</span><strong >Real Conversations</strong><span >Practice naturally</span></div><div className="perk-card"><span className="perk-icon">🌍</span><strong >Global Community</strong><span >Meet people worldwide</span></div><div className="perk-card"><span className="perk-icon">🛡️</span><strong >Safe Community</strong><span >Connect responsibly</span></div></div></div><div className="slide-bottom-content auth-buttons-stack"><a href="/signup" className="slide-cta-btn primary-teal-btn marketing-cta"><span >Create Free Account &amp; Start Chatting</span><span className="cta-arrow">→</span></a><a href="/login" className="slide-cta-btn outline-white-btn">Sign In to Existing Account</a><div className="slide-3-trust-footer"><span >🔒 Secure</span><span >•</span><span >🌍 Global Community</span><span >•</span><span >💬 Language Exchange</span></div><div className="slide-pagination-dots"><button type="button" className="pag-dot" aria-label="Slide 1" onClick={() => setSlide(1)}></button><button type="button" className="pag-dot" aria-label="Slide 2" onClick={() => setSlide(2)}></button><button type="button" className="pag-dot active" aria-label="Slide 3" onClick={() => setSlide(3)}></button></div></div></div>}
          </div>
        </div>
      </div>
    </>
  );
}
