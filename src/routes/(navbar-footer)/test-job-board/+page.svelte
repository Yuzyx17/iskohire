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
    <div id="content" class="m-8 w-full">
        {#await mockdata}
            <p>Loading...</p>
        {:then mock}
            {#each mock as item}
                <div class="flex flex-col bg-white m-10 p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter relative block card card-hover">
                    <h1 class="text-2xl font-semibold">Job Position</h1>
                    <span class="text-xs font-semibold h-24">
                        Company Name
                    </span>
                    <div class="absolute bottom-8 flex gap-2">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-lg font-black text-white h-10 hover:bg-[#AD9673]">
                            APPLY
                        </button>
                        <button class="bg-[#EDE1CF] border border-solid border-[#AB7C7C] w-14 font-inter text-xs font-black text-white h-10 flex items-center justify-center transition-all duration-300 group">
                            <img src="/images/save.png" alt="save" class="h-7 group-hover:hidden" />
                            <img src="/images/saved.png" alt="save" class="h-7 hidden group-hover:block" />
                        </button>                        
                    </div>
                </div>
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

