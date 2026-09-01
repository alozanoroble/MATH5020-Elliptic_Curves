// EC Problem Explorer — problem data.
// Plain JS global (not fetched JSON) so the app works over file:// with no server
// and with no build step. Edit this file directly to add problems, topics, or
// solution text — no other code needs to change.
//
// Schema:
//   sources[key]   = { course, instructor, institution, term, pdfUrl, homeworkLabel }
//   topics[]       = { id, title, description }
//   problems[]     = { id, topicId, title, statement, sourceKey, pdfLabel,
//                       hints: [{label, text}, ...],
//                       solution: { status: "unwritten" | "written", text } }
//
// `statement`, hint `text`, and `solution.text` are LaTeX-flavored strings
// (KaTeX auto-render finds $...$ and $$...$$ inside them at render time).

window.EC_DATA = (function () {
  var sources = {
    hw1: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw1.pdf",
      homeworkLabel: "Homework 1"
    },
    hw2: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw2.pdf",
      homeworkLabel: "Homework 2"
    },
    hw3: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw3.pdf",
      homeworkLabel: "Homework 3"
    },
    hw4a: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw4a.pdf",
      homeworkLabel: "Homework 4a"
    },
    hw4b: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw4b.pdf",
      homeworkLabel: "Homework 4b"
    },
    hw5: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw5.pdf",
      homeworkLabel: "Homework 5"
    },
    hw6: {
      courseId: "uconn-math5020",
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw6.pdf",
      homeworkLabel: "Homework 6"
    },
    ctntEcc: {
      courseId: "ctnt-2026-ecc",
      course: "CTNT 2026 — Elliptic Curve Cryptography",
      instructor: "Álvaro Lozano-Robledo",
      institution: "Connecticut Summer School in Number Theory (CTNT)",
      term: "Summer 2026",
      pdfUrl: "https://github.com/alozanoroble/CTNT-2026/blob/main/CTNT%202026%20-%20Elliptic%20Curve%20Cryptography/CTNT2026_ECC_Exercises.pdf",
      homeworkLabel: "Suggested Exercises"
    },
    book: {
      courseId: "book-ntg",
      course: "Number Theory and Geometry",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "book manuscript",
      pdfUrl: "https://alozano.clas.uconn.edu/number-theory-and-geometry/",
      homeworkLabel: "Exercises"
    }
  };

  // Courses group sources for the home-page "Sources" section and the
  // Sources filter dropdown — several `sources[key]` entries (e.g. every
  // UConn homework) can share one courseId.
  var courses = [
    {
      id: "uconn-math5020",
      title: "UConn MATH 5020",
      subtitle: "The Arithmetic of Elliptic Curves",
      description: "A graduate course on elliptic curves — from Weierstrass equations through the Mordell–Weil theorem — taught by Álvaro Lozano-Robledo at the University of Connecticut."
    },
    {
      id: "ctnt-2026-ecc",
      title: "CTNT 2026",
      subtitle: "Elliptic Curve Cryptography",
      description: "Suggested exercises from the Elliptic Curve Cryptography track of the Connecticut Summer School in Number Theory (CTNT) 2026."
    },
    {
      id: "book-ntg",
      title: "Number Theory and Geometry",
      subtitle: "book manuscript",
      description: "Exercises from Álvaro Lozano-Robledo's book manuscript “Number Theory and Geometry,” drawn from the Introduction and the chapters on cubic equations and elliptic curves."
    }
  ];

  var topics = [
    {
      id: "warmups",
      title: "Number-Theoretic Warm-ups",
      description: "Elementary number theory problems that build the tools and instincts elliptic curves will later formalize — including one classic problem that secretly *is* an elliptic curve in disguise."
    },
    {
      id: "curves-group-law",
      title: "Curves & the Group Law",
      description: "Algebraic-geometry foundations: smoothness, morphisms between curves, and constructing the elliptic curve group law itself from first principles."
    },
    {
      id: "finite-fields",
      title: "Finite Fields & Reduction",
      description: "Elliptic curves over finite fields, singular Weierstrass equations, and what reduction modulo a prime looks like."
    },
    {
      id: "torsion-galois",
      title: "Torsion Points & Galois Representations",
      description: "Torsion subgroups, their fields of definition, and the Galois representations that act on them."
    },
    {
      id: "mordell-weil",
      title: "Mordell–Weil, Heights & Descent",
      description: "The Mordell–Weil theorem, height pairings, and the descent techniques used to actually compute the rank of $E(\\mathbb{Q})$."
    },
    {
      id: "ecc",
      title: "Elliptic Curve Cryptography",
      description: "The same group law, turned into a one-way-ish operation: Diffie–Hellman, ElGamal encryption and signatures, and Lenstra's elliptic-curve factorization algorithm."
    }
  ];

  function unwritten() {
    return { status: "unwritten", text: "" };
  }

  var problems = [
    // ---------------------------------------------------------------
    // Topic: Number-Theoretic Warm-ups (hw1, preliminary exercises 1-7)
    // ---------------------------------------------------------------
    {
      id: "warmups-1",
      topicId: "warmups",
      title: "The Rational Root Theorem",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 1",
      statement: String.raw`Let $f(x) = a_n x^n + \cdots + a_2 x^2 + a_1 x + a_0$ be a polynomial with integer coefficients, and $a_n \neq 0$. Suppose that a rational number $x_0 = \tfrac{s}{t}$, with $s, t \in \mathbb{Z}$ and $t \neq 0$, is a root of $f$, that is, $f(x_0) = 0$. Show that $s$ divides $a_0$, and $t$ divides $a_n$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Assume $\gcd(s,t)=1$ and clear denominators: multiply $f(x_0)=0$ by $t^n$ to get an equation entirely in integers relating $s$, $t$, and the coefficients $a_i$.` },
        { label: "Hint 2", text: String.raw`Isolate the $a_0 t^n$ term and read the resulting identity modulo $s$; isolate the $a_n s^n$ term and read it modulo $t$. Use $\gcd(s,t)=1$ to conclude divisibility in each case.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-2",
      topicId: "warmups",
      title: "Integer Points on a Line",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 2",
      statement: String.raw`Let $a, b, c$ be non-zero integers. Show that the line $L : ax + by = c$ has integral points if and only if $\gcd(a,b)$ is a divisor of $c$.`,
      hints: [
        { label: "Hint 1", text: String.raw`One direction is immediate: if $(x_0,y_0)\in\mathbb{Z}^2$ satisfies $ax_0+by_0=c$, what can you say about $\gcd(a,b)$ dividing the left-hand side?` },
        { label: "Hint 2", text: String.raw`For the converse, start from B\'ezout's identity $au+bv=\gcd(a,b)$ and scale by the integer $c/\gcd(a,b)$.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-3",
      topicId: "warmups",
      title: "The Hundred Fowls Problem",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 3",
      statement: String.raw`(The Hundred Fowls Problem.) One rooster is worth 5 qian, one hen 3 qian, and 3 chicks are worth 1 qian. If we bought 100 fowls with 100 qian, how many roosters, hens, and chicks did we buy?`,
      hints: [
        { label: "Hint 1", text: String.raw`Let $r,h,c$ be the numbers of roosters, hens, and chicks. Write down the two linear equations (total birds, total cost) — you have three unknowns and only two equations, so expect a one-parameter family before you impose positivity and divisibility.` },
        { label: "Hint 2", text: String.raw`Eliminate one variable to get a single linear Diophantine equation in the other two, solve it the way you did in the previous problem, then throw out any solution where a count is negative or $c$ isn't a multiple of $3$.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-4",
      topicId: "warmups",
      title: "Rational Points on a Conic",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 4",
      statement: String.raw`Find all the rational points on the conic $x^2 - 3xy + y^2 = 5$, given as a 1-parameter family.`,
      hints: [
        { label: "Hint 1", text: String.raw`First find one easy rational (even integer) point on the conic by inspection. Then intersect the conic with the line of slope $t\in\mathbb{Q}$ through that point.` },
        { label: "Hint 2", text: String.raw`Substituting the line into the conic's equation gives a quadratic in one coordinate with one root you already know (the base point) — use Vi\`ete's formulas (sum/product of roots) to read off the second root as a rational function of $t$ without fully expanding anything.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-5",
      topicId: "warmups",
      title: "Square-Triangular Numbers",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 5",
      statement: String.raw`A natural number $n$ is said to be a triangular number if $n$ objects (dots) can be arranged in an equilateral triangle configuration (such as $1, 3, 6,$ etc). Similarly, a number $n$ is a square number if $n$ objects can be arranged as a square (e.g., $1, 4, 9,$ etc.). Find the first 5 square-triangular numbers, that is, the first five numbers that are both triangular and square numbers. Can you find a way to characterize all the square-triangular numbers?`,
      hints: [
        { label: "Hint 1", text: String.raw`A triangular number has the form $\tfrac{k(k+1)}{2}$. Set $\tfrac{k(k+1)}{2}=m^2$ and try to massage this into an equation with a square on one side and a difference of squares (or similar) on the other.` },
        { label: "Hint 2", text: String.raw`Multiplying by $8$ and completing the square in $k$ turns the equation into $(2k+1)^2 - 2(2m)^2 = 1$, a Pell equation $x^2-2y^2=1$. Pell equations of this type have solutions generated recursively from a fundamental one — find the smallest nontrivial $(x,y)$ and figure out the recursion.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-6",
      topicId: "warmups",
      title: "Three Consecutive Integers with Square Product",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 6",
      statement: String.raw`(This problem involves elliptic curves, so you may want to come back to it later, after we learn some theory... or find an elementary solution!) Find all sets of three consecutive integers such that their product is a square.`,
      hints: [
        { label: "Hint 1", text: String.raw`Work out the trivial examples first ($n=-1,0,1,2,\dots$ near the origin) — they all involve a factor of $0$. That should make you suspect the only solutions are degenerate ones, which you'll need to *prove*, not just observe.` },
        { label: "Hint 2", text: String.raw`Setting $y^2=n(n+1)(n+2)$ and substituting $x=n+1$ turns the right-hand side into a monic cubic in $x$ with no quadratic term — a short Weierstrass equation. Once you recognize it as an elliptic curve, the problem becomes "find all the integer (or rational) points," which is exactly the kind of question this course gives you tools for — revisit this one once torsion points come up.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-7",
      topicId: "warmups",
      title: "A p-adic Solvability Problem",
      sourceKey: "hw1",
      pdfLabel: "Preliminary Exercise 7",
      statement: String.raw`(This problem requires a familiarity with the $p$-adics.) Let $p$ be a prime such that $p \equiv 2 \pmod 3$. Show that $3x^3 + 4y^3 + 5z^3 = 0$ has a non-trivial solution over $\mathbb{Q}_p$.`,
      hints: [
        { label: "Hint 1", text: String.raw`When $p\equiv 2\pmod 3$, $\gcd(3,p-1)=1$, so cubing is a bijection on $\mathbb{F}_p$ (every element is a cube, uniquely). Use this to hunt for a nontrivial solution mod $p$ first.` },
        { label: "Hint 2", text: String.raw`Once you have a mod-$p$ solution $(x_0,y_0,z_0)$ with not all of $x_0,y_0,z_0$ zero, check that the partial derivatives of $F=3x^3+4y^3+5z^3$ don't all vanish there (they won't, if one of $x_0,y_0,z_0$ is a unit) — that's exactly the hypothesis Hensel's lemma needs to lift the solution to $\mathbb{Z}_p$.` }
      ],
      solution: unwritten()
    },

    // ---------------------------------------------------------------
    // Topic: Curves & the Group Law (hw1 Silverman refs + hw2 3.4)
    // ---------------------------------------------------------------
    {
      id: "curves-group-law-1",
      topicId: "curves-group-law",
      title: "Smooth Points and Tangent Spaces",
      sourceKey: "hw1",
      pdfLabel: "Silverman Exercise 1.3",
      statement: String.raw`Let $V \subset \mathbb{A}^n$ be a variety given by a single equation. Prove that a point $P \in V$ is nonsingular if and only if $\dim_{\overline{K}} \mathfrak{m}_P/\mathfrak{m}_P^2 = \dim V$, where $\mathfrak{m}_P$ is the maximal ideal of $P$ in the affine ring of $V$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Unwind the definitions: $\mathfrak{m}_P/\mathfrak{m}_P^2$ is (dual to) the Zariski tangent space at $P$, and for a hypersurface $\dim V = n-1$ always. So the real question is when the tangent space has dimension exactly $n-1$ rather than something bigger.` },
        { label: "Hint 2", text: String.raw`Compute $\mathfrak{m}_P/\mathfrak{m}_P^2$ directly from the defining polynomial $f$: linearize $f$ at $P$ and show the classical "gradient of $f$ doesn't vanish at $P$" nonsingularity condition is exactly the statement that this quotient has the smallest possible dimension.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-2",
      topicId: "curves-group-law",
      title: "A Morphism to the Plane",
      sourceKey: "hw1",
      pdfLabel: "Silverman Exercise 1.6",
      statement: String.raw`Let $V$ be the variety $V: Y^2 Z = X^3 + Z^3$. Show that the map $\varphi: V \to \mathbb{P}^2$ defined by $\varphi([X,Y,Z]) = [X^2, XY, Z^2]$ is a morphism.`,
      hints: [
        { label: "Hint 1", text: String.raw`A map given by polynomials is a morphism at a point as long as *some* choice of representative formulas for it doesn't have all coordinates vanishing there — you're allowed to use different formulas (related by the defining equation of $V$) at different points.` },
        { label: "Hint 2", text: String.raw`Check the one troublesome point $[0:1:0]$, where $X=Z=0$ makes the given formula vanish identically. Use $Y^2Z=X^3+Z^3$ to rewrite $\varphi$ in terms of $X,Y$ only (dividing out a common factor), producing a second formula that's regular exactly where the first one fails.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-3",
      topicId: "curves-group-law",
      title: "Riemann–Roch and Hurwitz on ℙ¹",
      sourceKey: "hw1",
      pdfLabel: "Silverman Exercise 2.3",
      statement: String.raw`(a) Prove Proposition 2.6 for the special case of a non-constant map $\varphi: \mathbb{P}^1 \to \mathbb{P}^1$.

(b) Prove the Riemann–Roch theorem for $\mathbb{P}^1$.

(c) Prove Hurwitz' theorem (a.k.a. the Riemann–Hurwitz formula) for $\varphi: \mathbb{P}^1 \to \mathbb{P}^1$.`,
      hints: [
        { label: "Hint 1", text: String.raw`A non-constant $\varphi:\mathbb{P}^1\to\mathbb{P}^1$ of degree $d$ is a ratio of two coprime degree-$d$ polynomials. For (a), directly count preimages of a point with multiplicity and compare to what Proposition 2.6 claims in general.` },
        { label: "Hint 2", text: String.raw`Everything on $\mathbb{P}^1$ is explicit: the canonical divisor class has degree $-2$, and $L(D)$ for $D=n(P_0)$ is spanned by polynomials of degree $\le n$ in the affine coordinate — use that to nail down (b) directly. For (c), ramification indices at a point are read off from the order of vanishing of $\varphi'(t)$ there (with a coordinate change needed to check the behavior at $\infty$).` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-4",
      topicId: "curves-group-law",
      title: "Building the Group Law from ᴾᴵᶜ⁰",
      sourceKey: "hw1",
      pdfLabel: "Silverman Exercise 2.6",
      statement: String.raw`Let $C$ be a curve of genus 1. Fix a basepoint $\mathcal{O} \in C$.

(a) For all $P, Q \in C$, there exists a unique $R \in C$ such that $(P)+(Q) \sim (R)+(\mathcal{O})$. Denote this $R$ by $\sigma(P,Q)$.

(b) The map $\sigma: C \times C \to C$ makes $C$ into an abelian group with identity $\mathcal{O}$.

(c) Define a map $\kappa: C \to \mathrm{Pic}^0(C)$ by sending $P$ to the divisor class of $(P)-(\mathcal{O})$. Then $\kappa$ is a bijection of sets, and hence $\kappa$ can be used to make $C$ into a group by $P+Q = \kappa^{-1}(\kappa(P)+\kappa(Q))$.

(d) The group operations defined in (b) and (c) are the same.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), apply Riemann–Roch on a genus-1 curve to the degree-1 divisor $(P)+(Q)-(\mathcal{O})$: it tells you exactly how many effective divisors are linearly equivalent to it, and that count is what gives both existence and uniqueness of $R$.` },
        { label: "Hint 2", text: String.raw`Don't reprove the group axioms for $\sigma$ from scratch in (b) — $\mathrm{Pic}^0(C)$ is already an abelian group under addition of divisor classes, so it's more efficient to establish (c) and (d) first (show $\kappa$ is a well-defined bijection, then track what $\sigma(P,Q)$ and $\kappa^{-1}(\kappa(P)+\kappa(Q))$ each do to a pair of points and show they agree), and get the group axioms for $\sigma$ for free by transport of structure along $\kappa$.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-5",
      topicId: "curves-group-law",
      title: "Point Arithmetic by Hand",
      sourceKey: "hw2",
      pdfLabel: "§3.4",
      statement: String.raw`Referring to example (2.4), express each of the points $P_2, P_4, P_5, P_6, P_7, P_8$ in the form $[m]P_1 + [n]P_3$ with $m,n \in \mathbb{Z}$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Start by tabulating small multiples $[n]P_1$ and $[n]P_3$ for $n=0,\pm1,\pm2,\dots$ using the explicit addition/doubling formulas (or Sage/Magma) — you're building a small lookup table before you try to match anything.` },
        { label: "Hint 2", text: String.raw`For each target point $P_i$, try subtracting a small multiple $[m]P_1$ from it and check whether the result appears anywhere in your $[n]P_3$ table; iterate over small $m$ until you get a hit.` }
      ],
      solution: unwritten()
    },

    // ---------------------------------------------------------------
    // Topic: Finite Fields & Reduction
    // ---------------------------------------------------------------
    {
      id: "finite-fields-1",
      topicId: "finite-fields",
      title: "The Nonsingular Locus of a Node or Cusp",
      sourceKey: "hw2",
      pdfLabel: "§3.5",
      statement: String.raw`Let $E/K$ be given by a singular Weierstrass equation.

(a) Suppose that $E$ has a node, and let the tangent lines at the node be $y=\alpha_i x + \beta_i$, $i=1,2$.

(i) If $\alpha_1 \in K$, prove that $\alpha_2 \in K$ and $E_{ns}(K) \cong K^*$.

(ii) If $\alpha_1 \notin K$, prove that $L=K(\alpha_1,\alpha_2)$ is a quadratic extension of $K$. From (i), $E_{ns}(K) \subset E_{ns}(L) \cong L^*$. Show that $E_{ns}(K) \cong \{t \in L^* : N_{L/K}(t) = 1\}$.

(b) Suppose that $E$ has a cusp. Prove that $E_{ns}(K) \cong K^+$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Move the singular point to the origin and look at the lowest-degree (quadratic, for a node; a perfect square, for a cusp) terms of the dehomogenized equation — these factor as the two tangent directions, which is where $\alpha_1,\alpha_2$ come from.` },
        { label: "Hint 2", text: String.raw`Parametrize nonsingular points by the slope $t=y/x$ (coordinates shifted so the singularity is at the origin) and substitute back into the curve equation to solve for $x,y$ in terms of $t$. For the node, relate $t$ to $\alpha_1,\alpha_2$ to see why rationality of one $\alpha_i$ forces $E_{ns}(K)\cong K^*$, and why an irrational pair instead picks out the norm-$1$ elements of $L^*$; for the cusp, show the analogous parametrization is additive in $t$.` }
      ],
      solution: unwritten()
    },
    {
      id: "finite-fields-2",
      topicId: "finite-fields",
      title: "Points over 𝔽₇ and the Hasse Bound",
      sourceKey: "hw4a",
      pdfLabel: "Problem 1",
      statement: String.raw`Let $E/\mathbb{Q}: y^2 = x^3+3$. Find all the points of $\widetilde{E}(\mathbb{F}_7)$ and verify that $N_7$ satisfies Hasse's bound.`,
      hints: [
        { label: "Hint 1", text: String.raw`Just enumerate: for each $x\in\mathbb{F}_7$, compute $x^3+3 \bmod 7$ and check whether it's $0$, a nonzero square, or a nonsquare in $\mathbb{F}_7$ — that tells you how many $y$'s pair with that $x$ (0, 2, or 1 respectively). Don't forget the point at infinity.` },
        { label: "Hint 2", text: String.raw`Once you have $N_7=\#\widetilde{E}(\mathbb{F}_7)$, Hasse's bound says $|N_7-(7+1)|\le 2\sqrt{7}$ — just plug in and check the numeric inequality.` }
      ],
      solution: unwritten()
    },
    {
      id: "finite-fields-3",
      topicId: "finite-fields",
      title: "Uniqueness of the Singular Point",
      sourceKey: "hw4a",
      pdfLabel: "Problem 2",
      statement: String.raw`Let $E/\mathbb{Q}: y^2=x^3+Ax+B$ and let $p \geq 3$ be a prime of bad reduction for $E/\mathbb{Q}$. Show that $E(\mathbb{F}_p)$ has a unique singular point.`,
      hints: [
        { label: "Hint 1", text: String.raw`A singular point must satisfy the curve equation *and* have both partial derivatives vanish: $2y=0$ and $3x^2+A=0$ (working mod $p$). Since $p\ge 3$, $2y=0$ forces $y=0$, so start there.` },
        { label: "Hint 2", text: String.raw`With $y=0$, singularity means $x$ is simultaneously a root of $f(x)=x^3+Ax+B$ and of $f'(x)$ — i.e. a repeated root of the cubic $f$. Show a cubic can have at most one such doubly-repeated root mod $p$, and that "bad reduction" (discriminant $\equiv 0$) is precisely the condition guaranteeing one exists.` }
      ],
      solution: unwritten()
    },

    // ---------------------------------------------------------------
    // Topic: Torsion Points & Galois Representations
    // ---------------------------------------------------------------
    {
      id: "torsion-galois-1",
      topicId: "torsion-galois",
      title: "Torsion via the Complex Uniformization",
      sourceKey: "hw2",
      pdfLabel: "§3.8",
      statement: String.raw`(a) Let $E/\mathbb{C}$ be an elliptic curve. There is a lattice $L \subset \mathbb{C}$ and a complex analytic isomorphism of groups $\mathbb{C}/L \cong E(\mathbb{C})$. Then $\deg[m] = m^2$ and $E[m] = \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/m\mathbb{Z}$.

(b) Let $E/K$ be an elliptic curve with $\mathrm{char}(K)=0$. Then $\deg[m]=m^2$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Under $\mathbb{C}/L\cong E(\mathbb{C})$, multiplication-by-$m$ on $E$ corresponds to multiplication-by-$m$ on $\mathbb{C}/L$. So $E[m]$ corresponds to $\{z\in\mathbb{C}/L : mz=0\} = \tfrac{1}{m}L / L$.` },
        { label: "Hint 2", text: String.raw`$L\cong\mathbb{Z}^2$ as an abstract group, so $\tfrac1m L/L \cong (\mathbb{Z}/m\mathbb{Z})^2$ — that gives both the group structure of $E[m]$ and, since $\deg[m]=\#E[m]$ for a separable isogeny, the degree formula. For (b), reduce to the complex case via a field embedding $K\hookrightarrow\mathbb{C}$ (using $\mathrm{char}(K)=0$), noting that degree of an isogeny doesn't change under base extension.` }
      ],
      solution: unwritten()
    },
    {
      id: "torsion-galois-2",
      topicId: "torsion-galois",
      title: "The Mod-2 Galois Representation",
      sourceKey: "hw2",
      pdfLabel: "Problem 1",
      statement: String.raw`Let $E/\mathbb{Q}$ be an elliptic curve given by a Weierstrass equation of the form $y^2=f(x)$, where $f(x)\in\mathbb{Z}[x]$ is a monic cubic polynomial with distinct roots (over $\overline{\mathbb{Q}}$).

(a) Show that $P=(x,y)\in E(\overline{\mathbb{Q}})$ is a torsion point of exact order $2$ if and only if $y=0$ and $f(x)=0$.

(b) Let $\mathbb{Q}(E[2]) = \mathbb{Q}(\{x,y : P=(x,y)\in E[2]\})$. Show that $\mathrm{Gal}(\mathbb{Q}(E[2])/\mathbb{Q})$ is isomorphic to a subgroup of $\mathrm{GL}(2,\mathbb{F}_2)$, unique up to conjugation.

(c) Prove that $S_3\cong\mathrm{GL}(2,\mathbb{F}_2)$. List all subgroups of $\mathrm{GL}(2,\mathbb{F}_2)$.

(d) For every subgroup $G\le \mathrm{GL}(2,\mathbb{F}_2)$, either find an elliptic curve $E/\mathbb{Q}$ and an isomorphism $\mathrm{Gal}(\mathbb{Q}(E[2])/\mathbb{Q})\cong G$, or prove that no such curve exists. For example, $y^2=x^3-x$ affords $G=\{\mathrm{Id}\}$.

(e) The elliptic curve $y^2=x^3+2x^2-3x$ satisfies $E(\mathbb{Q})[4]=\mathbb{Z}/4\mathbb{Z}\oplus\mathbb{Z}/2\mathbb{Z}$. Describe the possible isomorphism types of $\mathrm{Gal}(\mathbb{Q}(E[4])/\mathbb{Q})$ as a subgroup of $\mathrm{GL}(2,\mathbb{Z}/4\mathbb{Z})$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a)–(b): $2$-torsion points other than $\mathcal{O}$ are exactly the points where $y=0$, i.e. the three roots of $f(x)$. Galois permutes these three roots, which is exactly what identifies $\mathrm{Gal}(\mathbb{Q}(E[2])/\mathbb{Q})$ with a subgroup of permutations of a $3$-element set — keep that picture in mind before chasing the $\mathrm{GL}(2,\mathbb{F}_2)$ formalism.` },
        { label: "Hint 2", text: String.raw`For (c)–(d): show $|\mathrm{GL}(2,\mathbb{F}_2)|=6$ and that it acts faithfully and transitively on the $3$ nonzero vectors of $\mathbb{F}_2^2$ — that forces the isomorphism with $S_3$. Then realize each subgroup by choosing $f(x)$ to have $0$, $1$, or $3$ rational roots (controlling the Galois group of the cubic's splitting field, i.e. of $E[2]$'s field of definition).` }
      ],
      solution: unwritten()
    },
    {
      id: "torsion-galois-3",
      topicId: "torsion-galois",
      title: "Pinning Down ℚ(E[4])",
      sourceKey: "hw3",
      pdfLabel: "Problem 1",
      statement: String.raw`The elliptic curve $y^2=x^3+2x^2-3x$ satisfies $E(\mathbb{Q})[4]=\mathbb{Z}/4\mathbb{Z}\oplus\mathbb{Z}/2\mathbb{Z}$, i.e., the full $2$-torsion is defined over $\mathbb{Q}$ and there is also a point of order $4$ defined over $\mathbb{Q}$. The goal of this exercise is to uniquely determine $\mathbb{Q}(E[4])$ and $\mathrm{Gal}(\mathbb{Q}(E[4])/\mathbb{Q})$:

(1) Find generators $P=(x_1,y_1)$ of exact order $4$ and $Q=(x_2,y_2)$ of exact order $2$, with $x_i,y_i\in\mathbb{Q}$, such that $2P\ne Q$.

(2) Find $2P$ using the explicit Weierstrass formulas by hand.

(3) Find $R=(x_3,y_3)\in E(\overline{\mathbb{Q}})$ such that $2R=Q$.

(4) Show that $\mathbb{Q}(E[4])=\mathbb{Q}(x_3,y_3)$ and determine this field; use this to calculate the group structure of $\mathrm{Gal}(\mathbb{Q}(E[4])/\mathbb{Q})$.

(5) Identify $\mathrm{Gal}(\mathbb{Q}(E[4])/\mathbb{Q})$ with a subgroup of $\mathrm{GL}(2,\mathbb{Z}/4\mathbb{Z})$, with $\mathbb{Z}/4\mathbb{Z}$-basis $\{P,R\}$.

(6) Find the Galois orbit of $R$, writing each image as a linear combination of $P$ and $R$.

(7) Can you find the coordinates of a point on $E(\overline{\mathbb{Q}})$ of order $8$?`,
      hints: [
        { label: "Hint 1", text: String.raw`Steps 1–3 are pure computation — do them first, in order, and get explicit rational/algebraic coordinates before touching any Galois theory. Use a CAS for step 1, then the doubling and halving formulas by hand for steps 2–3 as instructed.` },
        { label: "Hint 2", text: String.raw`Once $R=(x_3,y_3)$ is explicit, $\mathbb{Q}(E[4])=\mathbb{Q}(x_3,y_3)$ is generated over $\mathbb{Q}(x_3)$ by a square root $y_3$. First pin down $[\mathbb{Q}(x_3):\mathbb{Q}]$ (via $x_3$'s minimal polynomial), then decide whether adjoining $y_3$ actually enlarges the field. For step 5, figure out how each Galois automorphism must act on the basis $\{P,R\}$ (it fixes $P$ up to sign since $2$-torsion is rational, and permutes the square roots controlling $R$) and translate that action into a $2\times2$ matrix.` }
      ],
      solution: unwritten()
    },
    {
      id: "torsion-galois-4",
      topicId: "torsion-galois",
      title: "Constructing a Point of Order 4",
      sourceKey: "hw4a",
      pdfLabel: "Problem 3",
      statement: String.raw`Let $E: y^2=(x-e_1)(x-e_2)(x-e_3)$ with $e_i\in\mathbb{Q}$, distinct, and such that $e_1+e_2+e_3=0$. Suppose $e_1-e_2=n^2$ and $e_1-e_3=m^2$ are squares. This exercise shows there is a point $P=(x_0,y_0)$ such that $2P=(e_1,0)$, i.e. $P$ has exact order $4$.

(a) Show that $e_1=\tfrac{n^2+m^2}{3}$, $e_2=\tfrac{m^2-2n^2}{3}$, $e_3=\tfrac{n^2-2m^2}{3}$.

(b) Find $A,B$ in terms of $n,m$ such that $x^3+Ax+B=(x-e_1)(x-e_2)(x-e_3)$.

(c) Let $p(x)=x^4-2Ax^2-8Bx+A^2-4(x^3+Ax+B)e_1$. Show $p(x_0)=0$ iff $x(2P)=e_1$, hence $2P=(e_1,0)$.

(d) Express the coefficients of $p(x)$ in terms of $n,m$.

(e) Factor $p(x)$ for $(n,m)=(3,6), (3,12), (9,12), \dots$.

(f) Guess that $p(x)=(x-a)^2(x-b)^2$ for some $a,b$; express the coefficients of $p(x)$ in terms of $a,b$.

(g) Compare coefficients (starting with $x^3$, then $x^2$) to find the roots of $p(x)$ in terms of $n,m$.

(h) Write $P=(x_0,y_0)$ in terms of $n,m$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Parts (a)–(b) are direct algebra: three linear equations ($e_1+e_2+e_3=0$, $e_1-e_2=n^2$, $e_1-e_3=m^2$) in three unknowns $e_1,e_2,e_3$ — solve them, then expand $(x-e_1)(x-e_2)(x-e_3)$ and match to $x^3+Ax+B$ (the $x^2$ coefficient should already vanish, consistent with $e_1+e_2+e_3=0$).` },
        { label: "Hint 2", text: String.raw`$p(x)$ in (c) comes directly from setting the duplication formula for the $x$-coordinate of $2P$ equal to $e_1$ and clearing denominators — recognize $\tfrac{(x^2-A)^2-8Bx}{4(x^3+Ax+B)}$ as that formula. For (e)–(g), actually compute $p(x)$ symbolically in $n,m$ (part (d)) and factor it for the given numeric pairs *before* guessing the general double-root pattern — the pattern won't be obvious from the algebra alone.` }
      ],
      solution: unwritten()
    },
    {
      id: "torsion-galois-5",
      topicId: "torsion-galois",
      title: "The Field of Definition of the Order-4 Point",
      sourceKey: "hw4b",
      pdfLabel: "Problem 1",
      statement: String.raw`As you know, the elliptic curve $y^2=x^3+2x^2-3x$ satisfies $E(\mathbb{Q})[4]=\mathbb{Z}/4\mathbb{Z}\oplus\mathbb{Z}/2\mathbb{Z}$, with $\mathbb{Q}(E[4])=\mathbb{Q}(i,\sqrt3)$ and $\mathrm{Gal}(\mathbb{Q}(E[4])/\mathbb{Q})\cong\mathbb{Z}/2\mathbb{Z}\times\mathbb{Z}/2\mathbb{Z}$. You may assume $E(\mathbb{Q})\cong\mathbb{Z}/4\mathbb{Z}\oplus\mathbb{Z}/2\mathbb{Z}$ (no points of infinite order over $\mathbb{Q}$).

(a) Let $L=\mathbb{Q}([2]^{-1}E(\mathbb{Q}))$. Show $\mathbb{Q}(E[4])\subseteq L$ and that there is a point $T$ of order $8$ defined over $L$; in fact $L=\mathbb{Q}(E[4],T)$.

(b) Show $\mathbb{Q}(E[4])/\mathbb{Q}$ is Galois with group $\cong\mathbb{Z}/2\mathbb{Z}\times\mathbb{Z}/2\mathbb{Z}$, unramified outside $2,3,\infty$.

(c) Let $T=(\alpha,\beta)$, $F=\mathbb{Q}(T)=\mathbb{Q}(\alpha,\beta)$. Then $\alpha$ is a root of a quartic polynomial (see Hw3 part 7) and $\beta^2=\alpha^3+2\alpha^2-3\alpha$. Show $\mathbb{Q}(\alpha)=\mathbb{Q}(\alpha,\beta)$; conclude $F/\mathbb{Q}$ is Galois with group $\cong\mathbb{Z}/2\mathbb{Z}\times\mathbb{Z}/2\mathbb{Z}$, ramified only at $2,3$.

(d) Let $K=\mathbb{Q}(E[2])=\mathbb{Q}$ and $L=\mathbb{Q}([2]^{-1}E(\mathbb{Q}))$ as before. Show directly (without the Weak Mordell–Weil theorem or Kummer pairing) that $L/K$ is a finite abelian extension of exponent $2$, unramified outside $S=\{\text{primes of bad reduction}\}\cup\{2\}\cup\{\infty\}$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Because $E(\mathbb{Q})$ here is entirely the explicit finite group $\mathbb{Z}/4\mathbb{Z}\oplus\mathbb{Z}/2\mathbb{Z}$, "$[2]^{-1}E(\mathbb{Q})$" is a concrete, finite, computable set: for each of the $8$ rational torsion points, find every $T$ (possibly over an extension) with $2T$ equal to that point. Part (a) is then just identifying which of those halves has order exactly $8$.` },
        { label: "Hint 2", text: String.raw`For (c), $\alpha$ satisfies the quartic from Hw3's order-$8$ point; instead of adjoining a fresh square root for $\beta$, check whether $\beta^2=\alpha^3+2\alpha^2-3\alpha$ is already a square *inside* $\mathbb{Q}(\alpha)$ (e.g. by factoring the right-hand side over $\mathbb{Q}(\alpha)$ using what you know about $\alpha$'s minimal polynomial). For (d), mimic the finite check you just did in (a)–(c) but stated abstractly: track which primes could possibly ramify when you adjoin square roots needed to halve each torsion point, and show they're confined to $S$.` }
      ],
      solution: unwritten()
    },

    // ---------------------------------------------------------------
    // Topic: Mordell-Weil, Heights & Descent
    // ---------------------------------------------------------------
    {
      id: "mordell-weil-1",
      topicId: "mordell-weil",
      title: "The Structure of G/2G",
      sourceKey: "hw4a",
      pdfLabel: "Problem 4",
      statement: String.raw`In this exercise we study the structure of the quotient $G/2G$, where $G$ is a finite abelian group.

(a) Let $p\ge2$ be prime and $G=\mathbb{Z}/p^e\mathbb{Z}$, $e\ge1$. Prove $G/2G$ is trivial iff $p>2$.

(b) Prove that if $G=\mathbb{Z}/2^e\mathbb{Z}$, $e\ge1$, then $G/2G\cong\mathbb{Z}/2\mathbb{Z}$.

(c) Let $G$ be an arbitrary finite abelian group and $G[2^\infty]=\{g\in G: 2^n\cdot g=0 \text{ for some } n\ge1\}$ its $2$-primary component. Prove $G[2^\infty]\cong \mathbb{Z}/2^{e_1}\mathbb{Z}\oplus\cdots\oplus\mathbb{Z}/2^{e_r}\mathbb{Z}$ for some $r\ge0,e_i\ge1$, and show $G/2G\cong(\mathbb{Z}/2\mathbb{Z})^r$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a)–(b): $2G$ is the image of the multiplication-by-$2$ map on $G$. When $p$ is odd, $2$ is a unit mod $p^e$, so multiplication by $2$ is a bijection on $G$ — what does that make $2G$? When $p=2$, work out the image of $x\mapsto 2x$ on $\mathbb{Z}/2^e\mathbb{Z}$ directly.` },
        { label: "Hint 2", text: String.raw`For (c): use the classification of finite abelian groups to decompose $G[2^\infty]$ into cyclic $2$-power pieces (that's the content you're asked to prove, so really you're identifying $G[2^\infty]$ as a direct summand of $G$'s own cyclic decomposition). Then apply part (b) to each cyclic piece separately — quotienting by $2$ commutes with direct sums, and any odd-order part of $G$ contributes nothing to $G[2^\infty]$ or to $(G/2G)$'s "power of $2$" part.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-2",
      topicId: "mordell-weil",
      title: "Weak Mordell–Weil by Hand",
      sourceKey: "hw4b",
      pdfLabel: "Problem 2",
      statement: String.raw`Let $E: y^2=x^3+3$. We have seen $E(\mathbb{Q})_{\mathrm{tors}}=\{\mathcal{O}\}$, so $P=(1,2)\in E(\mathbb{Q})$ has infinite order.

(a) Let $\Theta=\{[n]P : n\in\mathbb{Z}\}$. Show $\mathbb{Q}([2]^{-1}\Theta)=\mathbb{Q}([2]^{-1}\{P,\mathcal{O}\})$ and hence that this field is a finite extension of $\mathbb{Q}$.

(b) Let $K=\mathbb{Q}(E[2])$. Show $K/\mathbb{Q}$ is Galois with $\mathrm{Gal}(K/\mathbb{Q})\cong S_3$.

(c) Let $T=(\gamma,\delta)\in E(\overline{\mathbb{Q}})$ with $2T=P$. Show $\mathbb{Q}(T)=\mathbb{Q}(\gamma,\delta)=\mathbb{Q}(\gamma)$.

(d) Let $F=\mathbb{Q}(T)$. Show $F/\mathbb{Q}$ is not Galois, and its Galois closure $L$ has $\mathrm{Gal}(L/\mathbb{Q})\cong S_4$, with $K\subseteq L$; in fact $L=K([2]^{-1}\Theta)=\mathbb{Q}(E[2],T)$.

(e) Show there is a unique normal subgroup $H\trianglelefteq S_4$ with $|H|=4$ and $S_4/H\cong S_3$; show $L^H=K$, so $L/K$ is Galois with $\mathrm{Gal}(L/K)\cong H$, a finite abelian extension of exponent $2$.

(f) Show $K([2]^{-1}\Theta)/K$ is unramified outside the primes of bad reduction of $E/\mathbb{Q}$, $2$, and $\infty$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Since $E(\mathbb{Q})_{\mathrm{tors}}$ is trivial here, "halving $\Theta$" only ever means finding preimages of $[n]P$ for $n$ even or odd — but $[2]^{-1}\Theta = \{Q : 2Q \in \Theta\}$, and every such $Q$ satisfies $2Q=[n]P$ for some $n$, i.e. $2(Q-\lceil n/2\rceil P)$ is $P$ or $\mathcal{O}$. That's exactly why (a) reduces the whole (a priori infinite) set $\Theta$ down to halving just two points.` },
        { label: "Hint 2", text: String.raw`For (b): $K=\mathbb{Q}(E[2])$ is the splitting field of the cubic $x^3+0\cdot x+3$ (i.e. $x^3+3$) — show this cubic is irreducible with Galois group $S_3$ directly (e.g. via its discriminant not being a square in $\mathbb{Q}$). For (c)–(e): work with explicit coordinates for $T$ via a CAS, identify the quartic $\alpha$ (here $\gamma$) satisfies, and use degree-counting ($[F:\mathbb{Q}]=4$, $[L:\mathbb{Q}]=24$) together with the subgroup lattice of $S_4$ to match everything up — don't try to verify the isomorphisms by hand without computational support.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-3",
      topicId: "mordell-weil",
      title: "A Quantitative Weak Mordell–Weil Bound",
      sourceKey: "hw5",
      pdfLabel: "Problem 1 (Silverman VIII.8.1–8.2)",
      statement: String.raw`(a) Let $K$ be a number field, $E/K$ an elliptic curve, $m\ge2$ an integer, $\mathrm{Cl}(K)$ the ideal class group of $K$, and $S=\{\nu\in M_K^0 : E \text{ has bad reduction at } \nu\}\cup\{\nu\in M_K^0 : \nu(m)\ne0\}\cup M_K^\infty$. Assuming $E[m]\subset E(K)$, prove the quantitative weak Mordell–Weil theorem:

$$\mathrm{rank}_{\mathbb{Z}/m\mathbb{Z}}(E(K)/mE(K)) \le 2\#S + 2\,\mathrm{rank}_{\mathbb{Z}/m\mathbb{Z}}(\mathrm{Cl}(K)[m]).$$

(b) For each integer $d\ge1$, let $E_d/\mathbb{Q}: y^2=x^3-d^2x$. Prove $E_d(\mathbb{Q})\cong T\times\mathbb{Z}^r$ with $T$ finite and $r=\mathrm{rank}_{\mathbb{Z}}(E_d(\mathbb{Q}))\le 2\nu(2d)$, where $\nu(N)$ counts distinct prime divisors of $N$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Follow the standard proof structure: the Kummer pairing $E(K)/mE(K)\times\mathrm{Gal}(L/K)\to \mu_m$ (with $L=K([m]^{-1}E(K))$) embeds $E(K)/mE(K)$ into a Selmer-type group built from classes in $L^*/(L^*)^m$ that are unramified outside $S$ and locally trivial appropriately — the rank bound comes from bounding *that* group's size.` },
        { label: "Hint 2", text: String.raw`The two summands $2\#S$ and $2\,\mathrm{rank}(\mathrm{Cl}(K)[m])$ enter at two separate points of the standard argument: one from bounding local conditions place-by-place at each $\nu\in S$, the other from the obstruction to a locally-principal, everywhere-unramified ideal actually being principal (measured by the class group). Track each source separately rather than trying to bound the whole group at once. For (b), apply (a) with $K=\mathbb{Q}$, $m=2$ (noting $E_d[2]\subset E_d(\mathbb{Q})$ since $x^3-d^2x=x(x-d)(x+d)$ splits over $\mathbb{Q}$), and identify $S$ explicitly in terms of the prime factors of $2d$.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-4",
      topicId: "mordell-weil",
      title: "Primes in the Denominators of Multiples",
      sourceKey: "hw5",
      pdfLabel: "Problem 2",
      statement: String.raw`(a) Let $E/\mathbb{Q}$ be an elliptic curve and $R\in E(\mathbb{Q})$ a point of infinite order. Show that if $p$ is a prime of good reduction for $E$ then there is $N>0$ such that $p$ appears in the denominator of $[N]R$.

(b) Let $E/\mathbb{Q}: y^2=x^3+3$ and $R=(1,2)$. Find $N_1,N_2$ such that $5$ appears in the denominator of $[N_1]R$ and $7$ appears in the denominator of $[N_2]R$. Verify with SAGE.`,
      hints: [
        { label: "Hint 1", text: String.raw`Argue by contradiction: if $p$ never divided the denominator of any $[N]R$, then reduction mod $p$ would be defined on the *entire* infinite cyclic group $\{[N]R\}$, landing in the finite group $E(\mathbb{F}_p)$ — by pigeonhole, two different multiples would reduce to the same point.` },
        { label: "Hint 2", text: String.raw`Turn that pigeonhole collision into the actual statement: if $[N_1]R$ and $[N_2]R$ reduce to the same point mod $p$, what does that say about $[N_1-N_2]R$ mod $p$, and why does that force $p$ into the denominator of some specific multiple? For (b), just compute the order of $R \bmod 5$ and $R \bmod 7$ inside the finite groups $E(\mathbb{F}_5)$, $E(\mathbb{F}_7)$ — that order is closely related to the smallest $N$ that works.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-5",
      topicId: "mordell-weil",
      title: "The Height Pairing and Linear Independence",
      sourceKey: "hw5",
      pdfLabel: "Problem 3",
      statement: String.raw`Let $E/\mathbb{Q}$ be an elliptic curve and $P_1,\dots,P_r\in E(\mathbb{Q})$ rational points. Let $\mathcal{H}$ be the elliptic height matrix $\mathcal{H}=(\langle P_i,P_j\rangle)_{1\le i,j\le r}$, where $\langle P,Q\rangle = \hat h(P+Q)-\hat h(P)-\hat h(Q)$ and $\hat h$ is the canonical height on $E/\mathbb{Q}$.

(a) Suppose $\det(\mathcal{H})=0$ and $u=(u_1,\dots,u_r)\in\ker(\mathcal{H})$. Then the points $\{P_i\}$ are linearly dependent, with $\sum_{k=1}^r [u_k]P_k=\mathcal{O}$.

(b) If $\det(\mathcal{H})\ne0$ then $\{P_i\}$ are linearly independent and $\mathrm{rank}_{\mathbb{Z}}(E(\mathbb{Q}))\ge r$.

(c) Let $E: y^2=x^3-10081x$. Use SAGE (or Magma) to find a minimal set of generators for the subgroup spanned by the eight given rational points on $E$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Treat $\hat h$ as a positive semi-definite quadratic form on $E(\mathbb{Q})\otimes\mathbb{R}$ (this is a fact you can use, proved earlier in the course), with $\langle\cdot,\cdot\rangle$ its associated bilinear pairing. Then $\mathcal{H}$ is literally the Gram matrix of $P_1,\dots,P_r$ with respect to this "inner product" — everything you know about Gram matrices from linear algebra applies directly.` },
        { label: "Hint 2", text: String.raw`A Gram matrix is singular exactly when the underlying vectors are linearly dependent in the pairing's null space sense, and a kernel vector $u$ literally gives you the (real) linear relation $\sum u_k P_k \equiv 0$ — the content of part (a) is upgrading that real relation to an *exact* torsion relation in $E(\mathbb{Q})$ (use that $\hat h$ vanishes exactly on torsion). For (c), compute the height-pairing matrix numerically (Sage's \`E.height_pairing_matrix()\`) on the 8 given points and use its rank to find how many are independent before hunting for a smaller generating set.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-6",
      topicId: "mordell-weil",
      title: "Weak Mordell–Weil, Revisited",
      sourceKey: "hw6",
      pdfLabel: "Problem 1 (Silverman VIII.8.1)",
      statement: String.raw`Let $K$ be a number field, $E/K$ an elliptic curve, $m\ge2$ an integer, $\mathrm{Cl}(K)$ the ideal class group of $K$, and $S=\{\nu\in M_K^0 : E \text{ has bad reduction at } \nu\}\cup\{\nu\in M_K^0 : \nu(m)\ne0\}\cup M_K^\infty$. Assuming $E[m]\subset E(K)$, prove the quantitative weak Mordell–Weil theorem: $$\mathrm{rank}_{\mathbb{Z}/m\mathbb{Z}}(E(K)/mE(K)) \le 2\#S + 2\,\mathrm{rank}_{\mathbb{Z}/m\mathbb{Z}}(\mathrm{Cl}(K)[m]).$$ (This is the same statement as an earlier assignment — reassigned because it is, in the instructor's words, "may be the most important exercise in the whole course.")`,
      hints: [
        { label: "Hint 1", text: String.raw`If you're revisiting this after a first attempt, isolate exactly which piece of the standard proof stalled — defining the Kummer map $E(K)/mE(K)\to L^*/(L^*)^m$, checking it's well-defined and injective, or bounding the image by unramified-outside-$S$ conditions — and rework only that piece in isolation rather than restarting from scratch.` },
        { label: "Hint 2", text: String.raw`A good sanity check before tackling the general case: write out the *entire* proof for $K=\mathbb{Q}$, $m=2$, with full rational $2$-torsion (exactly the setting of the two "by hand" descent problems elsewhere in this homework set) — the general argument over a number field is the same proof, with ideals and the class group doing bookkeeping that becomes invisible when $K=\mathbb{Q}$.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-7",
      topicId: "mordell-weil",
      title: "Complete 2-Descent and Descent by 2-Isogeny",
      sourceKey: "hw6",
      pdfLabel: "Problem 2 (Descent)",
      statement: String.raw`(a) Let $E/\mathbb{Q}: y^2=x^3+2x^2-3x$. First, "by hand," calculate $E(\mathbb{Q})_{\mathrm{tors}}$. Then use the method of complete $2$-descent to show that the rank of $E$ is $0$.

(b) The elliptic curve $y^2=x^3-82x$ has rank $3$. First, "by hand," calculate $E(\mathbb{Q})_{\mathrm{tors}}$. Then use the method of descent via $2$-isogeny to show that the rank is indeed $3$, and to find generators for $E(\mathbb{Q})/2E(\mathbb{Q})$. In the process, describe explicitly the objects $E,E',\varphi,\hat\varphi,S,\mathbb{Q}(S,2),C_d,C_d',S^\varphi(E/\mathbb{Q}),S^{\hat\varphi}(E'/\mathbb{Q}),\psi,\psi'$. Are there any elements of $\Sha(E/\mathbb{Q})[\varphi]$ or $\Sha(E'/\mathbb{Q})[\hat\varphi]$?`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a): $x^3+2x^2-3x=x(x-1)(x+3)$ factors completely over $\mathbb{Q}$, so all of $E[2]$ is rational — that's exactly the hypothesis complete $2$-descent needs. Set up the descent map into $(\mathbb{Q}^*/(\mathbb{Q}^*)^2)^3$ (or the equivalent $2$-coordinate version) using the three roots as your factorization, and compute which classes are locally solvable everywhere.` },
        { label: "Hint 2", text: String.raw`For (b): $y^2=x^3-82x$ has only *one* rational $2$-torsion point ($x=0$), so complete $2$-descent doesn't apply directly — you need descent by $2$-isogeny instead. Find the isogenous curve $E'$ (dual isogeny to the one with kernel generated by that $2$-torsion point, via Vélu's formulas), then compute the Selmer groups $S^\varphi(E/\mathbb{Q})$ and $S^{\hat\varphi}(E'/\mathbb{Q})$ by testing, for each squarefree $d$ dividing the relevant discriminant, whether the torsor $C_d$ (resp. $C_d'$) has points everywhere locally — a finite, mechanical check once you've identified the right list of $d$'s.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-8",
      topicId: "mordell-weil",
      title: "Manufacturing High-Rank Curves",
      sourceKey: "hw6",
      pdfLabel: "Problem 3",
      statement: String.raw`The goal here is a systematic way to find curves of rank at least $r\ge0$, without using tables of elliptic curves:

(a) (Easy) Find $3$ non-isomorphic elliptic curves over $\mathbb{Q}$ with rank $\ge2$; prove it.

(b) (Fair) Find $3$ with rank $\ge3$.

(c) (Medium) Find $3$ with rank $\ge6$ (and, if so, probably $\ge8$ as well).

(d) (Significantly harder) Find $3$ with rank $\ge10$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a)–(b), don't search randomly — engineer curves that come with several rational points "for free" by construction: congruent-number-style curves $y^2=x^3-n^2x$ where $n$ has several distinct factorizations into two positive integers tend to have multiple obvious points, or use a known parametrized family with a couple of extra rational points built in. Then verify independence using the height-pairing-matrix technique from the earlier height problem in this course.` },
        { label: "Hint 2", text: String.raw`For (c)–(d), finding high-rank curves from scratch is a genuinely hard, actively-studied problem — the realistic path is to locate specific published high-rank examples (the literature documents explicit curves with rank $\ge6,8,10$ together with explicit generating points) and then verify the rank *yourself* with Sage/Magma (checking the given points are independent via the height matrix, and, ideally, that the rank isn't higher via a rank-bounding method), rather than attempting to discover such curves unaided.` }
      ],
      solution: unwritten()
    },

    // ---------------------------------------------------------------
    // Topic: Elliptic Curve Cryptography (CTNT 2026 suggested exercises)
    // ---------------------------------------------------------------
    {
      id: "ecc-1",
      topicId: "ecc",
      title: "An Equation That Isn't an Elliptic Curve",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 8",
      statement: String.raw`Show that $y=x^3$ is not an elliptic curve.`,
      hints: [
        { label: "Hint 1", text: String.raw`Homogenize the equation (set $x=X/Z$, $y=Y/Z$) to get a projective plane cubic, and find the point(s) at infinity, where $Z=0$.` },
        { label: "Hint 2", text: String.raw`Check the smoothness condition (all three partial derivatives of the homogeneous polynomial vanishing simultaneously) at the point at infinity you found — you should discover a singular point there, which is exactly why this cubic fails to be an elliptic curve despite being degree $3$.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-2",
      topicId: "ecc",
      title: "Doubling and Tripling a Point by Hand",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 9",
      statement: String.raw`Let $E/\mathbb{Q}$ be the elliptic curve $y^2=x^3-2$ and let $P=(3,5)$. Use the geometric definition of the addition on $E$ to find the coordinates of $2P$ and $3P$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For $2P$, find the slope of the tangent line to $E$ at $P$ by implicit differentiation ($2y\,dy=3x^2\,dx$), substitute the tangent line back into the curve equation to find the third intersection point, then reflect over the $x$-axis.` },
        { label: "Hint 2", text: String.raw`For $3P=P+2P$, repeat the same process but with the secant line through $P$ and your computed $2P$ instead of a tangent line.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-3",
      topicId: "ecc",
      title: "Points and Group Structure over 𝔽₇",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 10",
      statement: String.raw`Let $E$ be the elliptic curve given by $y^2=x^3+1$ over $\mathbb{F}_7$. Find all the points on $E$ over $\mathbb{F}_7$ and describe the group structure of $E(\mathbb{F}_7)$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For each $x\in\mathbb{F}_7$, compute $x^3+1 \bmod 7$ and check whether it's $0$, a nonzero square, or a nonsquare — that tells you how many points share that $x$-coordinate. Don't forget the point at infinity.` },
        { label: "Hint 2", text: String.raw`Once you know $\#E(\mathbb{F}_7)$, check the order of a couple of the points you found directly — if some point's order already equals $\#E(\mathbb{F}_7)$, the group is cyclic; otherwise compare against the other group of that order.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-4",
      topicId: "ecc",
      title: "The Hasse Bound in Practice",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 11",
      statement: String.raw`Let $p$ be a prime and let $E: y^2=x^3+4x+6$.

(a) For what primes $p$ is the curve $E$ an elliptic curve?

(b) For $p=3,5,7,11,13,17,19,4001,4003$, find the number of points on $E(\mathbb{F}_p)$, the difference $(p+1)-\#E(\mathbb{F}_p)$, and $2\sqrt{p}$. Verify that the Hasse bound holds in each case.

(c) Show that $E(\mathbb{F}_{4001})$ is a cyclic group.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), $E$ fails to be an elliptic curve over $\mathbb{F}_p$ exactly when it's singular mod $p$ — compute the discriminant of $x^3+4x+6$ and find which primes divide it.` },
        { label: "Hint 2", text: String.raw`For (b), a CAS (Sage/PARI) makes counting points for the larger primes practical. For (c), once you know $\#E(\mathbb{F}_{4001})$, exhibit a specific point and check whether its order already equals that full group order — if so, the group is cyclic (generated by that point).` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-5",
      topicId: "ecc",
      title: "A Collision Algorithm for the Elliptic Discrete Log",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 15",
      statement: String.raw`Let $p=73$, let $E: y^2=x^3+8x+7$ over $\mathbb{F}_p$, and let $P=(32,53)$ and $Q=(35,47)$. Use a probabilistic collision algorithm to find $n$ such that $n\cdot P = Q$.`,
      hints: [
        { label: "Hint 1", text: String.raw`This is Pollard's rho algorithm for the discrete log, adapted to the elliptic-curve group: split $E(\mathbb{F}_{73})$ into a few subsets (e.g. by $x$-coordinate mod 3), and define an iteration that adds $P$, adds $Q$, or doubles the current point depending on which subset it's in — track each iterate as a pair $(a,b)$ with current point $=aP+bQ$.` },
        { label: "Hint 2", text: String.raw`Once two iterates collide on the same point with different $(a,b)$ pairs, $a_1P+b_1Q=a_2P+b_2Q$ gives $(a_1-a_2)P=(b_2-b_1)Q$. First find $|P|$, the order of $P$ in $E(\mathbb{F}_{73})$; if $\gcd(b_2-b_1,|P|)=1$ you can solve directly for $n$.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-6",
      topicId: "ecc",
      title: "Group Structure over 𝔽₇₃",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 16",
      statement: String.raw`Let $p=73$, let $E: y^2=x^3+8x+7$ over $\mathbb{F}_p$. Determine the group structure of $E(\mathbb{F}_{73})$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Count $\#E(\mathbb{F}_{73})$ the same way as the $\mathbb{F}_7$ warm-up: for each $x\in\mathbb{F}_{73}$ check whether $x^3+8x+7$ is a square.` },
        { label: "Hint 2", text: String.raw`Once you have the order, test the order of a few sample points against the possible ways to factor that order into (at most two) cyclic pieces, to decide between cyclic and a genuine product of two smaller cyclic groups.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-7",
      topicId: "ecc",
      title: "Adding Two Points over 𝔽₅",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 30",
      statement: String.raw`Let $E$ be the elliptic curve $y^2=x^3+x+1$ defined over the field $\mathbb{F}_5$. Let $P=(0,1)$ and $Q=(2,4)$. Use the formulas of addition on an elliptic curve to compute the point $P\oplus Q$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Since $P\ne Q$ and neither is the identity, use the secant-line formula: first compute the slope $\lambda=(y_Q-y_P)/(x_Q-x_P) \bmod 5$ (you'll need a modular inverse mod 5).` },
        { label: "Hint 2", text: String.raw`With $\lambda$ in hand, $x_{P\oplus Q}=\lambda^2-x_P-x_Q$ and $y_{P\oplus Q}=\lambda(x_P-x_{P\oplus Q})-y_P$, all reduced mod 5.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-8",
      topicId: "ecc",
      title: "Doubling a Point over 𝔽₅",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 31",
      statement: String.raw`Let $E$ be the elliptic curve $y^2=x^3+x+1$ defined over the field $\mathbb{F}_5$. Let $Q=(2,4)$. Use the formulas of addition to compute the point $2Q$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Doubling uses the tangent-line slope instead of a secant: $\lambda=(3x_Q^2+A)/(2y_Q) \bmod 5$, where $A$ is the coefficient of $x$ in the Weierstrass equation (here $A=1$).` },
        { label: "Hint 2", text: String.raw`With that $\lambda$, the same combination formulas apply: $x_{2Q}=\lambda^2-2x_Q$ and $y_{2Q}=\lambda(x_Q-x_{2Q})-y_Q$, reduced mod 5.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-9",
      topicId: "ecc",
      title: "An Upper Bound from Hasse's Theorem",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 32",
      statement: String.raw`Use Hasse's theorem to give an upper bound for the total number of points on $E(\mathbb{F}_5)$, where $E$ is the elliptic curve $y^2=x^3+x+1$ defined over the field $\mathbb{F}_5$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Hasse's theorem bounds $\#E(\mathbb{F}_p)$ within $p+1\pm2\sqrt{p}$ — plug in $p=5$, and remember $\#E(\mathbb{F}_p)$ must be an integer.` },
        { label: "Hint 2", text: String.raw`Compare your bound to the exact count from the next problem, to see how tight the Hasse bound actually is for such a small prime.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-10",
      topicId: "ecc",
      title: "Listing All the Points over 𝔽₅",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 33",
      statement: String.raw`Find all the points on $E(\mathbb{F}_5)$, where $E$ is $y^2=x^3+x+1$ over the field $\mathbb{F}_5$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For each of the 5 values of $x\in\mathbb{F}_5$, compute $x^3+x+1 \bmod 5$ and check whether it's $0$, a nonzero square, or a nonsquare in $\mathbb{F}_5$.` },
        { label: "Hint 2", text: String.raw`Don't forget the point at infinity, and check your total against the Hasse-bound estimate from the previous problem.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-11",
      topicId: "ecc",
      title: "Elliptic Diffie–Hellman with a Precomputed Table",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 34",
      statement: String.raw`Let $p=541$ (which is a prime), and let $E$ be the elliptic curve $y^2=x^3+x+1$ defined over $\mathbb{F}_{541}$. Let $P=(72,70)$ on $E(\mathbb{F}_{541})$. The following is a list of the multiples $n\cdot P$ for $1\le n\le 59$, in order:

$(72,70)$, $(424,71)$, $(9,110)$, $(338,159)$, $(255,123)$,
$(161,528)$, $(147,468)$, $(168,416)$, $(480,353)$, $(454,92)$,
$(360,174)$, $(264,41)$, $(152,438)$, $(468,56)$, $(437,44)$,
$(68,447)$, $(459,293)$, $(115,326)$, $(328,507)$, $(278,318)$,
$(113,117)$, $(534,456)$, $(307,277)$, $(1,57)$, $(491,440)$,
$(107,249)$, $(465,115)$, $(67,517)$, $(301,61)$, $(301,480)$,
$(67,24)$, $(465,426)$, $(107,292)$, $(491,101)$, $(1,484)$,
$(307,264)$, $(534,85)$, $(113,424)$, $(278,223)$, $(328,34)$,
$(115,215)$, $(459,248)$, $(68,94)$, $(437,497)$, $(468,485)$,
$(152,103)$, $(264,500)$, $(360,367)$, $(454,449)$, $(480,188)$,
$(168,125)$, $(147,73)$, $(161,13)$, $(255,418)$, $(338,382)$,
$(9,431)$, $(424,470)$, $(72,471)$, $\mathcal{O}$,

where $\mathcal{O}$ is the point at infinity. In other words, $P=(72,70)$, $2P=(424,71)$, $3P=(9,110)$, ..., $6P=(161,528)$, etc.

(a) Explain why the order of $P$ in $E(\mathbb{F}_{541})$ is $59$.

(b) Alice and Bob want to set up an elliptic Diffie–Hellman key exchange with $p=541$ and $E$ and $P$ as above. Alice chooses $n_A=10$ as her secret integer. What point $Q_A$ should Alice send to Bob?

(c) Alice and Bob want to set up an elliptic Diffie–Hellman key exchange with $p=541$ and $E$ and $P$ as above. Alice chooses $n_A=10$ as her secret integer, and she receives $Q_B=(459,293)$ from Bob. Determine the secret point that is shared between Alice and Bob.

(d) Eve intercepts a communication between Alice and Bob (not the one above). Eve now knows that Alice sent $Q_A=(534,456)$ to Bob, and Bob sent $Q_B=(255,123)$ to Alice. Determine the secret point that now Alice and Bob share.`,
      hints: [
        { label: "Hint 1", text: String.raw`The table already lists $nP$ for $n=1,\dots,59$ with $59P=\mathcal{O}$ — that alone answers (a). For (b), $Q_A$ is by definition $n_A\cdot P$, so it's a direct lookup in the table.` },
        { label: "Hint 2", text: String.raw`The Diffie–Hellman shared secret is always (one party's secret exponent) times (the point they received) — for (c), find which row of the table equals $Q_B$ (giving you $k$ with $Q_B=kP$), then the shared secret is row $10k\bmod 59$. For (d), Eve doesn't know either secret exponent directly, but with a table this small she doesn't need to: she can look up which rows match $Q_A$ and $Q_B$ to recover *both* secret exponents, then combine them exactly as in (c). This is precisely why real Diffie–Hellman needs a group far too large to tabulate.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-12",
      topicId: "ecc",
      title: "Elliptic ElGamal Encryption and Signatures",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 35",
      statement: String.raw`In this exercise $p=541$ and $E$ and $P$ are as in the previous problem.

(a) Alice sets up an elliptic ElGamal cryptosystem with $p=541$ and $E$ and $P$ as in the previous problem. She chooses a private key $n_A=13$, and publishes $Q_A=13P=(152,438)$. Bob wants to send a plaintext $M=(454,449)$ to Alice. Help Bob encrypt his message into a ciphertext $(C_1,C_2)$ to send to Alice.

(b) Using the same elliptic ElGamal system as in part (a), Alice receives a message $(C_1,C_2)=((9,110),(72,70))$ from Bob. What was the plaintext that Bob encrypted?

(c) Samantha wants to create an elliptic curve digital signature using $p=541$, $E$ and $G=P=(72,70)$ as in the previous problem, and $q=59$. Her secret signing key is $s=5$.

i. Compute $V=s\cdot G$.

ii. She chooses a document $d\equiv17\pmod{59}$, and chooses a random element $e\equiv3\pmod{59}$. Compute $e\cdot G$.

iii. Compute the signature $(d,(s_1,s_2))$ for $d\equiv17\pmod{59}$ using $e=3$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a)–(b), elliptic ElGamal encrypts $M$ as $(C_1,C_2)=(kP,\,M\oplus kQ_A)$ for a random $k$; decryption recovers $M=C_2\ominus n_A\cdot C_1$. Use the table of multiples of $P$ from the previous problem throughout — e.g. to decrypt in (b), find which row is $C_1=(9,110)$ to get $k$.` },
        { label: "Hint 2", text: String.raw`For (c), $V=sG$ and $eG$ are again table lookups (multiples of $G=P$, reduced mod 59). The signature values follow the same pattern as the plain (non-elliptic) DSA problem earlier in this set: $s_1$ comes from the $x$-coordinate of $eG$ reduced mod $q=59$, and $s_2\equiv e^{-1}(d+s\cdot s_1)\pmod{59}$ — compute $e^{-1}\bmod 59$ first.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-13",
      topicId: "ecc",
      title: "Lenstra's Elliptic Curve Factorization",
      sourceKey: "ctntEcc",
      pdfLabel: "Exercise 37",
      statement: String.raw`Let $N=143$ and $E: y^2=x^3+x-1$ and $P=(1,1)$. Use Lenstra's algorithm to factor $N$, using $E$ and $P$ modulo $N$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Lenstra's method tries to compute a large multiple of $P$ (e.g. $k!\cdot P$ for increasing $k$) using the usual doubling/addition formulas, but working modulo $N$ — which isn't prime, so a "slope" computation may need to invert something that isn't actually invertible mod $N$.` },
        { label: "Hint 2", text: String.raw`The algorithm succeeds exactly when such an inverse fails to exist, which happens precisely when the denominator shares a nontrivial factor with $N$ — $\gcd(\text{denominator}, N)$ then reveals a nontrivial factor of $143$. Start by doubling $P$ and see where the arithmetic breaks down.` }
      ],
      solution: unwritten()
    },

    // ---------------------------------------------------------------
    // Additions from "Number Theory and Geometry" (book manuscript),
    // Chapters 1, 15, and 16 — see README for the duplicate-checking
    // and self-containment criteria used to select these.
    // ---------------------------------------------------------------
    {
      id: "warmups-8",
      topicId: "warmups",
      title: "A Line Through Two Points",
      sourceKey: "book",
      pdfLabel: "Chapter 1, Exercises",
      statement: String.raw`Let $P=(1,4)$ and $Q=(4,-2)$ be points in the plane.

(a) Find the equation $y=ax+b$ of the line $L$ through $P$ and $Q$.

(b) Find a formula for all the rational points on $L$.

(c) Find a formula for all the integral points on $L$.

(d) How many points on $L$ have natural-number coordinates, i.e. how many points $R=(x_0,y_0)$ on $L$ have $x_0,y_0\in\mathbb{N}$?`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a)-(b), once you have the slope $a$ from the two points, every point on $L$ with rational $x$-coordinate automatically has rational $y$-coordinate (since $y=ax+b$ has rational coefficients) — so "all rational points" is just "let $x$ range over $\mathbb{Q}$."` },
        { label: "Hint 2", text: String.raw`For (c)-(d), write $a=p/q$ in lowest terms; $y=ax+b$ then forces a divisibility condition on $x$ for $y$ to come out an integer. Work out exactly which $x$ satisfy it, then separately impose positivity for (d).` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-9",
      topicId: "warmups",
      title: "Rational Points on a Circle",
      sourceKey: "book",
      pdfLabel: "Chapter 1, Exercises",
      statement: String.raw`Find all the rational points on the circle $x^2+y^2=2$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Start from the obvious point $(1,1)$ on the circle, and intersect the circle with a line of rational slope $t$ through it.` },
        { label: "Hint 2", text: String.raw`Substituting the line into the circle's equation gives a quadratic with one root already known (from the base point); Vieta's formulas hand you the second root as a rational function of $t$.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-10",
      topicId: "warmups",
      title: "Integral and Rational Points on an Ellipse",
      sourceKey: "book",
      pdfLabel: "Chapter 1, Exercises",
      statement: String.raw`Let $C$ be the ellipse given by $x^2+3y^2=784$.

(a) Find all the integral points on $C$.

(b) Find a parametrization of all the rational points on $C$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), $3y^2=784-x^2\ge0$ bounds $x$ to a small range — just check each integer $x$ in that range for whether $(784-x^2)/3$ is a perfect square.` },
        { label: "Hint 2", text: String.raw`For (b), use one integral point from (a) as a base point and intersect $C$ with a line of rational slope through it, exactly as with a circle.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-11",
      topicId: "warmups",
      title: "Points on a Hyperbola",
      sourceKey: "book",
      pdfLabel: "Chapter 1, Exercises",
      statement: String.raw`Let $C$ be the hyperbola given by the equation $x^2-7y^2=2$.

(a) Find all the rational points on $C$.

(b) Find $3$ distinct integral points with positive $x$-coordinate.`,
      hints: [
        { label: "Hint 1", text: String.raw`The same chord method works for hyperbolas as for circles and ellipses: find one rational point by inspection, then intersect with a line of slope $t$ through it.` },
        { label: "Hint 2", text: String.raw`For (b), plug small rational values of the parameter $t$ from your part-(a) parametrization into the formulas and check which give integer coordinates.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-12",
      topicId: "warmups",
      title: "A Hyperbola with No Integral Points",
      sourceKey: "book",
      pdfLabel: "Chapter 1, Exercises",
      statement: String.raw`Show that the hyperbola $C': x^2-5y^2=3$ has no integral points.`,
      hints: [
        { label: "Hint 1", text: String.raw`Reduce the equation modulo a small number and check which residues $x^2$ and $5y^2$ can actually take — if $3$ is never an achievable difference, you're done.` },
        { label: "Hint 2", text: String.raw`Try mod 5 first; if that's inconclusive on its own, mod 4 (or mod 8) rules out the remaining cases.` }
      ],
      solution: unwritten()
    },
    {
      id: "warmups-13",
      topicId: "warmups",
      title: "Squares That Differ by a Fixed Amount",
      sourceKey: "book",
      pdfLabel: "Chapter 1, Exercises",
      statement: String.raw`(a) Are there two perfect squares (integers of the form $n^2$) that differ by $1$? Write the problem as a Diophantine equation, find all integral solutions, and prove you've found them all.

(b) Find a parametrization of all the rational squares (numbers of the form $t^2$ for $t\in\mathbb{Q}$) that differ by $1$.

(c) Are there two consecutive integers whose product is a perfect square? If so, find all such integers.

(d) Are there three integers $u<v<w$ differing by $5$ (i.e. $u+5=v$ and $v+5=w$) whose product is a perfect square? This one is hard — it suffices to find a single Diophantine equation in two variables that represents the problem.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), set up $n^2+1=m^2$, i.e. $(m-n)(m+n)=1$ — a factorization argument over the integers finishes it in a couple of lines.` },
        { label: "Hint 2", text: String.raw`For (c)-(d), integers in a short arithmetic progression are "almost coprime" (consecutive ones are exactly coprime), so unique factorization puts strong constraints on each factor individually if the product is a perfect square — try small cases by hand for (c); for (d), you only need to *write down* one Diophantine equation capturing "$u(u+5)(u+10)$ is a perfect square," not solve it.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-6",
      topicId: "curves-group-law",
      title: "Projectivizing Five Curves",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find the projectivization of the following affine curves:

(a) $x^2+y^2=2$.

(b) $xy=1$.

(c) $y^2+y=x^3+x$.

(d) $x^3+xy^2+2x^2+y+7=0$.

(e) $x^n+y^n=1$, for any $n\ge2$.`,
      hints: [
        { label: "Hint 1", text: String.raw`To projectivize a degree-$d$ affine equation $f(x,y)=0$, substitute $x=X/Z$, $y=Y/Z$, then multiply through by the lowest power of $Z$ that clears every denominator, giving a homogeneous degree-$d$ polynomial.` },
        { label: "Hint 2", text: String.raw`For (e), the degree $d=n$ itself varies with the problem — track how the homogenizing power of $Z$ depends on $n$.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-7",
      topicId: "curves-group-law",
      title: "Finding Singular Points on Six Curves",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Determine all the singular points (if any) on the following projective curves. If a curve is given in affine form, first find a projectivization.

(a) $XY+YZ+XZ=0$.

(b) $X^2+2XY+Y^2-Z^2=0$.

(c) $y^2+y=x^3$.

(d) $y^2=x(x-1)^2$.

(e) $y^2=x^3-6x^2+12x-8$.

(f) $y^2+xy=x^3$.`,
      hints: [
        { label: "Hint 1", text: String.raw`A point is singular exactly when all three partial derivatives of the homogeneous defining polynomial vanish there simultaneously — set up and solve $F=F_X=F_Y=F_Z=0$ for each curve.` },
        { label: "Hint 2", text: String.raw`For (d)-(e), notice the right-hand side is a cubic in $x$ with a repeated root — that repeated root's $x$-value, together with $y=0$, is exactly where the singularity sits.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-8",
      topicId: "curves-group-law",
      title: "Parametrizing Two Singular Curves",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Parametrize all the rational points on the curves $y^2=x(x-1)^2$ and $y^2=x^3-6x^2+12x-8$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Both curves are singular at a point with $y=0$ (find it first — e.g. $(1,0)$ for the first curve). A line of slope $t$ through a singular point automatically meets the curve there with multiplicity $\ge2$, leaving only one further intersection point to solve for.` },
        { label: "Hint 2", text: String.raw`Substitute $y=t(x-x_0)$, for the singular point $(x_0,0)$, into the curve equation; after factoring out $(x-x_0)^2$, the remaining factor is linear in $x$ and gives your parametrization directly in terms of $t$.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-9",
      topicId: "curves-group-law",
      title: "Long to Short Weierstrass Form",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find a change of variables that brings the following curves from long to short Weierstrass form:

(a) $y^2=x^3+x^2+1$.

(b) $y^2+y=x^3$.

(c) $y^2+xy=x^3+1$.

(d) $y^2+xy+3y=x^3+2x^2+4x+6$.

(e) $t^2-t/3=s^3-1/27$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Complete the square on the left: for $y^2+a_1xy+a_3y$, substituting $y\to y-\tfrac12(a_1x+a_3)$ eliminates the $xy$ and $y$ terms entirely.` },
        { label: "Hint 2", text: String.raw`Once the equation reads $y^2=x^3+A_2x^2+A_4x+A_6$, complete the cube via $x\to x-\tfrac{A_2}{3}$ to eliminate the $x^2$ term too.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-10",
      topicId: "curves-group-law",
      title: "Clearing Denominators",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find a change of variables that brings the following curves to a model with integral coefficients:

(a) $y^2=x^3+\tfrac{5}{2}x+\tfrac{3}{4}$.

(b) $y^2+xy+\tfrac{1}{7}y=x^3+1$.

(c) $y^2+\tfrac{1}{2}y=x^3+\tfrac{1}{25}$.`,
      hints: [
        { label: "Hint 1", text: String.raw`A substitution $x\to x/u^2$, $y\to y/u^3$ for a well-chosen integer $u$ rescales each coefficient $a_i$ by $u^i$ — pick $u$ to be a common denominator (or a multiple of one).` },
        { label: "Hint 2", text: String.raw`Track exactly which power of $u$ multiplies each coefficient so you can find the smallest $u$ that clears every denominator at once.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-11",
      topicId: "curves-group-law",
      title: "Minimizing Integral Coefficients",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find a change of variables that brings the following curves to a model with smaller integral coefficients:

(a) $y^2=x^3+4x^2+320$.

(b) $y^2+7xy+1029y=x^3$.

(c) $y^2+10xy+7000y=x^3+200x^2+370000x$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Run the same $x\to x/u^2$, $y\to y/u^3$ substitution as for clearing denominators, but now look for a $u>1$ that divides *out* common factors — the reverse direction.` },
        { label: "Hint 2", text: String.raw`Factor each coefficient $a_i$ and look for a prime $p$ with $p^i \mid a_i$ for every relevant $i$ simultaneously — that $p$ (or a suitable power) is a valid $u$.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-12",
      topicId: "curves-group-law",
      title: "The Taxicab Transformation",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find a change of variables from $C: x^3+y^3=d$ to $C': y^2=x^3-432d^2$.`,
      hints: [
        { label: "Hint 1", text: String.raw`View $C$ in projective coordinates and use that $[1:-1:0]$ is a point on $C$ at infinity where the tangent line meets $C$ with multiplicity $3$ — moving this point to the new origin and choosing an affine chart centered there is the standard flex-point-to-Weierstrass transformation.` },
        { label: "Hint 2", text: String.raw`After the linear change of coordinates placing $[1:-1:0]$ at the new origin, finish with the usual complete-the-square and complete-the-cube steps — the constant $432=2^4\cdot27$ falls out of carefully tracking the scaling factors.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-13",
      topicId: "curves-group-law",
      title: "Three General Transformations to Weierstrass Form",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Let $C/\mathbb{Q}$ be an affine curve.

(a) Suppose $C$ is given by $xy^2+ax^2+bxy+cy^2+dx+ey+f=0$. Find an invertible change of variables taking this to $xy^2+gx^2+hxy+jx+ky+l=0$. (Hint: try $X=x+\lambda$, $Y=y$.)

(b) Suppose $C'$ is given by $xy^2+ax^2+bxy+cx+dy+e=0$. Find an invertible change of variables taking this to $y^2+\alpha xy+\beta y=x^3+\gamma x^2+\delta x+\eta$. (Hint: multiply by $x$ and set $X=x$, $Y=xy$; normalize so the coefficients of $y^2$ and $x^3$ are both $1$.)

(c) Suppose $C''$ is given by $y^2+axy+by=x^3+cx^2+dx+e$. Find an invertible change of variables taking this to $y^2=x^3+Ax+B$. (Hint: first eliminate the $xy$ and $y$ terms, then eliminate the $x^2$ term.)

(d) Let $E/\mathbb{Q}: y^2+43xy-210y=x^3-210x^2$. Find an invertible change of variables taking $E$ to the form $y^2=x^3+Ax+B$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Parts (a)-(c) are a step-by-step version of one general reduction procedure — work them in order, since each part's output has the shape of the next part's input.` },
        { label: "Hint 2", text: String.raw`Part (d) is just part (c)'s procedure applied to specific numbers: complete the square in $y$ first (eliminating $xy$ and $y$), then complete the cube in $x$.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-14",
      topicId: "curves-group-law",
      title: "Weierstrass Form via a Different Chart",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find a Weierstrass form for the following curves by finding their projectivization and then choosing a different affine chart:

(a) $xy^2+x^2y=1$.

(b) $x^3-2x^2y-xy-y^2-y=0$.

(c) $xy^2+x^2y=1+x^2$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Homogenize each curve, then look for a point on the projectivization where switching to a different affine chart (e.g. setting $Y=1$ instead of $Z=1$) makes the equation look Weierstrass-shaped.` },
        { label: "Hint 2", text: String.raw`The right chart is usually the one centered at a rational inflection point (often visible as a point at infinity in the original chart) — once there, apply the usual complete-the-square/cube steps.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-15",
      topicId: "curves-group-law",
      title: "Weierstrass Form from a Given Point",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Find a Weierstrass form for each of the following non-singular curves, using the given rational point $P$:

(a) $2X^3+3X^2Z-XY^2+3XZ^2-Y^2Z+Z^3=0$, with $P=[0,1,1]$.

(b) $X^3+3X^2Y+3XY^2+Y^3-Y^2Z-YZ^2=0$, with $P=[0,0,1]$.

(c) $X^3+XY^2+XZ^2+Z^3+YZ^2=0$, with $P=[0,1,-1]$.

(d) $X^3+Y^3+Z^3+3XYZ=0$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Move $P$ to a convenient location (e.g. $[0:1:0]$) via a linear change of coordinates, then pick the affine chart in which $P$ becomes the point at infinity of a Weierstrass-shaped equation.` },
        { label: "Hint 2", text: String.raw`For (d), first find a rational point on the curve yourself (try simple coordinates by inspection) before applying the same method as (a)-(c).` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-16",
      topicId: "curves-group-law",
      title: "Why the Discriminant Detects Singularity",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $y^2=f(x)$ be a Weierstrass equation, where $f(x)\in K[x]$ is a monic cubic.

(a) Show that if a polynomial $f(x)$ and its derivative $f'(x)$ both vanish at $\delta$, then $f(x)$ has a double root at $\delta$.

(b) Show that if $y^2=f(x)$ is singular, the singularity must occur at a point $(\delta,0)$ where $\delta$ is a root of $f(x)$.

(c) Show that $(\delta,0)$ is singular if and only if $\delta$ is a double root of $f(x)$. Conclude that the discriminant of $E$ is $0$ if and only if $E$ is singular.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), use the factor theorem: $f(x)=(x-\delta)g(x)$ since $f(\delta)=0$; differentiate and evaluate at $\delta$ to see what $f'(\delta)=0$ forces about $g(\delta)$.` },
        { label: "Hint 2", text: String.raw`For (b)-(c), a singular point needs both partial derivatives of $F(x,y)=y^2-f(x)$ to vanish; the $y$-partial forces $y=0$ immediately, reducing everything to a statement purely about $f(x)$ and $f'(x)$, which part (a) already handles.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-17",
      topicId: "curves-group-law",
      title: "The Duplication Formula, Derived",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E: y^2=x^3+Ax+B$ with $A,B\in\mathbb{Q}$, and let $P=(x_0,y_0)$ be a point on $E$ with $y_0\ne0$.

(a) Prove that the $x$-coordinate of $2P$ is $\displaystyle x(2P)=\frac{x_0^4-2Ax_0^2-8Bx_0+A^2}{4y_0^2}$.

(b) Find a formula for $y(2P)$ in terms of $x_0$ and $y_0$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), write down the tangent line to $E$ at $P$ (slope $\lambda=(3x_0^2+A)/(2y_0)$ from implicit differentiation), substitute it into the curve equation, and use that $x_0$ is a *double* root of the resulting quartic (the tangent meets $E$ with multiplicity $2$ at $P$) to isolate the third root as $x(2P)$.` },
        { label: "Hint 2", text: String.raw`For (b), use the same tangent line $y=y_0+\lambda(x-x_0)$ to compute the $y$-value at $x(2P)$, then negate it (reflect over the $x$-axis) to get $y(2P)$ rather than the third intersection point itself.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-18",
      topicId: "curves-group-law",
      title: "An Explicit Map Between Two Curves",
      sourceKey: "book",
      pdfLabel: "Chapter 15, Exercises",
      statement: String.raw`Let $C: V^2=U^4+1$ and $E: y^2=x^3-4x$. Let $\psi(U,V)=\left(\dfrac{2(V+1)}{U^2},\dfrac{4(V+1)}{U^3}\right)$.

(a) Show that if $U\ne0$ and $(U,V)\in C(\mathbb{Q})$, then $\psi(U,V)\in E(\mathbb{Q})$.

(b) Find an inverse function $\varphi: E\to C$ such that $\varphi(\psi(U,V))=(U,V)$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), substitute $\psi(U,V)$'s coordinates into $E$'s equation $y^2=x^3-4x$, and use $V^2=U^4+1$ (i.e. $U^4=(V-1)(V+1)$) to simplify.` },
        { label: "Hint 2", text: String.raw`For (b), work the defining formulas for $\psi$ backwards: from $x=2(V+1)/U^2$ and $y=4(V+1)/U^3$, notice $y/x=2/U$, which recovers $U$ directly in terms of $x,y$ — then back-substitute for $V$.` }
      ],
      solution: unwritten()
    },
    {
      id: "curves-group-law-19",
      topicId: "curves-group-law",
      title: "The Discriminant of Three Roots Is Even",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $e_1,e_2,e_3$ be three distinct integers. Show that $\Delta=(e_1-e_2)(e_2-e_3)(e_1-e_3)$ is always even.`,
      hints: [
        { label: "Hint 1", text: String.raw`Among any three integers, look at their residues mod $2$ — by pigeonhole, at least two of $e_1,e_2,e_3$ share the same parity.` },
        { label: "Hint 2", text: String.raw`If $e_i$ and $e_j$ have the same parity, $e_i-e_j$ is even on its own, which already makes the whole product $\Delta$ even.` }
      ],
      solution: unwritten()
    },
    {
      id: "finite-fields-4",
      topicId: "finite-fields",
      title: "Is This Point on the Curve?",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E$ be the elliptic curve $y^2=x^3+3x+5$ over the finite field $\mathbb{F}_{13}$. Is $P=(4,4)$ a point on the curve $E$?`,
      hints: [
        { label: "Hint 1", text: String.raw`Just substitute: compute both $4^2 \bmod 13$ and $4^3+3\cdot4+5 \bmod 13$ and compare.` },
        { label: "Hint 2", text: String.raw`If they don't match, $P$ isn't on $E$ — double-check your arithmetic mod 13 carefully, since a single reduction slip is the most common source of error here.` }
      ],
      solution: unwritten()
    },
    {
      id: "torsion-galois-6",
      topicId: "torsion-galois",
      title: "The Possible Sizes of E(Q)[2]",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E/\mathbb{Q}$ be given by $y^2=f(x)$, with $f(x)\in\mathbb{Z}[x]$ a monic cubic with distinct roots (over $\mathbb{C}$).

(a) Show that $P=(x,y)\in E$ is a torsion point of exact order $2$ if and only if $y=0$ and $f(x)=0$.

(b) Let $E(\mathbb{Q})[2]$ be the subgroup of points $P\in E(\mathbb{Q})$ with $2P=\mathcal{O}$. Show that $\#E(\mathbb{Q})[2]$ may be $1$, $2$, or $4$.

(c) Give examples of three elliptic curves over $\mathbb{Q}$ where $\#E(\mathbb{Q})[2]$ is $1$, $2$, and $4$ respectively.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a)-(b), $E(\mathbb{Q})[2]\setminus\{\mathcal{O}\}$ corresponds exactly to the rational roots of $f(x)$ — and a real cubic with distinct roots has either $1$ or $3$ real roots, of which $0$, $1$, or all $3$ can be rational.` },
        { label: "Hint 2", text: String.raw`For (c), engineer $f(x)$ directly: an irreducible cubic gives $\#E(\mathbb{Q})[2]=1$; a cubic with exactly one rational root (and an irreducible quadratic factor) gives $2$; a cubic that splits completely over $\mathbb{Q}$ gives $4$.` }
      ],
      solution: unwritten()
    },
    {
      id: "torsion-galois-7",
      topicId: "torsion-galois",
      title: "Torsion on y² = x³ + p²",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $p\ge2$ be a prime and $E_p: y^2=x^3+p^2$.

(a) Show that there is no torsion point $P\in E_p(\mathbb{Q})$ with $y(P)$ equal to $\pm1,\pm p^2,\pm3p,\pm3p^2,$ or $\pm3$.

(b) Prove that $Q=(0,p)$ is a torsion point of exact order $3$.

(c) Conclude that $\{\mathcal{O},Q,2Q\}$ are the only torsion points on $E_p(\mathbb{Q})$.

(Note: for $p=3$, the point $(-2,1)\in E_3(\mathbb{Q})$ is *not* a torsion point.)`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), the Lutz–Nagell theorem says a torsion point must have integer coordinates with $y=0$ or $y^2\mid\Delta(E_p)$ — compute $\Delta(E_p)$ in terms of $p$ and list its divisors to see which $y$-values are even candidates, then rule out the ones listed.` },
        { label: "Hint 2", text: String.raw`For (b), verify $3Q=\mathcal{O}$ directly with $Q=(0,p)$ using the duplication and addition formulas; for (c), combine (a) and (b) — Lutz–Nagell restricts torsion to a short, checkable list of possible $y$-values, and (a) eliminates all but $0$ and $\pm p$.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-9",
      topicId: "mordell-weil",
      title: "A Family with 5-Torsion",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E_t: y^2+(1-t)xy-ty=x^3-tx^2$ with $t\in\mathbb{Q}$ and $\Delta_t=t^5(t^2-11t-1)\ne0$. Every curve $E_t$ has a subgroup isomorphic to $\mathbb{Z}/5\mathbb{Z}$. Use a computer algebra system to find elliptic curves $E_t$ with torsion $\mathbb{Z}/5\mathbb{Z}$ and rank $0$, $1$, and $2$. Also try to find an $E_t$ with rank as high as possible.`,
      hints: [
        { label: "Hint 1", text: String.raw`Pick simple rational values of $t$ (small integers or fractions, avoiding $\Delta_t=0$) and compute the rank of the resulting $E_t$ with a CAS's built-in rank routine — you'll need to try several $t$ before hitting each target rank.` },
        { label: "Hint 2", text: String.raw`Since $\mathbb{Z}/5\mathbb{Z}\subset E_t(\mathbb{Q})$ always, ranks $0,1,2$ should already turn up among small values of $t$; for a genuinely high rank this becomes a search — vary $t$ over a range and record the rank, watching for outliers.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-10",
      topicId: "mordell-weil",
      title: "Halving an Explicit Point",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`The curve $E/\mathbb{Q}: y^2=x^3-157^2x$ has a rational point $Q$ with $$x(Q)=\left(\frac{224403517704336969924557513090674863160948472041}{17824664537857719176051070357934327140032961660}\right)^2.$$ Show that there exists $P\in E(\mathbb{Q})$ with $2P=Q$, and find the coordinates of $P$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Since $x(Q)$ is given as a perfect square already, that's a strong hint about where $P$ comes from — use the duplication formula for $x(2P)$ in terms of $x(P)$ and try to solve $x(2P)=x(Q)$.` },
        { label: "Hint 2", text: String.raw`This is exactly the kind of computation a CAS is built for — set up $x(2P)=x(Q)$ symbolically and let Sage or Magma factor/solve for $x(P)$, then recover $y(P)$ from the curve equation.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-11",
      topicId: "mordell-weil",
      title: "No Rational Solutions via Mod 8",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Show that the system $2Y^2-X^2=34$, $Y^2-Z^2=34$ has no rational solutions with $X,Y,Z\in\mathbb{Q}$.`,
      hints: [
        { label: "Hint 1", text: String.raw`Clear denominators first: a rational solution scales up to an integer solution of a related system with no powers of $2$ left in any denominator.` },
        { label: "Hint 2", text: String.raw`With everything integral, reduce both equations modulo $8$ and check which residues squares can take mod 8 (only $0,1,4$) — show no combination satisfies both equations simultaneously.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-12",
      topicId: "mordell-weil",
      title: "2-Descent by Hand, Four Times",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`For each of the following elliptic curves, use the method of $2$-descent to find the rank of $E/\mathbb{Q}$ and generators of $E(\mathbb{Q})/2E(\mathbb{Q})$. Do not use a computer:

(a) $E: y^2=x^3-14931x+220590$.

(b) $E: y^2=x^3-x^2-6x$.

(c) $E: y^2=x^3-37636x$.

(d) $E: y^2=x^3-962x^2+148417x$.`,
      hints: [
        { label: "Hint 1", text: String.raw`In each case, first factor the cubic on the right over $\mathbb{Q}$ to find the rational $2$-torsion — (b)-(d) factor completely (full $2$-torsion, so complete $2$-descent applies directly), while (a) may take a bit more work to spot its rational root.` },
        { label: "Hint 2", text: String.raw`With a full factorization $x(x-e_1)(x-e_2)$ in hand, complete $2$-descent reduces to testing a finite list of squarefree divisors $d$ of the relevant discriminants for local solvability of a torsor equation; for (d), bound the rank first via a general rank bound so you know when you've found enough independent points.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-13",
      topicId: "mordell-weil",
      title: "Rank of a Three-Root Curve",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Find the rank and generators for the rational points on the elliptic curve $y^2=x(x+5)(x+10)$.`,
      hints: [
        { label: "Hint 1", text: String.raw`The curve already comes factored with three rational roots ($0,-5,-10$), so full $2$-torsion is rational — set up complete $2$-descent exactly as in the multi-curve problem elsewhere in this collection.` },
        { label: "Hint 2", text: String.raw`Before grinding through the descent, look for small rational points by inspection (try small integer $x$ near the roots) — an explicit point of infinite order, once found, can be confirmed via the height pairing.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-14",
      topicId: "mordell-weil",
      title: "The Index of a Generating Subgroup",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E$ be an elliptic curve, and suppose the images of $P_1,\dots,P_n\in E(\mathbb{Q})$ in $E(\mathbb{Q})/2E(\mathbb{Q})$ generate that quotient group. Let $G\le E(\mathbb{Q})$ be the subgroup generated by $P_1,\dots,P_n$.

(a) Prove that $E(\mathbb{Q})/G$ is finite.

(b) Show that, depending on the choice of generators $\{P_i\}$ of $E(\mathbb{Q})/2E(\mathbb{Q})$, the size of $E(\mathbb{Q})/G$ may be arbitrarily large.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), given any $Q\in E(\mathbb{Q})$, its image mod $2E(\mathbb{Q})$ is some combination of the $P_i$'s images, so $Q$ minus that combination lies in $2E(\mathbb{Q})$ — a descent/height argument on the "half" of $Q$ shows only finitely many cosets of $G$ can ever arise.` },
        { label: "Hint 2", text: String.raw`For (b), pick generators that *are* in the right classes mod $2E(\mathbb{Q})$ but are needlessly large multiples of the "true" minimal generators — e.g. replace a true generator $R$ by $R+2^kS$ for some other rank element $S$ and large $k$: this doesn't change the class mod $2E(\mathbb{Q})$, but shrinks $G$ into a much higher-index subgroup.` }
      ],
      solution: unwritten()
    },
    {
      id: "mordell-weil-15",
      topicId: "mordell-weil",
      title: "Beyond Fermat's Last Theorem for Cubes",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Fermat's Last Theorem shows that $x^3+y^3=z^3$ has no integer solutions with $xyz\ne0$. Find the first $d\ge1$ such that $x^3+y^3=dz^3$ has infinitely many non-trivial solutions, find a generator for the solutions, and write down a few examples.`,
      hints: [
        { label: "Hint 1", text: String.raw`Dividing by $z^3$, this is a question about rational points on $X^3+Y^3=d$ (with $X=x/z$, $Y=y/z$) — transform to Weierstrass form via the taxicab-style transformation elsewhere in this collection, and ask for which small $d$ the resulting elliptic curve has positive rank.` },
        { label: "Hint 2", text: String.raw`Check $d=1,2,\dots$ in turn: transform each to $y^2=x^3-432d^2$ and test (by hand or CAS) for a point of infinite order — the first $d$ that works is your answer, and a generator there translates back into a generator for the original cubic equation's solutions.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-14",
      topicId: "ecc",
      title: "A Small Discrete Log by Hand",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E$ be the curve $y^2=x^3-2$ over $\mathbb{F}_{17}$, and let $P=(3,5)$. Solve the elliptic curve discrete logarithm problem $x\cdot P=(13,11)$, i.e. find $x\ge1$ with $xP=(13,11)$ in $E(\mathbb{F}_{17})$.`,
      hints: [
        { label: "Hint 1", text: String.raw`With a group this small, just compute $P,2P,3P,\dots$ in order using the addition/doubling formulas over $\mathbb{F}_{17}$ until you hit $(13,11)$.` },
        { label: "Hint 2", text: String.raw`Doubling first (to get $2P,4P,8P$ quickly) and combining is faster than adding $P$ one step at a time — either way this finishes in well under $17$ steps, since $\#E(\mathbb{F}_{17})$ can't exceed the Hasse bound around $17+1+2\sqrt{17}$.` }
      ],
      solution: unwritten()
    },
    {
      id: "ecc-15",
      topicId: "ecc",
      title: "Discrete Log and a Generator over 𝔽₁₀₃",
      sourceKey: "book",
      pdfLabel: "Chapter 16, Exercises",
      statement: String.raw`Let $E$ be the curve $y^2=x^3-2$ over $\mathbb{F}_{103}$, and let $P=(3,5)$.

(a) Show that the order of $P$ in $E(\mathbb{F}_{103})$ is $91$.

(b) Solve the elliptic curve discrete logarithm problem $x\cdot P=(102,93)$ in $E(\mathbb{F}_{103})$.

(c) Show that $P$ generates $E(\mathbb{F}_{103})$, i.e. every $Q\in E(\mathbb{F}_{103})$ solves $xP=Q$ for some $x$.`,
      hints: [
        { label: "Hint 1", text: String.raw`For (a), compute $\#E(\mathbb{F}_{103})$ (by counting or CAS), then check that $91$ divides it and that no proper divisor of $91$ (namely $1,7,13$) already kills $P$.` },
        { label: "Hint 2", text: String.raw`For (b), a baby-step giant-step search (as elsewhere in this collection) beats brute force for a group this size; for (c), compare $\#E(\mathbb{F}_{103})$ to $91$ — if they're equal, $P$'s order already accounts for the whole group.` }
      ],
      solution: unwritten()
    }
  ];

  return { sources: sources, courses: courses, topics: topics, problems: problems };
})();
