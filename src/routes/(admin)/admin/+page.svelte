<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { Posts, acceptJobPost, deleteJobPost, loadJobPosts } from "$lib/stores/admin_store";
	import type { PostgrestError } from "@supabase/supabase-js";
	import { onMount } from "svelte";

    let isPostsLoading = true
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
        isPostsLoading = true
        postsError = await loadJobPosts()
        Posts.subscribe(() => {
            isPostsLoading = false
        })
    }
    onMount(getPosts)

    async function acceptPost(id){  
        isPostsLoading = true
        await acceptJobPost(id, session?.user.id)
        postsError = await loadJobPosts()
        Posts.subscribe(() => {
            isPostsLoading = false
        })
    }
    async function deletePost(id){  
        isPostsLoading = true
        await deleteJobPost(id, session?.user.id)
        postsError = await loadJobPosts()
        Posts.subscribe(() => {
            isPostsLoading = false
        })
    }
</script>


<div class="p-[32px]">
    {#key isPostsLoading}
    {#if $Posts}
    <div class="w-full px-3 text-black font-inter font-extrabold py-2 text-4xl flex-auto">
        <span class="rounded-full bg-[#abc] pt-[12px] pb-[12px] pr-[20px] pl-[20px] inline-block align-middle">PENDING </span>
    </div>
        {#each $Posts.sort().filter((val) => val.status == "PENDING") as post}
        <div class="relative min-h-[6em] h-[12em] overflow-y-auto border border-gray-300 bg-white shadow-md w-[90%] ml-[5%] max-w-screen flex-auto flex-column p-3 mb-5 card mr-5">
            <div class="flex-auto flex-column">
                <div class="text-black font-inter font-bold text-xl">{post.job_title}</div>
                <div class="text-black font-inter font-italic leading-3 text-xs">{post.company_name}</div>
                <div class="text-black font-inter text-base pt-[16px] whitespace-normal text-justify w-[75%]">{post.desc}</div>
            </div>
            <div class="absolute bottom-[12px] right-[12px]">
                <button on:click|preventDefault={() => acceptPost(post.job_id)} class="hover:bg-[#2e2] bg-[#3f3] p-[4px] card-hover font-bold rounded">ACCEPT</button>
                <button on:click|preventDefault={() => deletePost(post.job_id)} class="hover:bg-[#de3939] bg-[#ef4a4a] p-[4px] card-hover font-bold rounded">DELETE</button>
            </div>
        </div>
        {/each}
        <hr>
        <div class="w-full px-3 text-black font-inter font-extrabold py-2 text-4xl">
            <span class="rounded-full bg-[#9f9] pt-[12px] pb-[12px] pr-[20px] pl-[20px] inline-block align-middle">ACCEPTED</span>
        </div>
        {#each $Posts.sort((a, b) => (a.company_name < b.company_name ? -1 : 1)).filter((val) => val.status != "PENDING") as post}
        <div class="relative min-h-[6em] h-[12em] overflow-y-auto border border-gray-300 bg-white shadow-md w-[90%] ml-[5%] max-w-screen flex-auto flex-column p-3 mb-5 card mr-5">
            <div class="flex-auto flex-column">
                <div class="text-black font-inter font-bold text-xl">{post.job_title}</div>
                <div class="text-black font-inter font-italic leading-3 text-xs">{post.company_name}</div>
                <div class="text-black font-inter text-base pt-[16px] whitespace-normal text-justify w-[75%]">{post.desc}</div>
            </div>
            <div class="absolute bottom-[12px] right-[12px]">
                <button on:click|preventDefault={() => deletePost(post.job_id)} class="hover:bg-[#de3939] bg-[#ef4a4a] p-[4px] card-hover font-bold rounded">DELETE</button>
            </div>
        </div>

        {/each}
    {/if}
    {/key}
</div>