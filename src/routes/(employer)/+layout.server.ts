import { log_id, role_id } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession();
  if (!session || (role_id != 3 && role_id != 4)) {
    throw redirect(303, "/login")
  }
  log_id.set(session?.user?.id)
  return {
    session: await getSession(),
  }
}