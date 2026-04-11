<script lang="ts">
  import "../styles.css";
  import "@fontsource/azeret-mono";

  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisVerticalIcon,
    PlusIcon,
  } from "@lucide/svelte";
  import { WindowContainer } from "@kitstory/ui/components/layouts";
  import { Button } from "@kitstory/ui/components";
  import {
    Dropdown,
    DropdownButton,
    DropdownContents,
    DropdownItem,
  } from "$lib/components/dropdown";

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
      <Button
        icon
        title="New tab"
        class="py-1.5 h-full flex items-center gap-x-2 cursor-pointer px-1.5 bg-neutral-600/75 hover:bg-neutral-400/75 rounded-md"
      >
        <PlusIcon size={19} />
      </Button>
      <!-- <button>Home</button> -->
    </nav>
  {/snippet}

  {#snippet rightActions()}
    <Dropdown>
      <DropdownButton as={Button} icon title="Settings" variant="secondary">
        <EllipsisVerticalIcon size={19} />
      </DropdownButton>
      <DropdownContents>
        <DropdownItem>Themes</DropdownItem>
        <DropdownItem>Options</DropdownItem>
      </DropdownContents>
    </Dropdown>
  {/snippet}

  <main id="root">
    {@render children()}
  </main>
</WindowContainer>
