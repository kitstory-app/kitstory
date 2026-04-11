interface CreateMenuA11yOptions {
  getRoot: () => HTMLElement | null
  onClose: () => void
  onEscape?: () => void
  itemSelector?: string
}

export const createMenuA11y = ({ getRoot, onClose, onEscape, itemSelector = '[role="menuitem"]:not([aria-disabled="true"])' }: CreateMenuA11yOptions) => {
  const getItems = () => {
    const root = getRoot()
    if (!root) return []

    return Array.from(root.querySelectorAll<HTMLElement>(itemSelector))
  }

  const focusIndex = (index: number) => {
    const items = getItems()
    if (!items.length) return

    const next = (index + items.length) % items.length
    items[next]?.focus()
  }

  const focusFirstItem = () => {
    focusIndex(0)
  }

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose()
      onEscape?.()
      return
    }

    if (event.key === "Tab") {
      onClose()
      return
    }

    const items = getItems()
    if (!items.length) return

    const index = items.indexOf(document.activeElement as HTMLElement)

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault()
        focusIndex(index + 1)
        return
      case "ArrowUp":
        event.preventDefault()
        focusIndex(index < 0 ? items.length - 1 : index - 1)
        return
      case "Home":
        event.preventDefault()
        focusIndex(0)
        return
      case "End":
        event.preventDefault()
        focusIndex(items.length - 1)
        return
    }
  }

  return {
    focusFirstItem,
    onKeydown,
  }
}
