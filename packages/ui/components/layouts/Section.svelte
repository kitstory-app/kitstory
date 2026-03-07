<script lang="ts">
  import type { Snippet } from "svelte";
  import type { WithChildrenSnippet } from "@kitstory/shared/types";
  interface Props {
    /** A simple heading that's used for accessibility; if no `heading()` is available,
     * it fallbacks into a simple heading instead. However,  it can be used to
     * override when using `{#snippet heading()}`
     * */
    label: string;
    heading?: Snippet<[{ labelText?: string; hashed?: string }]>;
    headingActions?: Snippet;
  }

  const {
    label,
    children,
    heading,
    headingActions,
  }: WithChildrenSnippet<Props> = $props();
</script>

<section>
  <div id="sect-heading" class="flex items-center not-[.flex-1]:shrink-0">
    <div id="dynamic-heading-slot" class="flex-1">
      {#if heading}
        {@render heading?.({ labelText: label, hashed: "" })}
      {:else}
        <span class="font-bold text-2xl">
          {label}
        </span>
      {/if}
    </div>
    {#if headingActions}
      {@render headingActions()}
    {/if}
  </div>
  <div id="sect-contents">
    {@render children?.()}
  </div>
</section>
