<script lang="ts">
import type { Snippet, WithChildrenSnippet } from "@kitstory/shared-web/types"

interface Props {
  name: string
  /** If true, this panel will be set to default when `<TabContainer>` is initialized and if state is empty, otherwise,
   * if no `initialFocus` is set, the first TabPanel component will be present by default */
  initialFocus?: boolean
  tabTitle?: string
  tabIcon?: Snippet
  tabSuffix?: Snippet
}

const { children, name, initialFocus }: WithChildrenSnippet<Props> = $props()

// svelte-ignore state_referenced_locally
const uniqueName = Symbol(name)
</script>

<div id="tab-pane" data-tab-name="">
  {@render children?.()}
</div>
