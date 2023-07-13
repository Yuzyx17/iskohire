<script lang="ts">
    // import { onMount } from "svelte";
    // onMount(async () => {
    //     let response = await fetch("/mockdata.json");
    //     mockdata = await response.json()
    // })

    async function loadMockData(){
        let response = await fetch("/mockdata.json");
        let mockdata: Promise<any> = await response.json()
        if(mockdata){
            return mockdata
        }else{
            throw new Error(mockdata)
        }
    }

    let mockdata = loadMockData()

</script>

<div class="flex">
    <div class="border border-solid border-black w-64 p-5 bg-white">
        Filter
    </div>
    <div class="m-8">
        {#await mockdata}
            <p>Loading...</p>
        {:then mock}
            <div class="flex">
                <span class="mr-2 font-inter text-sm">Application Status</span>
                <img src="images/app-stats.png" class="h-6 w-5">
            </div>
            {#each mock as item}
            <div class="m-10">
                <div class="flex flex-col bg-white p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-96 font-inter">
                    <h1 class="text-2xl font-semibold">Job Position</h1>
                    <span class="text-xs font-semibold h-24">
                        Company Name
                    </span>
                    <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-xs font-black text-white h-8 ml-auto mr-0">
                        IN PROCESS
                    </button>
                </div>
            </div>
                <!-- <p>{item.EMAIL}</p> -->
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
</div>