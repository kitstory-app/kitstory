<script lang="ts">
  import type { WithChildrenSnippet, Snippet } from "@kitstory/shared/types";

  interface Props {
    class?: string;

    /** Instead of this component generating a UUID, it's best for components
     * to independently generate a UUID on their own, so that there's no server mismatch
     */
    uuid?: unknown;
    /** @internal */
    _blockType: string;
    blockIndex?: number;

    lowerThird?: Snippet;

    [x: string]: unknown;
  }

  const {
    lowerThird,
    children,
    class: className,
    _blockType,
    blockIndex,
    uuid,
    ...others
  }: WithChildrenSnippet<Props> = $props();
</script>

<!-- This is a base block component responsible for handling its position and the drag and drop logic -->
<section {...others} class={["relative group", className]}>
  <div class="w-full border rounded-md px-2.5 py-3.5">
    {@render children()}
  </div>
  <div
    id="adder"
    class="absolute -bottom-2.5 inset-x-0 flex justify-center gap-x-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
  >
    {@render lowerThird?.()}
  </div>
</section>
