<script lang="ts">
  import { ChevronDownIcon } from "@lucide/svelte";
  import BlockBase from "./_BlockBase.svelte";
  import Button from "../Button.svelte";
</script>

<BlockBase
  type="character"
  data-test-id="character-block"
  class="flex items-start gap-x-3.5"
>
  <div class="flex-1 grid gap-y-2.5 relative">
    <div id="char-name-status-layer" class="flex items-center space-x-2">
      <button class="flex gap-x-1 items-center hover:underline">
        <div class="size-7 bg-amber-300 rounded-full shrink-0 mr-1.5"></div>
        <span class="font-semibold" translate="no">Character</span>
        <ChevronDownIcon size={18} />
      </button>
      <span class="align-middle text-sm opacity-75">last edited</span>
    </div>
    <textarea
      name="character-dialog"
      id="cd-block"
      class="dark:bg-neutral-800/40 rounded-md"
      autocapitalize="off"
      spellcheck="false"
    ></textarea>
  </div>
  {#snippet lowerThird()}
    <div class="flex items-center gap-x-1.5 select-none">
      <Button>Character</Button>
      <Button>Character</Button>
      <Button>Character</Button>
      <hr class="h-4 border" />
      <Button icon>
        <ChevronDownIcon size={18} />
      </Button>
    </div>
  {/snippet}
</BlockBase>
