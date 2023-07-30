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
    let filtered_data = data.filter((val) => val.status != "DECLINED")
    Applications.set(filtered_data)
    Skills.set(skills)
}

export const acceptApplicant = async (id: number, uid: string) => {
    
    const { data, error } = await supabase
    .from('job_application')
    .update({status: "APPROVED"})
    .eq('job_id', id)
    .eq('user_id', uid)
    .single();
    
    if(error) return error;
}

export const processApplicant = async (id: number, uid: string) => {
    
    const { data, error } = await supabase
    .from('job_application')
    .update({status: "PROCESSING"})
    .eq('job_id', id)
    .eq('user_id', uid)
    .single();
    
    if(error) return error;
}

export const declineApplicant = async (id: number, uid: string) => {
    
    const { data, error } = await supabase
    .from('job_application')
    .update({status: "DECLINED"})
    .eq('job_id', id)
    .eq('user_id', uid)
    .single();
    
    if(error) return error;
}