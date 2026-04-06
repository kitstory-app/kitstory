<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { getDropdownState, setDropdownState } from "./context";
  import { Portal } from "@kitstory/ui/components/layouts";

  interface Props {
    children?: Snippet;
  }

  onMount(() => {
    window.addEventListener("keydown", (e) => {
      const isDropdownActive = getDropdownState();
      const isEscPressed = e.key === "Escape";

      if (!(isDropdownActive && isEscPressed)) return;

      setDropdownState(false);
    });
  });

  const { children }: Props = $props();
</script>

<Portal>
  {@render children?.()}
</Portal>
