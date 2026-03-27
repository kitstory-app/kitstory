<script lang="ts">
  import type { WithChildrenSnippet, Snippet } from "@kitstory/shared/types";

  interface Props {
    class?: string;

    /** Instead of this component generating a UUID, it's best for components
     * to independently generate a UUID on their own, so that there's no server mismatch
     */
    uuid?: unknown;
    /** @internal */
    type: string;
    blockIndex?: number;

    lowerThird?: Snippet;

    [x: string]: unknown;
  }

  const {
    lowerThird,
    children,
    class: className,
    type,
    blockIndex,
    uuid,
    ...others
  }: WithChildrenSnippet<Props> = $props();
</script>

<!-- This is a base block component responsible for handling its position and the drag and drop logic -->
<section {...others} class={["relative group", className]}>
  <div class="w-full border rounded-md px-2.5 py-3.5">
    {@render children?.()}
  </div>
  <div
    id="adder"
    class="absolute z-1 -bottom-7 inset-x-0 flex justify-center gap-x-1 pointer-events-none group-hover:pointer-events-auto transition-[opacity,scale] duration-200 scale-98 group-hover:scale-100 opacity-0 group-hover:opacity-100"
  >
    <div class="bg-neutral-950 p-2 rounded-sm">
      {@render lowerThird?.()}
    </div>
  </div>
</section>
