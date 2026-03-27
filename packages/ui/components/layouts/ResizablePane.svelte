<script lang="ts">
import type { Snippet } from "@kitstory/shared/types"

interface Props {
  leftPane?: Snippet
  rightPane?: Snippet
}

const { leftPane, rightPane }: Props = $props()
</script>

<div id="resizable-pane" class="flex" style="--pane-size: 600px;">
  <section id="pane-left" class="shrink-0 overflow-hidden basis-(--pane-size)">
    {@render leftPane?.()}
  </section>
  {#if rightPane}
    <div
      id="split-view-grip"
      class="mx-0.5 relative before:block before:inset-y-0 before:h-full before:w-0.5 before:bg-white"
    ></div>
    <section id="pane-right" class="flex-1 overflow-hidden">
      {@render rightPane()}
    </section>
  {/if}
</div>
