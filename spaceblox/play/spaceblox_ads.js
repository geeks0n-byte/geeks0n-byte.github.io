/**
 * Player ad calls return immediately.
 * This page does not load the AdSense library, so a level clear or hint must not wait.
 */
(function (global) {
  "use strict";

  function callGodot(cb, payload) {
    if (!cb) return;
    try {
      if (typeof cb === "function") cb(payload);
      else if (cb && typeof cb.apply === "function") cb.apply(null, [payload]);
    } catch (err) {}
  }

  global.SpacebloxAds = {
    init: function () {
      return true;
    },
    isReady: function () {
      return false;
    },
    showBanner: function () {
      return false;
    },
    hideBanner: function () {
      return true;
    },
    showInterstitial: function (onDone) {
      callGodot(onDone, "unavailable");
      return false;
    },
    showRewarded: function () {
      return false;
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
