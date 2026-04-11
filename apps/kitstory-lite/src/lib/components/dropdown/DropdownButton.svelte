<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import type { Component } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { getDropdownContextState } from "./context";

  interface Props extends HTMLButtonAttributes {
    as?: keyof HTMLElementTagNameMap | Component;
    [key: string]: unknown;
  }

  const ctx = getDropdownContextState();
  const { isOpen } = ctx;
  const { children, as, ...rest }: WithChildrenSnippet<Props> = $props();

  const toggleState = (event: MouseEvent) => {
    if (event.currentTarget instanceof HTMLElement) {
      ctx.setTriggerElement(event.currentTarget);
    }

    ctx.toggle();
  };
</script>

{#if !as || typeof as === "string"}
  <svelte:element
    this={as || "button"}
    aria-haspopup="menu"
    aria-expanded={$isOpen}
    aria-controls={ctx.contentId}
    onclick={toggleState}
    {...rest}
  >
    {@render children?.()}
  </svelte:element>
{:else}
  {@const CustomButtonComponent = as}
  <CustomButtonComponent
    aria-haspopup="menu"
    aria-expanded={$isOpen}
    aria-controls={ctx.contentId}
    onclick={toggleState}
    {...rest}
  >
    {@render children?.()}
  </CustomButtonComponent>
{/if}
