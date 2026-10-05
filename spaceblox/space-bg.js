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
  // Game: scroll_offset += Vector2(-15, -5) * delta → layers move left+up
  // (ParallaxLayer position = scroll_offset * motion_scale). CSS matches that.
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

  // Random events — match SpaceBackgroundFx.on_event_timeout + _spawn_entity.
  // Weights (roll 1..1000): meteor 0.1%, comet 1.0%, asteroid 34.0% (30% of
  // those spawn 3–5), else shooting star ~64.9%. Paths: right→left; per-type
  // Y slopes (comet flatter than before). Interval: game 0.2–12 s (calmer on
  // reading/small screens).
  var A = "/spaceblox/assets/";
  var COMETS = [A + "fx_comet_1.svg", A + "fx_comet_2.svg", A + "fx_comet_3.svg"];
  var ROCKS = [A + "fx_asteroid_1.svg", A + "fx_asteroid_2.svg", A + "fx_asteroid_3.svg"];
  var MAX_LIVE = small ? 4 : 6;
  var live = 0;
  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function at(x, y, r) { return "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) rotate(" + r.toFixed(1) + "deg)"; }

  function spawnOne(kind) {
    if (live >= MAX_LIVE) return;
    var el = new Image();
    el.className = "sb-fx-item";
    el.alt = "";
    el.setAttribute("data-kind", kind);
    var W = fx.clientWidth || window.innerWidth, H = fx.clientHeight || window.innerHeight;
    var m = W < 640 ? 0.75 : 1.0;
    var w, h, minT, maxT, ySlopeMin, ySlopeMax, yStartMax;
    if (kind === "star") {
      // Game: TextureRect 64×64, duration 0.8–1.5, start_y …0.4H, slope 0.5–1.5
      w = h = 64 * m * rand(0.85, 1.1);
      minT = 0.8; maxT = 1.5;
      yStartMax = H * 0.4; ySlopeMin = 0.5; ySlopeMax = 1.5;
      el.src = A + "fx_shooting_star.svg";
    } else if (kind === "comet") {
      // Game: 128×64, duration 10–20 (scale remap), start_y …0.6H, slope 0.2–0.8
      var sc = rand(0.9, 1.1);
      w = 128 * sc * m; h = 64 * sc * m;
      minT = 10; maxT = 20;
      yStartMax = H * 0.6; ySlopeMin = 0.2; ySlopeMax = 0.8;
      el.src = COMETS[0];
    } else {
      // Game asteroid: base 64×64 × random_scale 0.8–1.2; duration 25→15
      var asc = rand(0.8, 1.2);
      w = h = 64 * asc * m;
      minT = 15; maxT = 25;
      yStartMax = H * 0.8; ySlopeMin = 0.1; ySlopeMax = 1.2;
      el.src = ROCKS[(Math.random() * 3) | 0];
    }
    el.width = Math.round(w); el.height = Math.round(h);
    var maxDim = Math.max(w, h);
    var sx = W + maxDim + 50;
    var ex = -maxDim - 100;
    var travelX = sx - ex;
    var sy = rand(-100, yStartMax);
    var ey = sy + travelX * rand(ySlopeMin, ySlopeMax);
    var dur;
    if (kind === "star") {
      dur = rand(minT, maxT);
    } else if (kind === "comet") {
      // Game: remap(scale 0.9→1.1, max_time→min_time) * 0.85–1.15
      var csc = w / (128 * m);
      dur = (maxT + (minT - maxT) * ((csc - 0.9) / 0.2)) * rand(0.85, 1.15);
      dur = clamp(dur, minT * 0.85, maxT * 1.15);
    } else {
      // Game: remap(0.8→1.2, 25→15) * 0.85–1.15
      var rsc = w / (64 * m);
      dur = (25 - (rsc - 0.8) * (10 / 0.4)) * rand(0.85, 1.15);
      dur = clamp(dur, 10, 30);
    }
    var ang = Math.atan2(ey - sy, ex - sx);
    var r0, r1;
    if (kind === "rock") {
      r0 = rand(0, 360);
      r1 = r0 + rand(360, 1800) * (Math.random() < 0.5 ? 1 : -1); // ~1–5 turns
    } else {
      r0 = r1 = (ang - (kind === "comet" ? Math.PI : 3 * Math.PI / 4)) * 180 / Math.PI;
    }
    el.style.opacity = "0";
    fx.appendChild(el);
    live++;
    var frames = 0;
    function done() { clearInterval(frames); el.remove(); live--; }
    function go() {
      if (!el.isConnected) return;
      el.style.opacity = "";
      var fi = 0;
      if (kind === "comet") frames = setInterval(function () { if (!hidden) { fi = (fi + 1) % 3; el.src = COMETS[fi]; } }, 83);
      var keyframes = kind === "star"
        ? [{ transform: at(sx, sy, r0), opacity: 0 }, { opacity: 1, offset: 0.12 }, { opacity: 1, offset: 0.75 }, { transform: at(ex, ey, r1), opacity: 0 }]
        : [{ transform: at(sx, sy, r0), opacity: 1 }, { transform: at(ex, ey, r1), opacity: 0.85 }];
      var a = el.animate(keyframes, { duration: dur * 1000, easing: "linear", fill: "forwards" });
      if (hidden) a.pause();
      a.onfinish = done;
      a.oncancel = done;
    }
    if (el.decode) el.decode().then(go, go); else el.onload = go;
  }

  // Game on_event_timeout: roll 1..1000
  function fireEvent() {
    if (hidden || mqReduce.matches) return;
    var roll = (Math.random() * 1000 | 0) + 1;
    if (roll <= 1) {
      // meteor shower ~0.1%: burst of comets (simplified)
      var n = 8 + (Math.random() * 12 | 0);
      for (var i = 0; i < n; i++) setTimeout(function () { spawnOne("comet"); }, Math.random() * 2500);
    } else if (roll <= 11) {
      spawnOne("comet");
    } else if (roll <= 351) {
      var count = 1;
      if (Math.random() * 100 < 30) count = 3 + (Math.random() * 3 | 0); // 3–5
      for (var j = 0; j < count; j++) spawnOne("rock");
    } else {
      spawnOne("star");
    }
  }

  function schedule() {
    // Game event_spawn_interval Vector2(0.2, 12). Calm/small: slower to keep text readable.
    var gap = small || calm ? rand(4000, 12000) : rand(200, 12000);
    setTimeout(function () {
      fireEvent();
      schedule();
    }, gap);
  }
  if (mqReduce.addEventListener) mqReduce.addEventListener("change", function () {
    if (mqReduce.matches && fx.getAnimations) fx.getAnimations({ subtree: true }).forEach(function (a) { a.cancel(); });
  });
  if (!saveData) {
    COMETS.forEach(function (s) { new Image().src = s; });
    ROCKS.forEach(function (s) { new Image().src = s; });
    setTimeout(schedule, rand(1200, 2800));
  }
  if (saveData) doc.classList.add("sb-static"); // Save-Data: static sky
})();
