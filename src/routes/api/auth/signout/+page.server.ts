import { JobApplications } from '$lib/stores/alumni_store.js'
import { Applications } from '$lib/stores/application_store.js'
import { logged_in } from '$lib/stores/auth.js'
import { ApplicantInfo, JobApplication } from '$lib/stores/student/student_store.js'
import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      logged_in.set(false)
      ApplicantInfo.set(undefined)
      JobApplication.set(undefined)
      JobApplications.set(undefined)
      Applications.set(undefined)
      throw redirect(303, '/')
    }
    
    return { session }
}