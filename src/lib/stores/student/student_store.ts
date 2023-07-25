// filter the job application
// only get the user id of the login user

import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import type { Database } from "$lib/db/types";
import type { Data } from "@skeletonlabs/skeleton/dist/utilities/DataTable/types";

// export const 

export const JobApplication: Writable<Array<Database['public']['Views']['applications']['Row']>> = writable();

export const loadApplications = async () => {
    const user_id: number = 5;

    const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('user_id', user_id);
    
    if(error) return error;

    JobApplication.set(data)
}