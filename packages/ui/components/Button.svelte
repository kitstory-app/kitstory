<script lang="ts">
import type { WithChildrenSnippet } from "@kitstory/shared/types"
import { cva } from "class-variance-authority"
import type { Snippet } from "svelte"
import type { HTMLButtonAttributes } from "svelte/elements"
import { twMerge } from "tailwind-merge"

interface Props extends HTMLButtonAttributes {
  leftSlot?: Snippet
  rightSlot?: Snippet

  icon?: boolean

  size?: "small" | "big"
  variant?: "primary" | "secondary"
}

const { class: className, icon, children, size, variant, leftSlot, rightSlot, ...others }: WithChildrenSnippet<Props> = $props()

const button = cva("rounded-sm inline-flex items-center gap-x-1.5 cursor-pointer transition-colors", {
  variants: {
    variant: {
      primary: "border border-red-500 hover:bg-red-900",
      secondary: "hover:bg-red-500/40",
    },
    size: {
      // svelte-ignore state_referenced_locally
      small: !icon ? "px-2 py-1" : "p-1.5",
      // svelte-ignore state_referenced_locally
      big: !icon ? "px-2.5 py-1.5" : "p-1",
    },
  },
})
</script>

<button
  {...others}
  class={twMerge(
    button({
      variant: variant || "primary",
      size: size || "small",
    }),
    className as string,
  )}
>
  {#if leftSlot}
    {@render leftSlot?.()}
  {/if}
  {@render children?.()}
  {#if rightSlot}
    {@render rightSlot?.()}
  {/if}
</button>
