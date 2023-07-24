import { writable } from "svelte/store";
import { supabase } from "$lib/supabase";
import type {Writable} from "svelte/store";


export const JobPosts = writable()

export const loadPosts = async () => {
    
    const { data, error } = await supabase
    .from('posts')
    .select('*');
    
    if(error) return error;

    JobPosts.set(data)
}