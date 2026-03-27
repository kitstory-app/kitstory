<script lang="ts">
  import { Button } from "@kitstory/ui";
  import NavbarBase from "./NavbarBase.svelte";
  import { MenuIcon } from "@lucide/svelte";

  const onboardItems = [
    { heading: "Features", items: [] },
    { heading: "Solutions", items: [] },
    { heading: "Roadmap", href: "/roadmap" },
    { heading: "Open Sauce", href: "/open-source" },
  ];
</script>

<NavbarBase>
  <!-- Left -->
  <div class="flex items-center gap-x-2">
    <Button icon variant="secondary" class="md:hidden">
      <MenuIcon size={19} />
    </Button>
    <a href="/">Kitstory</a>

    <ul class="inline-flex gap-x-5 ml-6">
      {#each onboardItems as { heading, items, href }}
        <li class="text-base">
          <svelte:element this={href ? "a" : "span"} {href}>
            {heading}
          </svelte:element>
        </li>
        <!-- {#if items}
          <div></div>
        {/if} -->
      {/each}
    </ul>
  </div>

  <!-- Right -->
  <div class="shrink-0 flex items-center gap-x-1.5">
    <Button variant="primary" size="big">Log In</Button>
  </div>
</NavbarBase>
