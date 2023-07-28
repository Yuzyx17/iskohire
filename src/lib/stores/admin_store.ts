import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";

import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";

export const Posts: Writable<Array<Database['public']['Views']['posts']['Row']>> = writable()

export const loadJobPosts = async () => {
    
    const { data, error } = await supabase
    .from('posts')
    .select('*')
    
    if(error) return error;

    Posts.set(data)
}

export const acceptJobPost = async (id, uid) => {

    const { data, error } = await supabase
    .from('job_post')
    .update({status: "PUBLISHED"})
    .eq("job_id", id)
    .select()

    if(error) return error;
    return data
}

export const deleteJobPost = async (id, uid) => {
    
    const { data, error } = await supabase
    .from('job_post')
    .delete()
    .eq("job_id", id)
    .select()
    
    if(error) return error;
}