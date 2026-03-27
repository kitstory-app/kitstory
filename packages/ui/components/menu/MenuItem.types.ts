import type { WithChildrenSnippet } from "@kitstory/shared/types"
import type { IconProps } from "@lucide/svelte"
import type { Component, Snippet } from "svelte"

export type MenuProps = WithChildrenSnippet<{
  rightSlot?: Snippet
  icon?: Component<IconProps>
  active?: boolean
  disabled?: boolean
}>
