<script lang="ts">
  import { Button } from "@kitstory/ui";
  import { EllipsisIcon, EllipsisVerticalIcon, HistoryIcon, SearchIcon } from "@lucide/svelte";
</script>

<div
  class="grid grid-rows-[1fr_auto] mx-auto max-w-3xl px-8 gap-x-8 h-[calc(100dvh_-_--spacing(16))]"
>
  <div class="mt-16">
    <h1 class="text-4xl select-none opacity-65">
      <span class="font-semibold">Kitstory</span> Lite
    </h1>
    <div class="flex gap-x-1.5 mt-10">
      <Button size="big" class="flex-1">New project</Button>
      <Button size="big">Open</Button>
    </div>
    <div class="my-3 flex items-center justify-between">
      <h2 class="font-semibold text-lg">Recent projects</h2>
      <Button icon variant="secondary">
        <SearchIcon size={17} />
      </Button>
    </div>
    <section class="grid gap-y-1 h-96">
      {#each [...new Array(6)] as _}
        <div
          class="grid grid-cols-[1fr_auto] p-3 rounded-md bg-neutral-400/60 hover:bg-neutral-500"
        >
          <div class="font-semibold text-base">Project name</div>
          <div class="inline-flex gap-x-4 col-start-1">
            <span>Last opened</span>
            <span>Doc details</span>
            <span>State</span>
          </div>
          <div class="col-start-2 row-start-1 row-span-2 flex items-center justify-center">
            <Button icon variant="tritery">
              <EllipsisVerticalIcon size={17} />
            </Button>
          </div>
        </div>
      {/each}
    </section>
  </div>
  <div class="shrink-0">Version Check for updates and stuff</div>
</div>

<!-- Storyboard thingy -->
<!-- <div class="space-y-3.5">
  <section class="px-6 py-8 space-y-1">
    <div
      data-editable-field=""
      class="group px-2 py-1 rounded-md inline-flex gap-x-2 hover:bg-gray-300/20"
    >
      <h1 class="text-2xl font-bold">
        KISS KISS FALL IN LOVE
      </h1>
      <button
        class={[
          "pointer-events-none group-hover:pointer-events-auto",
          "invisible group-hover:visible",
        ]}
      >
        <EllipsisIcon />
      </button>
    </div>
    <div class="flex items-center gap-x-2.5">
      <span class="inline-flex items-center gap-x-1">
        <div data-avatar-stack="" class="flex items-center *:not-first:-ml-1.5">
          <div class="size-6 bg-blue-500 rounded-full border"></div>
          <div class="size-6 bg-blue-500 rounded-full border"></div>
          <div class="size-6 bg-blue-500 rounded-full border"></div>
        </div>
        <span>Edited 69 days ago</span>
      </span>
      <Button>Tags</Button>
      <Button>Info</Button>
    </div>
  </section>
  <main class="px-6 pb-10">
    <Button>Add characters</Button>
  </main>
</div> -->
