<script lang="ts">
  import "../styles.css";
  import "@fontsource/azeret-mono";

  import { message } from "@tauri-apps/plugin-dialog";

  import {
    BellIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    InboxIcon,
    SettingsIcon,
    CircleUserIcon,
    UserIcon,
  } from "@lucide/svelte";

  import WindowContainer from "$lib/components/WindowContainer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  const { children } = $props();
</script>

<WindowContainer>
  {#snippet breadcrumbs()}
    <nav id="breadcrumbs" class="flex">
      <button
        class="py-1.5 h-full w-8 grid place-items-center cursor-pointer hover:bg-neutral-400/75 rounded-md"
      >
        <ChevronLeftIcon size={19} />
      </button>
      <button
        class="py-1.5 h-full w-8 grid place-items-center cursor-pointer hover:bg-neutral-400/75 rounded-md"
      >
        <ChevronRightIcon size={19} />
      </button>
      <!-- <button>Home</button> -->
    </nav>
  {/snippet}
  {#snippet titlebarActions()}
    <button
      class="inline-flex items-center gap-x-2 px-2 h-full place-items-center cursor-pointer rounded-md hover:bg-neutral-500/40"
    >
      <InboxIcon size={22} />
    </button>
    <button
      class="inline-flex items-center gap-x-2 px-2.5 h-full place-items-center cursor-pointer rounded-md hover:bg-neutral-500/40"
    >
      <CircleUserIcon size={22} />
    </button>
  {/snippet}
  <div id="root" class="flex">
    <Sidebar />
    <div class="flex-1">
      {@render children()}
    </div>
  </div>
</WindowContainer>
