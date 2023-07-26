import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";

export const Applications: Writable<Array<Database['public']['Views']['applicants']['Row']>> = writable()
export const Skills = writable()

export const loadApplicants = async (jobid : number | null) => {
    
    const { data, error } = await supabase
    .from('applicants')
    .select('*')
    .eq('job_id', jobid);
    
    if(error) return error;
    
    let skills = [...data].map((skill) => skill.skill_titles).flat(2)
    
    Applications.set(data)
    Skills.set(skills)
}