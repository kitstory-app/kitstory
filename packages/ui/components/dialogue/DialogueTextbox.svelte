<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  interface Props extends Pick<HTMLAttributes<HTMLElement>, "class"> {}

  const { class: className }: Props = $props();

  const normalizeInput = (e: InputEvent) => {
    if (e.inputType === "insertParagraph") {
      e.preventDefault();
      document.execCommand("insertHTML", false, "<p><br></p>");
    }

    if (e.inputType === "insertFromPaste") {
      e.preventDefault();
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
    document.execCommand(
      "insertText",
      false,
      e.clipboardData?.getData("text/plain") ?? "",
    );
  };

  let _nodes: unknown[] = [];

  const handleAST = (e: Event) => {
    const target = e.target as HTMLElement;

    const domNodes = Array.from(target.childNodes).map((node) => {
      const innerNodes = node.childNodes;
      return {
        plaintext: node.textContent,
        nodes: Array.from(innerNodes).map((innerNode) => {
          const nodeName = innerNode.nodeName;

          if (nodeName === "#text") {
            return {
              format: [],
              text: node.textContent,
            };
          }

          if (nodeName === "B") {
            return {
              format: ["bold"],
              text: node.textContent,
            };
          }
          if (nodeName === "I") {
            return {
              format: ["italic"],
              text: node.textContent,
            };
          }
          if (nodeName === "U") {
            return {
              format: ["underline"],
              text: node.textContent,
            };
          }
        }),
      };
    });

    _nodes = domNodes;
  };
</script>

<!--
@component

A custom textbox with custom parsing for inline expression chips
-->
<div
  tabindex="0"
  role="textbox"
  class={twMerge("flex-1 p-3 rounded-md border", className)}
  contenteditable="true"
  onbeforeinput={normalizeInput}
  oninput={handleAST}
  onpaste={handlePaste}
>
  <p><br /></p>
</div>
