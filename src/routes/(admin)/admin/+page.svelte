<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { Posts, acceptJobPost, deleteJobPost, loadJobPosts } from "$lib/stores/admin_store";
	import type { PostgrestError } from "@supabase/supabase-js";
	import { onMount } from "svelte";

    let isPostsLoading = true
    let postsError: PostgrestError | undefined  
    export let data;

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
        $Posts
    }
</script>


<div>
    {#key isPostsLoading}
    {#if $Posts}
    <h1>PENDING:</h1>
        {#each $Posts.filter((val) => val.status == "PENDING") as post}
                {post.job_title} 
                <button on:click|preventDefault={() => acceptPost(post.job_id)} class="bg-[#3f3]">ACCEPT</button>
                <button on:click|preventDefault={() => deletePost(post.job_id)} class="bg-[#f23]">DELETE</button><br>
        {/each}
        <br>
        <h1>ACCEPTED:   </h1>
        {#each $Posts.filter((val) => val.status != "PENDING") as post}
                {post.job_title} 
                <button on:click|preventDefault={() => deletePost(post.job_id)} class="bg-[#3f3]">DELETE</button><br><br>

        {/each}
    {/if}
    {/key}
</div>