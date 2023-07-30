import { log_id, role_id, roleid } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession();

  if (!session || (role_id != 1 && role_id != 4)) {
    throw redirect(303, "/login")
  }
  log_id.set(session?.user?.id)
  return {
    session: await getSession(),
  }
}