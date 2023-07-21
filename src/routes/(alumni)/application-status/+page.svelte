<script lang="ts">
    // import { onMount } from "svelte";
    // onMount(async () => {
    //     let response = await fetch("/mockdata.json");
    //     mockdata = await response.json()
    // })
    async function loadMockData(){
        let response = await fetch("mock/JOB_APPLICATION.json");
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
    <div class="m-8 w-full">
        {#await mockdata}
            <p>Loading...</p>
        {:then mock}
            <div class="flex">
                <span class=" font-inter text-2xl font-bold text-[#702828] ml-10 mb-3">Application Status</span>
            </div>
            {#each mock as item}
            <div class="mt-3 mb-5 mr-10 ml-10 ">
                <div class="flex flex-col bg-white p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter block card card-hover">
                    <h1 class="text-2xl font-semibold">Job Position</h1>
                    <span class="text-xs font-semibold h-24">
                        Company Name
                    </span>
                    <button class="group bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-xs font-black text-white h-8 ml-auto mr-0 transition-colors duration-300 relative">
                        <span class="group-hover:hidden">IN PROCESS</span>
                        <button class="hidden group-hover:inline hover:bg-black absolute inset-0 w-full h-full text-white text-xs font-black">CANCEL</button>
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
