import { createContext } from "svelte"

export const [getDialogueBlocks, setDialogueBlocks] = createContext<Record<string, any>>()
