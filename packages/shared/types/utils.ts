import type { Snippet } from "svelte"

export type WithChildrenSnippet<T extends Record<string, unknown> = never> = { children?: Snippet } & T
