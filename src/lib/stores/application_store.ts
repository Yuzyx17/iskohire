import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";

export const Applications: Writable<Array<Database['public']['Views']['applications']['Row']>> = writable()

export const loadApplications = async (jobid : number | null) => {
    
    const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('job_id', jobid);
    
    if(error) return error;

    Applications.set(data)
}