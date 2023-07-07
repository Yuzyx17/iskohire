<script lang="ts">
    import { onMount } from "svelte";

    let mockdata: any;

    onMount(async () => {
        let response = await fetch("/mockdata.json");
        mockdata = await response.json()
    })

</script>
<div>
    <!-- {#await mockdata}
        <p>Loading...</p>
    {:then mockdata}
        {#each mockdata as mock}
        <p>Name is {mock.EMAIL}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await} -->
    {#if mockdata === undefined}
        Loading Character Name...
    {:else}
        {#each mockdata as mock}
            {mock.EMAIL}<br>
        {/each}
    {/if}   
</div>