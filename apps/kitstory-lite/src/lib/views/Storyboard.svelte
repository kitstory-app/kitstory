<script lang="ts">
  import { Button } from "@kitstory/ui";
  import { EllipsisIcon } from "@lucide/svelte";
</script>

<div class="space-y-3.5">
  <section class="px-6 py-8 space-y-1">
    <div
      data-editable-field=""
      class="group px-2 py-1 rounded-md inline-flex gap-x-2 hover:bg-gray-300/20"
    >
      <h1 class="text-2xl font-bold">KISS KISS FALL IN LOVE</h1>
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
</div>
