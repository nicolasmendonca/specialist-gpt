import { ZodError } from 'zod';
import { rolesSchema } from '../../api/chat/prompts';
import type { Actions, PageServerLoad } from './$types';
import type { Message } from 'ai'
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
	try {
		
		const role = rolesSchema.parse(event.params.role);
		
		const initialMessages: Message[] = [
			{
				id: '1',
				role: 'assistant',
				content: `Hi there! I'm your ${role}. I'm glad you're here! How can I help you`,
			}
		]

		
		const chatUrl = new URL('/api/chat', event.url.origin)
		chatUrl.searchParams.append('role', role)

		return {
			chatUrl: chatUrl.toString(),
			initialMessages
		}
	} catch (e) {
		if (e instanceof ZodError) {
			throw redirect(302, `/chat/${rolesSchema.Values.therapist}`)
		}
	}

}) satisfies PageServerLoad;

export const actions = {
	setTheme: async (event) => {
		const formData = await event.request.formData();
		const theme = formData.get('theme')?.toString() ?? 'dracula';

		event.cookies.set('theme', theme, {
			path: '/'
		});

		return {
			success: true
		};
	}
} satisfies Actions;
