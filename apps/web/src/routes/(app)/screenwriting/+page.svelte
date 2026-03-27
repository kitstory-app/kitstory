<script lang="ts">
import { BlockCharacter, BlockWrapper } from "@kitstory/ui/components/blocks"
import ResizablePane from "@kitstory/ui/components/layouts/ResizablePane.svelte"
</script>

<ResizablePane>
  {#snippet leftPane()}
    <BlockWrapper>
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
    </BlockWrapper>
  {/snippet}
  {#snippet rightPane()}
    <div>tabs</div>
  {/snippet}
</ResizablePane>
