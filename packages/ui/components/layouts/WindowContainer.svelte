<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
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
    titlebarActions?: Snippet;
    tabArea?: Snippet;
  }

  const { children, titlebarActions, tabArea }: WithChildrenSnippet<Props> =
    $props();

  let isMaximized = $state(false);

  const syncMaximizedState = async () => {
    const currentWindow = getCurrentWindow();
    isMaximized = await currentWindow.isMaximized();
  };

  const closeWindow = async () => {
    const currentWindow = getCurrentWindow();
    // TODO add a confirmation system modal if there are unsaved changes
    await currentWindow.close();
  };

  const restoreWindow = async () => {
    const currentWindow = getCurrentWindow();
    await currentWindow.unmaximize();
    await syncMaximizedState();
  };

  const maximizeWindow = async () => {
    const currentWindow = getCurrentWindow();
    await currentWindow.maximize();
    await syncMaximizedState();
  };

  const minimizeWindow = async () => {
    const currentWindow = getCurrentWindow();
    await currentWindow.minimize();
  };

  onMount(() => {
    let disposed = false;
    let unlistenResize: (() => void) | undefined;

    const initializeWindowState = async () => {
      const currentWindow = getCurrentWindow();
      await syncMaximizedState();

      const unlisten = await currentWindow.onResized(() => {
        void syncMaximizedState();
      });

      if (disposed) {
        unlisten();
        return;
      }

      unlistenResize = unlisten;
    };

    void initializeWindowState();

    return () => {
      disposed = true;
      unlistenResize?.();
    };
  });
</script>

<div
  id="window-wrapper"
  class="grid h-[100dvh] grid-rows-[auto_1fr] overflow-hidden"
>
  <div id="title-bar" class="flex h-10 items-center gap-x-0.5 overflow-hidden">
    <div class="relative flex h-full shrink-0 items-center gap-x-2 select-none">
      <div class="inline-flex items-center">
        <div class="h-full rounded-md p-2 text-base">
          <span class="ml-1 font-semibold">Kitstory Lite</span>
          <span class="ml-1 rounded-sm bg-red-600 px-1.5 py-0.5 text-sm"
            >Dev</span
          >
        </div>
      </div>
      <hr class="h-5 border-l" />
      <div class="contents *:shrink-0">
        {@render tabArea?.()}
      </div>
    </div>
    <div
      data-tauri-drag-region
      class="relative h-full flex-1 select-none"
    ></div>
    {#if titlebarActions}
      {@render titlebarActions()}
      <hr class="mx-1 h-5 border-l" />
    {/if}
    <button
      title="Settings"
      class="grid h-full w-11 cursor-pointer place-items-center py-1.5 hover:bg-neutral-400/75"
    >
      <EllipsisVerticalIcon size={19} />
    </button>
    <hr class="mx-1 h-5 border-l" />
    <button
      onclick={minimizeWindow}
      class="grid h-full w-11 cursor-pointer place-items-center py-1.5 hover:bg-blue-400/75"
    >
      <MiniIcon size={19} />
    </button>
    {#if isMaximized}
      <button
        onclick={restoreWindow}
        class="grid h-full w-11 cursor-pointer place-items-center py-1.5 hover:bg-blue-500/75"
      >
        <RestoreIcon size={16} class="rotate-90" />
      </button>
    {:else}
      <button
        onclick={maximizeWindow}
        class="grid h-full w-11 cursor-pointer place-items-center py-1.5 hover:bg-blue-500/75"
      >
        <MaxIcon size={14} />
      </button>
    {/if}
    <button
      onclick={closeWindow}
      class="grid h-full w-11 cursor-pointer place-items-center py-1.5 hover:bg-red-500/75"
    >
      <CloseIcon size={20} />
    </button>
  </div>
  {@render children?.()}
</div>
