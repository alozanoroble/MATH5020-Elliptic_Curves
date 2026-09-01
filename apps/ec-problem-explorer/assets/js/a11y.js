// Accessible-mode toggle: color-vision-safe (Okabe-Ito) palette + vendored
// Atkinson Hyperlegible type. The actual colors/fonts live in styles.css,
// gated on the [data-a11y="on"] attribute this file sets on <html>; a tiny
// inline script in index.html applies a saved preference before first
// paint, so this file only needs to handle the toggle click itself.
(function () {
  var STORAGE_KEY = "ec_a11y";
  var root = document.documentElement;
  var btn = document.getElementById("a11y-toggle");
  if (!btn) return;

  var stateLabel = btn.querySelector(".a11y-toggle-state");

  function isOn() {
    return root.getAttribute("data-a11y") === "on";
  }

  function reflect() {
    var on = isOn();
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    if (stateLabel) stateLabel.textContent = on ? "On" : "Off";
  }

  function setOn(on) {
    if (on) {
      root.setAttribute("data-a11y", "on");
    } else {
      root.removeAttribute("data-a11y");
    }
    try { localStorage.setItem(STORAGE_KEY, on ? "on" : "off"); } catch (e) { /* ignore */ }
    reflect();
  }

  btn.addEventListener("click", function () {
    setOn(!isOn());
  });

  reflect(); // sync the button to whatever the anti-flash inline script already applied
})();
