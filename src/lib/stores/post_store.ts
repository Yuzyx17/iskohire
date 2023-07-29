import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import { user_id } from "$lib/stores/auth";
import type { Database } from "$lib/db/types";
import type { Writable } from "svelte/store";

export const JobPosts: Writable<Array<Database['public']['Tables']['job_post']['Row']>> = writable()
export const SearchPosts: Writable<Array<Database['public']['Views']['posts']['Row']>> = writable()
export const Filters = writable({industry: 0, emp_type: ""})
let filter_options = {industry: 0, emp_type: ""}
Filters.subscribe((values) => filter_options=values)

export const loadPosts = async () => {
    
    const { data, error } = await supabase
    .from('job_post')
    .select('*')
    .eq("user_id", user_id);
    
    if(error) return error;

    JobPosts.set(data)
}

export const deletePosts = async (job_id: number, uid: string) => {
    
    const { data, error } = await supabase
    .from('job_post')
    .delete()
    .eq("job_id", job_id)
    .eq("user_id", uid);
    
    if(error) return error;
}

export const updatePosts = async (payload: Database['public']['Tables']['job_post']['Update']) => {
    payload["user_id"] = user_id
    const { data, error } = await supabase
    .from('job_post')
    .update(payload)
    .eq("user_id", user_id)
    .eq("job_id", payload["job_id"])
    .select();
    
    if(error) return error;
}

export const getJobPosts = async (id: number) => {
    
    const { data, error } = await supabase
    .from('job_post')
    .select('*')
    .eq("job_id", id);
    
    if(error) return error.message;

    return data
}

export const loadSearch = async (uid) => {
    const { data, error } = await supabase
    .from('posts')
    .select('*');
    
    if(error) return error;

    let filtered_data = data.filter((values) => {
        if(filter_options == null) return values
        if(filter_options.industry > 1){
            return values.industry_type == filter_options.industry && values.employment_type == filter_options.emp_type
        }
        return values.employment_type == filter_options.emp_type
    } )
    filtered_data = filtered_data.filter((vals) => vals.status == "PUBLISHED" && (uid === undefined ? true : vals.user_id != uid))
    SearchPosts.set(filtered_data)
}

export const publishPost = async (id: number) => {
    const { data, error } = await supabase
    .from('job_post')
    .update({status: "PUBLISHED"})
    .eq("job_id", id)
    .select()
}

export const unpublishPost = async (id: number) => {
    const { data, error } = await supabase
    .from('job_post')
    .update({status: "PUBLISH"}) // THIS MEANS UNPUBLISHED
    .eq("job_id", id)
    .select()
}

export const uploadPosts = async (payload: Database['public']['Tables']['job_post']['Insert']) => {
    const { data, error } = await supabase
    .from('job_post')
    .insert([payload])
    .select()
    console.log("display error")
    console.log(error);
    
    if(error) return error;

}