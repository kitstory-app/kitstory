<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared/types";

  const { children }: WithChildrenSnippet = $props();
</script>

<nav
  class="fixed top-0 inset-x-0 flex items-center justify-between px-3 h-(--nav-padding-y)"
>
  {@render children?.()}
</nav>
