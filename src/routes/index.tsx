import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Amoriva - Global Cultural \u0026 Language Exchange | Daily Conversation Rewards" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <div className="landing-theme-wrapper flex justify-center [max-width:100vw] [overflow-x:hidden] [transition:background_0.3s] [@media(max-width:640px)]:[margin:0px]!">
          <div className="landing-slide-container flex flex-col justify-between relative [overflow:hidden]">
            <header className="slide-top-header items-center flex justify-between [padding-bottom:0.75rem] [z-index:10]">
              <div className="slide-brand-logo items-center flex [cursor:pointer] [gap:0.5rem]">
                <img className="Amoriva-app-icon block [max-width:100%]" alt="Amoriva logo" width="28" height="28" src="/site-assets/20d745d21dcfa2ed.png" />
                <span className="slide-brand-title items-center flex gap-[0.35rem] [font-size:1.25rem] [font-weight:900]! [letter-spacing:-0.02em]">Amoriva<span className="slide-brand-pro [font-size:0.65rem] [font-weight:800]! [letter-spacing:0.05em] [padding:0.15rem_0.4rem]">PRO</span></span>
              </div>
              <div className="slide-top-controls items-center flex [gap:0.5rem]">
                <button className="theme-switch-btn [cursor:pointer] [transition:0.18s]" type="button" title="Toggle theme">🌙 Dark</button>
                <button className="skip-slide-btn [cursor:pointer] [transition:0.18s]" type="button">Skip</button>
              </div>
            </header>
            <div className="landing-slide flex flex-1 flex-col justify-between [animation:0.32s_ease-out_0s_1_normal_none_running_slideFadeIn]">
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
                  <button className="pag-dot active [box-shadow:rgba(76,1,33,0.6)_0px_0px_12px]! [cursor:pointer] [padding:0px] [transition:0.25s]" type="button" aria-label="Slide 1" />
                  <button className="pag-dot [cursor:pointer] [padding:0px] [transition:0.25s]" type="button" aria-label="Slide 2" />
                  <button className="pag-dot [cursor:pointer] [padding:0px] [transition:0.25s]" type="button" aria-label="Slide 3" />
                </div>
                <button className="slide-cta-btn primary-teal-btn items-center flex justify-center no-underline [transition:transform_0.18s,background_0.18s,box-shadow_0.18s]" type="button">Next →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
