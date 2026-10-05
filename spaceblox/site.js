// Small page helpers: mobile menu, screenshot carousel, click-to-load trailer.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile menu: "Menu" button opens the main nav as a panel; Esc closes it.
  var btn = document.querySelector(".menu-btn");
  var nav = btn && document.getElementById(btn.getAttribute("aria-controls"));
  if (btn && nav) {
    var setOpen = function (open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    };
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        btn.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (btn.getAttribute("aria-expanded") === "true" && !nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 720) setOpen(false);
    });
  }

  // Screenshot carousel: manual only (buttons, swipe/scroll-snap, arrow keys).
  var carousels = document.querySelectorAll("[data-carousel]");
  Array.prototype.forEach.call(carousels, function (root) {
    var track = root.querySelector(".shots");
    var prev = root.querySelector("[data-dir='-1']");
    var next = root.querySelector("[data-dir='1']");
    if (!track) return;
    function step(dir) {
      var fig = track.querySelector("figure");
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      var dist = (fig ? fig.offsetWidth : 200) + gap;
      track.scrollBy({ left: dir * dist, behavior: reduce ? "auto" : "smooth" });
    }
    function update() {
      if (prev) prev.disabled = track.scrollLeft <= 8;
      if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    }
    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { step(-1); e.preventDefault(); }
      if (e.key === "ArrowRight") { step(1); e.preventDefault(); }
    });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  // Trailer: load YouTube (privacy-enhanced mode) only after a click.
  var poster = document.querySelector(".trailer[data-video]");
  if (poster) {
    poster.addEventListener("click", function () {
      var box = document.createElement("div");
      box.className = "trailer-player";
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + poster.getAttribute("data-video") + "?autoplay=1";
      f.title = "Spaceblox trailer";
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      box.appendChild(f);
      poster.replaceWith(box);
      f.focus();
    });
  }
})();
