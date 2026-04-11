<script lang="ts">
import type { Snippet } from "svelte"
import type { HTMLInputAttributes } from "svelte/elements"
import { twMerge } from "tailwind-merge"

interface Props extends HTMLInputAttributes {
  actions?: Snippet
  inputClass?: string
}

const { id, type, actions, inputClass, class: className, ...others }: Props = $props()
</script>

<div data-input-field="" class={twMerge("relative", className as string)}>
  <input
    {id}
    {type}
    class={twMerge(
      "text-sm p-1.5 dark:bg-neutral-900 rounded-md",
      inputClass as string,
    )}
  />
  {@render actions?.()}
</div>
