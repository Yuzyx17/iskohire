<script lang="ts">
  import {
    JobApplication,
    loadApplications,
  } from "$lib/stores/student/student_store";
  import { onMount } from "svelte";

  let loading = true;
  onMount(async () => {
    await loadApplications();
    JobApplication.subscribe(() => {
      loading = false;
      $JobApplication;
    });
  });

  console.log($JobApplication);

  async function cancelApplication(job_id: number | null) {}
</script>

<svelte:head>
  <title>Application Status</title>
</svelte:head>

<div class="flex">
  <div class="m-8 w-full">
    <div class="flex">
      <span class=" font-inter text-2xl font-bold text-[#702828] ml-10 mb-3"
        >Application Status</span
      >
    </div>
    {#if loading}
      <p>Loading...</p>
    {:else if $JobApplication}
      {#each $JobApplication as application}
        <div class="mt-3 mb-5 mr-10 ml-10">
          <div
            class="flex flex-col bg-white p-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] font-inter block card card-hover"
          >
            <h1 class="text-2xl font-semibold">{application.job_title}</h1>
            <span class="text-xs font-semibold h-24">
              {application.company_name}
            </span>
            <button
              class="group bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-xs font-black text-white h-8 ml-auto mr-0 transition-colors duration-300 relative"
            >
              <!-- <span class="group-hover:hidden">{ application.status }</span> -->
              {#if application.status != "PROCESSING"}
                <span>{application.status}</span>
              {:else}
                <span class="group-hover:hidden">{application.status}</span>
                <!-- how to pass in parameter -->
                <form method="POST" action="?/cancel_app">
                  <button
                    class="hidden group-hover:inline hover:bg-black absolute inset-0 w-full h-full text-white text-xs font-black"
                    formaction="?/cancel_app"
                    name="job_id"
                    value={application.job_id}>CANCEL</button
                  >
                </form>
              {/if}
            </button>
          </div>
        </div>
      {/each}
    {:else}
      <div>No Application Yet...</div>
    {/if}
  </div>
</div>
