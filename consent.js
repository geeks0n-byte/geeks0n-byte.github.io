(function () {
  if (!window.Geeks0nConsent) return;

  var onPlay = location.pathname.indexOf("/spaceblox/play") === 0;
  var privacyHref = location.pathname.indexOf("/shapes") === 0
    ? "/shapes/privacy-policy.html"
    : "/spaceblox/privacy-policy.html";
  var bar = null;
  var style = null;

  var choiceStyle = document.createElement("style");
  choiceStyle.textContent =
    "button.cookie-choice{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer;text-decoration:underline}" +
    "footer button.cookie-choice,.wrap button.cookie-choice{color:var(--accent,var(--yellow,#f7cc1a))}";
  document.head.appendChild(choiceStyle);

  function themeName() {
    var path = location.pathname;
    if (path.indexOf("/shapes") === 0) return "shapes";
    if (path.indexOf("/spaceblox") === 0) return "space";
    return "studio";
  }

  function show() {
    if (bar) {
      bar.classList.remove("geeks0n-consent-pulse");
      void bar.offsetWidth;
      bar.classList.add("geeks0n-consent-pulse");
      bar.focus();
      return;
    }
    var theme = themeName();
    style = document.createElement("style");
    style.textContent =
      "#geeks0n-consent{position:fixed;z-index:9999;left:1rem;right:1rem;bottom:1rem;max-width:34rem;margin:0 auto;padding:1rem 1.1rem;display:grid;gap:0.85rem;box-sizing:border-box}" +
      "#geeks0n-consent p{margin:0}" +
      "#geeks0n-consent .geeks0n-consent-actions{display:flex;gap:0.5rem;justify-content:flex-end;flex-wrap:wrap}" +
      "#geeks0n-consent button{cursor:pointer}" +
      "#geeks0n-consent.theme-space{border-radius:18px;border:1px solid #334155;background:color-mix(in srgb,#172033 92%,transparent);color:#e2e8f0;font:400 0.95rem/1.55 system-ui,Segoe UI,sans-serif;box-shadow:0 16px 40px #0008;backdrop-filter:blur(6px)}" +
      "#geeks0n-consent.theme-space p{color:#94a3b8}" +
      "#geeks0n-consent.theme-space a{color:#56bdf8}" +
      "#geeks0n-consent.theme-space button{font-family:PressStart2P,monospace;font-size:0.55rem;font-weight:400;letter-spacing:0.03em;text-transform:uppercase;color:#fff;text-shadow:1px 1px 0 #000a;padding:0.8rem 0.7rem;line-height:1;border:0;border-radius:0;background-color:#1a1a1a;background-image:url('/spaceblox/assets/button_bar_gray_dark.svg?v=ingame3');background-size:100% 100%;background-repeat:no-repeat}" +
      "#geeks0n-consent.theme-space button:hover{filter:brightness(1.12)}" +
      "#geeks0n-consent.theme-space button:focus-visible{outline:2px solid #56bdf8;outline-offset:3px}" +
      "#geeks0n-consent.theme-shapes{border-radius:4px;border:2px solid #4a515c;background:#2e333d;color:#edebe0;font:500 0.95rem/1.5 Figtree,Segoe UI,sans-serif;box-shadow:0 16px 40px #0008}" +
      "#geeks0n-consent.theme-shapes p{color:#9ea3a8}" +
      "#geeks0n-consent.theme-shapes a{color:#f7cc1a}" +
      "#geeks0n-consent.theme-shapes button{font-family:Outfit,Bahnschrift,Segoe UI,sans-serif;font-size:0.78rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#edebe0;background:#383d45;border:1px solid #4a515c;border-radius:4px;padding:0.7rem 0.9rem}" +
      "#geeks0n-consent.theme-shapes button.accept{background:#f7cc1a;border-color:#f7cc1a;color:#141414}" +
      "#geeks0n-consent.theme-shapes button:focus-visible{outline:2px solid #f7cc1a;outline-offset:3px}" +
      "#geeks0n-consent.theme-studio{border-radius:14px;border:1px solid #3a414c;background:#1c222c;color:#edebe0;font:500 0.95rem/1.5 Figtree,Segoe UI,sans-serif;box-shadow:0 16px 40px #0008}" +
      "#geeks0n-consent.theme-studio p{color:#9ea3a8}" +
      "#geeks0n-consent.theme-studio a{color:#f7cc1a}" +
      "#geeks0n-consent.theme-studio button{font-family:Outfit,Bahnschrift,Segoe UI,sans-serif;font-size:0.78rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#edebe0;background:transparent;border:1px solid #3a414c;border-radius:999px;padding:0.65rem 0.9rem}" +
      "#geeks0n-consent.theme-studio button.accept{background:#f7cc1a;border-color:#f7cc1a;color:#141414}" +
      "#geeks0n-consent.theme-studio button:focus-visible{outline:2px solid #f7cc1a;outline-offset:3px}" +
      "#geeks0n-consent.geeks0n-consent-pulse{animation:geeks0n-consent-pulse .45s ease}" +
      "@keyframes geeks0n-consent-pulse{0%{transform:translateY(6px)}100%{transform:none}}";
    bar = document.createElement("div");
    bar.id = "geeks0n-consent";
    bar.className = "theme-" + theme;
    bar.tabIndex = -1;
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookie and analytics choices");
    bar.innerHTML =
      "<p>We use Google Analytics and AdSense to measure traffic and show ads. " +
      '<a href="' + privacyHref + '">Privacy</a></p>' +
      '<div class="geeks0n-consent-actions">' +
      '<button type="button" data-choice="denied">Reject</button>' +
      '<button type="button" class="accept" data-choice="granted">Accept</button>' +
      "</div>";
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-choice]");
      if (!btn) return;
      window.Geeks0nConsent.set(btn.getAttribute("data-choice"));
      bar.remove();
      style.remove();
      bar = null;
      style = null;
    });
    document.head.appendChild(style);
    document.body.appendChild(bar);
    bar.focus();
  }

  window.Geeks0nConsent.open = show;

  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-consent-open]");
    if (!opener) return;
    e.preventDefault();
    show();
  });

  if (!onPlay && !window.Geeks0nConsent.get()) show();
})();
