<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import type { HTMLAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  interface Props extends Pick<HTMLAttributes<HTMLElement>, "class"> {
    as?: keyof HTMLElementTagNameMap;
    larger?: boolean;
  }

  const {
    as: Element = "div",
    children,
    class: className,
    larger,
  }: WithChildrenSnippet<Props> = $props();
</script>

<svelte:element
  this={Element}
  data-clamp-container=""
  class={twMerge([
    larger ? "max-w-screen-2xl" : "max-w-7xl",
    "px-4 w-full mx-auto",
    className as string,
  ])}
>
  {@render children?.()}
</svelte:element>
