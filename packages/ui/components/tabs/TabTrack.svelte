<script lang="ts">
import type { Snippet } from "@kitstory/shared-web/types"
import { XIcon } from "@lucide/svelte"
import { getTabContext } from "./tabContext"

interface Props {
  additionalActions?: Snippet
}

const { additionalActions }: Props = $props()

const tabList = getTabContext()
let tabTrackRef: HTMLElement

function setActiveTab(tabInstance: symbol) {
  // impl pending
}

function closeTab(tabInstance: symbol) {
  // impl pending
}
</script>

<div id="tab-track" role="tablist" class="relative h-12">
  {#each tabList as tab}
    <div
      tabindex="0"
      role="tab"
      class="inline-flex"
      onclick={() => setActiveTab(tab.tabInstance)}
    >
      <span>
        {tab.name}
      </span>
      <button class="p-2 shrink-0" onclick={() => closeTab(tab.tabInstance)}>
        <XIcon size={14} />
      </button>
    </div>
  {/each}

  {#if additionalActions}
    <div class="absolute inset-y-0 right-0">
      {@render additionalActions()}
    </div>
  {/if}
</div>
