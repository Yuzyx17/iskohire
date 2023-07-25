import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import { user_id } from "$lib/stores/auth";
import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";

export const JobPosts: Writable<Array<Database['public']['Views']['posts']['Row']>> = writable()
/**
 * 0 = Failed
 * 1 = Create
 * 2 = Update
 * 3 = Delete
 */
export const crudPostStatus = writable()
export const loadPosts = async () => {
    
    const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq("user_id", user_id);
    
    if(error) return error;

    JobPosts.set(data)
}

export const uploadPosts = async (payload: Database['public']['Tables']['job_post']['Insert']) => {
    payload
    const { data, error } = await supabase
    .from('job_post')
    .insert([payload])
    .select()
    
    if(error) return error;
    
    crudPostStatus.set(data)
}