import type { ComponentProps } from "svelte"

import Collapser from "./Collapser.svelte"

type CollapserProps = ComponentProps<typeof Collapser>

import Portal from "./Portal.svelte"

type PortalProps = ComponentProps<typeof Portal>

export { Collapser, Portal, type CollapserProps, type PortalProps }
