<script lang="ts">
	import "../app.css";

	import interFont from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
	import interFont700 from "@fontsource/inter/files/inter-latin-700-normal.woff2?url";
	import { Navbar, NavbarLoggedIn } from "$lib/components/navbar";
	import { pwaInfo } from "virtual:pwa-info";
	import Footer from "$lib/components/Footer.svelte";
	import { onMount } from "svelte";
	import { dev } from "$app/environment";
	import type { LayoutProps } from "./$types";

	const { children, data }: LayoutProps = $props();

	const webManifest = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : "");

	if (dev) {
		onMount(() => {
			console.log(data);
		});
	}

	const fonts = [interFont, interFont700];
</script>

<svelte:head>
	{@html webManifest}
	<!-- Preload fonts -->
	{#each fonts as href}
		<link
			rel="preload"
			as="font"
			{href}
			crossorigin="anonymous"
			fetchpriority="high"
		/>
	{/each}
</svelte:head>

{#if !data.isLoggedIn}
	<Navbar />
{:else}
	<NavbarLoggedIn />
{/if}
<div id="ks-app-wrapper" class="flex gap-x-4 mt-(--nav-padding-y)">
	<!-- <aside class="shrink-0">sidebar</aside> -->
	<main
		id="skip-content"
		class="flex-1 dark:bg-neutral-900 bg-white dark:border-neutral-800 selection:bg-amber-300 selection:text-black min-h-[calc(theme(height.dvh)-calc(var(--nav-padding-y))*1)]"
	>
		{@render children()}
	</main>
</div>
{#if !data.isLoggedIn}
	<Footer />
{/if}
