<script lang="ts">
  import { Button } from "@kitstory/ui";
  import { EllipsisVerticalIcon, SearchIcon } from "@lucide/svelte";
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
          <div
            class="col-start-2 row-start-1 row-span-2 flex items-center justify-center"
          >
            <Button icon variant="secondary">
              <EllipsisVerticalIcon size={17} />
            </Button>
          </div>
        </div>
      {/each}
    </section>
  </div>
  <div class="shrink-0">Version Check for updates and stuff</div>
</div>
