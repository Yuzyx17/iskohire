/** @type {import('./$types').Actions} */

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
    add_educ: async ({ request }) => {
        const formData = await request.formData()
        const act_soc = formData.get('acts') as string
        const degree = formData.get('degree') as string
        const desc = formData.get('desc') as string

        let field = formData.get('field') as string
        const field_study = parseInt(field, 10) as number 

        let grade1 = formData.get('grade') as string
        const grade = parseInt(grade1, 10);

        const is_finished = "true"; // true, wala sa input field
        const role_id = 1 // laging 1, kasi student

        const school = formData.get('school') as string

        let startDate = formData.get('startDate') as string 
        const year_start  = parseInt(startDate.substring(0, 4), 10) as number

        let endDate = formData.get('endDate') as string
        const year_end = parseInt(endDate.substring(0, 4), 10) as number 

        // const session = await getSession()

        // add education
        const { error } = await supabase
            .from("applicant_education")
            .upsert({
                act_soc: act_soc,
                course: degree,
                desc: desc,
                field_study: field_study,
                grade: grade,
                is_finished: is_finished,
                role_id: role_id,
                school: school,
                user_id: 8, // to be replace by the user id of the login user
                year_end: year_end,
                year_start: year_start 
        })
        
        if(error) {
            console.log(error)
            return fail(500, {
                desc,
                field_study,
                grade,
                is_finished,
                school,
                year_end,
                year_start
            })
        }

        return {
            desc,
            field_study,
            grade,
            is_finished,
            school,
            year_end,
            year_start
        }
    }
};