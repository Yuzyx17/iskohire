import { role_id } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession();
  if (!session || role_id != 3) {
    throw redirect(303, "/login")
  }
  return {
    session: await getSession(),
  }
}