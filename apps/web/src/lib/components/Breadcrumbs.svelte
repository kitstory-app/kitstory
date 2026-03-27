<script lang="ts">
  import { Button } from "@kitstory/ui";
  import { EllipsisIcon } from "@lucide/svelte";
  import { onMount } from "svelte";

  let _hasItemsTruncated = false;
  let crumbRoot: HTMLElement;

  onMount(() => {
    const crumbResizeObserve = new ResizeObserver((e) => {
      console.log(e);
    });

    crumbResizeObserve.observe(crumbRoot);

    return () => {
      crumbResizeObserve.unobserve(crumbRoot);
    };
  });
</script>

<ul
  bind:this={crumbRoot}
  id="breadcrumb-container"
  class={[
    "flex items-center gap-x-2",
    "*:before:h-4 *:before:border *:inline-flex *:items-center *:before:ml-0.5 *:before:mr-2.5 *:before:rotate-[18deg] *:before:border-slate-400/40",
  ]}
>
  {#if _hasItemsTruncated}
    <li>
      <Button icon>
        <EllipsisIcon size={18} />
      </Button>
    </li>
  {/if}
  <li>
    <a href="/#" class="px-1 py-1">Projects</a>
  </li>
</ul>
