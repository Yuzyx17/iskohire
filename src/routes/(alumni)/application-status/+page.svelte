<script lang="ts">
	import { JobApplications, loadApplications } from "$lib/stores/alumni_store";
    import { onMount } from "svelte";
    // onMount(async () => {
    //     let response = await fetch("/mockdata.json");
    //     mockdata = await response.json()
    // })
    let isApplicationLoading = true
    onMount(async () => {
        await loadApplications()
        JobApplications.subscribe(()=>{
            isApplicationLoading = false
        })
    })

</script>
<svelte:head>
	<title>Application Status</title>
</svelte:head>
<div class="flex">
    <div class="m-8 w-full">
        {#if isApplicationLoading}
            <p>Loading...</p>
        {:else if $JobApplications}
            {#if $JobApplications.length > 0}
                <div class="flex">
                    <span class=" font-inter text-2xl font-bold text-[#702828] ml-10 mb-3">Application Status</span>
                </div>
                {#each $JobApplications as item}
                <div class="mt-3 mb-5 mr-10 ml-10 ">
                    <div class="flex flex-col bg-white p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter block card card-hover">
                        <h1 class="text-2xl font-semibold">{item.job_title}</h1>
                        <span class="text-xs font-semibold h-24">
                            {item.company_name}
                        </span>
                        <button class="group bg-[#D2AC72] border border-solid border-[#AB7C7C] w-32 font-inter text-xs font-black text-white h-8 ml-auto mr-0 transition-colors duration-300 relative">
                            <span class="group-hover:hidden">{item.status}</span>
                            <button class="hidden group-hover:inline hover:bg-black absolute inset-0 w-full h-full text-white text-xs font-black">CANCEL</button>
                        </button>
                    </div>
                </div>
                <!-- <p>{item.EMAIL}</p> -->
                {/each}
            {:else}
                No Applications
            {/if}
        {:else}
            <p style="color: red">error</p>
        {/if}

        <!-- {#if mockdata === undefined}
            Loading Character Name...
        {:else}
            {#each mockdata as mock}
                {mock.EMAIL}<br>
            {/each}
        {/if}    -->
    </div>
</div>
