<script lang="ts">
import type { WithChildrenSnippet } from "@kitstory/shared/types"

interface Props {
  buttons?: boolean
}

const { children }: WithChildrenSnippet<Props> = $props()
</script>
