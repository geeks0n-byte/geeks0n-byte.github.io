/**
 * Spaceblox web ads bridge (AdSense H5 Games Ads + optional display banner).
 * Loaded next to index.html. Godot talks to window.SpacebloxAds via JavaScriptBridge.
 *
 * Setup:
 * 1. AdSense account with H5 Games Ads / ad breaks enabled for your site.
 * 2. Set client to your ca-pub-… id (defaults match the Android AdMob publisher).
 * 3. Optional banner: create a Display ad unit and pass bannerSlot to init().
 * 4. Use data-adbreak-test / init({ test: true }) while developing.
 */
(function (global) {
  "use strict";

  var CFG = {
    client: "ca-pub-1624206851803206",
    bannerSlot: "",
    test: false,
    ready: false,
    bannerShown: false,
  };

  var bannerHost = null;
  var bannerIns = null;

  function ensureAdsbyGoogle() {
    global.adsbygoogle = global.adsbygoogle || [];
    // Google's required stub so adBreak/adConfig exist before adsbygoogle.js finishes loading.
    if (typeof global.adBreak !== "function") {
      global.adBreak = global.adConfig = function (o) {
        global.adsbygoogle.push(o);
      };
    }
  }

  function callGodot(cb, payload) {
    if (!cb) {
      return;
    }
    try {
      if (typeof cb === "function") {
        cb(payload);
      } else if (cb && typeof cb.apply === "function") {
        cb.apply(null, [payload]);
      }
    } catch (err) {
      console.warn("SpacebloxAds callback failed", err);
    }
  }

  function init(opts) {
    opts = opts || {};
    if (opts.client) {
      CFG.client = String(opts.client);
    }
    if (opts.bannerSlot != null) {
      CFG.bannerSlot = String(opts.bannerSlot);
    }
    if (opts.test != null) {
      CFG.test = !!opts.test;
    }
    ensureAdsbyGoogle();
    try {
      if (typeof global.adConfig === "function") {
        global.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: function () {
            CFG.ready = true;
          },
        });
      } else {
        // Script may still be loading; treat as ready for show attempts.
        CFG.ready = true;
      }
    } catch (err) {
      console.warn("SpacebloxAds adConfig", err);
      CFG.ready = true;
    }
    return true;
  }

  function isReady() {
    return !!CFG.ready;
  }

  function showBanner() {
    if (!CFG.bannerSlot) {
      return false;
    }
    ensureAdsbyGoogle();
    if (!bannerHost) {
      bannerHost = document.createElement("div");
      bannerHost.id = "spaceblox-ad-banner";
      bannerHost.style.cssText =
        "position:fixed;left:0;right:0;bottom:0;z-index:2147483000;" +
        "display:flex;justify-content:center;pointer-events:auto;" +
        "background:transparent;";
      bannerIns = document.createElement("ins");
      bannerIns.className = "adsbygoogle";
      bannerIns.style.cssText = "display:inline-block;width:100%;max-width:728px;height:90px";
      bannerIns.setAttribute("data-ad-client", CFG.client);
      bannerIns.setAttribute("data-ad-slot", CFG.bannerSlot);
      bannerIns.setAttribute("data-ad-format", "horizontal");
      bannerIns.setAttribute("data-full-width-responsive", "true");
      bannerHost.appendChild(bannerIns);
      document.body.appendChild(bannerHost);
      try {
        global.adsbygoogle.push({});
      } catch (err) {
        console.warn("SpacebloxAds banner push", err);
      }
    }
    bannerHost.style.display = "flex";
    CFG.bannerShown = true;
    return true;
  }

  function hideBanner() {
    if (bannerHost) {
      bannerHost.style.display = "none";
    }
    CFG.bannerShown = false;
    return true;
  }

  function showAdBreak(type, name, onDone, onReward) {
    ensureAdsbyGoogle();
    var finished = false;
    function finish(rewarded, status) {
      if (finished) {
        return;
      }
      finished = true;
      if (rewarded && onReward) {
        callGodot(onReward, 1);
      }
      callGodot(onDone, status || (rewarded ? "viewed" : "notShown"));
    }

    if (typeof global.adBreak !== "function") {
      console.warn("SpacebloxAds: adBreak unavailable");
      finish(false, "unavailable");
      return false;
    }

    var spec = {
      type: type || "browse",
      name: name || "spaceblox",
      beforeAd: function () {},
      afterAd: function () {},
      adBreakDone: function (info) {
        var status = info && info.breakStatus ? String(info.breakStatus) : "other";
        finish(false, status);
      },
    };

    if (type === "reward") {
      spec.beforeReward = function (showAdFn) {
        try {
          showAdFn();
        } catch (err) {
          console.warn("SpacebloxAds beforeReward", err);
          finish(false);
        }
      };
      spec.adViewed = function () {
        finish(true);
      };
      spec.adDismissed = function () {
        finish(false);
      };
      spec.afterAd = function () {};
    }

    try {
      global.adBreak(spec);
      return true;
    } catch (err) {
      console.warn("SpacebloxAds adBreak error", err);
      finish(false);
      return false;
    }
  }

  function showInterstitial(onDone) {
    return showAdBreak("browse", "level_complete", onDone, null);
  }

  function showRewarded(onResult) {
    ensureAdsbyGoogle();
    var finished = false;
    function finish(rewarded) {
      if (finished) {
        return;
      }
      finished = true;
      callGodot(onResult, rewarded ? 1 : 0);
    }

    if (typeof global.adBreak !== "function") {
      console.warn("SpacebloxAds: adBreak unavailable");
      finish(false);
      return false;
    }

    try {
      global.adBreak({
        type: "reward",
        name: "hint_reward",
        beforeReward: function (showAdFn) {
          try {
            showAdFn();
          } catch (err) {
            console.warn("SpacebloxAds beforeReward", err);
            finish(false);
          }
        },
        adViewed: function () {
          finish(true);
        },
        adDismissed: function () {
          finish(false);
        },
        adBreakDone: function () {
          finish(false);
        },
      });
      return true;
    } catch (err) {
      console.warn("SpacebloxAds rewarded error", err);
      finish(false);
      return false;
    }
  }

  global.SpacebloxAds = {
    init: init,
    isReady: isReady,
    showBanner: showBanner,
    hideBanner: hideBanner,
    showInterstitial: showInterstitial,
    showRewarded: showRewarded,
    /** @private test hook */
    _config: CFG,
  };
})(typeof window !== "undefined" ? window : globalThis);
