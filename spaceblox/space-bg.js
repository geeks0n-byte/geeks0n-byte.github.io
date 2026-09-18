/**
 * Full-page Spaceblox starfield: tile sizing, translate3d parallax, sparse FX.
 * Comets are ~half in-game art size for web readability.
 */
(function () {
  var ASPECT_W = 9;
  var ASPECT_H = 16;
  var CAP_W = 720;
  var CAP_H = 1280;
  var MOBILE_MAX_W = 480;
  var root = document.documentElement;

  function sizeTiles() {
    var vw = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0, 1);
    var tw, th;
    if (vw <= 860) {
      tw = Math.min(MOBILE_MAX_W, Math.max(360, Math.floor(vw * 0.9)));
      th = Math.ceil(tw * (ASPECT_H / ASPECT_W));
    } else {
      tw = CAP_W;
      th = CAP_H;
    }
    root.style.setProperty("--sb-tw", tw + "px");
    root.style.setProperty("--sb-th", th + "px");
    root._sbTw = tw;
    root._sbTh = th;
  }

  sizeTiles();
  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sizeTiles, 80);
  });
})();

(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var layers = document.querySelectorAll(".space-bg .sb-layer");
  if (!layers.length) return;

  var BASE_VX = 15;
  var BASE_VY = 5;
  var state = [];

  for (var i = 0; i < layers.length; i++) {
    var el = layers[i];
    var speed = parseFloat(el.getAttribute("data-speed") || "0.4");
    if (!isFinite(speed) || speed <= 0) speed = 0.4;
    var tw0 = document.documentElement._sbTw || 720;
    var th0 = document.documentElement._sbTh || 1280;
    state.push({
      el: el,
      speed: speed,
      ox: Math.random() * tw0,
      oy: Math.random() * th0
    });
    var durs = (getComputedStyle(el).animationDuration || "").split(",");
    var delays = [];
    for (var j = 0; j < durs.length; j++) {
      var sec = parseFloat(durs[j]);
      if (!isFinite(sec) || sec <= 0) delays.push("0s");
      else delays.push((-Math.random() * sec).toFixed(3) + "s");
    }
    if (delays.length && el.style) el.style.animationDelay = delays.join(", ");
  }

  var last = performance.now();
  var pageVisible = document.visibilityState !== "hidden";
  var rafId = 0;

  function wrap(v, m) {
    if (m <= 0) return 0;
    v = v % m;
    if (v < 0) v += m;
    return v;
  }

  function tick(now) {
    rafId = 0;
    if (!pageVisible) return;
    var dt = Math.min(0.064, (now - last) / 1000);
    last = now;
    var tw = document.documentElement._sbTw || 720;
    var th = document.documentElement._sbTh || 1280;
    for (var i = 0; i < state.length; i++) {
      var s = state[i];
      s.ox = wrap(s.ox + BASE_VX * s.speed * dt, tw);
      s.oy = wrap(s.oy + BASE_VY * s.speed * dt, th);
      s.el.style.transform = "translate3d(" + (-s.ox).toFixed(2) + "px," + (-s.oy).toFixed(2) + "px,0)";
    }
    rafId = requestAnimationFrame(tick);
  }

  function ensureTick() {
    if (!rafId && pageVisible) {
      last = performance.now();
      rafId = requestAnimationFrame(tick);
    }
  }

  document.addEventListener("visibilitychange", function () {
    pageVisible = document.visibilityState !== "hidden";
    if (pageVisible) ensureTick();
  });

  ensureTick();
})();

(function () {
  var fx = document.getElementById("space-fx");
  if (!fx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ASSETS = {
    star: "assets/fx_shooting_star.svg",
    asteroids: [
      "assets/fx_asteroid_1.svg",
      "assets/fx_asteroid_2.svg",
      "assets/fx_asteroid_3.svg"
    ],
    comets: [
      "assets/fx_comet_1.svg",
      "assets/fx_comet_2.svg",
      "assets/fx_comet_3.svg"
    ]
  };
  var COMET_FPS = 12;
  var COMET_FRAME_MS = 1000 / COMET_FPS;
  /* Web: ~half in-game Vector2(128, 64) so comets stay ambient, not dominant */
  var COMET_BASE_W = 64;
  var COMET_BASE_H = 32;
  var STAR_BASE_RAD = 3 * Math.PI / 4;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function remap(v, a, b, c, d) {
    var t = (v - a) / (b - a);
    return c + t * (d - c);
  }

  (function preloadCometFrames() {
    for (var i = 0; i < ASSETS.comets.length; i++) {
      var img = new Image();
      img.src = ASSETS.comets[i];
    }
  })();

  function spawn(kind) {
    var el = document.createElement("img");
    el.className = "sb-fx-item";
    el.alt = "";
    var w, h, dur, startX, endX, startY, endY, dx, dy, rot0, rot1;
    var hostW = fx.clientWidth || window.innerWidth || 1;
    var hostH = fx.clientHeight || window.innerHeight || 1;
    var m = hostW < 640 ? 0.45 : (hostW < 900 ? 0.65 : 0.9);
    var cometScale = 1;

    if (kind === "star") {
      w = rand(28, 46) * m; h = w; dur = rand(1.6, 2.8);
      el.src = ASSETS.star;
    } else if (kind === "comet") {
      cometScale = rand(0.85, 1.05);
      w = COMET_BASE_W * cometScale;
      h = COMET_BASE_H * cometScale;
      dur = remap(cometScale, 0.85, 1.05, 18.0, 11.0) * rand(0.9, 1.1);
      el.src = ASSETS.comets[0];
    } else {
      w = rand(16, 30) * m; h = w; dur = rand(14, 24);
      el.src = pick(ASSETS.asteroids);
    }
    el.style.width = w + "px";
    el.style.height = h + "px";

    var maxDim = Math.max(w, h);
    startX = hostW + maxDim + 50;
    endX = -maxDim - 100;
    var travelX = startX - endX;

    if (kind === "star") {
      startY = rand(-100, hostH * 0.4);
      endY = startY + travelX * rand(0.5, 1.5);
    } else if (kind === "comet") {
      startY = rand(-100, hostH * 0.6);
      endY = startY + travelX * rand(0.2, 0.8);
    } else {
      startY = rand(-100, hostH * 0.8);
      endY = startY + travelX * rand(0.1, 1.2);
    }
    dx = endX - startX;
    dy = endY - startY;

    if (kind === "asteroid") {
      rot0 = rand(0, 360);
      rot1 = rot0 + rand(120, 420) * (Math.random() < 0.5 ? 1 : -1);
    } else if (kind === "comet") {
      rot0 = (Math.atan2(dy, dx) - Math.PI) * 180 / Math.PI;
      rot1 = rot0;
    } else {
      rot0 = (Math.atan2(dy, dx) - STAR_BASE_RAD) * 180 / Math.PI;
      rot1 = rot0;
    }

    el.style.left = "0";
    el.style.top = "0";
    el.style.transform = "translate(" + startX + "px," + startY + "px) rotate(" + rot0 + "deg)";
    el.style.opacity = "0";
    fx.appendChild(el);

    var cometFrameTimer = null;
    var cometFrameIdx = 0;
    function clearCometFrames() {
      if (cometFrameTimer != null) {
        clearInterval(cometFrameTimer);
        cometFrameTimer = null;
      }
    }
    function startCometFrames() {
      cometFrameIdx = 0;
      el.src = ASSETS.comets[0];
      cometFrameTimer = setInterval(function () {
        cometFrameIdx = (cometFrameIdx + 1) % ASSETS.comets.length;
        el.src = ASSETS.comets[cometFrameIdx];
      }, COMET_FRAME_MS);
    }

    function startAnim() {
      el.style.opacity = "";
      if (kind === "comet") startCometFrames();
      var anim = el.animate([
        { transform: "translate(" + startX + "px," + startY + "px) rotate(" + rot0 + "deg)", opacity: 1 },
        { transform: "translate(" + endX + "px," + endY + "px) rotate(" + rot1 + "deg)", opacity: 0.85 }
      ], { duration: dur * 1000, easing: "linear", fill: "forwards" });
      anim.onfinish = function () {
        clearCometFrames();
        el.remove();
      };
    }

    if (typeof el.decode === "function") {
      el.decode().then(startAnim).catch(startAnim);
    } else if (!el.complete) {
      el.onload = startAnim;
      el.onerror = startAnim;
    } else {
      startAnim();
    }
  }

  function schedule() {
    if (document.visibilityState === "hidden") {
      setTimeout(schedule, rand(3800, 8200));
      return;
    }
    var r = Math.random();
    var kind = r < 0.58 ? "star" : (r < 0.8 ? "comet" : "asteroid");
    spawn(kind);
    setTimeout(schedule, rand(3800, 8200));
  }
  setTimeout(schedule, rand(1200, 2800));
})();
