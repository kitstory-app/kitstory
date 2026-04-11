<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import type { Snippet } from "svelte";

  interface Props {
    actionSlot?: Snippet;
    disabled?: boolean;
    class?: string;
  }

  const {
    children,
    class: className,
    actionSlot,
    disabled = false,
  }: WithChildrenSnippet<Props> = $props();
</script>

<div role="menuitem" tabindex="-1" aria-disabled={disabled} class={className}>
  <div>{@render children?.()}</div>
  <div>{@render actionSlot?.()}</div>
</div>
