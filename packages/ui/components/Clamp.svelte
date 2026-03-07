<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import type { WithChildrenSnippet } from "@kitstory/shared/types";

  interface Props {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
    larger?: boolean;
  }

  const {
    as: Element = "div",
    children,
    class: classN,
    larger,
  }: WithChildrenSnippet<Props> = $props();
</script>

<svelte:element
  this={Element}
  data-clamp-container=""
  class={twMerge([
    larger ? "max-w-screen-2xl" : "max-w-7xl",
    "px-4 w-full mx-auto",
    classN,
  ])}
>
  {@render children?.()}
</svelte:element>
