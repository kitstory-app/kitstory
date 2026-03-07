<script lang="ts">
  import type { Snippet } from "svelte";
  import type { PluckedButtonProps } from "./Combobox.types";

  import Button from "../Button.svelte";
  import { ChevronDownIcon } from "@lucide/svelte";
  import InputField from "../input/InputField.svelte";
  import type { WithChildrenSnippet } from "@kitstory/shared/types";

  interface Props extends PluckedButtonProps {
    icon: Snippet;
    name: string;
  }

  const {
    children,
    variant,
    icon,
    size,
    name,
  }: WithChildrenSnippet<Partial<Props>> = $props();
</script>

<InputField id="lol">
  {#snippet actions()}
    <span class="absolute right-0 inset-y-0 flex items-center">
      <Button icon variant="secondary">
        <ChevronDownIcon size={16} />
      </Button>
    </span>
  {/snippet}
</InputField>
