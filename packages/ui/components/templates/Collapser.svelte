<script lang="ts">
import type { WithChildrenSnippet } from "@kitstory/shared/types"
import type { Snippet } from "svelte"
import type { HTMLAttributes } from "svelte/elements"

// import { scale } from "svelte/transition"

type SelectedAttrs = Pick<HTMLAttributes<never>, "class" | "role" | "id">

interface Props extends SelectedAttrs {
  state?: boolean
  heading?: Snippet
}

const { state, children, heading, id, class: className }: WithChildrenSnippet<Props> = $props()
</script>

<svelte:element
  this={"kuro-ui-collapser"}
  {id}
  contents-open={state ? "" : undefined}
  class={className}
>
  {@render heading?.()}
  {#if state}
    <div data-kuro-ui-collapser-contents="">
      {@render children?.()}
    </div>
  {/if}
</svelte:element>

<style>
  kuro-ui-collapser {
    display: block;
  }
</style>
