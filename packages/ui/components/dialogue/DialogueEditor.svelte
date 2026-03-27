<script lang="ts">
import { Button, DialogueTextbox } from "../.."
</script>

<div
  data-dialogue-editor=""
  class="@container/dialogue relative h-(--dialogue-editor-height) w-(--dialogue-editor-width) min-w-[400px]"
>
  <div
    id="ks-block-toolbar"
    class="absolute top-0 inset-x-0 h-12 flex items-center px-3 gap-x-2 not-[data-spacer]:*:shrink-0"
  >
    <Button>in</Button>
    <Button>out</Button>
    <Button>comment</Button>
    <div class="flex-1 w-full"></div>
    <Button>Select</Button>
    <Button>More</Button>
  </div>
  <div
    id="ks-block-quick-access"
    class="absolute bottom-4 inset-x-0 flex justify-center items-center"
  >
    <div id="ksqc-characters">
      <Button>Judy</Button>
      <Button>Nick</Button>
    </div>
    <div id="ksqc-utils">
      <Button>Cue</Button>
      <Button>Narrative</Button>
    </div>
  </div>
  <div id="ks-block-containers" class="my-12 px-3">
    <DialogueTextbox />
  </div>
</div>
