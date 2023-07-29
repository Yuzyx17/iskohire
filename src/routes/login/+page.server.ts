import { log_id, logged_in } from '$lib/stores/auth'
import { redirect } from '@sveltejs/kit'

export const load = async ({ url, locals: { getSession } }) => {
	const session = await getSession()
	// if the user is already logged in return them to the account page
	if (session !== null) {
		throw redirect(303, '/api/redirect/dashboard')
	}
	logged_in.set(true)
	return { url: url.origin }
}