window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

(function () {
  var KEY = "geeks0n_consent_v1";
  var stored = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch (_) {}

  gtag("consent", "default", {
    ad_storage: stored === "granted" ? "granted" : "denied",
    ad_user_data: stored === "granted" ? "granted" : "denied",
    ad_personalization: stored === "granted" ? "granted" : "denied",
    analytics_storage: stored === "granted" ? "granted" : "denied",
    wait_for_update: 500,
  });

  gtag("js", new Date());
  gtag("config", "G-N1W5TP9WDN");

  window.Geeks0nConsent = {
    key: KEY,
    get: function () {
      try {
        return localStorage.getItem(KEY);
      } catch (_) {
        return null;
      }
    },
    set: function (value) {
      try {
        localStorage.setItem(KEY, value);
      } catch (_) {}
      var state = value === "granted" ? "granted" : "denied";
      gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
      document.documentElement.dispatchEvent(
        new CustomEvent("geeks0n-consent", { detail: { value: value } })
      );
    },
  };
})();
