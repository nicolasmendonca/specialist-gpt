import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	return {
		theme: event.cookies.get('theme') ?? 'dracula'
	};
}) satisfies LayoutServerLoad;
