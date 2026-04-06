import { createContext } from "svelte";

export const [getDropdownState, setDropdownState] = createContext<boolean>()