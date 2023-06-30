import type { Config } from '@sveltejs/adapter-vercel'
import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';
import { PROMPTS, rolesSchema } from './prompts';

export const config: Config = {
	runtime: "nodejs18.x",
}

const openAiConfig = new Configuration({
	apiKey: OPENAI_API_KEY
});
const openai = new OpenAIApi(openAiConfig);

export const POST = (async ({ request, url }) => {
	const role = rolesSchema.parse(url.searchParams.get('role'))
	const { messages } = await request.json();

	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		stream: true,
		temperature: 0.7,
		messages: [
			{
				role: 'assistant',
				content: PROMPTS[role],
				name: role
			},
			...messages
		]
	});

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);
	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
