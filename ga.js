// Analytics for every page. Consent Mode v2 starts denied. Google's consent
// message (AdSense > Privacy & messaging) updates it.
// Content pages load the AdSense library with their own script tag.
// This file does not. The player, the privacy policy, and 404 do not load it.
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
  var el = document.createElement("script");
  el.async = true;
  el.src = "https://www.googletagmanager.com/gtag/js?id=G-N1W5TP9WDN";
  document.head.appendChild(el);
})();

// Display ad bands (.ad-band). They ship with `hidden` and stay hidden until
// AdSense approves the site: then set ADS_LIVE to true and give each band's
// <ins> its data-ad-slot id. A band shows only when live and it has a slot id,
// and hides again if AdSense reports it unfilled or it has not filled within 5 s.
var ADS_LIVE = false;
(function () {
  function showBands() {
    if (!ADS_LIVE) return;
    var bands = document.querySelectorAll(".ad-band");
    for (var i = 0; i < bands.length; i++) showBand(bands[i]);
  }
  function showBand(band) {
    var ins = band.querySelector("ins.adsbygoogle");
    if (!ins || !ins.getAttribute("data-ad-slot")) return;
    var minW = parseInt(band.getAttribute("data-min-width"), 10);
    if (minW && window.innerWidth < minW) return;
    band.hidden = false;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      band.hidden = true;
      return;
    }
    if (window.MutationObserver) {
      new MutationObserver(function () {
        if (ins.getAttribute("data-ad-status") === "unfilled") band.hidden = true;
      }).observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
    }
    setTimeout(function () {
      if (ins.getAttribute("data-ad-status") !== "filled") band.hidden = true;
    }, 5000);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBands);
  } else {
    showBands();
  }
})();
