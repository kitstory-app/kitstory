import type { ComponentProps } from "svelte"
import Collapser from "./Collapser.svelte"
import Portal from "./Portal.svelte"

export type CollapserProps = ComponentProps<typeof Collapser>
export type PortalProps = ComponentProps<typeof Portal>
export { Collapser, Portal }
