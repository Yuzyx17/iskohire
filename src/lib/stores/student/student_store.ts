// filter the job application
// only get the user id of the login user

import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import type { Database } from "$lib/db/types";
import type { Data } from "@skeletonlabs/skeleton/dist/utilities/DataTable/types";
import { user_id } from "$lib/stores/auth";
import { Skills } from "../application_store";

// export const 

export const JobApplication: Writable<Array<Database['public']['Views']['applications']['Row']>> = writable();

export const loadApplications = async () => {

    const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('user_id', user_id);
    
    if(error) return error;
    let filtered_data = data.sort((a, b) => (a.status < b.status ? -1 : 1))
    JobApplication.set(filtered_data)
}

export const StudentInfo: Writable<Database['public']['Views']['profile']['Row']> = writable()
export const ApplicantInfo: Writable<Database['public']['Views']['profile']['Row']> = writable()

export const loadStudent = async () => {

    const { data, error } = await supabase
    .from('profile')
    .select('*')
    .eq('user_id', user_id);

    if(error) return error;

    StudentInfo.set(data[0])
}


export const loadApplicant = async (uid) => {
    uid
    const { data, error } = await supabase
    .from('profile')
    .select('*')
    .eq('user_id', uid)
    .single();

    if(error) return error;

    ApplicantInfo.set(data)
}