/**
 * Fixed background layer: gradient mesh, radial glows, grid, grain.
 * Uses design tokens only; no hardcoded colors.
 */
export function Background() {
  return (
    <div className="background-canvas" aria-hidden>
      <div className="background-mesh" />
      <div className="background-grid" />
      <div className="background-grain" />
    </div>
  );
}
