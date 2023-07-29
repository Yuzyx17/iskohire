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
<div class="flex">
    <div class="m-8">
        <div class="mb-5 w-[1450px] h-[344px] flex overflow-x-scroll">
        {#if isPostsLoading}
          {#each Array(5) as _, i} 
              <div style="opacity: {(100-i*20)/100}" class="bg-white card card-hover shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] min-w-[277px] h-[309px] min-h-[309px] p-3 flex flex-col mr-3"></div>
          {/each}
        
        {:else if $JobPosts}
        {#key reload}
        {#each $JobPosts as post} 
        <div class="flex flex-col items-center">
          <form method="GET" action="editjobform">
            <input type="hidden" name="job_id" value={post.job_id}>
         <button class="flex p-1.5 bg-white color-black rounded-sm hover:rounded-3xl hover:bg-white transition-all duration-300 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                </button> 
                <button on:click|preventDefault={() => getApplicants(post.job_id)} class="bg-white card card-hover shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] min-w-[277px] h-[309px] min-h-[309px] p-3 flex flex-col mr-3">
                    <div class="flex flex-col"> 
                        <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                            {post.job_title}
                        </span>
                        <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                            {post.desc}
                        </span>
                    </div>
                    <div class="w-full mt-auto self-end">
                        <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                            <div class="flex justify-center">
                                <img src="./images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                                <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">{post.loc_type}</span>
                            </div>
                            <div class="flex">
                                <img src="./images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                                <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">{post.employment_type}</span>
                            </div>
                            <div class="flex justify-center ">
                                <img src="./images/salary.png" class="h-4 w-4.5 mt-auto mb-5 ml-3" alt="Salary Logo">
                                <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-5 ml-2">{post.salary}</span>
                            </div>
                            <div class="flex">
                            </div>
                        </div>
                        <div class="text-center">
                            {#key toggle}
                                {#if post.status =="PUBLISH"}
                                <button on:click|preventDefault={()=>publish(post.job_id)} class="bg-[#D2AC72] hover:bg-[#C19B61] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md variant-filled-tertiary cursor-pointer ">
                                    PUBLISH
                                </button>
                                {:else if post.status =="PUBLISHED" || post.status == "UNPUBLISH"}
                                <button on:click|preventDefault={()=>unpublish(post.job_id)} class="hoverization border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md variant-filled-tertiary cursor-pointer ">
                                
                                </button>
                                {:else if post.status == "PENDING"}
                                <button on:click|preventDefault={()=>cancelPending(post.job_id, post.user_id)} class="hoverizationB border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md variant-filled-tertiary cursor-pointer ">
                                    
                                </button>
                                {/if}
                            {/key}
                        </div>
                    </div>
                </button>
                </div>
                {/each}
                {/key}
            {:else if postsError}
                <div>{postsError.message}</div>
            {:else}
                <div>No Posts Yet!</div>
            {/if}
        </div>
    <!-- filter and applicants -->
    <div class="mb-5 w-screen w-max-screen flex">
      <!-- filter -->
      <div
        class="flex flex-col w-[277px] h-[329px] bg-white shadow-md pt-5 pb-5 pl-3 pr-3 mr-2"
      >
        <span
          class="text-black text-justify font-inter text-xl font-semibold leading-normal"
        >
          Filter
        </span>
        <div>
          {#key clear}
          <form class="flex flex-col">
            <select bind:value={fos}
              class="text-black card card-hover text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3"
            >
              <option selected disabled value=0>Field Experience</option>
              {#if $Applications}
                {#each [...$Applications].map((itype) => itype.industry_type).flat(1) as itype}
                  {#if itype}
                    <option value={itype}>{i_types[itype-1]}</option>
                  {/if}
                {/each}
              {/if}
            </select>
            <select bind:value={course}
              class="text-black card card-hover text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3"
            >
              <option selected disabled value="" >Course</option>
              {#if $Applications}
              {#each [...$Applications].map((course) => course.course).flat(1) as course}
                <option value={course}>{course}</option>
              {/each}
              {/if}
            </select>
            <select bind:value={skills}
              class="text-black card card-hover text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3"
            >
              <option selected disabled value="" >Skills</option>
              {#if $Applications}
                {#each [...$Applications].map((skill) => skill.skill_titles).flat(2) as skill}
                <option value={skill}>{skill}</option>
              {/each}
              {/if}
            </select>
          </form>
          {/key}
          <div class="text-right">
            <button on:click|preventDefault={()=>applyFilter()}
              class="variant-filled-tertiary cursor-pointer hover:bg-[#AD9673] border border-solid border-[#AB7C7C] w-[90px] text-white font-inter text-base font-extrabold leading-normal h-8 mt-5 shadow-md"
            >
              APPLY
            </button>
            <button on:click|preventDefault={()=>clearFilter()}
              class="bg-white cursor-pointer hover:bg-black hover:text-white border border-black border-opacity-20 w-[90px] text-[#702828] font-inter text-base font-extrabold leading-normal h-8 mt-5 shadow-md"
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
      <!-- applicants section -->
      {#key app_toggle}
      <div class="bg-white shadow-md p-3 w-[1125px] max-w-[1125px]">
        {#if isApplicationsLoading}
        {#each Array(5) as _, i}
        <div
        style="opacity: {(100 - i * 20) / 100}"
        class="h-[60px] border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] flex-shrink-0 p-3 mb-5 card"
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
                class="text-gray-600 italic font-inter text-sm font-thin leading-normal"
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
                      class="pr-3 border-r border-gray-500 w-2/12 mt-auto mb-auto"
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
            class="border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] h-[60px] flex-shrink-0 p-3 mb-5 card"
            >
            <span
              class="text-black font-inter text-lg font-extrabold leading-normal"
              >
              <div>{applicationError.message}</div>
            </span>
          </div>
          {:else}
          <div
            class="border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] h-[60px] flex-shrink-0 p-3 mb-5 card"
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
