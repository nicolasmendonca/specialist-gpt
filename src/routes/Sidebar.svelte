<script lang="ts">
	import ThemeChanger from './ThemeChanger.svelte';
	import { rolesSchema } from './api/chat/prompts';


	export let currentPath: string;
</script>

<div class="drawer drawer-open">
	<input id="page-sidebar" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="page-sidebar" class="drawer-overlay" />
		<div class="flex flex-col h-screen bg-base-200 text-base-content">
			<ul class="menu flex-nowrap flex-grow p-4 w-80 overflow-y-auto">
				<!-- Sidebar content here -->
				{#each rolesSchema.options as role}
					<li><a href="/chat/{role}" class:active={currentPath === `/chat/${role}`} class="capitalize">{role}</a></li>
				{/each}
			</ul>
			<div class="p-4 w-full">
				<ThemeChanger />
			</div>
		</div>
	</div>
</div>
