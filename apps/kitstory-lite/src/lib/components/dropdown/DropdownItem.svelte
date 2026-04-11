<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  interface Props extends Pick<HTMLAttributes<HTMLElement>, "class"> {
    as?: keyof HTMLElementTagNameMap;
    actionSlot?: Snippet;
    disabled?: boolean;
    separator?: boolean;
  }

  const {
    as = "div",
    children,
    class: className,
    actionSlot,
    disabled,
    separator = false,
  }: WithChildrenSnippet<Props> = $props();
</script>

{#if separator}
  <div
    role="separator"
    aria-orientation="horizontal"
    class={twMerge("my-2 h-px w-full bg-current/20", className as string)}
  ></div>
{:else}
  <svelte:element
    this={as}
    role="menuitem"
    tabindex="-1"
    aria-disabled={disabled ?? undefined}
    class={className}
  >
    {@render children?.()}
    <div>{@render actionSlot?.()}</div>
  </svelte:element>
{/if}
