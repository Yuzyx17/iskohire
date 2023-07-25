import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import { user_id } from "$lib/stores/auth";
import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";

export const JobPosts: Writable<Array<Database['public']['Tables']['job_post']['Row']>> = writable()
export const SearchPosts: Writable<Array<Database['public']['Views']['posts']['Row']>> = writable()
export const Filters = writable()
let filter_options: any
Filters.subscribe((values) => filter_options=values)
export const loadPosts = async () => {
    
    const { data, error } = await supabase
    .from('job_post')
    .select('*')
    .eq("user_id", user_id);
    
    if(error) return error;

    JobPosts.set(data)
}

export const loadSearch = async () => {
    const { data, error } = await supabase
    .from('posts')
    .select('*');
    
    if(error) return error;

    let filtered_data = data.filter((values) => {
        if(filter_options.industry > 1){
            return values.industry_type == filter_options.industry && values.employment_type == filter_options.emp_type
        }
        return values.employment_type == filter_options.emp_type
    } )

    SearchPosts.set(filtered_data)
}

export const uploadPosts = async (payload: Database['public']['Tables']['job_post']['Insert']) => {
    const { data, error } = await supabase
    .from('job_post')
    .insert([payload])
    .select()
    
    if(error) return error;

}