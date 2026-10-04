// Animated space background: the Spaceblox bg_1..bg_4 parallax layers drifting
// diagonally, twinkling stars, and an occasional comet, shooting star or asteroid.
// Motion runs on the compositor (CSS transform/opacity animations and WAAPI);
// this script only builds the DOM, sizes tiles on resize and spawns an effect
// every few seconds. Off: prefers-reduced-motion (static layers), Save-Data.
(function () {
  var doc = document.documentElement;
  var mqReduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  var saveData = navigator.connection && navigator.connection.saveData;
  var small = Math.min(window.innerWidth, window.innerHeight) < 720 || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
  var calm = !!document.querySelector("main.reading");

  // Layers: [class, parallax speed]. Small screens and reading pages get two.
  // The game's bg_3 accents and bg_4 sparkler crosses share one front layer:
  // one fewer full-screen layer to composite, and the look stays the same.
  var LAYERS = [["sb-dust", 0.2], ["sb-stars", 0.4], ["sb-front", 0.75]];
  if (small || calm) LAYERS = LAYERS.slice(0, 2);
  var VX = 15, VY = 5; // px/s at speed 1, as in the game

  var bg = document.createElement("div");
  bg.className = "space-bg" + (calm ? " sb-calm" : "");
  bg.setAttribute("aria-hidden", "true");
  var rows = [];
  LAYERS.forEach(function (l) {
    var x = document.createElement("div");
    x.className = "sb-x " + l[0];
    var y = document.createElement("div");
    y.className = "sb-y";
    x.appendChild(y);
    bg.appendChild(x);
    rows.push({ x: x, y: y, speed: l[1] });
  });
  var fx = document.createElement("div");
  fx.className = "sb-fx";
  bg.appendChild(fx);
  document.body.insertBefore(bg, document.body.firstChild);
  doc.classList.add("space-bg-on");

  var kf = document.createElement("style");
  document.head.appendChild(kf);
  function sizeTiles() {
    var vw = Math.max(window.innerWidth || 0, 1);
    var tw = vw <= 860 ? Math.min(480, Math.max(360, Math.floor(vw * 0.9))) : 720;
    var th = Math.ceil(tw * 16 / 9);
    kf.textContent =
      "@keyframes sb-x{from{transform:translate3d(0,0,0)}to{transform:translate3d(-" + tw + "px,0,0)}}" +
      "@keyframes sb-y{from{transform:translate3d(0,0,0)}to{transform:translate3d(0,-" + th + "px,0)}}";
    bg.style.setProperty("--sb-tw", tw + "px");
    bg.style.setProperty("--sb-th", th + "px");
    rows.forEach(function (r) {
      var dx = tw / (VX * r.speed), dy = th / (VY * r.speed);
      r.x.style.setProperty("--sb-dx", dx.toFixed(1) + "s");
      r.y.style.setProperty("--sb-dy", dy.toFixed(1) + "s");
      if (!r.seeded) {
        r.seeded = true; // random phase so layers don't line up
        r.x.style.setProperty("--sb-ox", (-Math.random() * dx).toFixed(1) + "s");
        r.y.style.setProperty("--sb-oy", (-Math.random() * dy).toFixed(1) + "s");
        r.y.style.setProperty("--sb-tw-d", (-Math.random() * 9).toFixed(2) + "s");
      }
    });
  }
  sizeTiles();
  var lastW = window.innerWidth, t = 0;
  window.addEventListener("resize", function () {
    // Mobile URL-bar height changes don't need new tiles; width changes do.
    if (window.innerWidth === lastW) return;
    lastW = window.innerWidth;
    clearTimeout(t);
    t = setTimeout(sizeTiles, 120);
  });

  var hidden = document.visibilityState === "hidden";
  function onVis() {
    hidden = document.visibilityState === "hidden";
    doc.classList.toggle("sb-paused", hidden);
    if (fx.getAnimations) fx.getAnimations({ subtree: true }).forEach(function (a) { hidden ? a.pause() : a.play(); });
  }
  document.addEventListener("visibilitychange", onVis);
  onVis();

  // Occasional effects (none with reduced motion or Save-Data).
  var A = "/spaceblox/assets/";
  var COMETS = [A + "fx_comet_1.svg", A + "fx_comet_2.svg", A + "fx_comet_3.svg"];
  var ROCKS = [A + "fx_asteroid_1.svg", A + "fx_asteroid_2.svg", A + "fx_asteroid_3.svg"];
  function rand(a, b) { return a + Math.random() * (b - a); }

  function spawn(kind) {
    var el = new Image();
    el.className = "sb-fx-item";
    el.alt = "";
    var W = fx.clientWidth || window.innerWidth, H = fx.clientHeight || window.innerHeight;
    var m = W < 640 ? 0.6 : 0.9, w, h, dur, sy, ey, r0, r1;
    if (kind === "star") { w = h = rand(28, 46) * m; dur = rand(1.6, 2.8); el.src = A + "fx_shooting_star.svg"; }
    else if (kind === "comet") { var s = rand(0.85, 1.05); w = 64 * s; h = 32 * s; dur = (18 - (s - 0.85) * 35) * rand(0.9, 1.1); el.src = COMETS[0]; }
    else { w = h = rand(16, 30) * m; dur = rand(14, 24); el.src = ROCKS[(Math.random() * 3) | 0]; }
    el.width = Math.round(w); el.height = Math.round(h);
    var sx = W + Math.max(w, h) + 50, ex = -Math.max(w, h) - 100, travel = sx - ex;
    if (kind === "star") { sy = rand(-100, H * 0.4); ey = sy + travel * rand(0.5, 1.5); }
    else if (kind === "comet") { sy = rand(-100, H * 0.6); ey = sy + travel * rand(0.2, 0.8); }
    else { sy = rand(-100, H * 0.8); ey = sy + travel * rand(0.1, 1.2); }
    var ang = Math.atan2(ey - sy, ex - sx);
    if (kind === "rock") { r0 = rand(0, 360); r1 = r0 + rand(120, 420) * (Math.random() < 0.5 ? 1 : -1); }
    else { r0 = r1 = (ang - (kind === "comet" ? Math.PI : 3 * Math.PI / 4)) * 180 / Math.PI; }
    el.style.opacity = "0";
    fx.appendChild(el);
    var frames = 0;
    function go() {
      el.style.opacity = "";
      // Comet tail: 3-frame flip at 12 fps (an image swap, not a per-frame script).
      var fi = 0;
      if (kind === "comet") frames = setInterval(function () { fi = (fi + 1) % 3; el.src = COMETS[fi]; }, 83);
      var a = el.animate([
        { transform: "translate(" + sx + "px," + sy + "px) rotate(" + r0 + "deg)", opacity: 1 },
        { transform: "translate(" + ex + "px," + ey + "px) rotate(" + r1 + "deg)", opacity: 0.85 }
      ], { duration: dur * 1000, easing: "linear", fill: "forwards" });
      a.onfinish = function () { clearInterval(frames); el.remove(); };
    }
    if (el.decode) el.decode().then(go, go); else el.onload = go;
  }

  function schedule() {
    var gap = small ? rand(9000, 16000) : rand(3800, 8200);
    setTimeout(function () {
      if (!hidden && !mqReduce.matches) {
        var r = Math.random();
        // Small screens: shooting stars only.
        spawn(small ? "star" : r < 0.58 ? "star" : r < 0.8 ? "comet" : "rock");
      }
      schedule();
    }, gap);
  }
  // Reading pages (devlog, about, contact) get no comets or shooting stars:
  // nothing bright should pass behind long text.
  if (!saveData && !calm) {
    COMETS.forEach(function (s) { new Image().src = s; });
    setTimeout(schedule, rand(1200, 2800));
  }
  if (saveData) doc.classList.add("sb-static"); // Save-Data: static sky
})();
