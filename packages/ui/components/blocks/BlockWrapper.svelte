<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared/types";
  import { getBlocks } from "../../context"

  const { children }: WithChildrenSnippet = $props();
</script>

<div id="ks-block-manager" class="space-y-6">
  {@render children?.()}
</div>
