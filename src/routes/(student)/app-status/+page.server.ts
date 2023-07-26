/** @type {import('./$types').Actions} */

import { user_id } from '$lib/stores/auth';
import { supabase } from '$lib/supabase.js';
import { fail, redirect } from '@sveltejs/kit';

// export const load = async ({ locals: {supabase, getSession} }) => {
//     const session = await getSession()

//     if(!session) {
//         throw redirect(303, '/')
//     }

//     return {session}
// }

export const actions = {
    cancel_app: async ({ request }) => {
        const formData = await request.formData()
        let jobid = formData.get('job_id') as string;
        const job_id = parseInt(jobid, 10);

        // const session = await getSession()

        // del job application of this user_id
        const { error } = await supabase
            .from('job_application')
            .delete()
            .eq('user_id', user_id)
            .eq('job_id', job_id)
        
        if(error) {
            console.log(error)
            return fail(500, {
                job_id,
                user_id
            })
        }

        return {
            job_id,
            user_id
        }
    }

}