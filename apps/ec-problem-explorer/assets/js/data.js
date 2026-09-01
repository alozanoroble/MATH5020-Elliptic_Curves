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
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw1.pdf",
      homeworkLabel: "Homework 1"
    },
    hw2: {
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw2.pdf",
      homeworkLabel: "Homework 2"
    },
    hw3: {
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw3.pdf",
      homeworkLabel: "Homework 3"
    },
    hw4a: {
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw4a.pdf",
      homeworkLabel: "Homework 4a"
    },
    hw4b: {
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw4b.pdf",
      homeworkLabel: "Homework 4b"
    },
    hw5: {
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw5.pdf",
      homeworkLabel: "Homework 5"
    },
    hw6: {
      course: "MATH 5020 — The Arithmetic of Elliptic Curves",
      instructor: "Álvaro Lozano-Robledo",
      institution: "University of Connecticut",
      term: "Fall 2015",
      pdfUrl: "https://github.com/alozanoroble/MATH5020-Elliptic_Curves/blob/main/Homework_sets/MATH-5020-hw6.pdf",
      homeworkLabel: "Homework 6"
    }
  };

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
    }
  ];

  return { sources: sources, topics: topics, problems: problems };
})();
