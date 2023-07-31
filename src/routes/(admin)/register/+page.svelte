<script lang="ts">
	import { invalidate } from "$app/navigation";
	import {  Registrations, acceptJobPost, acceptRegistration, deleteRegistration, loadRegistration } from "$lib/stores/admin_store";
	import { role_id } from "$lib/stores/auth";
	import type { PostgrestError } from "@supabase/supabase-js";
	import { onMount } from "svelte";

    let isLoading = true
    let postsError: PostgrestError | undefined  
    export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
    async function getPosts(){
        isLoading = true
        postsError = await loadRegistration()
        Registrations.subscribe(() => {
            isLoading = false
        })
    }
    onMount(getPosts)

    async function acceptPost(uid){  
        isLoading = true
        await acceptRegistration(uid)
        postsError = await loadRegistration()
        Registrations.subscribe(() => {
            isLoading = false
        })
    }
    async function deletePost(uid){  
        isLoading = true
        await deleteRegistration(uid)
        postsError = await loadRegistration()
        Registrations.subscribe(() => {
            isLoading = false
        })
    }
</script>


<div class="p-[32px]">
    {#key isLoading}
    {#if $Registrations}
    <div class="w-full px-3 text-black font-inter font-extrabold py-2 text-4xl flex-auto">
        <span class="rounded-full bg-[#abc] pt-[12px] pb-[12px] pr-[20px] pl-[20px] inline-block align-middle">PENDING </span>
    </div>
        {#each $Registrations.filter((val) => !val.is_approved) as post}
        <div class="relative min-h-[2em] h-[6em] overflow-y-auto border border-gray-300 bg-white shadow-md w-[90%] ml-[5%] max-w-screen flex-auto flex-column p-3 mb-5 card mr-5">
            <div class="flex-auto flex-column">
                <div class="text-black font-inter font-bold text-xl">{post.user_id}</div>
                {#if post.role_id == 1}
                <div class="text-black font-inter font-italic leading-3 text-xs">STUDENT</div>
                {:else if post.role_id == 2}
                <div class="text-black font-inter font-italic leading-3 text-xs">ALUMNI</div>
                {:else if post.role_id == 3}
                <div class="text-black font-inter font-italic leading-3 text-xs">RECRUITER</div>
                {/if}

                
            </div>
            <div class="absolute bottom-[12px] right-[12px]">
                <button on:click|preventDefault={() => acceptPost(post.user_id)} class="hover:bg-[#2e2] bg-[#3f3] p-[4px] card-hover font-bold rounded">ACCEPT</button>
                <button on:click|preventDefault={() => deletePost(post.user_id)} class="hover:bg-[#de3939] bg-[#ef4a4a] p-[4px] card-hover font-bold rounded">DELETE</button>
            </div>
        </div>
        {/each}
        <hr>
        <div class="w-full px-3 text-black font-inter font-extrabold py-2 text-4xl">
            <span class="rounded-full bg-[#9f9] pt-[12px] pb-[12px] pr-[20px] pl-[20px] inline-block align-middle">ACCEPTED</span>
        </div>
        {#each $Registrations.filter((val) => val.is_approved) as post}
        <div class="relative min-h-[2em] h-[6em] overflow-y-auto border border-gray-300 bg-white shadow-md w-[90%] ml-[5%] max-w-screen flex-auto flex-column p-3 mb-5 card mr-5">
            <div class="flex-auto flex-column">
                <div class="text-black font-inter font-bold text-xl">{post.user_id}</div>
                {#if post.role_id == 1}
                <div class="text-black font-inter font-italic leading-3 text-xs">STUDENT</div>
                {:else if post.role_id == 2}
                <div class="text-black font-inter font-italic leading-3 text-xs">ALUMNI</div>
                {:else if post.role_id == 3}
                <div class="text-black font-inter font-italic leading-3 text-xs">RECRUITER</div>
                {/if}

                
            </div>
            <div class="absolute bottom-[12px] right-[12px]">
    
                <button on:click|preventDefault={() => deletePost(post.user_id)} class="hover:bg-[#de3939] bg-[#ef4a4a] p-[4px] card-hover font-bold rounded">DELETE</button>
            </div>
        </div>
        {/each}
    {/if}
    {/key}
</div>