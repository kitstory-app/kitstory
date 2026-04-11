export type VerticalAnchor = "top" | "bottom"
export type HorizontalAnchor = "left" | "right"
export type _Anchor = `${VerticalAnchor} ${HorizontalAnchor}`
export type Anchor = _Anchor | VerticalAnchor

interface PositionTrackerOptions {
  getReferenceElement: () => HTMLElement | null
  getFloatingElement?: () => HTMLElement | null
  getAnchor?: () => Anchor
  setStyle: (style: string) => void
  viewportEdge?: number
  offset?: number
  matchReferenceWidth?: boolean
}

const parseAnchor = (anchor: Anchor) => {
  const [vertical, horizontal] = anchor.split(" ") as [VerticalAnchor, HorizontalAnchor | undefined]

  return {
    vertical,
    horizontal: horizontal ?? "left",
  }
}

export const createPositionTracker = ({ getReferenceElement, getFloatingElement, getAnchor, setStyle, viewportEdge = 8, offset = 6, matchReferenceWidth = true }: PositionTrackerOptions) => {
  let viewController: AbortController | null = null
  let resizeObserver: ResizeObserver | null = null
  let frameA = 0
  let frameB = 0

  const sync = () => {
    const reference = getReferenceElement()
    if (!reference) return

    const rawAnchor = getAnchor?.() ?? "bottom left"
    const { vertical, horizontal: preferredHorizontal } = parseAnchor(rawAnchor)

    const rekt = reference.getBoundingClientRect()
    const floatingRect = getFloatingElement?.()?.getBoundingClientRect()
    const floatingWidth = Math.max(floatingRect?.width ?? rekt.width, rekt.width)
    const maxX = window.innerWidth - viewportEdge - floatingWidth

    let horizontal = preferredHorizontal
    let x = horizontal === "right" ? rekt.right - floatingWidth : rekt.left

    if (horizontal === "left" && x + floatingWidth > window.innerWidth - viewportEdge) {
      horizontal = "right"
      x = rekt.right - floatingWidth
    } else if (horizontal === "right" && x < viewportEdge) {
      horizontal = "left"
      x = rekt.left
    }

    const isVerticalTop = vertical === "top"

    const left = Math.max(viewportEdge, Math.min(x, maxX))
    const top = isVerticalTop ? rekt.top - offset : rekt.bottom + offset

    const styleParts = [
      `left: ${left}px`,
      `top: ${top}px`,
      `max-width: ${Math.max(0, window.innerWidth - viewportEdge * 2)}px`,
      isVerticalTop ? "transform: translateY(-100%)" : "transform: none",
      isVerticalTop ? `transform-origin: bottom ${horizontal}` : `transform-origin: top ${horizontal}`,
    ]

    if (matchReferenceWidth) {
      styleParts.splice(2, 0, `min-width: ${Math.max(0, rekt.width)}px`)
    }

    setStyle(styleParts.join("; "))
  }

  const stop = () => {
    viewController?.abort()
    viewController = null
    resizeObserver?.disconnect()
    resizeObserver = null
    cancelAnimationFrame(frameA)
    cancelAnimationFrame(frameB)
    frameA = 0
    frameB = 0
  }

  const start = () => {
    stop()

    const nextController = new AbortController()
    viewController = nextController

    const syncOnViewChange = () => {
      sync()
    }

    window.addEventListener("resize", syncOnViewChange, {
      signal: nextController.signal,
    })

    window.addEventListener("scroll", syncOnViewChange, {
      signal: nextController.signal,
      capture: true,
    })

    resizeObserver = new ResizeObserver(syncOnViewChange)

    const reference = getReferenceElement()
    if (reference) {
      resizeObserver.observe(reference)
    }

    const floating = getFloatingElement?.()
    if (floating) {
      resizeObserver.observe(floating)
    }

    // Run additional passes around first paint so newly rendered content
    // can immediately affect the final placement
    frameA = requestAnimationFrame(() => {
      sync()

      frameB = requestAnimationFrame(() => {
        sync()
      })
    })
  }

  return {
    sync,
    start,
    stop,
  }
}
