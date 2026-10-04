// Animated space background: the Spaceblox bg_1..bg_4 parallax layers drifting
// diagonally, twinkling stars, and random comets, shooting stars and asteroids.
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

  // Random events, as on the pre-redesign site: comets, shooting stars and
  // asteroids appear at random times, cross the screen along a random line
  // (random position and angle), then are removed. None with reduced motion
  // or Save-Data; fewer on phones and reading pages.
  var A = "/spaceblox/assets/";
  var COMETS = [A + "fx_comet_1.svg", A + "fx_comet_2.svg", A + "fx_comet_3.svg"];
  var ROCKS = [A + "fx_asteroid_1.svg", A + "fx_asteroid_2.svg", A + "fx_asteroid_3.svg"];
  var MAX_LIVE = small ? 2 : 3;
  var live = 0;
  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  // Distance from (px,py) along unit vector (ux,uy) to the edge of the box
  // [-m, W+m] x [-m, H+m].
  function reach(px, py, ux, uy, W, H, m) {
    var tx = ux > 0 ? (W + m - px) / ux : ux < 0 ? (-m - px) / ux : Infinity;
    var ty = uy > 0 ? (H + m - py) / uy : uy < 0 ? (-m - py) / uy : Infinity;
    return Math.min(tx, ty);
  }

  function spawn(kind) {
    var el = new Image();
    el.className = "sb-fx-item";
    el.alt = "";
    el.setAttribute("data-kind", kind);
    var W = fx.clientWidth || window.innerWidth, H = fx.clientHeight || window.innerHeight;
    var m = W < 640 ? 0.6 : 0.9, w, h, speed, ang;
    if (kind === "star") {
      w = h = rand(28, 46) * m; speed = rand(600, 900); el.src = A + "fx_shooting_star.svg";
      // Shooting stars fall: diagonally down, to the left or to the right.
      ang = rand(20, 65) * Math.PI / 180;
      if (Math.random() < 0.5) ang = Math.PI - ang;
    } else if (kind === "comet") {
      var sc = rand(0.85, 1.05); w = 64 * sc; h = 32 * sc; speed = rand(70, 120); el.src = COMETS[0];
      ang = rand(0, 2 * Math.PI);
    } else {
      w = h = rand(16, 30) * m; speed = rand(45, 90); el.src = ROCKS[(Math.random() * 3) | 0];
      ang = rand(0, 2 * Math.PI);
    }
    el.width = Math.round(w); el.height = Math.round(h);
    // A random point on screen, and a random line through it from edge to edge.
    var ux = Math.cos(ang), uy = Math.sin(ang), mg = Math.max(w, h) + 20;
    var px = rand(0.1, 0.9) * W, py = rand(0.1, 0.9) * H;
    var back = reach(px, py, -ux, -uy, W, H, mg), fwd = reach(px, py, ux, uy, W, H, mg);
    var sx = px - ux * back, sy = py - uy * back, ex = px + ux * fwd, ey = py + uy * fwd;
    var dur = (back + fwd) / speed;
    dur = kind === "star" ? clamp(dur, 0.9, 3) : kind === "comet" ? clamp(dur, 8, 24) : clamp(dur, 10, 30);
    var r0, r1;
    if (kind === "rock") { r0 = rand(0, 360); r1 = r0 + rand(120, 420) * (Math.random() < 0.5 ? 1 : -1); }
    else { r0 = r1 = (ang - (kind === "comet" ? Math.PI : 3 * Math.PI / 4)) * 180 / Math.PI; }
    function at(x, y, r) { return "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) rotate(" + r.toFixed(1) + "deg)"; }
    el.style.opacity = "0";
    fx.appendChild(el);
    live++;
    var frames = 0;
    function done() { clearInterval(frames); el.remove(); live--; }
    function go() {
      if (!el.isConnected) return;
      el.style.opacity = "";
      // Comet tail: 3-frame flip at 12 fps (an image swap, not a per-frame script).
      var fi = 0;
      if (kind === "comet") frames = setInterval(function () { if (!hidden) { fi = (fi + 1) % 3; el.src = COMETS[fi]; } }, 83);
      var kf = kind === "star"
        ? [{ transform: at(sx, sy, r0), opacity: 0 }, { opacity: 1, offset: 0.12 }, { opacity: 1, offset: 0.75 }, { transform: at(ex, ey, r1), opacity: 0 }]
        : [{ transform: at(sx, sy, r0), opacity: 1 }, { transform: at(ex, ey, r1), opacity: 0.85 }];
      var a = el.animate(kf, { duration: dur * 1000, easing: "linear", fill: "forwards" });
      if (hidden) a.pause();
      a.onfinish = done;
      a.oncancel = done;
    }
    if (el.decode) el.decode().then(go, go); else el.onload = go;
  }

  function pickKind() {
    var r = Math.random();
    return r < 0.55 ? "star" : r < 0.8 ? "comet" : "rock";
  }
  function schedule() {
    // Desktop: an event every 3.8-8.2 s (as on the old site). Phones and
    // reading pages: every 9-16 s.
    var gap = small || calm ? rand(9000, 16000) : rand(3800, 8200);
    setTimeout(function () {
      if (!hidden && !mqReduce.matches && live < MAX_LIVE) spawn(pickKind());
      schedule();
    }, gap);
  }
  if (mqReduce.addEventListener) mqReduce.addEventListener("change", function () {
    if (mqReduce.matches && fx.getAnimations) fx.getAnimations({ subtree: true }).forEach(function (a) { a.cancel(); });
  });
  if (!saveData) {
    COMETS.forEach(function (s) { new Image().src = s; });
    setTimeout(schedule, rand(1200, 2800));
  }
  if (saveData) doc.classList.add("sb-static"); // Save-Data: static sky
})();
