import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/dashboard.css?raw";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Amoriva - Global Cultural \u0026 Language Exchange | Daily Conversation Rewards" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <div className="dashboard-layout app-3page-layout flex flex-col [min-height:100vh]">
          <ImportedHeader />
          <div className="activation-warning-topbar items-center flex justify-between relative! [font-weight:600] [gap:1rem] [max-width:100vw]! [overflow-x:hidden]! [z-index:99]!">
            <div className="topbar-inner flex! justify-between! [margin:0px_auto]! [max-width:1200px]! [@media(max-width:640px)]:flex-col! [@media(max-width:640px)]:text-center!">
              <span className="warning-text [font-weight:600]! [line-height:1.4]! [@media(max-width:640px)]:block! [@media(max-width:640px)]:text-center!">🔴 <strong>Account Pending Activation:</strong> Complete Ksh 185 fee ($1.42) to unlock chat rooms &amp; cashouts.</span>
              <button className="topbar-activate-btn whitespace-nowrap! [cursor:pointer]! [flex-shrink:0]! [transition:background_0.15s]! [@media(max-width:640px)]:text-center!" type="button">Activate Account (KSh 185) →</button>
            </div>
          </div>
          <main className="page-container online-page flex-1 [margin:0px_auto]">
            <div className="live-activity-bar items-center flex justify-between [gap:0.75rem] [margin-bottom:1rem] [padding:0.55rem_1rem]">
              <div className="live-pulse-badge items-center flex gap-[0.45rem] [flex-shrink:0] [font-size:0.75rem] [font-weight:800]">
                <span className="live-dot-pulse [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                <strong>LIVE ACTIVITY:</strong>
              </div>
              <div className="live-alert-marquee flex-1 [min-width:0px] [overflow:hidden]" data-site-import-desktop-variant="">
                <span className="marquee-text-fade block text-ellipsis whitespace-nowrap [animation:0.4s_ease_0s_1_normal_none_running_fade-in-text] [font-size:0.825rem] [font-weight:600] [overflow:hidden]">🟢 Willem d. from Netherlands came online · wants to talk about tea farming</span>
              </div>
              <div className="live-alert-marquee flex-1 [min-width:0px] [overflow:hidden]" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
                <span className="marquee-text-fade block text-ellipsis whitespace-nowrap [animation:0.4s_ease_0s_1_normal_none_running_fade-in-text] [font-size:0.825rem] [font-weight:600] [overflow:hidden]">🟢 James M. from Canada is typing · asking about Great Rift Valley wildlife</span>
              </div>
              <div className="live-active-online-pill items-center flex gap-[0.35rem] [flex-shrink:0] [font-size:0.75rem] [font-weight:800] [padding:0.25rem_0.65rem]"><span className="online-number [font-size:0.85rem] [font-weight:900]">55</span> Online Now</div>
            </div>
            <div className="discover-hero-banner">
              <div className="hero-text-wrap">
                <span className="eyebrow-pill inline-block [font-size:0.75rem] [font-weight:800]! [margin-bottom:0.5rem] [padding:0.25rem_0.75rem]">🟢 Real-Time Online Members · Active Now</span>
                <h1 className="discover-main-title [font-weight:900]! [letter-spacing:-0.02em] [margin:0px_0px_0.4rem]">Chat with Online Members</h1>
                <p className="discover-subtitle max-w-[700px]">Foreign members actively looking for Swahili learners &amp; African chat partners appear at the top in real time. Select a member to open a paid chat room.</p>
              </div>
              <div className="discover-search-bar items-center flex gap-[0.6rem] [margin-bottom:1.25rem] [padding:0.6rem_1rem] [transition:0.2s]">
                <span className="search-icon [font-size:1.1rem]">🔍</span>
                <input className="discover-search-input flex-1 [font-size:0.95rem] [outline:none]" placeholder="Search online members by name, country, Swahili, safari, culture..." type="text" defaultValue="" />
              </div>
              <div className="category-filter-row [gap:0.5rem] [@media(max-width:768px)]:[overflow-x:auto] [@media(max-width:768px)]:[padding-bottom:0.5rem] [@media(max-width:768px)]:[scrollbar-width:none]">
                <button className={"\x66ilter-pill active [cursor:pointer] [transition:0.15s] [@media(max-width:768px)]:[flex-shrink:0]"} type="button">🟢 All Online (55)</button>
                <button className={"\x66ilter-pill [cursor:pointer] [transition:0.15s] [@media(max-width:768px)]:[flex-shrink:0]"} type="button">🌍 Culture &amp; Swahili Practice</button>
                <button className={"\x66ilter-pill [cursor:pointer] [transition:0.15s] [@media(max-width:768px)]:[flex-shrink:0]"} type="button">🤝 Friendship &amp; Daily Life</button>
                <button className={"\x66ilter-pill [cursor:pointer] [transition:0.15s] [@media(max-width:768px)]:[flex-shrink:0]"} type="button">💡 Deep Conversations</button>
                <button className={"\x66ilter-pill [cursor:pointer] [transition:0.15s] [@media(max-width:768px)]:[flex-shrink:0]"} type="button">☕ Casual &amp; Food Chat</button>
              </div>
            </div>
            <div className="kenya-foreigners-dash-banner flex justify-between [margin:1.5rem_0px_2rem] [overflow:hidden] [@media(max-width:768px)]:flex-col">
              <div className="banner-left-content flex-1">
                <div className="banner-badge-row items-center flex flex-wrap [gap:0.75rem] [margin-bottom:0.75rem]">
                  <span className="flags-duo-badge [font-size:0.9rem] [font-weight:700] [letter-spacing:0.5px] [padding:0.25rem_0.75rem]">🇰🇪 + 🇺🇸 🇨🇦 🇬🇧 🇦🇺</span>
                  <span className="banner-pulse-live uppercase! [font-size:0.75rem]! [font-weight:800]! [letter-spacing:0.5px]! [padding:0.25rem_0.65rem]!">🟢 Active Expat Chats Live</span>
                  <span className="location-pill [font-size:0.75rem] [font-weight:700] [padding:0.25rem_0.65rem]">📍 Nairobi, Kenya</span>
                </div>
                <h2 className="banner-heading [font-size:1.35rem]! [font-weight:900]! [line-height:1.3]! [margin:0px_0px_0.5rem]!">USA, Canada, UK &amp; Australia Foreigners — Working &amp; Based in Kenya</h2>
                <p className="banner-subtext max-w-[720px] [font-size:0.9rem]! [line-height:1.55]! [margin:0px]!">Connect with international professionals from USA, Canada, UK, and Australia who live and work across Nairobi — Westlands, Karen, Gigiri UN Hub, Kilimani, Lavington. Each profile shows dual flags (Kenya 🇰🇪 + origin) and their Nairobi base.</p>
              </div>
              <div className="banner-action-col flex flex-col [flex-shrink:0] [gap:0.5rem]">
                <a className="banner-click-btn banner-click-btn--green items-center inline-flex gap-[0.65rem] no-underline whitespace-nowrap [font-size:0.95rem]! [font-weight:900]! [padding:0.85rem_1.65rem]! [transition:0.25s]! [@media(max-width:768px)]:justify-center" href="/kenya-foreigners">
                  <span>Open Nairobi Expat Hub</span>
                  <span className="arrow-sym [font-size:1.15rem] [transition:transform_0.2s]">→</span>
                </a>
                <span className="banner-rate-hint text-center [font-size:0.75rem] [font-weight:700]">Earn +$0.45 – $0.65/msg • Instant M-Pesa cashouts</span>
              </div>
            </div>
            <div className="discover-cards-grid grid [gap:1.5rem]">
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Laura Becker" src="/site-assets/1bc682cf03db0d8b.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇨🇭 Laura Becker, 58</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.50/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Switzerland · <strong className="card-job [font-weight:600]">Botanist</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="looking-chat-indicator [animation:0.4s_ease-out_0s_1_normal_none_running_lookingFadeIn] [font-weight:700]">💬 Looking to chat</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Fascinated by the medicinal Moringa tree and African baobab fruit. Teach me about indigenous foods and help me practice simple Swahili sentences.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Baobab Fruit</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Indigenous Food</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Learn Swahili</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Laura</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Mikael Nygård" src="/site-assets/fcf21d76a9f3a611.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇸🇪 Mikael Nygård, 64</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Sweden · <strong className="card-job [font-weight:600]">Park Ranger</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="looking-chat-indicator [animation:0.4s_ease-out_0s_1_normal_none_running_lookingFadeIn] [font-weight:700]">💬 Looking to chat</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Dreaming of seeing the Great Migration in person. Looking for an African companion to talk about lions, elephants, and community-led conservation.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Great Migration</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Elephants &amp; Lions</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Conservation</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Mikael</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Christian Møller" src="/site-assets/0af6202c5ebfe070.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇩🇰 Christian Møller, 61</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Denmark · <strong className="card-job [font-weight:600]">Marine Biologist</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="looking-chat-indicator [animation:0.4s_ease-out_0s_1_normal_none_running_lookingFadeIn] [font-weight:700]">💬 Looking to chat</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Researching coral reefs along Malindi and Watamu marine parks. Want to learn about traditional artisanal fishing and coastal Swahili communities.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Watamu Reefs</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Coastal Fishing</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Towns</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Christian</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Fiona MacLeod" src="/site-assets/fce446fcc21b3dc1.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Fiona MacLeod, 61</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Textile Artisan</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="typing-live-indicator items-center inline-flex gap-[3px] [font-weight:700]"><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce]" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.2s]!" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.4s]!" /> Typing...</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Learning about traditional Kikuyu and Luo bead patterns, headpieces, and ceremonial dress. Looking for a cultural dialogue partner.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Ceremonial Dress</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Beads</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Cultural Heritage</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Fiona</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Natalie Moreau" src="/site-assets/9d803d0fc3b2e172.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇫🇷 Natalie Moreau, 54</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>France · <strong className="card-job [font-weight:600]">Perfumer</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="typing-live-indicator items-center inline-flex gap-[3px] [font-weight:700]"><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce]" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.2s]!" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.4s]!" /> Typing...</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Captivated by frankincense, myrrh, cloves from Zanzibar, and cardamom. Tell me about spice markets, cooking aromas, and Swahili hospitality.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Zanzibar Spices</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Aromas &amp; Tea</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Culture</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Natalie</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Margaret W." src="/site-assets/f00e48e079dfdb20.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Margaret W., 58</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Retired High School Teacher</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="typing-live-indicator items-center inline-flex gap-[3px] [font-weight:700]"><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce]" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.2s]!" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.4s]!" /> Typing...</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Planning my first dream trip to Kenya next summer! I want a friendly local to teach me basic conversational Swahili (Jambo, Habari, Karibu) and explain daily family life and community traditions.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Learn Swahili</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenya Travel</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Traditions</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Margaret</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="James M." src="/site-assets/11ed11a19f7a3ccd.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇨🇦 James M., 64</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Canada · <strong className="card-job [font-weight:600]">Wildlife Biologist</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="looking-chat-indicator [animation:0.4s_ease-out_0s_1_normal_none_running_lookingFadeIn] [font-weight:700]">💬 Looking to chat</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Planning a wildlife safari across the Maasai Mara and Amboseli. I want advice from an authentic African friend on Maasai traditions, local customs, and respect for nature.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Maasai Mara</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Wildlife Safari</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Local Customs</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with James</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Sofia R." src="/site-assets/7c810f416ae77d51.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇮🇹 Sofia R., 54</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Italy · <strong className="card-job [font-weight:600]">Textile Stylist</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="typing-live-indicator items-center inline-flex gap-[3px] [font-weight:700]"><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce]" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.2s]!" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.4s]!" /> Typing...</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I adore vibrant African fabrics like Kitenge, Kanga, and Maasai Shuka! Tell me about what people wear during weddings, holidays, and what the Swahili proverbs on Kangas mean.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kitenge Fabrics</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kanga Proverbs</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Fashion</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Sofia</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="William T." src="/site-assets/06f3329e8859f8de.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 William T., 67</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Retired Pilot</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="looking-chat-indicator [animation:0.4s_ease-out_0s_1_normal_none_running_lookingFadeIn] [font-weight:700]">💬 Looking to chat</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Flew cargo into Nairobi and Entebbe years ago. Now retired, I want to learn how modern Kenya has changed, hear about daily life in the cities, and learn simple Swahili sentences.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenya Memories</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Modern Africa</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Words</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with William</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Chloe Martin" src="/site-assets/b42137bfc1e1393a.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇨🇦 Chloe Martin, 53</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Canada · <strong className="card-job [font-weight:600]">Volunteer Coordinator</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="looking-chat-indicator [animation:0.4s_ease-out_0s_1_normal_none_running_lookingFadeIn] [font-weight:700]">💬 Looking to chat</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Preparing for a volunteer exchange near Eldoret and Iten. Want to know about Kenyan runner culture, altitude training, and how to respectfully greet village elders.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Eldoret Culture</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenyan Runners</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Village Respect</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Chloe</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Sarah Jenkins" src="/site-assets/b3e31008dada6188.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Sarah Jenkins, 60</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Charity Volunteer</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="typing-live-indicator items-center inline-flex gap-[3px] [font-weight:700]"><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce]" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.2s]!" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.4s]!" /> Typing...</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I spent a month in Nakuru years ago and fell in love with Kenyan hospitality ("Karibu sana"). Looking for a cheerful friend to keep that warm bond alive.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Karibu Sana</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Nakuru Memories</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Hospitality</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Sarah</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Diane K." src="/site-assets/36a4a379ad0f0711.jpg" />
                    <span className="status-dot typing items-end bottom-[3px] inline-flex gap-[2px] absolute right-[3px] [animation:1.2s_ease_0s_infinite_normal_none_running_pulse-dot]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Diane K., 59</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Botanical Researcher</strong></span>
                      <span className="status-live-tag typing items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">
                        <span className="typing-live-indicator items-center inline-flex gap-[3px] [font-weight:700]"><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce]" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.2s]!" /><span className="dash-tdot inline-block [animation:1.2s_ease-in-out_0s_infinite_normal_none_running_typingDotBounce] [animation-delay:0.4s]!" /> Typing...</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Fascinated by baobab trees, acacia plants, and tropical African gardens. Looking for a genuine pen-pal to swap stories about daily life, gardening, and family traditions.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Plants</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Pen Pal</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Family Stories</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Diane</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Lucas Schmidt" src="/site-assets/f643bf531df40456.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇨🇭 Lucas Schmidt, 63</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.50/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Switzerland · <strong className="card-job [font-weight:600]">Alps Mountain Guide</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Dream of trekking Mount Kenya (Batian and Nelion peaks) and Mount Kilimanjaro. Looking for a local chatter to share preparation tips, climate, and porter culture.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Mount Kenya</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kilimanjaro</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Mountain Trekking</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Lucas</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Kenji Sato" src="/site-assets/257cea1746f82ca8.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇯🇵 Kenji Sato, 64</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.50/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Japan · <strong className="card-job [font-weight:600]">Green Tea Specialist</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Kenya produces the world’s most flavorful black tea in Kericho. I want to discuss tea harvesting, daily tea rituals, and exchange peaceful cultural philosophies.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kericho Tea</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Tea Harvest</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Cultural Exchange</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Kenji</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Fatima Al-Mansoor" src="/site-assets/22ad68c85b485d58.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇦🇪 Fatima Al-Mansoor, 54</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.50/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UAE · <strong className="card-job [font-weight:600]">Hospitality Director</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Historic trade links connect the Arabian Gulf and the Swahili coast. Want to explore Swahili cuisine (pilau, biryani, mahamri) and coastal shared heritage.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Coast</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Mahamri &amp; Pilau</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Heritage</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Fatima</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Helga S." src="/site-assets/0ea65365487cfc85.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇩🇪 Helga S., 55</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Germany · <strong className="card-job [font-weight:600]">Baker &amp; Cooking Enthusiast</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I love African food culture! Teach me how families prepare authentic chapati, sukuma wiki, spiced Kenyan chai, and pilau. Seeking a warm conversationalist for daily cultural exchanges.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Recipes</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenyan Food</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Cultural Exchange</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Helga</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Ingrid O." src="/site-assets/0936e52372777f9b.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇳🇴 Ingrid O., 57</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Norway · <strong className="card-job [font-weight:600]">Landscape Painter</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Captivated by East African savannahs, red earth, and Mount Kenya sunsets. I want someone to describe their local surroundings, weather seasons, and cultural folklore.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Mt Kenya</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Savannah Life</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Folktales</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Ingrid</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Hans Weber" src="/site-assets/b7e859abfe0149c2.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇩🇪 Hans Weber, 61</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Germany · <strong className="card-job [font-weight:600]">Renewable Energy Specialist</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Impressed by Kenya leading Africa in geothermal and wind energy around Lake Turkana. Want to hear about life in upcountry towns and learn Swahili greetings.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Green Energy</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Upcountry Kenya</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Practice</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Hans</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Astrid Lind" src="/site-assets/b1d4bd378413c7c2.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇸🇪 Astrid Lind, 58</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Sweden · <strong className="card-job [font-weight:600]">Documentary Writer</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Writing about women leaders and community builders across Africa. Looking for thoughtful perspectives on education, tradition, and hope for the next generation.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Women</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Culture &amp; Hope</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Deep Talks</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Astrid</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Min-Jun Park" src="/site-assets/9baa960c189c1cc7.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇰🇷 Min-Jun Park, 57</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>South Korea · <strong className="card-job [font-weight:600]">Tech Consultant</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Fascinated by M-Pesa mobile money and Kenya being the "Silicon Savannah" of Africa! Want to learn about digital life and practice Swahili phrases with an insider.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Silicon Savannah</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#M-Pesa Innovation</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Min-Jun</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Victoria Sterling" src="/site-assets/0c5b1e4989649321.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Victoria Sterling, 58</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Music Enthusiast</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I love African choral music and traditional drumming. Tell me about what songs people sing during church or community celebrations.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Choirs</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Traditional Drums</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Songs</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Victoria</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Willem de Jong" src="/site-assets/c6ec10e921c0f070.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇳🇱 Willem de Jong, 60</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Netherlands · <strong className="card-job [font-weight:600]">Horticulturist</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Lake Naivasha is the flower capital of Africa! I want to hear about rose farms around Naivasha, bird watching on the lake, and local village life.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Lake Naivasha</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Rose Farms</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Bird Watching</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Willem</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Sophie Van der Berg" src="/site-assets/e04770cf4752cb8a.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇳🇱 Sophie Van der Berg, 57</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.45/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Netherlands · <strong className="card-job [font-weight:600]">Museum Guide</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Want to understand how different African ethnic groups live peacefully together, celebrate diverse heritage, and share national pride.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Peaceful Harmony</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Ethnic Diversity</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Pride</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Sophie</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Robert H." src="/site-assets/f5d7218c412996bd.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Robert H., 62</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Former Book Publisher</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Fascinated by Kenyan history, the Great Rift Valley, and local storytelling. Looking for a patient chat partner to teach me Swahili greetings and share real experiences of living in East Africa.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Practice</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African History</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Life Stories</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Robert</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Anouk V." src="/site-assets/0e1ce0c7a400d9d3.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇳🇱 Anouk V., 56</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Netherlands · <strong className="card-job [font-weight:600]">Social Anthropologist</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Studying communal values in Africa—especially "Harambee" (pulling together) and "Ubuntu". I want honest, uplifting conversations about how your community helps one another.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Ubuntu Philosophy</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Harambee Spirit</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Community</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Anouk</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Oliver Smith" src="/site-assets/2af895171266428b.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Oliver Smith, 65</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Maritime Historian</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Fascinated by old Swahili dhow boats that sailed between Zanzibar, Lamu, and Mombasa. Tell me about coastal seafood, coconut rice, and Swahili maritime traditions.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Dhows</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Lamu Culture</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Coastal Food</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Oliver</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Thomas Dubois" src="/site-assets/180a225029efdbeb.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇫🇷 Thomas Dubois, 64</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>France · <strong className="card-job [font-weight:600]">Agricultural Advisor</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Tell me about avocado, macadamia, and tea farming in Central Kenya. I want to learn about seasonal rains, rural life, and practice basic Swahili words with you.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Farming Life</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Central Kenya</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Exchange</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Thomas</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Elena Varga" src="/site-assets/d98d03c7151a3c6b.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇦🇹 Elena Varga, 52</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Austria · <strong className="card-job [font-weight:600]">Culture Curator</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Curating an East African cultural exhibition in Vienna. Want to understand traditional bead ornaments, wedding gifts, and local naming ceremonies.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Bead Ornaments</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Weddings</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Naming Ceremonies</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Elena</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Henrik Johansen" src="/site-assets/7a66a35cdb20f973.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇳🇴 Henrik Johansen, 64</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Norway · <strong className="card-job [font-weight:600]">Fjord Guide</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Scandinavian winters are cold and dark. I want to connect with a friendly, warm person living under the African sun and learn simple Swahili greetings.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Warm Company</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Greetings</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Daily Joy</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Henrik</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Sebastian Fischer" src="/site-assets/c89b4a98c6325cf9.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇩🇪 Sebastian Fischer, 63</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Germany · <strong className="card-job [font-weight:600]">Watchmaker</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“In Europe everyone rushes. I admire the warm, patient spirit of African hospitality where people always have time for a genuine greeting. Let us chat calmly.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Patient Spirit</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Hospitality</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Calm Talks</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Sebastian</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Clara Schultz" src="/site-assets/233fb0fdde309b4d.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇦🇹 Clara Schultz, 60</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Austria · <strong className="card-job [font-weight:600]">Baker</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Share your grandmother’s recipes with me! I want to learn about sweet plantains, roasted groundnuts, and traditional harvest foods in Kenya.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Harvest Foods</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Sweet Plantains</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Tradition</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Clara</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Grace Hamilton" src="/site-assets/e4b6a60952fc2923.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Grace Hamilton, 63</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Gardener</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I love learning about African birdlife (sunbirds, weavers, hornbills) and village flora. Looking for a respectful, kind person to chat with daily.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Birds</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Flora &amp; Nature</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kind Listener</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Grace</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Pierre D." src="/site-assets/71701463d91aff8e.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇫🇷 Pierre D., 63</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>France · <strong className="card-job [font-weight:600]">Retired Wine &amp; Coffee Merchant</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Passionate about East African Arabica coffee grown in Nyeri and Kiambu. I want to learn about coffee picking seasons, local market life, and practice Swahili phrases with you.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Coffee Farming</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Local Markets</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Exchange</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Pierre</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Maria Rossi" src="/site-assets/901abe945029c324.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇮🇹 Maria Rossi, 59</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Italy · <strong className="card-job [font-weight:600]">Music Teacher</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I love African musical rhythms—especially Benga, Taarab, and Afro-fusion! Share your favorite songs, local artists, and what people sing during celebrations.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Benga Music</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Taarab Rhythms</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Celebrations</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Maria</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Arthur Pendelton" src="/site-assets/bacd469786d10c2f.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇦🇺 Arthur Pendelton, 66</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Australia · <strong className="card-job [font-weight:600]">Rancher</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Curious about cattle keeping among the Maasai and Samburu pastoralists. Let us compare ranching in Australia with cattle herding in the Great Rift Valley.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Pastoralists</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Cattle Culture</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Rift Valley</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Arthur</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Isabelle Laurent" src="/site-assets/e54ecd8f336701dc.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇧🇪 Isabelle Laurent, 58</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Belgium · <strong className="card-job [font-weight:600]">Pastry Chef</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Teach me about street snacks in Kenya like roasted maize, samosas, and mandazi! Looking for a warm, fun friend to share food talk and laugh with.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Mandazi &amp; Samosas</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Street Food</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Fun Banter</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Isabelle</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Patrick O’Connor" src="/site-assets/1db73efb8cbb6eb1.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇮🇪 Patrick O’Connor, 63</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Ireland · <strong className="card-job [font-weight:600]">Folklorist</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Irish people love great storytelling! Tell me your local myths, the story of the origin of your community, and teach me how to say cheers in Swahili.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Folktales</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Storytelling</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Friendship</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Patrick</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Beatrix Meyer" src="/site-assets/825b90dec4e02b6e.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇩🇪 Beatrix Meyer, 56</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Germany · <strong className="card-job [font-weight:600]">Librarian</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Love reading African literature (Ngugi wa Thiong’o, Chinua Achebe). I want to discuss how stories shape culture and learn conversational Swahili phrases.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Writers</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Phrases</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Literature</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Beatrix</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Alexander Wright" src="/site-assets/a8daef75d5200ffb.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Alexander Wright, 62</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">University Historian</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Fascinated by ancient African kingdoms, trade across the Indian Ocean, and Swahili city-states. Seeking thoughtful exchanges with an articulate chatter.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Ancient Kingdoms</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Indian Ocean Trade</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#History</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Alexander</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Charlotte Dupont" src="/site-assets/2219148de09da1d1.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇫🇷 Charlotte Dupont, 57</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>France · <strong className="card-job [font-weight:600]">Historian</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Exploring how Swahili became the lingua franca of East Africa. I want someone patient who can teach me everyday phrases and colloquial expressions.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Language</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Colloquial Phrases</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Linguistics</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Charlotte</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Evelyn Reed" src="/site-assets/b83ab58e497d3736.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Evelyn Reed, 66</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Retired Pharmacist</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Curious about traditional herbal teas and remedies (like ginger, hibiscus, and neem) used in African households. Looking for a respectful, kind friend.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Herbal Teas</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Traditional Care</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Friendship</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Evelyn</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Freja Nielsen" src="/site-assets/e487ef1e0f77b6a0.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇩🇰 Freja Nielsen, 53</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Denmark · <strong className="card-job [font-weight:600]">Teacher</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Teach me how children in Kenya play, what games they love (like Kati and Blada), and how families spend Sundays together. Upbeat, warm dialogue.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenyan Childhood</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Family Sundays</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Joyful Chat</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Freja</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Hannah Abbott" src="/site-assets/97401fee007756ca.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Hannah Abbott, 59</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Quiltmaker</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I make quilts with international fabrics. Tell me about Kikoy wraps, Swahili kofia caps, and how people dress with dignity for festive occasions.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kikoy Wraps</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Dressing</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Festivals</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Hannah</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Christopher Lee" src="/site-assets/1af4d995390b9523.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇨🇦 Christopher Lee, 61</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Canada · <strong className="card-job [font-weight:600]">Timber Framer</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Curious about everyday life in rural African villages—fetching water, homestead compounds (Boma), and evening community gatherings around fires.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Boma Life</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Rural Africa</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Homesteads</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Christopher</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Liam Gallagher" src="/site-assets/89c4b54119a6f20f.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇮🇪 Liam Gallagher, 62</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Ireland · <strong className="card-job [font-weight:600]">Harbor Worker</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Friendly Irish gentleman who loves warm banter. Teach me how people say "Hakuna Matata" and what daily life is like in your town.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Hakuna Matata</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Friendly Banter</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Good Vibes</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Liam</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Karen P." src="/site-assets/2928906b264ac406.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇦🇺 Karen P., 51</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Australia · <strong className="card-job [font-weight:600]">Community Nurse</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Curious about coastal Swahili culture, Diani beach, and historic Mombasa. I want to learn polite Swahili phrases and hear about community celebrations and music.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Coastal Culture</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Phrases</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Friendship</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Karen</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Emily Watson" src="/site-assets/f44539e710cab615.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Emily Watson, 56</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">School Librarian</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Looking for a kind African friend to chat with every afternoon. Teach me traditional proverbs (Methali za Kiswahili) and tell me about your favorite local books and tales.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Swahili Proverbs</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Tales</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Friendship</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Emily</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="George Campbell" src="/site-assets/40c9f27a4c30a852.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇨🇦 George Campbell, 65</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Canada · <strong className="card-job [font-weight:600]">Forester</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Curious about the indigenous Mau Forest and Kakamega rainforest. Looking for a relaxed chatter to share nature observations and daily life in Africa.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kakamega Forest</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Nature Chat</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Relaxed Banter</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with George</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Jonathan Taylor" src="/site-assets/80e499b1573cc127.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇦🇺 Jonathan Taylor, 64</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Australia · <strong className="card-job [font-weight:600]">Geographer</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Studying the Great Rift Valley volcanic lakes (Bogoria, Nakuru, Elementaita) and the millions of flamingos. Looking for vivid local descriptions and stories.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Rift Valley Lakes</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Flamingos</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Geography</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Jonathan</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-online-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Benjamin Hayes" src="/site-assets/002e43b1a38a63b0.jpg" />
                    <span className="status-dot online bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Benjamin Hayes, 65</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Canal Traveler</strong></span>
                      <span className="status-live-tag online items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟢 Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Looking for a kind young friend to chat with while I travel the waterways. Teach me how to say hello, thank you, and goodbye in Swahili.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Learn Greetings</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Casual Fun</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Good Humor</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Benjamin</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-away-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Richard Vance" src="/site-assets/f77fab008284d414.jpg" />
                    <span className="status-dot away bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Richard Vance, 69</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Retired Farmer</strong></span>
                      <span className="status-live-tag away items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟡 Away</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Farmed corn and cattle in Kansas for 45 years. Want to talk with someone from an African farming family about planting maize, weather, and harvest festivals.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Maize Farming</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Harvest Festivals</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Rural Life</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Richard</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-away-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Charles Montgomery" src="/site-assets/686ded763bad2bb6.jpg" />
                    <span className="status-dot away bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇬🇧 Charles Montgomery, 67</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.40/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>UK · <strong className="card-job [font-weight:600]">Retired Barrister</strong></span>
                      <span className="status-live-tag away items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟡 Away</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I admire traditional African dispute resolution through elder councils ("Wazee"). Looking for an intelligent conversationalist to discuss law and culture.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Elder Councils</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Justice</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Traditions</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Charles</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-away-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Lars E." src="/site-assets/e331e2ef1650af3a.jpg" />
                    <span className="status-dot away bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇸🇪 Lars E., 60</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.35/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Sweden · <strong className="card-job [font-weight:600]">Wood Craftsman</strong></span>
                      <span className="status-live-tag away items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟡 Away</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“I carve wooden furniture and admire African Makonde and Akamba wood carvings. Teach me about traditional artisanal crafts and the meaning behind African beadwork.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Wood Carving</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#African Art</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Beadwork</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Lars</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-away-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="David Miller" src="/site-assets/dc95fbd8b396374b.jpg" />
                    <span className="status-dot away bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 David Miller, 68</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Retired Coach</strong></span>
                      <span className="status-live-tag away items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟡 Away</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Huge fan of world athletics! Want to chat with someone from Kenya about why your runners are so humble, dedicated, and resilient. Cheerful sports banter.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Athletics</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenyan Champions</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Positive Banter</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with David</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-away-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Matteo Bianchi" src="/site-assets/cd5a22bb42e29bc7.jpg" />
                    <span className="status-dot away bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇮🇹 Matteo Bianchi, 62</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>Italy · <strong className="card-job [font-weight:600]">Coffee Roaster</strong></span>
                      <span className="status-live-tag away items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟡 Away</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“We roast Kenyan AA coffee beans in Italy! Tell me what breakfast is like in your home, how tea and coffee are prepared, and let us chat like old friends.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenyan AA Coffee</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Breakfast Customs</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Casual Chat</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Matteo</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
              <div className="chatter-discover-card is-away-card flex flex-col justify-between relative [transition:0.25s]">
                <div className="card-top-row items-center flex">
                  <div className="card-avatar-wrap relative [flex-shrink:0]">
                    <img className="card-avatar-img block object-cover [max-width:100%]" alt="Daniel Harris" src="/site-assets/d99bae714ee7e43a.jpg" />
                    <span className="status-dot away bottom-[3px] absolute right-[3px]" />
                  </div>
                  <div className="card-person-meta flex-1 [min-width:0px]">
                    <div className="card-name-title items-center flex justify-between [gap:0.5rem]">
                      <h3>🇺🇸 Daniel Harris, 68</h3>
                      <span className="card-rate-badge [flex-shrink:0] [font-weight:800]">+$0.30/msg</span>
                    </div>
                    <div className="card-sub-info [font-size:0.825rem] [margin:0.25rem_0px_0px]">
                      <span>USA · <strong className="card-job [font-weight:600]">Retired Coach</strong></span>
                      <span className="status-live-tag away items-center inline-flex gap-[3px] ml-[6px] [font-size:11px] [font-weight:800] [padding:2px_6px]">🟡 Away</span>
                    </div>
                  </div>
                </div>
                <div className="what-he-wants-box">
                  <div className={"\x62ox-header items-center flex gap-[0.4rem] mb-[0.4rem]"}>
                    <span className={"\x62ox-icon [font-size:0.95rem]"}>💭</span>
                    <strong className={"\x62ox-title uppercase [font-size:0.8rem] [font-weight:800] [letter-spacing:0.03em]"}>Why He Wants to Chat:</strong>
                  </div>
                  <p className={"\x62ox-description italic [line-height:1.45] [margin:0px_0px_0.65rem]"}>“Keen on African soccer (Harambee Stars) and marathon champions like Eliud Kipchoge. Looking for spirited sports banter and friendly chat.”</p>
                  <div className={"\x62ox-tags-row flex flex-wrap gap-[0.35rem]"}>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kenyan Sports</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Kipchoge Spirit</span>
                    <span className="topic-tag [font-size:0.725rem] [font-weight:700] [padding:0.15rem_0.5rem]">#Positive</span>
                  </div>
                </div>
                <div className="card-action-footer">
                  <button className={"\x73tart-chat-btn items-center flex justify-center [cursor:pointer]! [gap:0.5rem] [transition:0.2s_cubic-bezier(0.4,0,0.2,1)]!"} type="button">
                    <span>🔒 Unlock &amp; Chat with Daniel</span>
                    <span className="btn-rate-sub [font-size:0.75rem] [font-weight:600]">(Activation Required) →</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <ImportedNavMobileNavigation />
        </div>
      </div>
    </>
  );
}

function ImportedHeader() {
  return (
    <header className="dash-top-nav items-center flex justify-between sticky! [backdrop-filter:blur(16px)]! [max-width:100vw]! [top:0px]! [z-index:1000]!">
      <div className="nav-brand-group items-center flex [flex-shrink:0]">
        <a className="dash-logo items-center flex gap-[0.4rem] no-underline [font-size:1.1rem] [font-weight:900]" href="/">
          <img className="Amoriva-app-icon block [max-width:100%]" alt="Amoriva logo" width="28" height="28" src="/site-assets/20d745d21dcfa2ed.png" />
          <span className="dash-logo-text items-center flex [font-weight:900]! [gap:0.25rem]">Amoriva<span className="dash-badge ml-[0.35rem] align-middle [font-weight:800]!">PRO</span></span>
        </a>
      </div>
      <nav className="desktop-tab-nav items-center p-[0.3rem] [gap:0.25rem]" aria-label="Main navigation">
        <button className="tab-nav-btn active items-center inline-flex gap-[0.45rem] [cursor:pointer] [padding:0.55rem_1.25rem] [transition:0.2s]!" type="button">
          <span className="tab-icon">🟢</span>
          <span className="tab-title">Online</span>
          <span className="tab-counter items-center inline-flex gap-[0.15rem] [font-size:0.7rem] [font-weight:900]! [padding:0.1rem_0.45rem]">55</span>
        </button>
        <button className="tab-nav-btn items-center inline-flex gap-[0.45rem] [cursor:pointer] [padding:0.55rem_1.25rem] [transition:0.2s]!" type="button" title="Activate account to open chat rooms">
          <span className="tab-icon">🔒</span>
          <span className="tab-title">Chat</span>
        </button>
        <button className="tab-nav-btn items-center inline-flex gap-[0.45rem] [cursor:pointer] [padding:0.55rem_1.25rem] [transition:0.2s]!" type="button">
          <span className="tab-icon">👤</span>
          <span className="tab-title">Profile</span>
        </button>
        <a className="tab-nav-btn expat-nav-tab-btn items-center inline-flex no-underline [cursor:pointer] [gap:0.5rem] [padding:0.5rem_1.1rem]! [transition:0.25s]!" href="/kenya-foreigners" title={"USA, Canada, UK & Australia Foreigners — Working & Based in Kenya"}>
          <span className="tab-icon">🇰🇪</span>
          <span className="tab-title">USA, Canada, UK &amp; Australia Foreigners — Working &amp; Based in Kenya</span>
          <span className="tab-counter expat-counter-badge [font-size:0.72rem]! [font-weight:900]! [letter-spacing:0.3px] [padding:0.15rem_0.55rem]!">Nairobi Hub</span>
        </a>
        <a className="tab-nav-btn earnings-nav-link items-center inline-flex gap-[0.45rem] no-underline [cursor:pointer] [padding:0.55rem_1.25rem] [transition:0.2s]!" href="/earnings">
          <span className="tab-icon">📊</span>
          <span className="tab-title">Earnings</span>
          <span className="earnings-live-dot inline-block ml-[3px] align-middle [animation:1.4s_ease_0s_infinite_normal_none_running_pulseGlow]" />
        </a>
      </nav>
      <div className="dash-header-actions items-center flex [flex-shrink:0]">
        <div className="earnings-pill-header items-center flex [cursor:pointer] [transition:0.2s]" title="Click to Withdraw">
          <span className="pill-currency [font-size:1.2rem]">💰</span>
          <div className="pill-text-col flex flex-col [line-height:1.15]">
            <span className="pill-balance [font-weight:900]!">$12.50</span>
            <span className="pill-ksh [font-size:9px] [font-weight:700]! [@media(max-width:480px)]:hidden [@media(max-width:640px)]:hidden">~KSh 1,625</span>
          </div>
          <button className="pill-cashout-btn [cursor:pointer] [@media(max-width:640px)]:hidden" type="button">Withdraw</button>
        </div>
        <button className="header-notification-btn has-ringing items-center flex justify-center relative [cursor:pointer] [flex-shrink:0] [padding:0px] [transition:0.18s]" type="button" title="View notifications" aria-label="View notifications">
          <span className="notif-bell-icon inline-block [animation:2.6s_ease-in-out_0s_infinite_normal_none_running_bell-ring-motion] [font-size:1.15rem] [line-height:1]">🔔</span>
          <span className="notif-badge-dot items-center flex justify-center min-w-[17px] absolute right-[-3px] top-[-3px] [font-size:9px] [font-weight:900] [padding:0px_3px]">3</span>
        </button>
        <div className="user-quick-profile-btn [cursor:pointer]" title={"View your account details & daily rank"}>
          <div className="nav-user-initial items-center flex justify-center [font-weight:800]">A</div>
        </div>
      </div>
    </header>
  );
}

function ImportedNavMobileNavigation() {
  return (
    <nav className="mobile-bottom-tab-bar [@media(max-width:767px)]:[max-width:100vw]! [@media(max-width:767px)]:[overflow:visible]!" aria-label="Mobile Navigation">
      <button className="mobile-tab-btn active [transition:0.2s] [@media(max-width:767px)]:[max-width:24%]! [@media(max-width:767px)]:[min-width:0px]!" type="button">
        <div className="mobile-icon-wrap">
          <span className="mobile-tab-icon [@media(max-width:767px)]:block!">🟢</span>
          <span className="mobile-badge-num">55</span>
        </div>
        <span className="mobile-tab-label [@media(max-width:767px)]:text-center! [@media(max-width:767px)]:text-ellipsis! [@media(max-width:767px)]:whitespace-nowrap! [@media(max-width:767px)]:[line-height:1.1]! [@media(max-width:767px)]:[margin-top:2px]! [@media(max-width:767px)]:[max-width:100%]! [@media(max-width:767px)]:[overflow:hidden]!">Online</span>
      </button>
      <button className="mobile-tab-btn [transition:0.2s] [@media(max-width:767px)]:[max-width:24%]! [@media(max-width:767px)]:[min-width:0px]!" type="button">
        <div className="mobile-icon-wrap">
          <span className="mobile-tab-icon [@media(max-width:767px)]:block!">🔒</span>
        </div>
        <span className="mobile-tab-label [@media(max-width:767px)]:text-center! [@media(max-width:767px)]:text-ellipsis! [@media(max-width:767px)]:whitespace-nowrap! [@media(max-width:767px)]:[line-height:1.1]! [@media(max-width:767px)]:[margin-top:2px]! [@media(max-width:767px)]:[max-width:100%]! [@media(max-width:767px)]:[overflow:hidden]!">Chat</span>
      </button>
      <button className="mobile-tab-btn mobile-withdraw-btn [transition:0.2s] [@media(max-width:767px)]:[max-width:28%]! [@media(max-width:767px)]:[min-width:0px]! [@media(max-width:767px)]:[overflow:visible]! [@media(max-width:767px)]:[z-index:1000]!" type="button">
        <div className="mobile-withdraw-center [@media(max-width:767px)]:[flex-shrink:0]! [@media(max-width:767px)]:[margin-top:-24px]!">
          <span className="withdraw-icon">💸</span>
          <span className="withdraw-balance [@media(max-width:767px)]:[line-height:1]! [@media(max-width:767px)]:[margin-top:1px]!">$12.50</span>
        </div>
        <span className="mobile-tab-label [@media(max-width:767px)]:text-center! [@media(max-width:767px)]:text-ellipsis! [@media(max-width:767px)]:whitespace-nowrap! [@media(max-width:767px)]:[line-height:1.1]! [@media(max-width:767px)]:[margin-top:2px]! [@media(max-width:767px)]:[max-width:100%]! [@media(max-width:767px)]:[overflow:hidden]!">Withdraw</span>
      </button>
      <a className="mobile-tab-btn no-underline [transition:0.2s] [@media(max-width:767px)]:[max-width:24%]! [@media(max-width:767px)]:[min-width:0px]!" href="/earnings">
        <div className="mobile-icon-wrap">
          <span className="mobile-tab-icon [@media(max-width:767px)]:block!">📊</span>
          <span className="mobile-live-dot-pulse absolute right-[-5px] top-[-2px] [animation:1.4s_ease_0s_infinite_alternate_none_running_epPulseGlow]" />
        </div>
        <span className="mobile-tab-label [@media(max-width:767px)]:text-center! [@media(max-width:767px)]:text-ellipsis! [@media(max-width:767px)]:whitespace-nowrap! [@media(max-width:767px)]:[line-height:1.1]! [@media(max-width:767px)]:[margin-top:2px]! [@media(max-width:767px)]:[max-width:100%]! [@media(max-width:767px)]:[overflow:hidden]!">Earnings</span>
      </a>
      <button className="mobile-tab-btn [transition:0.2s] [@media(max-width:767px)]:[max-width:24%]! [@media(max-width:767px)]:[min-width:0px]!" type="button">
        <div className="mobile-icon-wrap">
          <span className="mobile-tab-icon [@media(max-width:767px)]:block!">👤</span>
        </div>
        <span className="mobile-tab-label [@media(max-width:767px)]:text-center! [@media(max-width:767px)]:text-ellipsis! [@media(max-width:767px)]:whitespace-nowrap! [@media(max-width:767px)]:[line-height:1.1]! [@media(max-width:767px)]:[margin-top:2px]! [@media(max-width:767px)]:[max-width:100%]! [@media(max-width:767px)]:[overflow:hidden]!">Profile</span>
      </button>
    </nav>
  );
}
