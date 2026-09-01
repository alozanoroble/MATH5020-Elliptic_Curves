// Renders the three views (home / topic / problem) into a root element.
window.ECApp = window.ECApp || {};

window.ECApp.views = (function () {
  var DATA = window.EC_DATA;

  function problemsByTopic(topicId) {
    return DATA.problems.filter(function (p) { return p.topicId === topicId && window.ECApp.sourceFilter.matches(p); });
  }
  function problemsBySource(courseId) {
    return DATA.problems.filter(function (p) {
      var source = DATA.sources[p.sourceKey];
      return !!source && source.courseId === courseId;
    });
  }
  function findTopic(topicId) {
    return DATA.topics.filter(function (t) { return t.id === topicId; })[0];
  }
  function findCourse(courseId) {
    return DATA.courses.filter(function (c) { return c.id === courseId; })[0];
  }
  function findProblem(problemId) {
    return DATA.problems.filter(function (p) { return p.id === problemId; })[0];
  }

  // --- Random Problem: shuffle-without-replacement *within the current
  // Sources filter*, so N clicks means N distinct problems from the active
  // set before anything repeats. Changing the filter starts a fresh queue
  // (the old one may reference problems outside the new filter).
  function shuffledIds() {
    var pool = DATA.problems.filter(window.ECApp.sourceFilter.matches);
    var ids = pool.map(function (p) { return p.id; });
    for (var i = ids.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = ids[i]; ids[i] = ids[j]; ids[j] = tmp;
    }
    return ids;
  }
  function nextRandomProblemId() {
    var queue = [];
    var storedFilter = null;
    try {
      storedFilter = sessionStorage.getItem("ec_random_queue_filter");
      var raw = sessionStorage.getItem("ec_random_queue");
      queue = raw ? JSON.parse(raw) : [];
    } catch (e) { /* sessionStorage unavailable (privacy mode, some file:// setups) */ }
    var activeFilter = window.ECApp.sourceFilter.get();
    if (!queue || queue.length === 0 || storedFilter !== activeFilter) queue = shuffledIds();
    var id = queue.pop();
    try {
      sessionStorage.setItem("ec_random_queue", JSON.stringify(queue));
      sessionStorage.setItem("ec_random_queue_filter", activeFilter);
    } catch (e) { /* ignore */ }
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
    var filtered = window.ECApp.sourceFilter.get() !== window.ECApp.sourceFilter.ALL;

    var header = el("header", "view-header");
    header.appendChild(el("h1", null, "EC Problem Explorer"));
    header.appendChild(el("p", "view-lede", "Practice problems on elliptic curves, organized by topic. Pick a topic below, or let the dice pick a problem for you."));
    if (filtered) {
      var activeCourse = findCourse(window.ECApp.sourceFilter.get());
      header.appendChild(el("p", "filter-banner", "Showing only: " + (activeCourse ? activeCourse.title : window.ECApp.sourceFilter.get())));
    }
    header.appendChild(randomButton("btn-random-hero"));
    root.appendChild(header);

    var grid = el("div", "topic-grid");
    var anyTopicShown = false;
    DATA.topics.forEach(function (topic) {
      var count = problemsByTopic(topic.id).length;
      if (count === 0) return; // hide topics with nothing under the active filter
      anyTopicShown = true;
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
    if (!anyTopicShown) {
      grid.appendChild(el("p", "empty-note", "No problems match the current Sources filter."));
    }
    root.appendChild(grid);

    var sourcesSection = el("section", "sources-section");
    sourcesSection.appendChild(el("h2", "sources-heading", "Sources"));
    sourcesSection.appendChild(el("p", "view-lede", "Every problem here comes from a real course or book, credited and linked at the source — not rehosted."));
    var sourceGrid = el("div", "source-grid");
    DATA.courses.forEach(function (course) {
      var count = problemsBySource(course.id).length;
      var card = document.createElement("a");
      card.className = "source-card";
      card.href = "#/source/" + course.id;
      card.appendChild(el("h3", "source-card-title", course.title));
      card.appendChild(el("p", "source-card-subtitle", course.subtitle));
      var desc = el("p", "source-card-desc");
      renderMathText(desc, course.description);
      card.appendChild(desc);
      card.appendChild(el("span", "topic-card-count", count + (count === 1 ? " problem" : " problems")));
      sourceGrid.appendChild(card);
    });
    sourcesSection.appendChild(sourceGrid);
    root.appendChild(sourcesSection);

    root.appendChild(colophon());
  }

  // --------------------------------------------------------------- source
  function renderSource(root, courseId) {
    root.innerHTML = "";
    var course = findCourse(courseId);
    if (!course) { renderNotFound(root, "source"); return; }
    var problems = problemsBySource(courseId);

    root.appendChild(breadcrumb([
      { label: "Home", hash: "#/" },
      { label: course.title }
    ]));

    var header = el("header", "view-header");
    header.appendChild(el("h1", null, course.title));
    header.appendChild(el("p", "view-lede", course.subtitle));
    var desc = el("p", "view-lede");
    renderMathText(desc, course.description);
    header.appendChild(desc);

    var filterBtn = el("button", "btn btn-secondary", "Filter the whole app to just this source");
    filterBtn.type = "button";
    filterBtn.addEventListener("click", function () {
      window.ECApp.sourceFilter.set(courseId);
      window.ECApp.router.go("#/");
    });
    header.appendChild(filterBtn);
    root.appendChild(header);

    // Group this source's problems by topic, in topic order, so a source
    // that spans several topics still reads as organized rather than a
    // flat dump.
    DATA.topics.forEach(function (topic) {
      var inTopic = problems.filter(function (p) { return p.topicId === topic.id; });
      if (inTopic.length === 0) return;
      var section = el("div", "source-topic-group");
      section.appendChild(el("h2", "source-topic-heading", topic.title));
      var list = el("ol", "problem-list");
      inTopic.forEach(function (problem, i) {
        var li = el("li", "problem-list-item");
        var a = document.createElement("a");
        a.className = "problem-list-link";
        a.href = "#/problem/" + problem.id;
        a.appendChild(el("span", "problem-list-index", String(i + 1)));
        a.appendChild(el("span", "problem-list-title", problem.title));
        li.appendChild(a);
        list.appendChild(li);
      });
      section.appendChild(list);
      root.appendChild(section);
    });

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

    var topicProblems = problemsByTopic(topicId);
    if (topicProblems.length === 0) {
      root.appendChild(el("p", "empty-note", "No problems in this topic match the current Sources filter."));
    } else {
      var list = el("ol", "problem-list");
      topicProblems.forEach(function (problem, i) {
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
    }
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
    link.textContent = "View the source ↗";
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
    renderProblem: renderProblem,
    renderSource: renderSource
  };
})();
