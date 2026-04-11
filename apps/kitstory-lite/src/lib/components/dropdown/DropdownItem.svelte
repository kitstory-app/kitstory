<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends Pick<HTMLAttributes<HTMLElement>, "class"> {
    actionSlot?: Snippet;
    disabled?: boolean;
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
