<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared/types";
  import { getDialogueBlocks } from "../../context";
  import Toolbar from "./Toolbar.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  const {
    children,
    class: _class,
  }: WithChildrenSnippet<Pick<HTMLAttributes<HTMLElement>, "class">> = $props();
</script>

<div id="ks-block-manager" class={twMerge("relative pt-14", _class as string)}>
  <Toolbar />
  <div class="px-3 space-y-6">
    <!-- temporary; getDialogueBlocks will take precendence and render its elements accordingly -->
    {@render children?.()}
  </div>
</div>
