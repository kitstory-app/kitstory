import type { Snippet, Component } from "svelte"
import type { IconProps } from "@lucide/svelte"
import type { WithChildrenSnippet } from "@kitstory/shared/types"

export type MenuProps = WithChildrenSnippet<{
  rightSlot?: Snippet
  icon?: Component<IconProps>
  active?: boolean
  disabled?: boolean
}>
