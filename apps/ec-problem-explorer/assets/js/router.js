// Minimal hash router. No history API, no server routing needed —
// works identically on GitHub Pages, at a repo subpath, or opened
// directly from disk via file://.
window.ECApp = window.ECApp || {};

window.ECApp.router = (function () {
  var routeHandler = null;
  var currentRoute = { view: "home", param: null };

  // Turns "#/topic/warmups" into {view: "topic", param: "warmups"}
  // "#/problem/mordell-weil-3" into {view: "problem", param: "mordell-weil-3"}
  // "#/source/uconn-math5020" into {view: "source", param: "uconn-math5020"}
  // anything else (including "", "#", "#/") into {view: "home", param: null}
  function parseHash() {
    var hash = window.location.hash || "";
    hash = hash.replace(/^#\/?/, ""); // strip leading "#" and "/"
    if (!hash) return { view: "home", param: null };

    var parts = hash.split("/").filter(Boolean);
    if (parts[0] === "topic" && parts[1]) {
      return { view: "topic", param: decodeURIComponent(parts[1]) };
    }
    if (parts[0] === "problem" && parts[1]) {
      return { view: "problem", param: decodeURIComponent(parts[1]) };
    }
    if (parts[0] === "source" && parts[1]) {
      return { view: "source", param: decodeURIComponent(parts[1]) };
    }
    return { view: "home", param: null };
  }

  function handle() {
    currentRoute = parseHash();
    if (routeHandler) routeHandler(currentRoute);
  }

  function init(handler) {
    routeHandler = handler;
    window.addEventListener("hashchange", handle);
    handle(); // render whatever route we loaded on
  }

  function go(hash) {
    // Always assigning triggers hashchange even if navigating between
    // two different problems — no special-casing needed.
    window.location.hash = hash;
  }

  function current() {
    return currentRoute;
  }

  return { init: init, go: go, current: current };
})();
