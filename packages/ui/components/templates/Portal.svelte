<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared/types";

  const moveDom = (node: Element, inject: string) => {
    const target = document.querySelector(inject);
    target?.appendChild(node);

    return {
      destroy() {
        node.remove();
      },
    };
  };

  interface Props {
    focusGuard: boolean;
  }

  const { children, focusGuard }: WithChildrenSnippet<Props> = $props();
</script>

<div use:moveDom={"body"} data-portal="" class="contents">
  {#if focusGuard}
    <button data-focus-guard="" aria-hidden="true" class="sr-only"></button>
  {/if}
  {@render children?.()}
  {#if focusGuard}
    <button data-focus-guard="" aria-hidden="true" class="sr-only"></button>
  {/if}
</div>
