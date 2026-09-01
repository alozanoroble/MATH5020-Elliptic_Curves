// Renders the three views (home / topic / problem) into a root element.
window.ECApp = window.ECApp || {};

window.ECApp.views = (function () {
  var DATA = window.EC_DATA;

  function problemsByTopic(topicId) {
    return DATA.problems.filter(function (p) { return p.topicId === topicId; });
  }
  function findTopic(topicId) {
    return DATA.topics.filter(function (t) { return t.id === topicId; })[0];
  }
  function findProblem(problemId) {
    return DATA.problems.filter(function (p) { return p.id === problemId; })[0];
  }

  // --- Random Problem: shuffle-without-replacement, so 28 clicks means 28
  // distinct problems before anything repeats, kept per browser tab/session.
  function shuffledIds() {
    var ids = DATA.problems.map(function (p) { return p.id; });
    for (var i = ids.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = ids[i]; ids[i] = ids[j]; ids[j] = tmp;
    }
    return ids;
  }
  function nextRandomProblemId() {
    var queue = [];
    try {
      var raw = sessionStorage.getItem("ec_random_queue");
      queue = raw ? JSON.parse(raw) : [];
    } catch (e) { /* sessionStorage unavailable (privacy mode, some file:// setups) */ }
    if (!queue || queue.length === 0) queue = shuffledIds();
    var id = queue.pop();
    try { sessionStorage.setItem("ec_random_queue", JSON.stringify(queue)); } catch (e) { /* ignore */ }
    return id;
  }

  function el(tag, className, text) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function breadcrumb(items) {
    // items: [{label, hash?}] — last item has no hash (current page)
    var nav = el("nav", "breadcrumb");
    nav.setAttribute("aria-label", "Breadcrumb");
    items.forEach(function (item, i) {
      if (i > 0) nav.appendChild(el("span", "breadcrumb-sep", "/"));
      if (item.hash) {
        var a = el("a", "breadcrumb-link", item.label);
        a.href = item.hash;
        nav.appendChild(a);
      } else {
        nav.appendChild(el("span", "breadcrumb-current", item.label));
      }
    });
    return nav;
  }

  function randomButton(extraClass) {
    var btn = el("button", "btn btn-random" + (extraClass ? " " + extraClass : ""), "🎲 Random Problem");
    btn.type = "button";
    btn.addEventListener("click", function () {
      window.ECApp.router.go("#/problem/" + nextRandomProblemId());
    });
    return btn;
  }

  // ---------------------------------------------------------------- home
  function renderHome(root) {
    root.innerHTML = "";
    var header = el("header", "view-header");
    header.appendChild(el("h1", null, "EC Problem Explorer"));
    header.appendChild(el("p", "view-lede", "Practice problems on elliptic curves, organized by topic. Pick a topic below, or let the dice pick a problem for you."));
    header.appendChild(randomButton("btn-random-hero"));
    root.appendChild(header);

    var grid = el("div", "topic-grid");
    DATA.topics.forEach(function (topic) {
      var count = problemsByTopic(topic.id).length;
      var card = document.createElement("a");
      card.className = "topic-card";
      card.href = "#/topic/" + topic.id;
      card.appendChild(el("h2", "topic-card-title", topic.title));
      var desc = el("p", "topic-card-desc");
      renderMathText(desc, topic.description);
      card.appendChild(desc);
      card.appendChild(el("span", "topic-card-count", count + (count === 1 ? " problem" : " problems")));
      grid.appendChild(card);
    });
    root.appendChild(grid);

    root.appendChild(colophon());
  }

  // --------------------------------------------------------------- topic
  function renderTopic(root, topicId) {
    root.innerHTML = "";
    var topic = findTopic(topicId);
    if (!topic) { renderNotFound(root, "topic"); return; }

    root.appendChild(breadcrumb([
      { label: "Home", hash: "#/" },
      { label: topic.title }
    ]));

    var header = el("header", "view-header");
    header.appendChild(el("h1", null, topic.title));
    var desc = el("p", "view-lede");
    renderMathText(desc, topic.description);
    header.appendChild(desc);
    root.appendChild(header);

    var list = el("ol", "problem-list");
    problemsByTopic(topicId).forEach(function (problem, i) {
      var li = el("li", "problem-list-item");
      var a = document.createElement("a");
      a.className = "problem-list-link";
      a.href = "#/problem/" + problem.id;
      a.appendChild(el("span", "problem-list-index", String(i + 1)));
      a.appendChild(el("span", "problem-list-title", problem.title));
      li.appendChild(a);
      list.appendChild(li);
    });
    root.appendChild(list);
    root.appendChild(colophon());
  }

  // ------------------------------------------------------------- problem
  function renderProblem(root, problemId) {
    root.innerHTML = "";
    var problem = findProblem(problemId);
    if (!problem) { renderNotFound(root, "problem"); return; }
    var topic = findTopic(problem.topicId);
    var source = DATA.sources[problem.sourceKey];

    root.appendChild(breadcrumb([
      { label: "Home", hash: "#/" },
      { label: topic.title, hash: "#/topic/" + topic.id },
      { label: problem.title }
    ]));

    var header = el("header", "view-header");
    header.appendChild(el("h1", null, problem.title));
    root.appendChild(header);

    var statementBox = el("div", "problem-statement");
    renderMathText(statementBox, problem.statement);
    root.appendChild(statementBox);

    root.appendChild(attributionBlock(source, problem.pdfLabel));

    var revealSection = el("div", "reveal-section");
    problem.hints.forEach(function (hint, i) {
      revealSection.appendChild(window.ECApp.reveal.build({
        triggerLabel: hint.label || ("Hint " + (i + 1)),
        tone: "hint",
        warningText: "Have you given the problem enough thought first? A hint is most useful after a real attempt — not before one.",
        confirmLabel: "Yes — show " + (hint.label || "the hint"),
        cancelLabel: "Not yet",
        renderContent: function (contentEl) {
          renderMathText(contentEl, hint.text);
        }
      }));
    });

    revealSection.appendChild(window.ECApp.reveal.build({
      triggerLabel: "Solution",
      tone: "solution",
      warningText: "Have you actually tried the problem yourself — and tried both hints — before jumping to the solution? It's worth a real attempt first.",
      confirmLabel: "Yes — show the solution",
      cancelLabel: "Not yet",
      renderContent: function (contentEl) {
        if (problem.solution && problem.solution.status === "written" && problem.solution.text) {
          renderMathText(contentEl, problem.solution.text);
        } else {
          var note = el("p", "solution-unwritten", "A full solution hasn't been written up for this problem yet. In the meantime, revisit the hints above, or work through it with the original source.");
          contentEl.appendChild(note);
        }
      }
    }));
    root.appendChild(revealSection);

    var footerNav = el("div", "problem-footer-nav");
    var backLink = document.createElement("a");
    backLink.className = "btn btn-secondary";
    backLink.href = "#/topic/" + topic.id;
    backLink.textContent = "← Back to " + topic.title;
    footerNav.appendChild(backLink);
    footerNav.appendChild(randomButton());
    root.appendChild(footerNav);

    root.appendChild(colophon());
  }

  function attributionBlock(source, pdfLabel) {
    var box = el("div", "attribution");
    var p1 = el("p", "attribution-line");
    p1.appendChild(document.createTextNode(source.course + " — " + source.instructor + ", " + source.institution + " (" + source.term + ")."));
    box.appendChild(p1);
    var p2 = el("p", "attribution-line");
    p2.appendChild(document.createTextNode("Original problem: " + pdfLabel + ". "));
    var link = document.createElement("a");
    link.href = source.pdfUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View the original PDF ↗";
    p2.appendChild(link);
    box.appendChild(p2);
    return box;
  }

  function colophon() {
    var p = el("p", "colophon", "EC Problem Explorer — a self-contained study tool. No data leaves your browser.");
    return p;
  }

  function renderNotFound(root, kind) {
    root.innerHTML = "";
    root.appendChild(el("h1", null, "Not found"));
    root.appendChild(el("p", null, "That " + kind + " doesn't exist in this collection."));
    var a = document.createElement("a");
    a.className = "btn";
    a.href = "#/";
    a.textContent = "← Back home";
    root.appendChild(a);
  }

  // Inserts text as text (never HTML) so KaTeX delimiters ($...$) survive
  // untouched and nothing in the source can be interpreted as markup.
  function renderMathText(container, text) {
    container.textContent = text || "";
  }

  return {
    renderHome: renderHome,
    renderTopic: renderTopic,
    renderProblem: renderProblem
  };
})();
