<script lang="ts">
  import type { MenuProps } from "./MenuItem.types";

  interface Props extends MenuProps {
    as?: keyof HTMLElementTagNameMap;
  }

  const {
    children,
    rightSlot,
    as,
    icon: Icon,
    active = false,
    disabled = false,
  }: Props = $props();
</script>

<svelte:element
  this={as ?? "div"}
  data-menu-item=""
  class="flex items-center group hover:bg-neutral-800/60 duration-150 transition-color rounded-md"
>
  <a
    href="#"
    class="py-2 px-2.5 inline-flex items-center flex-1 gap-x-2 cursor-pointer"
  >
    <Icon size={20} class="opacity-60 group-hover:opacity-100" />
    {#if children}
      <span class="flex-1 select-none truncate">
        {@render children?.()}
      </span>
    {/if}
  </a>
  {@render rightSlot?.()}
</svelte:element>
