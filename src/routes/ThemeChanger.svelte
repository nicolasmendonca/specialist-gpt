<script lang="ts">
	import { enhance } from '$app/forms';

	let darkThemes = [
		// Dark themes
		'dark',
		'synthwave',
		'halloween',
		'forest',
		'black',
		'luxury',
		'dracula',
		'business',
		'night',
		'coffee'
	] as const;
	// Light themes
	const lightThemes = [
		'light',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'retro',
		'cyberpunk',
		'valentine',
		'garden',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'cmyk',
		'autumn',
		'acid',
		'lemonade',
		'winter'
	] as const;

	$: allThemes = [...darkThemes, ...lightThemes];
</script>

<div title="Change Theme" class="dropdown dropdown-top w-full">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div tabindex="0" class="btn normal-case w-full btn-ghost justify-start">
		<svg
			width="20"
			height="20"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-5 w-5 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
			/></svg
		> <span class="hidden font-normal md:inline">Theme</span>
		<svg
			width="12px"
			height="12px"
			class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
		>
	</div>
	<div
		class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[70vh] max-h-96 w-full overflow-y-auto shadow mt-16"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
			{#each allThemes as themeOption}
				<div data-theme={themeOption}>
					<form method="post" action="?/setTheme" use:enhance>
						<input type="hidden" name="theme" value={themeOption} />
						<button
							class="outline-base-content overflow-hidden w-full rounded-lg text-left"
							type="submit"
							><div class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="invisible h-3 w-3 shrink-0"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm">{themeOption}</div>
										<div class="flex h-full flex-shrink-0 flex-wrap gap-1">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-primary w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						>
					</form>
				</div>
			{/each}
		</div>
	</div>
</div>
