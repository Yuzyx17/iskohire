<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { Posts, acceptJobPost, deleteJobPost, loadJobPosts } from "$lib/stores/admin_store";
	import type { PostgrestError } from "@supabase/supabase-js";
	import { onMount } from "svelte";

    let isPostsLoading = true
    let postsError: PostgrestError | undefined  
    export let data../admin/$types.js;

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


<div style="overflow-y: scroll; height: 80vh;">
    {#key isPostsLoading}
    {#if $Posts}
    <h1>PENDING:</h1>
        {#each $Posts.sort().filter((val) => val.status == "PENDING") as post}
        <div>
            {post.job_title}<br>
            {post.desc}<br>
            {post.company_name}<br>
            <button on:click|preventDefault={() => acceptPost(post.job_id)} class="bg-[#3f3]">ACCEPT</button>
            <button on:click|preventDefault={() => deletePost(post.job_id)} class="bg-[#f23]">DELETE</button><br>
        </div>
        {/each}
        <br>
        <h1>ACCEPTED:   </h1>
        {#each $Posts.sort((a, b) => (a.company_name < b.company_name ? -1 : 1)).filter((val) => val.status != "PENDING") as post}
            {post.job_title}<br>
            {post.desc}<br>
            {post.company_name}<br>
            {post.job_title} 
            <button on:click|preventDefault={() => deletePost(post.job_id)} class="bg-[#3f3]">DELETE</button><br><br>

        {/each}
    {/if}
    {/key}
</div>