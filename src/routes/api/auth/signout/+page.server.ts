import { logged_in } from '$lib/stores/auth.js'
import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      logged_in.set(false)
      throw redirect(303, '/')
    }
    
    return { session }
}