import type { Snippet } from "svelte"

// biome-ignore lint/complexity/noBannedTypes: `{}` is needed when using as a standalone type while inferring its type
// biome-ignore lint/suspicious/noExplicitAny:
export type WithChildrenSnippet<T extends Record<string, any> = {}> = { children?: Snippet } & T
