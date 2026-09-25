window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

(function () {
  var KEY = "geeks0n_consent_v1";
  var GA_ID = "G-N1W5TP9WDN";
  var GA_SRC = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  var ADS_SRC =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1624206851803206";
  var configured = false;

  function read() {
    try {
      return localStorage.getItem(KEY);
    } catch (_) {
      return null;
    }
  }

  function fields(state) {
    return {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    };
  }

  function hasScript(needle) {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      if ((scripts[i].src || "").indexOf(needle) !== -1) return true;
    }
    return false;
  }

  function addScript(src) {
    var path = src.split("?")[0];
    if (hasScript(path)) return;
    var el = document.createElement("script");
    el.async = true;
    el.src = src;
    if (src.indexOf("adsbygoogle.js") !== -1) {
      el.crossOrigin = "anonymous";
      // H5 games ad cadence for the play export. Marketing pages ignore the hint.
      if (location.pathname.indexOf("/spaceblox/play") === 0) {
        el.setAttribute("data-ad-frequency-hint", "30s");
      }
    }
    document.head.appendChild(el);
  }

  function configGa() {
    if (configured) return;
    configured = true;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  // Inject GA and AdSense only after Accept. Tags already in the document
  // (the play export) are not added again.
  function loadGoogle() {
    addScript(GA_SRC);
    addScript(ADS_SRC);
    configGa();
  }

  function whenReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  if (read() === "granted") {
    gtag("consent", "default", fields("granted"));
  } else {
    var denied = fields("denied");
    denied.wait_for_update = 500;
    gtag("consent", "default", denied);
  }

  whenReady(function () {
    if (read() === "granted") loadGoogle();
    else if (hasScript("googletagmanager.com/gtag/js")) configGa();
  });

  window.Geeks0nConsent = {
    key: KEY,
    get: read,
    set: function (value) {
      try {
        localStorage.setItem(KEY, value);
      } catch (_) {}
      if (value === "granted") {
        gtag("consent", "update", fields("granted"));
        loadGoogle();
      } else if (configured) {
        gtag("consent", "update", fields("denied"));
      }
      document.documentElement.dispatchEvent(
        new CustomEvent("geeks0n-consent", { detail: { value: value } })
      );
    },
  };
})();
