# EC Problem Explorer

A self-contained study tool for browsing elliptic curve practice problems by topic. Pick a topic, or hit **Random Problem**. Each problem shows a clean statement, proper attribution back to its original source, and — behind a "have you actually tried this yet" warning — up to two hints and (eventually) a full solution. A top-right toggle switches to a color-vision-safe palette and Atkinson Hyperlegible type.

**[Live demo](https://alozanoroble.github.io/MATH5020-Elliptic_Curves/apps/ec-problem-explorer/)**

**Try it locally:** open `index.html` directly in a browser, or serve the folder with any static file host (GitHub Pages works with zero configuration).

## What this is, technically

Plain HTML/CSS/JavaScript. No framework, no build step, no backend, and — deliberately — no LLM or network call of any kind at runtime. Every hint (and, eventually, every solution) is pre-written text stored locally in [`assets/js/data.js`](assets/js/data.js). Math typesetting is handled by a vendored copy of [KaTeX](assets/vendor/katex/) (no CDN dependency). The whole app works identically opened straight from disk (`file://`) or served over the web, because it deliberately avoids `fetch()` and ES modules — both are blocked by browsers' CORS rules when opened from disk.

```
index.html
assets/
  css/styles.css        styling
  js/data.js             all problem content — the only file most edits touch
  js/router.js            hash-based routing (#/, #/topic/:id, #/problem/:id)
  js/reveal.js             the hint/solution warning-gate widget
  js/views.js               renders the home / topic / problem screens
  js/app.js                  wires it together, drives KaTeX rendering
  vendor/katex/              vendored math renderer (css + js + fonts)
```

## Content policy: link, don't rehost

This repo does **not** mirror the original problem-set PDFs. Every problem links out to its source (course page and/or PDF) and credits the instructor and institution by name. That's a deliberate choice, not an oversight: these are other people's — or, in the current pilot, the repo owner's own — copyrighted course materials, and reposting someone else's problem sets without their say-so isn't something this project wants to do. If a source link eventually rots, the course/instructor/term text stored alongside it (see the schema below) still tells you where the problem came from.

## Content status

The current pilot covers **28 problems** from one course — UConn MATH 5020, *The Arithmetic of Elliptic Curves* (Fall 2015), taught by Álvaro Lozano-Robledo — grouped into 5 topics. Every problem has two hints. **No solutions have been written yet** — every `solution.status` is `"unwritten"`, and the Solution button correctly shows a "not written up yet" message once you click through its warning. Adding a solution later is a pure data edit (see below); no code changes are needed.

## Adding or editing content

Everything lives in `assets/js/data.js` as one JS object, `window.EC_DATA`, with three parts:

**`sources`** — one entry per homework/PDF, keyed by a short id (`hw1`, `hw2`, ...):
```js
hw1: {
  course: "MATH 5020 — The Arithmetic of Elliptic Curves",
  instructor: "Álvaro Lozano-Robledo",
  institution: "University of Connecticut",
  term: "Fall 2015",
  pdfUrl: "https://.../MATH-5020-hw1.pdf",
  homeworkLabel: "Homework 1"
}
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
- Use `String.raw\`...\`` (as the existing entries do) for any field containing LaTeX, so you don't have to double every backslash by hand.
- Wrap inline math in single `$...$` and display math in `$$...$$` — KaTeX's auto-render finds these automatically in whatever text you put in `statement`, a hint's `text`, or `solution.text`.
- To add a new problem, just append an object to the `problems` array — the home page's topic counts, the topic listing, and the random-problem pool all update themselves from the array; nothing needs to be kept in sync by hand.
- To retire the "unwritten" placeholder for a solution, set `status: "written"` and fill in `text`; the warning-gate UI is already built and needs no changes.

## Extending beyond this pilot

This is a first pass covering one course. The underlying catalog researched alongside this project spans several more public sources (MIT's 18.783, Stanford's cryptography-focused course, Brown's arithmetic geometry course, an IAS worksheet) — adding any of them is the same mechanical process as above: a new `sources` entry, a `topicId` (new or existing), and problem entries with their own hints.

## Design choices worth knowing about

- **Hash routing**, not path-based — works at any GitHub Pages subpath and from `file://`, with no server-side redirect trickery needed.
- **Re-warns every time.** Confirming a hint or solution isn't remembered across page loads (or even across navigating away and back) — the warning is the point, and a "don't ask again" would erode it after the second problem.
- **Random Problem** shuffles without replacement (tracked in `sessionStorage` for the current tab), so it won't visibly repeat a problem until the whole set has come up once.
- **Accessible palette & type** (top-right toggle, saved in `localStorage`) switches to a color-vision-safe palette and vendored [Atkinson Hyperlegible](assets/vendor/atkinson-hyperlegible/) type. The three semantic colors (link/accent, hint, solution) are drawn from the [Okabe–Ito](https://jfly.uni-koeln.de/color/) palette specifically because it's documented to stay distinguishable under protanopia, deuteranopia, and tritanopia, and text contrast is pushed toward WCAG AAA. KaTeX-rendered math is deliberately left on its own math fonts — only surrounding UI/prose text switches. All of it lives in `styles.css` under `[data-a11y="on"]`; the toggle logic itself is in `assets/js/a11y.js`.

## License

MIT — see [LICENSE](LICENSE).
