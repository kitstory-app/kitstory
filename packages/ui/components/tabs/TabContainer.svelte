<script lang="ts">
import type { WithChildrenSnippet } from "@kitstory/shared-web/types"
import TabTrack from "./TabTrack.svelte"

const { children }: Required<WithChildrenSnippet> = $props()
</script>

<div id="tab-pane" class="flex flex-col">
  <TabTrack />
  {@render children()}
</div>
