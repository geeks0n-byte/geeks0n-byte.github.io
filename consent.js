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

  function show() {
    if (bar) {
      bar.classList.remove("geeks0n-consent-pulse");
      void bar.offsetWidth;
      bar.classList.add("geeks0n-consent-pulse");
      bar.focus();
      return;
    }
    style = document.createElement("style");
    style.textContent =
      "#geeks0n-consent{position:fixed;z-index:9999;left:1rem;right:1rem;bottom:1rem;max-width:34rem;margin:0 auto;padding:1rem 1.1rem;border-radius:12px;border:1px solid #4a515c;background:#242930;color:#edebe0;font:500 0.92rem/1.45 system-ui,Segoe UI,sans-serif;box-shadow:0 16px 40px #0008;display:grid;gap:0.85rem}" +
      "#geeks0n-consent p{margin:0;color:#c5c9ce}" +
      "#geeks0n-consent a{color:#f7cc1a}" +
      "#geeks0n-consent .geeks0n-consent-actions{display:flex;gap:0.5rem;justify-content:flex-end;flex-wrap:wrap}" +
      "#geeks0n-consent button{font:700 0.8rem/1 Outfit,Bahnschrift,Segoe UI,sans-serif;letter-spacing:0.04em;text-transform:uppercase;border-radius:4px;border:1px solid #4a515c;background:#383d45;color:#edebe0;padding:0.65rem 0.9rem;cursor:pointer}" +
      "#geeks0n-consent button.accept{background:#f7cc1a;border-color:#f7cc1a;color:#141414}" +
      "#geeks0n-consent button:focus-visible{outline:2px solid #f7cc1a;outline-offset:2px}" +
      "#geeks0n-consent.geeks0n-consent-pulse{animation:geeks0n-consent-pulse .45s ease}" +
      "@keyframes geeks0n-consent-pulse{0%{transform:translateY(6px);box-shadow:0 0 0 3px #f7cc1a}100%{transform:none;box-shadow:0 16px 40px #0008}}";
    bar = document.createElement("div");
    bar.id = "geeks0n-consent";
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
