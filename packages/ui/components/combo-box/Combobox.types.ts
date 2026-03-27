import type { ComponentProps } from "svelte"
import type Button from "../Button.svelte"

export type PluckedButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "class">
