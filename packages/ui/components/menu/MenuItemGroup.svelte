<script lang="ts">
import { ChevronDownIcon } from "@lucide/svelte"
import { Collapser } from "../templates"
import MenuItem from "./MenuItem.svelte"
import type { MenuProps } from "./MenuItem.types"

interface Props extends MenuProps {
  label: string
  isCollapsed?: true
}

const { label, isCollapsed, icon, active, children, disabled, rightSlot: rootRightSlot }: Props = $props()

let isOpen = $state(isCollapsed ?? false)

const toggleState = () => {
  isOpen = !isOpen
}
</script>

<Collapser id="menu-item-group" state={isOpen}>
  {#snippet heading()}
    <MenuItem {icon} {disabled} {active}>
      {label}
      {#snippet rightSlot()}
        {@render rootRightSlot?.()}
        <button
          class="p-2 cursor-pointer opacity-60 hover:opacity-100"
          onclick={toggleState}
        >
          <ChevronDownIcon size={19} class={isOpen ? "rotate-180" : null} />
        </button>
      {/snippet}
    </MenuItem>
  {/snippet}
  <div class="ml-5">
    {@render children?.()}
  </div>
</Collapser>
