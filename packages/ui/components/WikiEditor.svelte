<script lang="ts">
import Button from "./Button.svelte"
import { ComboboxButton } from "./combo-box"

type EditMode = "visual" | "source"

interface Props {
  editMode?: EditMode
}

const { editMode: defaultEditMode = "visual" }: Props = $props()

let editMode = $state<EditMode>(defaultEditMode)

const editModeMap: Record<EditMode, string> = {
  source: "Source",
  visual: "Visual",
}
</script>

<div
  data-wiki-editor=""
  class="@container/wiki flex flex-col min-w-[400px] min-h-[300px]"
>
  <section id="kswe-toolbar" class="shrink-0 flex items-center">
    <div id="kswe-formatting" class="flex-1 flex items-center gap-x-0.5">
      <Button variant="secondary">Bold</Button>
      <Button variant="secondary">Italic</Button>
      <Button variant="secondary">Underline</Button>
      <hr class="h-4 border border-transparent border-l-2 border-l-white" />
      <Button variant="secondary">More</Button>
    </div>
    <!-- todo: dropdown options (source, visual, source/visual in split pane) -->
    <ComboboxButton>{editModeMap[editMode]}</ComboboxButton>
  </section>
  <div id="work-section" class="flex-1 relative size-full" role="tabpanel">
    <textarea
      spellcheck="false"
      autocapitalize="off"
      name="visual-area"
      id="visual-area"
      class="resize-none absolute inset-0 dark:text-white dark:bg-neutral-950"
    ></textarea>
    <textarea
      spellcheck="false"
      autocapitalize="off"
      name="source-area"
      id="source-area"
      class="resize-none hidden absolute inset-0 dark:text-white dark:bg-neutral-950"
    ></textarea>
  </div>
</div>
