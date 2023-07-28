import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
  
    // Check if logged in, then check role to determine which dashboard to redirect to,
    // if not, redirect to login.
    if (!session) {
      throw redirect(303, '/login')
    }
  
    const { data: profile, error } = await supabase
    .from('user_login')
    .select(`role_id`)
    .eq('user_id', session.user.id)
    .single()

    // Get role from session
    let role: number = profile?.role_id ?? ''

    // if role == student, redirect to student dashboard
    // if role == alumni, redirect to alumni dashboard
    // if role == employer, redirect to employer dashboard
    if (role == 1) {
        throw redirect(303, '/profile')
    } else if (role == 2) {
        throw redirect(303, '/alumni-dashboard')
    } else if (role == 3) {
        throw redirect(303, '/emp-dashboard')
    } else if (role == 4) {
        throw redirect(303, '/admin/dashboard')
    }
  
    return { session, profile, error }
}