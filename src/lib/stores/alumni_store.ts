import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";
import { user_id } from "./auth";

export const JobApplications: Writable<Array<Database['public']['Views']['applications']['Row']>> = writable()
export const Bookmarks: Writable<Array<number>> = writable()

export const loadApplications = async () => {
    
    const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('user_id', user_id);
    
    if(error) return error;
    let filtered_data = data.filter((vals) => vals.post_status != "PUBLISH")
    JobApplications.set(filtered_data)
}

export const addApplications = async (payload: Database['public']['Tables']['job_application']['Insert']) => {
    payload
    const { data, error } = await supabase
    .from('job_application')
    .insert([payload])
    .eq('user_id', user_id);
    
    if(error) return error
    else loadApplications()
}

