import { createContext } from "svelte"

export interface TabContext {
  name: string
  tabInstance: symbol
  initTab: boolean
  /** This takes more precedence over `initTab` */
  setCacheActive: boolean
}

export const [getTabContext, setTabContext] = createContext<TabContext[]>()

export const getIsActiveTab = (tabInstance: symbol) => {
  return getTabContext().some((tab) => tabInstance === tab.tabInstance)
}
