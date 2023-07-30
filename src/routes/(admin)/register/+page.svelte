<script lang="ts">
  import { loadPosts, JobPosts, publishPost, unpublishPost, deletePosts } from "$lib/stores/post_store";
  import { loadApplicants, Applications, Skills } from "$lib/stores/application_store";
  import { onMount } from "svelte";
  import { i_types } from "$lib/reference/VALUES";
  import type { PostgrestError } from "@supabase/supabase-js";
import { user_id } from "$lib/stores/auth";
  
  let isPostsLoading = true
  let isApplicationsLoading = false
  let postsError: PostgrestError | undefined  
  let applicationError: PostgrestError | undefined
  onMount(async () => {
      postsError = await loadPosts()
      JobPosts.subscribe(() => {
          isPostsLoading = false
      })
  })
  let toggle = true
  let reload = true
  async function publish(id: number){
      toggle = true
      await publishPost(id)
      postsError = await loadPosts()
      JobPosts.subscribe(() => {
          toggle = false
      })
  }
  async function unpublish(id: number){
      toggle = true
      await unpublishPost(id)
      postsError = await loadPosts()
      JobPosts.subscribe(() => {
          toggle = false
      })
  }
  async function cancelPending(id: number, uid: string){
      reload = true
      await deletePosts(id, uid)
      JobPosts.subscribe(() => {
          reload = false
      })
  }
  let current_job: number | null = 0
  async function getApplicants(job_id: number | null){
      isApplicationsLoading = true
      applicationError = await loadApplicants(job_id)
      current_job = job_id
      Applications.subscribe(() => {
          isApplicationsLoading = false
      })
  }
  let course: string;
  let fos: number | string;
  let skills: string;
  let applicant_list = $Applications
  $: applicant_list = $Applications
  let app_toggle = true
  let clear = true
  async function applyFilter() {
  if(!$Applications) return
  app_toggle = !app_toggle
  applicant_list = $Applications.filter((vals) => {
      let isco = false
      let isfo = false
      let issk = false

      if(vals.course == course || course == ""){
        isco = true
      }
      if(vals.industry_type == fos || fos == 0){
        isfo = true
      }
      if(vals.skill_titles?.flat(1).includes(skills) || skills == ""){
        issk = true
      }
      return (isco && isfo && issk)
    })
    applicant_list
}
  async function clearFilter(){
    course = ""
    fos = 0 
    skills = ""
    clear = !clear
    applicant_list = $Applications
  }
</script>

<svelte:head>
<title>Dashboard</title>
</svelte:head>

<!-- scrolling and effect -->
<div class="flex h-full">
  <div class="m-8 w-full h-full">
  <!-- filter and applicants -->
  <div class="mb-5 w-full w-max-[98%] flex h-full ">
    {#key app_toggle}
    <div class="bg-white shadow-md p-3 w-full  ">
      {#if isApplicationsLoading}
      {#each Array(5) as _, i}
      <div
      style="opacity: {(100 - i * 20) / 100}"
      class="h-[100px] border border-gray-300 bg-white shadow-md w-full max-w-screen flex p-3 mb-5 card card-hover mr-5"
      />
        {/each}
        {:else if $Applications}
        {#each applicant_list as application}
        <div
        class="border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] flex-shrink-0 p-3 mb-5 card"
          >
            <div class="flex">
              <div class="flex flex-col w-8/12 mt-auto mb-auto">
                <span
                class="text-black font-inter text-lg font-extrabold leading-normal"
                >
                {application.applicant_name}
              </span>
              <span
              class="text-gray-600 italic font-inter text-sm font-thin leading-normal "
              >
                  {#if application.skill_titles != null}
                  {#each application.skill_titles as skill}
                  {#if skill !== null}
                        {skill},
                      {:else}
                        Nothing to see here
                        {/if}
                        {/each}
                        {:else}
                        Nothing to see here
                        {/if}
                      </span>
                    </div>
                    <div
                    class="pr-3 border-r border-gray-500 w-2/12 mt-auto mb-auto "
                    >
                    <button
                    class="bg-[#D2AC72] hover:bg-[#AD9673] border border-solid border-[#AB7C7C] w-[134px] h-[38px] text-white font-inter text-base font-extrabold leading-normal h-8 shadow-md"
                >
                View Profile
              </button>
              </div>
              <div class="border-r w-2/12 pl-3 flex justify-center mt-2">
                <div class="transition-all duration-300 group cursor-pointer">
                  <img
                  src="/images/hire.png"
                  alt="save"
                  class="h-8 group-hover:hidden mr-3"
                  />
                  <img
                  src="/images/hired.png"
                  alt="save"
                  class="h-8 hidden group-hover:block mr-3"
                  />
                </div>

                <div class="transition-all duration-300 group cursor-pointer">
                  <img
                  src="/images/wait.png"
                  alt="save"
                  class="h-8 group-hover:hidden mr-3"
                  />
                  <img
                    src="/images/waited.png"
                    alt="save"
                    class="h-8 hidden group-hover:block mr-3"
                    />
                  </div>
                <div class="transition-all duration-300 group cursor-pointer">
                  <img
                  src="/images/delete.png"
                  alt="save"
                  class="h-8 group-hover:hidden mr-3"
                  />
                  <img
                  src="/images/deleted.png"
                  alt="save"
                  class="h-8 hidden group-hover:block mr-3"
                  />
                </div>
              </div>
            </div>
          </div>
          {/each}
          {:else if applicationError}
          <div
          class="border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] h-[60px] flex-shrink-0 p-3 mb-5 card "
          >
          <span
            class="text-black font-inter text-lg font-extrabold leading-normal"
            >
            <div>{applicationError.message}</div>
          </span>
        </div>
        {:else}
        <div
          class="border border-gray-300 bg-white shadow-md w-full max-w-screen h-[60px] flex-shrink-0 p-3 mb-5 card card-hover"
        >
        <span
        class="text-black font-inter text-lg font-extrabold leading-normal"
        >
        Nothing to see here!
          </span>
        </div>
      {/if}
    </div>
    {/key}
  </div>
</div>
</div>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.hoverization:after {
  content: "PUBLISHED";
}
.hoverizationB:after {
  content: "PENDING";
}
.hoverization:hover::after, .hoverizationB:hover::after {
  content: "UNPUBLISH";
}
.hoverization{
  background-color: #417E1B;
}
.hoverizationB{
  background-color: #D2AC72;
}
.hoverization:hover, .hoverizationB:hover{
  background-color: #702828;
}
</style>
