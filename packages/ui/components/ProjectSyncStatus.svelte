<script lang="ts">
import { ChevronRightIcon, CloudOffIcon } from "@lucide/svelte"

interface Props {
  syncStatus?: "complete" | "progress" | "error" | "outdated"
  /** localOnly can also be triggered when device has no internet or lost connection */
  localOnly?: boolean
  timeSinceSync?: Date
  errorMsg?: string
}

const { syncStatus, localOnly, timeSinceSync, errorMsg }: Props = $props()
</script>

<div class="opacity-75 inline-flex items-center">
  <CloudOffIcon size={17} class="inline-block align-middle" />
  <span class="text-sm ml-1">Local only</span>
  <ChevronRightIcon size={16} class="inline-block align-middle" />
</div>
