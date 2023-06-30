<script lang="ts">
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div data-theme={data.theme}>
	<Sidebar currentPath={data.urlPathname}>
		<slot />
	</Sidebar>
</div>
