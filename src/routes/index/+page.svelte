<script lang="ts">
    // import { onMount } from "svelte";
    // onMount(async () => {
    //     let response = await fetch("/mockdata.json");
    //     mockdata = await response.json()
    // })

    async function loadMockData(){
        let response = await fetch("mock/USERS.json");
        let mockdata: Promise<any> = await response.json()
        if(mockdata){
            return mockdata
        }else{
            throw new Error(mockdata)
        }
    }

    let mockdata = loadMockData()

</script>
<div>
    {#await mockdata}
        <p>Loading...</p>
    {:then mock}
        {#each mock as item}
        <p>{item.EMAIL}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    <!-- {#if mockdata === undefined}
        Loading Character Name...
    {:else}
        {#each mockdata as mock}
            {mock.EMAIL}<br>
        {/each}
    {/if}    -->
</div>