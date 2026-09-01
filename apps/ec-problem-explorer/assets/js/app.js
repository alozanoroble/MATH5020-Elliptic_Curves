// Entry point: wires the router to the views and sets up KaTeX rendering.
window.ECApp = window.ECApp || {};

// Runs vendored KaTeX auto-render over a subtree, turning $...$ / $$...$$
// into typeset math. Called after every view render, and again after a
// hint/solution is revealed (new text nodes need their own pass).
window.ECApp.katexRender = function (rootEl) {
  if (typeof renderMathInElement !== "function") return; // KaTeX failed to load
  renderMathInElement(rootEl, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false,
    macros: {
      // The Tate-Shafarevich group symbol (Cyrillic Sha) isn't a built-in
      // KaTeX command; render the literal glyph in text mode instead.
      "\\Sha": "\\text{\u0428}"
    }
  });
};

(function () {
  var root = document.getElementById("app-root");

  function render(route) {
    if (route.view === "topic") {
      window.ECApp.views.renderTopic(root, route.param);
    } else if (route.view === "problem") {
      window.ECApp.views.renderProblem(root, route.param);
    } else if (route.view === "source") {
      window.ECApp.views.renderSource(root, route.param);
    } else {
      window.ECApp.views.renderHome(root);
    }
    window.ECApp.katexRender(root);
    root.focus();
    window.scrollTo(0, 0);
  }

  window.ECApp.router.init(render);

  // A changed Sources filter reshapes home/topic listings and the random
  // pool, so re-render whichever of those is currently on screen. Problem
  // and source pages are left alone — you're already looking at something
  // specific, no reason to yank it away.
  window.ECApp.sourceFilter.onChange(function () {
    var route = window.ECApp.router.current();
    if (route.view === "home" || route.view === "topic") {
      render(route);
    }
  });
})();
