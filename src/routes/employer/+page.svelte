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

<svelte:head>
	<title>Employer Dashboard</title>
</svelte:head>

<div>
    Hello Dashboard
    {#await mockdata}
        <p>Loading...</p>
    {:then mock}
        {#each mock as item}
        <p>{item.EMAIL}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

