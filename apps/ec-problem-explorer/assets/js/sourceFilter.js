// The "Sources" dropdown filter: restricts the home topic grid, topic
// listings, and the Random Problem pool to one course, or "all" (default).
// State lives in sessionStorage (a per-tab browsing preference, same
// lifetime as the Random Problem queue) — not localStorage, since this is
// "just show me X for this sitting," not a permanent display preference
// like accessible mode.
window.ECApp = window.ECApp || {};

window.ECApp.sourceFilter = (function () {
  var STORAGE_KEY = "ec_source_filter";
  var ALL = "all";
  var listeners = [];

  function get() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) || ALL;
    } catch (e) {
      return ALL;
    }
  }

  function set(courseId) {
    var value = courseId || ALL;
    try { sessionStorage.setItem(STORAGE_KEY, value); } catch (e) { /* ignore */ }
    listeners.forEach(function (fn) { fn(value); });
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  // True if `problem` belongs to the currently-selected source (or if the
  // filter is "all").
  function matches(problem) {
    var current = get();
    if (current === ALL) return true;
    var source = window.EC_DATA.sources[problem.sourceKey];
    return !!source && source.courseId === current;
  }

  function wireDropdown() {
    var select = document.getElementById("source-filter-select");
    if (!select) return;

    select.innerHTML = "";
    var allOption = document.createElement("option");
    allOption.value = ALL;
    allOption.textContent = "All";
    select.appendChild(allOption);
    (window.EC_DATA.courses || []).forEach(function (course) {
      var opt = document.createElement("option");
      opt.value = course.id;
      opt.textContent = course.title;
      select.appendChild(opt);
    });

    select.value = get();
    select.addEventListener("change", function () {
      set(select.value);
    });
    onChange(function (value) {
      if (select.value !== value) select.value = value;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireDropdown);
  } else {
    wireDropdown();
  }

  return { ALL: ALL, get: get, set: set, onChange: onChange, matches: matches };
})();
