import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	return {
		urlPathname: event.url.pathname,
		theme: event.cookies.get('theme') ?? 'dracula'
	};
}) satisfies LayoutServerLoad;
