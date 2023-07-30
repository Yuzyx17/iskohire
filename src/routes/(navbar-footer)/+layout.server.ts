import { role_id } from '$lib/stores/auth.js'

export const load = async ({ locals: { getSession } }) => {
  return {
    session: await getSession(),
    role_ID : role_id,
  }
}