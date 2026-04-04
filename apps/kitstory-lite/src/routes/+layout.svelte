<script lang="ts">
  import "../styles.css";
  import "@fontsource/azeret-mono";

  import {
    BellIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CircleUserIcon,
    InboxIcon,
    PlusIcon,
    SettingsIcon,
    UserIcon,
  } from "@lucide/svelte";
  import { message } from "@tauri-apps/plugin-dialog";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import WindowContainer from "$lib/components/WindowContainer.svelte";

  const { children } = $props();
</script>

<WindowContainer>
  {#snippet tabArea()}
    <nav id="breadcrumbs" class="flex items-center">
      <button
        class="py-1.5 size-full w-8 grid place-items-center cursor-pointer hover:bg-neutral-400/75 rounded-md"
      >
        <ChevronLeftIcon size={19} />
      </button>
      <button
        class="py-1.5 h-full w-8 grid place-items-center cursor-pointer hover:bg-neutral-400/75 rounded-md"
      >
        <ChevronRightIcon size={19} />
      </button>
      <button
        title="New tab"
        class="py-1.5 h-full flex items-center gap-x-2 cursor-pointer px-1.5 bg-neutral-600/75 hover:bg-neutral-400/75 rounded-md"
      >
        <PlusIcon size={19} />
      </button>
      <!-- <button>Home</button> -->
    </nav>
  {/snippet}

  <main id="root">
    {@render children()}
  </main>
</WindowContainer>
