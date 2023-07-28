import { log_id, user_id } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/login")
  }
  return {
    session: await getSession(),
  }
}