import { get, writable } from "svelte/store"
import { createContext } from "svelte"

let dropdownId = 0

export const createDropdownContextState = () => {
  const id = ++dropdownId
  const isOpen = writable(false)
  const contentId = `fui-dropdown:${id}`
  let triggerElement: HTMLElement | null = null

  return {
    contentId,
    isOpen,
    setTriggerElement: (element: HTMLElement | null) => {
      triggerElement = element
    },
    getTriggerElement: () => {
      return triggerElement
    },
    open: () => {
      isOpen.set(true)
    },
    close: () => {
      isOpen.set(false)
    },
    toggle: () => {
      isOpen.update((currentValue) => !currentValue)
    },
    getIsOpen: () => {
      return get(isOpen)
    }
  }
}

export const [getDropdownContextState, setDropdownContextState] = createContext<ReturnType<typeof createDropdownContextState>>()
