# Rational Points

A single-page applet (created with Claude Code) for exploring the group law on an elliptic curve

```
y² = x³ + ax + b
```

over the rationals ℚ. Pick coefficients (or a preset), search for rational
points, click two of them to add them via the classic chord-and-tangent
construction, and compute P, 2P, …, nP for a chosen point.

**[Live demo](https://alozanoroble.github.io/MATH5020-Elliptic_Curves/apps/rational-points/)**


## Features

- **Exact arithmetic.** Coordinates are kept as reduced fractions of
  JavaScript `BigInt`s, so results are never rounded — only the plot is
  drawn in floating point.
- **Rational point search.** Scans `x = p/q` for `|p|` and `q` under
  adjustable bounds, checking whether `x³ + ax + b` is a perfect square of
  a rational. This is a bounded demonstration search, not a complete one —
  points of larger height can be missed.
- **Point addition and doubling.** Select one point to double it, or two to
  add them; the plot draws the secant (or tangent) line and the vertical
  reflection that produces the sum.
- **Multiples of a point.** Compute P through nP by repeated addition
  (double-and-add), useful for watching how quickly coordinates grow for a
  point of infinite order.
- **No dependencies.** One HTML file, vanilla JS, no build step.

## Running it

Just open [`index.html`](index.html) in a browser, or serve the folder with
any static file server. There is nothing to install or build.


## The math, briefly

Three points on a Weierstrass curve that lie on a common line always sum to
the identity 𝒪 (the point at infinity). So `P + Q` is found by drawing the
line through `P` and `Q`, finding the third point `R′` where it meets the
curve, and reflecting `R′` over the x-axis. Doubling a point uses the
tangent line in place of a secant. This gives the rational points on the
curve the structure of an abelian group — the starting point for the
theory behind the Mordell–Weil theorem and Mazur's torsion theorem.

## License

MIT — see [LICENSE](LICENSE).
