<script lang="ts">
  import type { WithChildrenSnippet } from "@kitstory/shared-web/types";
  import { onMount } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { Portal } from "@kitstory/ui/components/layouts";
  import { twMerge } from "tailwind-merge";
  import { createPositionTracker } from "../../utils/trackDOMPosition";
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

  const getItems = () => {
    if (!docRoot) return [];

    return Array.from(
      docRoot.querySelectorAll<HTMLElement>(
        '[role="menuitem"]:not([aria-disabled="true"])',
      ),
    );
  };

  const focusIndexItem = (index: number) => {
    const items = getItems();
    if (!items.length) return;

    const next = (index + items.length) % items.length;
    items[next]?.focus();
  };

  const focusFirstItem = () => {
    focusIndexItem(0);
  };

  const onMenuKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      ctx.close();
      ctx.getTriggerElement()?.focus();
      return;
    }

    if (event.key === "Tab") {
      ctx.close();
      return;
    }

    const items = getItems();
    if (!items.length) return;

    const activeElement = document.activeElement as HTMLElement | null;
    // biome-ignore lint/style/noNonNullAssertion: required when dealing with DOM elements
    const index = items.indexOf(activeElement!);

    if (event.key === "ArrowDown") {
      event.preventDefault();

      focusIndexItem(index + 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      focusIndexItem(index < 0 ? items.length - 1 : index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();

      focusIndexItem(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();

      focusIndexItem(items.length - 1);
      return;
    }
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
        focusFirstItem();
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
