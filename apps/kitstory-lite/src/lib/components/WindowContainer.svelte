<script lang="ts">
import type { WithChildrenSnippet } from "@kitstory/shared/types"
import { getSidebarToggle, setSidebarToggle } from "@kitstory/ui/context"

import {
  XIcon as CloseIcon,
  SquareIcon as MaxIcon,
  MenuIcon,
  MinusIcon as MiniIcon,
  PanelLeft,
  PanelLeftClose,
  PanelLeftDashed,
  PanelLeftOpen,
  PanelRight,
  CopyIcon as RestoreIcon,
} from "@lucide/svelte"
import { getCurrentWindow } from "@tauri-apps/api/window"
import { onMount, type Snippet } from "svelte"

interface Props {
  titlebarActions: Snippet
  breadcrumbs: Snippet
}

const { children, titlebarActions, breadcrumbs }: WithChildrenSnippet<Props> = $props()

let closeButton: HTMLButtonElement
let restoreButton: HTMLButtonElement
let maximizeButton: HTMLButtonElement
let minmizeButton: HTMLButtonElement

const globalSidebar = getSidebarToggle()

onMount(() => {
  const w = getCurrentWindow()

  w.onResized((e) => {
    console.log("resized", e)
  })

  closeButton.addEventListener("click", () => {
    // TODO add a confirmation system modal if there are unsaved changes
    w.close()
  })
  restoreButton.addEventListener("click", () => {
    w.unmaximize()
  })
  maximizeButton.addEventListener("click", () => {
    w.maximize()
  })
  minmizeButton.addEventListener("click", () => {
    w.minimize()
  })
})
</script>

<div
  id="window-wrapper"
  class="grid grid-rows-[auto_1fr] h-[100dvh] overflow-hidden"
>
  <div id="title-bar" class="h-10 flex items-center gap-x-0.5 overflow-hidden">
    <div class="h-full relative select-none shrink-0 flex items-center gap-x-2">
      <div class="inline-flex items-center">
        <button
          class="p-2 h-full inline-flex items-center cursor-pointer hover:bg-neutral-500/40 rounded-md"
        >
          <span class="font-semibold ml-1">Kitstory</span>
          <div
            class="ml-1 inline-block text-xs px-1.5 py-0.5 bg-red-600 rounded-md"
          >
            Dev Build
          </div>
        </button>
        <button
          onclick={() => setSidebarToggle(!globalSidebar)}
          class="p-2 h-full place-items-center cursor-pointer hover:bg-neutral-500/40 rounded-md"
        >
          <PanelLeftDashed size={18} />
        </button>
      </div>
      <hr class="h-5 border-l mx-1" />
      <nav id="breadcrumbs">
        {@render breadcrumbs()}
        <!-- <button>Home</button> -->
      </nav>
    </div>
    <div
      data-tauri-drag-region
      class="h-full relative select-none flex-1"
    ></div>
    <!-- Right content -->
    {@render titlebarActions()}
    <!-- Window controls -->
    <hr class="h-5 border-l mx-1" />
    <button
      bind:this={minmizeButton}
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-400/75"
    >
      <MiniIcon size={19} />
    </button>
    <button
      bind:this={restoreButton}
      class="hidden py-1.5 h-full w-11 place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <RestoreIcon size={16} />
    </button>
    <button
      bind:this={maximizeButton}
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <MaxIcon size={14} />
    </button>
    <button
      bind:this={closeButton}
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-red-500/75"
    >
      <CloseIcon size={20} />
    </button>
  </div>
  {@render children()}
</div>
