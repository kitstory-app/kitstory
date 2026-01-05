import type { Writable } from "svelte/store"
import contextBuilder from "./svelteContextHelper"

export const sidebarToggle = contextBuilder<Writable<boolean>>("global_sidebarToggle")
