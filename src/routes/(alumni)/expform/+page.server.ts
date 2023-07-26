/** @type {import('./$types').Actions} */

import { user_id } from "$lib/stores/auth.js";
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

        const user_skill = formData.get('skills') as string

        // const session = await getSession()

        // query if this skill is in the database 
        const { data, error } = await supabase.from('skills_info').select('*')

        if(error)
            return error
        else if(data) {

            const foundItem = data.find((skill) => skill.skill_title === user_skill);
            if (!foundItem) {

                // if skill not exist
                const { data, error } = await supabase
                .from("skills_info")
                .upsert({
                    skill_title: user_skill
                })
                .select()

                // if sucess 
                if(data) {
                    const { error } = await supabase
                    .from("applicant_skills")
                    .upsert({
                        skill_id: data[0].skill_id,
                        user_id: user_id
                    })
                    .select()
                }

                if(error) return error
                else if(data) {
                    const new_skill_id: number = data[0].skill_id;

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
                        skill_id: new_skill_id,
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
                            new_skill_id,
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
                        new_skill_id,
                        startDate,
                        user_id
                    }
                }
            } else {
                const skill_id: number = foundItem.skill_id
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
                    skill_id: skill_id,
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
                        skill_id,
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
                    skill_id,
                    startDate,
                    user_id
                }
            }
        }


    }
}