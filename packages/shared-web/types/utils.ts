import type { Snippet } from "svelte"

// biome-ignore lint: `{}` is needed when using as a standalone type while inferring its type
export type WithChildrenSnippet<T extends Record<string, any> = {}> = { children?: Snippet } & T
