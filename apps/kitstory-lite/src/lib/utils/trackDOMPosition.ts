export type FloatingAnchor = "top" | "bottom";

interface PositionTrackerOptions {
  getReferenceElement: () => HTMLElement | null;
  getAnchor?: () => FloatingAnchor;
  setStyle: (style: string) => void;
  viewportEdge?: number;
  offset?: number;
  matchReferenceWidth?: boolean;
}

export const createPositionTracker = ({
  getReferenceElement,
  getAnchor,
  setStyle,
  viewportEdge = 8,
  offset = 6,
  matchReferenceWidth = true,
}: PositionTrackerOptions) => {
  let viewController: AbortController | null = null;

  const sync = () => {
    const reference = getReferenceElement();
    if (!reference) return;

    const anchor = getAnchor?.() ?? "bottom";
    const rect = reference.getBoundingClientRect();
    const left = Math.max(
      viewportEdge,
      Math.min(rect.left, window.innerWidth - viewportEdge - rect.width),
    );
    const top = anchor === "top" ? rect.top - offset : rect.bottom + offset;

    const styleParts = [
      `left: ${left}px`,
      `top: ${top}px`,
      `max-width: ${Math.max(0, window.innerWidth - viewportEdge * 2)}px`,
      "visibility: visible",
      anchor === "top" ? "transform: translateY(-100%)" : "transform: none",
      anchor === "top"
        ? "transform-origin: bottom left"
        : "transform-origin: top left",
    ];

    if (matchReferenceWidth) {
      styleParts.splice(2, 0, `min-width: ${Math.max(0, rect.width)}px`);
    }

    setStyle(styleParts.join("; "));
  };

  const stop = () => {
    viewController?.abort();
    viewController = null;
  };

  const start = () => {
    stop();

    const nextController = new AbortController();
    viewController = nextController;

    const syncOnViewChange = () => {
      sync();
    };

    window.addEventListener("resize", syncOnViewChange, {
      signal: nextController.signal,
    });

    window.addEventListener("scroll", syncOnViewChange, {
      signal: nextController.signal,
      capture: true,
    });
  };

  return {
    sync,
    start,
    stop,
  };
};
