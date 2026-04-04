<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared/types";

  import {
    XIcon as CloseIcon,
    SquareIcon as MaxIcon,
    MinusIcon as MiniIcon,
    CopyIcon as RestoreIcon,
    EllipsisVerticalIcon,
  } from "@lucide/svelte";
  import { getCurrentWindow } from "@tauri-apps/api/window";
  import { onMount, type Snippet } from "svelte";

  interface Props {
    titlebarActions: Snippet;
    tabArea: Snippet;
  }

  const { children, titlebarActions, tabArea }: WithChildrenSnippet<Props> =
    $props();

  let closeButton: HTMLButtonElement;
  let restoreButton: HTMLButtonElement;
  let maximizeButton: HTMLButtonElement;
  let minmizeButton: HTMLButtonElement;

  onMount(() => {
    const w = getCurrentWindow();

    w.onResized((e) => {
      console.log("resized", e);
    });

    closeButton.addEventListener("click", () => {
      // TODO add a confirmation system modal if there are unsaved changes
      w.close();
    });
    restoreButton.addEventListener("click", () => {
      w.unmaximize();
    });
    maximizeButton.addEventListener("click", () => {
      w.maximize();
    });
    minmizeButton.addEventListener("click", () => {
      w.minimize();
    });
  });
</script>

<div
  id="window-wrapper"
  class="grid grid-rows-[auto_1fr] h-[100dvh] overflow-hidden"
>
  <div id="title-bar" class="h-10 flex items-center gap-x-0.5 overflow-hidden">
    <div class="h-full relative select-none shrink-0 flex items-center gap-x-2">
      <div class="inline-flex items-center">
        <div class="p-2 h-full rounded-md text-base">
          <span class="font-semibold ml-1">Kitstory Lite</span>
          <span class="text-sm px-1.5 py-0.5 bg-red-600 rounded-sm ml-1"
            >Dev</span
          >
        </div>
      </div>
      <hr class="h-5 border-l" />
      <div class="contents *:shrink-0">
        {@render tabArea?.()}
      </div>
      <!-- <button>Home</button> -->
    </div>
    <div
      data-tauri-drag-region
      class="h-full relative select-none flex-1"
    ></div>
    {#if titlebarActions}
      <!-- Right content -->
      {@render titlebarActions()}
      <!-- Window controls -->
      <hr class="h-5 border-l mx-1" />
    {/if}
    <button
      title="Settings"
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-neutral-400/75"
    >
      <EllipsisVerticalIcon size={19} />
    </button>
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
  {@render children?.()}
</div>
