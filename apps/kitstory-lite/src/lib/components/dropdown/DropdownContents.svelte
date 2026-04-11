<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import { onMount } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { Portal } from "@kitstory/ui/components/layouts";
  import { twMerge } from "tailwind-merge";
  import { createPositionTracker } from "../../utils/trackDOMPosition";
  import { createMenuA11y } from "../../utils/menuA11y";
  import { getDropdownContextState } from "./context";

  interface Props extends Pick<HTMLAttributes<HTMLElement>, "class"> {
    anchor?: "top" | "bottom";
  }

  const {
    children,
    class: className,
    anchor = "bottom",
  }: WithChildrenSnippet<Props> = $props();

  const ctx = getDropdownContextState();
  const { isOpen } = ctx;

  let open = $state(false);
  let docRoot = $state<HTMLDivElement | null>(null);
  let css = $state(
    "left: 0px; top: 0px; min-width: 0px; max-width: 0px; visibility: hidden;",
  );
  let outsideCtrl: AbortController | null = null;
  let watcher: ReturnType<typeof setTimeout> | null = null;

  const position = createPositionTracker({
    getReferenceElement: () => ctx.getTriggerElement(),
    getAnchor: () => anchor,
    setStyle: (style) => {
      css = style;
    },
    viewportEdge: 8,
    offset: 6,
    matchReferenceWidth: true,
  });

  // Accessibility stuff
  const menuA11y = createMenuA11y({
    getRoot: () => docRoot,
    onClose: () => ctx.close(),
    onEscape: () => {
      ctx.getTriggerElement()?.focus();
    },
  });

  const onMenuKeydown = (event: KeyboardEvent) => {
    menuA11y.onKeydown(event);
  };

  const clearWatcher = () => {
    if (watcher !== null) {
      clearTimeout(watcher);
      watcher = null;
    }

    outsideCtrl?.abort();
    outsideCtrl = null;
    position.stop();
  };

  const startWatcher = () => {
    clearWatcher();

    const next = new AbortController();
    outsideCtrl = next;

    const onDoc = (event: MouseEvent | FocusEvent) => {
      const _target = event.target;

      if (!(_target instanceof Node) || !docRoot) return;
      if (docRoot.contains(_target)) return;

      const trigger = ctx.getTriggerElement();
      if (trigger?.contains(_target)) return;

      ctx.close();
    };

    document.addEventListener("click", onDoc, {
      signal: next.signal,
    });

    document.addEventListener("focusin", onDoc, {
      signal: next.signal,
    });
  };

  onMount(() => {
    const unsubToggleState = isOpen.subscribe((nextOpen) => {
      open = nextOpen;

      if (!nextOpen) {
        clearWatcher();
        return;
      }

      watcher = setTimeout(() => {
        if (!(ctx.getIsOpen() && docRoot)) return;

        position.sync();
        position.start();
        startWatcher();
        menuA11y.focusFirstItem();
      }, 0);
    });

    return () => {
      unsubToggleState();
      clearWatcher();
    };
  });
</script>

<Portal focusGuard={open}>
  {#if open}
    <div
      data-fuskyui-dropdown-contents=""
      id={ctx.contentId}
      bind:this={docRoot}
      style={css}
      role="menu"
      aria-orientation="vertical"
      aria-label="Dropdown menu"
      tabindex="-1"
      onkeydown={onMenuKeydown}
      class={twMerge("fixed z-50 border rounded-sm p-2", className as string)}
    >
      {@render children?.()}
    </div>
  {/if}
</Portal>
