# EC Problem Explorer

A self-contained study tool for browsing elliptic curve practice problems by topic. Pick a topic, or hit **Random Problem**. Each problem shows a clean statement, proper attribution back to its original source, and — behind a "have you actually tried this yet" warning — up to two hints and (eventually) a full solution.

**Try it:** open `index.html` directly in a browser, or serve the folder with any static file host (GitHub Pages works with zero configuration).

## What this is, technically

Plain HTML/CSS/JavaScript. No framework, no build step, no backend, and — deliberately — no LLM or network call of any kind at runtime. Every hint (and, eventually, every solution) is pre-written text stored locally in [`assets/js/data.js`](assets/js/data.js). Math typesetting is handled by a vendored copy of [KaTeX](assets/vendor/katex/) (no CDN dependency). The whole app works identically opened straight from disk (`file://`) or served over the web, because it deliberately avoids `fetch()` and ES modules — both are blocked by browsers' CORS rules when opened from disk.

```
index.html
assets/
  css/styles.css              styling
  js/data.js                   all problem content — the only file most edits touch
  js/router.js                  hash-based routing (#/, #/topic/:id, #/problem/:id, #/source/:id)
  js/reveal.js                   the hint/solution warning-gate widget
  js/sourceFilter.js               the "Sources" dropdown filter (session-scoped)
  js/views.js                       renders the home / topic / problem / source screens
  js/app.js                          wires it together, drives KaTeX rendering
  js/a11y.js                          the accessible-mode toggle
  vendor/katex/                       vendored math renderer (css + js + fonts)
  vendor/atkinson-hyperlegible/         vendored accessible-mode type
```

## Content policy: link, don't rehost

This repo does **not** mirror the original problem-set PDFs (or, for the book source, the manuscript itself). Every problem links out to its source and credits the author/instructor and institution by name. That's a deliberate choice, not an oversight: reposting someone else's course materials without their say-so isn't something this project wants to do, even when — as with everything currently in this collection — the repo owner is also the author of the source. If a source link eventually rots, the course/instructor/term text stored alongside it (see the schema below) still tells you where the problem came from.

## Content status

**73 problems** across **3 sources** and **6 topics**:

| Source | Problems |
|---|---|
| UConn MATH 5020 — *The Arithmetic of Elliptic Curves* (Fall 2015) | 28 |
| CTNT 2026 — *Elliptic Curve Cryptography* suggested exercises | 13 |
| *Number Theory and Geometry* (book manuscript), Chapters 1, 15, 16 | 32 |

Every problem has two hints. **No solutions have been written yet** — every `solution.status` is `"unwritten"`, and the Solution button correctly shows a "not written up yet" message once you click through its warning. Adding a solution later is a pure data edit (see below); no code changes are needed.

## Adding or editing content

Everything lives in `assets/js/data.js` as one JS object, `window.EC_DATA`, with four parts:

**`sources`** — one entry per homework/PDF/exercise-set, keyed by a short id (`hw1`, `ctntEcc`, `book`, ...):
```js
hw1: {
  courseId: "uconn-math5020",  // must match a courses[].id — groups sources for the Sources filter
  course: "MATH 5020 — The Arithmetic of Elliptic Curves",
  instructor: "Álvaro Lozano-Robledo",
  institution: "University of Connecticut",
  term: "Fall 2015",
  pdfUrl: "https://.../MATH-5020-hw1.pdf",   // a general reference page works too if there's no single PDF
  homeworkLabel: "Homework 1"
}
```

**`courses`** — the higher-level groupings shown in the home page's "Sources" section and the Sources filter dropdown (several `sources` entries, e.g. every UConn homework, typically share one `courseId`):
```js
{ id: "uconn-math5020", title: "UConn MATH 5020", subtitle: "The Arithmetic of Elliptic Curves", description: "..." }
```

**`topics`** — the categories shown on the home page:
```js
{ id: "warmups", title: "Number-Theoretic Warm-ups", description: "..." }
```

**`problems`** — the actual problems:
```js
{
  id: "warmups-1",              // stable, unique, used directly in the URL hash
  topicId: "warmups",           // must match a topics[].id
  title: "The Rational Root Theorem",
  sourceKey: "hw1",             // must match a sources key
  pdfLabel: "Preliminary Exercise 1",
  statement: String.raw`Let $f(x) = a_n x^n + \cdots$ ...`,
  hints: [
    { label: "Hint 1", text: String.raw`...` },
    { label: "Hint 2", text: String.raw`...` }
  ],
  solution: { status: "unwritten", text: "" }   // flip to "written" and fill `text` when ready
}
```

Notes:
- Use `String.raw\`...\`` (as the existing entries do) for any field containing LaTeX, so you don't have to double every backslash by hand — and never use a `\uXXXX` JavaScript escape inside one of these (it won't be processed; write the actual character instead).
- Wrap inline math in single `$...$` and display math in `$$...$$` — KaTeX's auto-render finds these automatically in whatever text you put in `statement`, a hint's `text`, or `solution.text`.
- To add a new problem, just append an object to the `problems` array — the home page's topic/source counts, the topic and source listings, and the random-problem pool all update themselves from the array; nothing needs to be kept in sync by hand.
- To add a whole new source, add a `sources` entry (and a `courses` entry if it's a new course rather than another document from an existing one) before adding problems that reference it.
- To retire the "unwritten" placeholder for a solution, set `status: "written"` and fill in `text`; the warning-gate UI is already built and needs no changes.

## Design choices worth knowing about

- **Hash routing**, not path-based — works at any GitHub Pages subpath and from `file://`, with no server-side redirect trickery needed.
- **Re-warns every time.** Confirming a hint or solution isn't remembered across page loads (or even across navigating away and back) — the warning is the point, and a "don't ask again" would erode it after the second problem.
- **Random Problem** shuffles without replacement (tracked in `sessionStorage` for the current tab), so it won't visibly repeat a problem until the whole set has come up once — and it respects the Sources filter below, drawing only from the currently-selected source.
- **The Sources filter** (top-left dropdown, "All" by default) restricts the home page's topic grid, each topic's problem list, and the Random Problem pool to one course. It's a `sessionStorage`-scoped browsing preference, not a permanent setting — a fresh tab always starts back at "All". Topics with zero matching problems under the active filter are hidden rather than shown empty. Picking a source from the home page's "Sources" section instead takes you to a dedicated `#/source/:id` page listing everything from that source, grouped by topic, with a button to apply it as the app-wide filter.
- **Accessible palette & type** (top-right toggle, saved in `localStorage`) switches to a color-vision-safe palette and vendored [Atkinson Hyperlegible](assets/vendor/atkinson-hyperlegible/) type. The three semantic colors (link/accent, hint, solution) are drawn from the [Okabe–Ito](https://jfly.uni-koeln.de/color/) palette specifically because it's documented to stay distinguishable under protanopia, deuteranopia, and tritanopia, and text contrast is pushed toward WCAG AAA. KaTeX-rendered math is deliberately left on its own math fonts — only surrounding UI/prose text switches. All of it lives in `styles.css` under `[data-a11y="on"]`; the toggle logic itself is in `assets/js/a11y.js`.
