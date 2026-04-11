<script lang="ts">
  import type { Snippet } from "svelte";
  import {
    createDropdownContextState,
    setDropdownContextState,
  } from "./context";

  interface Props {
    children?: Snippet;
  }

  const ctx = createDropdownContextState();
  setDropdownContextState(ctx);

  const handleEscapeKey = (event: KeyboardEvent) => {
    const isEscPressed = event.key === "Escape";

    if (!(ctx.getIsOpen() && isEscPressed)) return;

    ctx.close();
    ctx.getTriggerElement()?.focus();
  };

  const { children }: Props = $props();
</script>

<svelte:window onkeydown={handleEscapeKey} />

{@render children?.()}
