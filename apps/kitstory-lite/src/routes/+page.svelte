<script lang="ts">
import { Button } from "@kitstory/ui"
import { EllipsisIcon, HistoryIcon } from "@lucide/svelte"
</script>

<div class="space-y-3.5">
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
</div>
<!-- todo: Move this abomination as its own component, this is for login/first-time onboarding -->
<!-- <main
  class="flex flex-col justify-center items-center mx-auto max-w-screen-lg gap-y-10"
>
  <div
    class="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
    style={`background-image: url(${kinter});`}
  ></div>
  <h1 class="text-center space-y-2">
    <div class="text-3xl font-bold">Kitstory</div>
    <span>by Fusky Labs</span>
  </h1>

  <div class="grid text-left space-y-4 w-80">
    <button
      class="px-3 border py-2.5 rounded-md cursor-pointer hover:bg-white hover:text-black"
      >Create new workspace</button
    >
    <div
      class="flex items-center gap-x-4 before:border before:w-full after:border after:w-full"
    >
      <span>or</span>
    </div>
    <button
      class="px-3 border py-2.5 rounded-md cursor-pointer hover:bg-white hover:text-black"
      >Sign in or create account</button
    >
  </div>
  <div class="absolute bottom-4">
    <span class="text-sm">
      &copy; 2025 Fusky Labs Software and contributors. All rights reserved.
    </span>
  </div>
</main> -->
