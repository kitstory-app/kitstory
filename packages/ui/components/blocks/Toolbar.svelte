<script lang="ts">
import {
  BoldIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FunnelIcon,
  ItalicIcon,
  MessageSquarePlusIcon,
  Redo2Icon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@lucide/svelte"
import { Button } from "../.."
import Separator from "../Separator.svelte"
</script>

<div
  class="absolute top-0 inset-x-0 px-3 bg-neutral-950 py-1.5 flex items-center gap-x-1"
>
  <!-- TODO add a resizeobserver to dynamically hide the buttons and nessle them from a dropdown -->
  <div id="toolbar-actions" class="flex items-center gap-x-1 flex-1 [--separator-padding:theme(spacing.1)]">
    <Button icon>
      <Undo2Icon size={18} />
    </Button>
    <Button icon>
      <Redo2Icon size={18} />
    </Button>

    <Separator />

    <Button icon title="Bold text">
      <BoldIcon size={18} />
    </Button>
    <Button icon title="Italicize text">
      <ItalicIcon size={18} />
    </Button>
    <Button icon title="Underline text">
      <UnderlineIcon size={18} />
    </Button>
    <Button icon title="Strike text">
      <StrikethroughIcon size={18} />
    </Button>

    <Separator />

    <Button icon title="Zoom out (Shift+Minus)">
      <ZoomOutIcon size={18} />
    </Button>
    <Button icon title="Zoom in (Shift+Plus)">
      <ZoomInIcon size={18} />
    </Button>

    <Separator />

    <Button icon title="Add comment">
      <MessageSquarePlusIcon size={18} />
    </Button>

    <div class="flex" title="Filter">
      <Button icon class="rounded-r-none">
        <FunnelIcon size={18} />
      </Button>
      <Button icon size="small" class="px-0.5 border-l-0 rounded-l-none">
        <ChevronDownIcon size={15} />
      </Button>
    </div>

    <Button icon title="More">
      <EllipsisVerticalIcon size={18} />
    </Button>
  </div>

  <Button>
    {#snippet leftSlot()}
      <EyeIcon size={18} />
    {/snippet}
    Preview
  </Button>
</div>
