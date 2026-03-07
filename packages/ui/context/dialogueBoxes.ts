import { createContext } from "svelte"

export const [getBlocks, setBlock] = createContext<Record<string, any>>()
