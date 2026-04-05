<script lang="ts">
import type { WithChildrenSnippet } from "@kitstory/shared-web/types"

interface Props {
  buttons?: boolean
}

const { children }: WithChildrenSnippet<Props> = $props()
</script>
