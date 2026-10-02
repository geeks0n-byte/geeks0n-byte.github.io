// Google tags for every page. Load this before adsbygoogle.js.
// Consent Mode v2 starts with everything denied. Google's consent message
// (AdSense > Privacy & messaging, a Google-certified CMP) updates it.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  wait_for_update: 500,
});
gtag("js", new Date());
gtag("config", "G-N1W5TP9WDN");

(function () {
  var ADS_SRC =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1624206851803206";

  function addScript(src, attrs) {
    var el = document.createElement("script");
    el.async = true;
    el.src = src;
    for (var k in attrs || {}) el.setAttribute(k, attrs[k]);
    document.head.appendChild(el);
  }

  addScript("https://www.googletagmanager.com/gtag/js?id=G-N1W5TP9WDN");

  // Footer "Privacy settings" link: reopen Google's consent message.
  // Without the message (blocked or not loaded), fall back to the link's href.
  window.googlefc = window.googlefc || {};
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("[data-privacy-settings]");
    if (!link) return;
    e.preventDefault();
    var shown = false;
    window.googlefc.callbackQueue.push(function () {
      shown = true;
      window.googlefc.showRevocationMessage();
    });
    setTimeout(function () {
      if (!shown) location.href = link.href;
    }, 1500);
  });

  // Spaceblox web game. Its page shell has no AdSense tag, so add it here with the
  // H5 Games ad cadence the game needs. Consent is handled by Google's consent
  // message like every other page; the game no longer has its own start screen.
  if (location.pathname.indexOf("/spaceblox/play") === 0) {
    addScript(ADS_SRC, { crossorigin: "anonymous", "data-ad-frequency-hint": "30s" });
  }
})();
