<script lang="ts">
    // import { onMount } from "svelte";
    // onMount(async () => {
    //     let response = await fetch("/mockdata.json");
    //     mockdata = await response.json()
    // })
    async function loadMockData(){
        let response = await fetch("/mock/JOB_POST.json");
        let mockdata: Promise<any> = await response.json()
        if(mockdata){
            return mockdata
        }else{
            throw new Error(mockdata)
        }
    }
    let mockdata = loadMockData()

    async function loadMockD(){
        let response = await fetch("/mock/Applicant/JOB_POST.json");
        let mockd: Promise<any> = await response.json()
        if(mockd){
            return mockd
        }else{
            throw new Error(mockd)
        }
    }
    let mockd = loadMockData()
</script>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>

<!-- scrolling and effect -->
<div class="flex">
    <div class="m-8">
        {#await mockdata}
        <div>wait</div>
        {:then mock}
        <!-- list of job application -->
        <div class="mb-5 w-[1450px] flex overflow-x-scroll no-scrollbar">
        {#each mock as item}
            <div class="bg-white card card-hover shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] min-w-[277px] h-[309px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        {item.JOB_TITLE}
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        {item.DESC}
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex justify-center">
                            <img src="./images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">{item.LOC_TYPE}</span>
                        </div>
                        <div class="flex">
                            <img src="./images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">{item.EMPLOYMENT_TYPE}</span>
                        </div>
                        <div class="flex justify-center ">
                            <img src="./images/salary.png" class="h-4 w-4.5 mt-auto mb-5 ml-3" alt="Salary Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-5 ml-2">{item.SALARY}</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        {#if item.STATUS=="PUBLISH"}
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            {item.STATUS}
                        </button>
                        {:else if item.STATUS=="PUBLISHED"}
                        <button class="bg-[#417E1B] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            {item.STATUS}
                        </button>
                        {:else}
                        <button class="bg-[#702828] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            {item.STATUS}
                        </button>
                        {/if}
                    </div>
                </div>
            </div>
            {/each}
            
        </div>
        {:catch error}
            <p style="color:red">{error.message}</p>
            {/await}
        <!-- filter and applicants -->
        <div class="mb-5 w-screen w-max-screen flex">
            <!-- filter -->
            <div class="flex  flex-col w-[277px] h-[329px] bg-white shadow-md pt-5 pb-5 pl-3 pr-3 mr-2">
                <span class="text-black text-justify font-inter text-xl font-semibold leading-normal">
                    Filter
                </span>
                <div>
                    <form class="flex flex-col">
                        <select class="text-black card card-hover text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3">
                            <option selected>Field Experience</option>
                        </select>
                        <select class="text-black card card-hover text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3">
                            <option selected>Course</option>
                        </select>
                        <select class="text-black card card-hover text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3">
                            <option selected>Skills</option>
                        </select>
                    </form>
                    <div class="text-right">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[90px] text-white font-inter text-base font-extrabold leading-normal h-8 mt-5 shadow-md">
                            APPLY
                        </button>
                        <button class="bg-white border border-black border-opacity-20 w-[90px] text-[#702828] font-inter text-base font-extrabold leading-normal h-8 mt-5 shadow-md">
                            CLEAR
                        </button>
                    </div>
                </div>
            </div>
            <!-- applicants section -->
            <div class="bg-white shadow-md p-3">
                <div class="border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] flex-shrink-0 p-3 mb-5 card">
                    <div class="flex">
                        <div class="flex flex-col w-8/12 mt-auto mb-auto">
                            <span class="text-black font-inter text-lg font-extrabold leading-normal">
                                Name
                            </span>
                            <span class="text-gray-600 italic font-inter text-sm font-thin leading-normal">
                                skills
                            </span>
                        </div>
                        <div class="pr-3 border-r border-gray-500 w-2/12 mt-auto mb-auto">
                            <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[134px] h-[38px] text-white font-inter text-base font-extrabold leading-normal h-8 shadow-md">
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
            </div>
        </div>
    </div>
</div>