/** @type {import('./$types').Actions} */

import { supabase } from "$lib/supabase";
import { fail } from "@sveltejs/kit";

// export const load = async ({ locals: {supabase, getSession} }) => {
//     const session = await getSession()

//     if(!session) {
//         throw redirect(303, '/')
//     }

//     return {session}
// }

export const actions = {
    add_exp: async ({ request }) => {
        const formData = await request.formData()
        
        const compname = formData.get('compname') as string 
        const desc = formData.get('desc') as string 
        const endDate = formData.get('endDate') as string 
        const title = formData.get('title') as string 
        const emptype = formData.get('emptype') as string 

        let industry = formData.get('industry') as string
        const industry_type = parseInt(industry, 10)

        const loc = formData.get('loc') as string 
        const loctype = formData.get('loctype') as string
        const role_id: number = 1;
        const startDate = formData.get('startDate') as string 
        const user_id: number = 7;

        // const session = await getSession()

        const { error } = await supabase
        .from("applicant_experience")
        .insert({
            company_name: compname,
            desc: desc,
            end_date: endDate,
            exp_title: title,
            exp_type: emptype,
            industry_type: industry_type,
            location: loc,
            location_type: loctype,
            role_id: role_id,
            start_date: startDate,
            user_id: user_id
        })

        if(error) {
            console.log(error)
            return fail(500, {
                compname,
                endDate,
                title,
                emptype,
                industry_type,
                loc,
                loctype,
                role_id,
                startDate,
                user_id
            })
        }

        return {
            compname,
            endDate,
            title,
            emptype,
            industry_type,
            loc,
            loctype,
            role_id,
            startDate,
            user_id
        }

    }

    // title,
    // emptype,
    // compname,
    // loc,
    // loctype,
    // startDate,
    // endDate,
    // industry,
    // desc,
    // skills,

    // company_name: string
    // end_date: string
    // exp_title: string
    // exp_type: string
    // industry_type: number
    // location: string
    // location_type: string
    // role_id: number
    // start_date: string
    // user_id: number
}