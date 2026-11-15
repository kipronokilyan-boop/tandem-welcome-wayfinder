import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/assessment.css?raw";

export const Route = createFileRoute("/assessment")({
  head: () => ({ meta: [{ title: "Amoriva - Global Cultural \u0026 Language Exchange | Daily Conversation Rewards" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <div className="auth-page flex flex-col [@media(max-width:640px)]:flex [@media(max-width:640px)]:flex-col">
          <div className="auth-header items-center flex justify-between max-w-[1200px] [margin:0px_auto] [@media(max-width:640px)]:items-center [@media(max-width:640px)]:flex [@media(max-width:640px)]:flex-nowrap [@media(max-width:640px)]:justify-between [@media(max-width:640px)]:min-h-[52px] [@media(max-width:640px)]:[gap:0.5rem]">
            <a className="auth-brand items-center flex no-underline [@media(max-width:640px)]:[flex-shrink:0]" href="/">
              <img className="auth-brand-logo block [max-width:100%]" alt="Amoriva logo" src="/site-assets/20d745d21dcfa2ed.png" />
              <span className="auth-brand-name [font-weight:900]! [@media(max-width:640px)]:[letter-spacing:0px]">Amoriva</span>
            </a>
            <div className="step-indicator-pill [font-weight:800]!">Step 1 of 5 · Skills &amp; Profile Matching</div>
          </div>
          <div className="auth-container items-center flex [@media(max-width:640px)]:flex [@media(max-width:640px)]:[overflow-y:auto]">
            <div className="auth-card assessment-card max-w-[540px] [backdrop-filter:blur(16px)]">
              <div className="auth-card-header text-center">
                <div className="signup-badge inline-block! [font-weight:800]!">🎯 Member Onboarding Assessment</div>
                <h1 className="auth-title [font-weight:900]! [@media(max-width:640px)]:[line-height:1.3]!">Language &amp; Communication Tone</h1>
                <p className="auth-subtitle [margin:0.35rem_0px_0px]">Help us match you with the best foreign members based on your language preferences.</p>
              </div>
              <div className="assessment-progress-bar [overflow:hidden]">
                <div className="progress-fill [transition:width_0.3s]" style={{ width: "20%" }} />
              </div>
              <div className="assessment-step-content flex flex-col [gap:1.25rem]">
                <div className="form-group flex flex-col [gap:0.375rem]">
                  <label>Primary Chatting Language</label>
                  <div className="option-grid grid grid-cols-[repeat(2,1fr)] [gap:0.625rem]">
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>💬</span>
                      <span>English</span>
                    </button>
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>💬</span>
                      <span>Swahili &amp; English</span>
                    </button>
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>💬</span>
                      <span>French &amp; English</span>
                    </button>
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>💬</span>
                      <span>German &amp; English</span>
                    </button>
                  </div>
                </div>
                <div className="form-group flex flex-col [gap:0.375rem]">
                  <label>Your Conversational Style</label>
                  <div className="option-grid grid grid-cols-[repeat(2,1fr)] [gap:0.625rem]">
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>✨</span>
                      <span>Friendly &amp; Empathetic</span>
                    </button>
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>✨</span>
                      <span>Great Listener &amp; Caring</span>
                    </button>
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>✨</span>
                      <span>Witty &amp; Fun</span>
                    </button>
                    <button className="option-chip items-center flex text-left [cursor:pointer] [gap:0.5rem] [padding:0.75rem_0.85rem] [transition:0.18s]!" type="button">
                      <span>✨</span>
                      <span>Encouraging &amp; Positive</span>
                    </button>
                  </div>
                </div>
                <button className="auth-submit-btn coral-btn items-center flex justify-center [gap:0.5rem]" type="button">Next Step: Earnings &amp; Schedule →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
