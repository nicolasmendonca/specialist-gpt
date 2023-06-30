import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./chat/[role]/$types";
import { rolesSchema } from "./api/chat/prompts";

export const load = (async () => {
    throw redirect(302, `/chat/${rolesSchema.Values.therapist}`)
}) satisfies PageServerLoad;