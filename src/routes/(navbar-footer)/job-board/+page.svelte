<script lang="ts">
	import { JobApplications, addApplications, loadApplications } from "$lib/stores/alumni_store";
	import { log_id, user_id } from "$lib/stores/auth";
	import { SearchPosts, loadSearch, publishPost } from "$lib/stores/post_store";
	import type { PostgrestError } from "@supabase/supabase-js";
	import { fail } from "@sveltejs/kit";
    import { onMount } from "svelte";
	import ButtonApply from "./ButtonApply.svelte";
    // onMount(async () => {
    //     let response = await fetch("/mockdata.json");
    //     mockdata = await response.json()
    // })

    let isPostLoading = true
    let isApplicationLoading = true
    onMount(async () => {
        await loadSearch()
        await loadApplications()
        SearchPosts.subscribe(() => {
            isPostLoading = false
        })
        JobApplications.subscribe(()=>{
            isApplicationLoading = false
        })
    })
    export let data

    let { supabase, session } = data
    $: ({ supabase, session } = data)
    
    let applying = false
    async function apply(jobid: number | null) {
        applying = true
        if(jobid == null) {return fail(420, {message: "Error occured"})}
        await addApplications({job_id: jobid, user_id: session?.user.id, status: "PROCESSING"})
        applying = false
    }
</script>

<div class="flex">
    <div id="content" class="m-8 w-full">
        {#if isPostLoading && isApplicationLoading}
            {#each Array(5) as _, i} 
                <div style="opacity: {(100-i*20)/100}" class="flex flex-col bg-white m-10 p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter relative block card card-hover"></div>
            {/each}      
        {:else if $SearchPosts}
            {#each $SearchPosts as item}
                {#if item != null || item != undefined}
                    <div class="flex flex-col bg-white m-10 p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter relative block card card-hover">
                        <h1 class="text-2xl font-semibold">{item.job_title}</h1>
                        <span class="text-xs font-semibold h-24">
                            {item.company_name}
                        </span>
                        <div class="absolute bottom-8 flex gap-2">
                            {#key applying}
                                <ButtonApply apply={apply} item={item} disable={applying} logged_in={session ? true : false}/>
                            {/key}
                            <!-- <button class="bg-[#EDE1CF] border border-solid border-[#AB7C7C] w-14 font-inter text-xs font-black text-white h-10 flex items-center justify-center transition-all duration-300 group">
                                <img src="/images/save.png" alt="save" class="h-7 group-hover:hidden" />
                                <img src="/images/saved.png" alt="save" class="h-7 hidden group-hover:block" />
                            </button>                         -->
                        </div>
                    </div>
                {/if}
            {/each}
        {:else}
                error
        {/if}
        

        <!-- {#if mockdata === undefined}
            Loading Character Name...
        {:else}
            {#each mockdata as mock}
                {mock.EMAIL}<br>
            {/each}
        {/if}    -->
    </div>
</div>

