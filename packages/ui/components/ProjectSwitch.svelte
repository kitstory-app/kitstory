<script lang="ts">
import { ChevronRightIcon, ChevronsUpDownIcon, CloudOffIcon } from "@lucide/svelte"
import ProjectSyncStatus from "./ProjectSyncStatus.svelte"
</script>

<div
  class="mx-0.5 border mb-2.5 mt-2 rounded-md bg-neutral-950 border-neutral-700 z-10"
>
  <button class="flex items-center gap-x-3 text-left py-2 pl-2">
    <div class="row-span-2 size-12 rounded-md bg-red-400"></div>
    <div class="flex flex-col gap-y-1.5">
      <div class="flex items-center">
        <span class="leading-none font-bold truncate text-lg">Project Name</span
        >
        <ChevronsUpDownIcon
          size={16}
          class="ml-1 opacity-75 inline-block align-middle"
        />
      </div>
      <div class="flex">
        <!-- todo: add role badge here -->
        <ProjectSyncStatus />
      </div>
    </div>
  </button>
</div>
