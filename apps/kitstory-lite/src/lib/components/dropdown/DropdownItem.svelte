<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    actionSlot?: Snippet;
  }

  const { children, actionSlot }: Props = $props();
</script>

<div role="menuitem">
  <div>{@render children?.()}</div>
  <div>{@render actionSlot?.()}</div>
</div>
