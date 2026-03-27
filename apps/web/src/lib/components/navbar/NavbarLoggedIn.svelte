<script lang="ts">
  import {
    BellIcon,
    CirclePlusIcon,
    CircleUserIcon,
    MenuIcon,
    SearchIcon,
  } from "@lucide/svelte";
  import { Button } from "@kitstory/ui";
  import Breadcrumbs from "../Breadcrumbs.svelte";
</script>

<nav class="fixed top-0 inset-x-0 flex items-center justify-between px-3 h-(--nav-padding-y)">
  <!-- Left -->
  <div class="flex items-center gap-x-2.5 overflow-x-hidden">
    <Button icon variant="secondary" size="big">
      <MenuIcon size={19} />
    </Button>
    <a href="/">Kitstory</a>
    <Breadcrumbs />
  </div>
  <!-- Right -->
  <div class="shrink-0 flex items-center gap-x-1.5">
    <div class="flex items-center px-3 py-1 rounded-full bg-red-600">
      <SearchIcon size={18} class="mr-1.5" />
      <div class="h-full">Find</div>
    </div>

    <hr class="border h-5 mx-1" />

    <Button icon variant="secondary" class="rounded-full p-1.5">
      <CirclePlusIcon size={19} />
    </Button>

    <Button icon variant="secondary" class="rounded-full p-1.5">
      <BellIcon size={19} />
    </Button>

    <button aria-label="Avatar of username" class="cursor-pointer">
      <div
        class="size-6 rounded-full bg-green-500 relative before:absolute before:-inset-0.5 before:bg-blue-400 before:rounded-full before:-z-10"
      ></div>
    </button>
  </div>
</nav>
