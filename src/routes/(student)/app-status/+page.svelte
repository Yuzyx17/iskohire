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
    
    let showCancelModal = false;
    let selectedJob: null | any = null; 

    function toggleCancelModal(job: any) { 
        selectedJob = job; 
        showCancelModal = !showCancelModal;
    }


    async function handleCancel() {
        //add the cancel logic

        try {
            const response = await fetch("/cancel-job", {
                method: "POST",
                body: JSON.stringify({ jobId: selectedJob.id }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                console.log("Job position cancelled!");
                
                toggleCancelModal(null);
                
                mockdata = await loadMockData();
            } else {
                throw new Error("Failed to cancel the job position.");
            }
        } catch (error:any) {   //edit this if we have a spefic error 
            console.error(error.message);
        }
    }
</script>

<svelte:head>
	<title>Application Status</title>
</svelte:head>

<div class="flex">
    <div class="m-8 w-full">
        {#await mockdata}
            <p>Loading...</p>
        {:then mock}
            <div class="flex">
                <span class="font-inter text-2xl font-bold text-[#702828] ml-10 mb-3">Application Status</span>
            </div>
            {#each mock as item}
            <div class="mt-3 mb-5 mr-10 ml-10 ">
                <div class="flex flex-col bg-white p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter block card card-hover">
                    <h1 class="text-2xl font-semibold">Job Position</h1>
                    <span class="text-xs font-semibold h-24">
                        Company Name
                    </span>
                    <button class="group bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-xs font-black text-white h-8 ml-auto mr-0 transition-colors duration-300 relative" on:click={() => toggleCancelModal(item)}>
                        <span class="group-hover:hidden">IN PROCESS</span>
                        <button class="hidden group-hover:inline hover:bg-black absolute inset-0 w-full h-full text-white text-xs font-black">CANCEL</button>
                    </button>
                </div>
            </div>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}

        {#if showCancelModal}
            <div class="fixed inset-0 flex items-center justify-center z-10">
                <div class="absolute inset-0 bg-black opacity-70"></div>
                <div class="bg-white rounded-md p-8 shadow-lg z-20">
                    <p>Are you sure you want to cancel this job application?</p>
                    <div class="flex justify-center mt-4">
                        <button class="px-4 py-2 bg-gray-300 hover:bg-black font-bold text-black hover:text-white rounded-md mr-2" on:click={toggleCancelModal}>NO</button>
                        <button class="px-4 py-2 bg-tertiary-300 font-bold text-secondary-500 hover:text-white hover:bg-[#417E1B] rounded-md" on:click={handleCancel}>YES</button>
                    </div>
                </div>
                </div>
        {/if}
    </div>
</div>