/* AdMob/AdSense bridge stub — replace with full implementation when ready */
(function () {
  window.adBreak = window.adBreak || function (o) {
    if (o && typeof o.adBreakDone === "function") o.adBreakDone({ breakStatus: "notReady" });
  };
  window.adConfig = window.adConfig || function () {};
})();
