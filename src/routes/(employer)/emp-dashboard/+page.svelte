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

</script>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>

<!-- scrolling and effect -->
<div class="flex">
    <!-- <div class="border border-black border-opacity-30 h-screen w-[230px] min-w-[230px] bg-white relative">
        <div class="flex-grow">
            <div class="flex border border-black border-opacity-20 hover:bg-[#dbcbcb] p-3 h-79 flex-shrink-0">
                <img src="images/dashboard-employer.png" class="h-6 w-6 mr-3" alt="Dashboard Logo">
                <span class="text-black text-justify font-inter text-24 font-medium leading-normal">Dashboard</span>
            </div>
            <div class="flex border border-black border-opacity-20 hover:bg-[#dbcbcb] p-3 h-79 flex-shrink-0">
                <img src="images/add-job-employer.png" class="h-5 w-6 mr-3" alt="Add Job Logo">
                <span class="text-black text-justify font-inter text-24 font-medium leading-normal">Add Job</span>
            </div>
            <div class="flex border border-black border-opacity-20 hover:bg-[#dbcbcb] p-3 h-79 flex-shrink-0">
                <img src="images/edit-job-employer.png" class="h-5 w-6 mr-3" alt="Edit Job Logo">
                <span class="text-black text-justify font-inter text-24 font-medium leading-normal">Edit Job</span>
            </div>
        </div>
        <div class="flex border border-black border-opacity-20 hover:bg-[#DFDFDF] hover:text-[#702828] p-3 h-79 w-full absolute bottom-0">
            <img src="images/logout-employer.png" class="h-5 w-6" alt="Logout Logo">
            <span class="text-black text-justify font-inter text-24 font-medium leading-normal">LOGOUT</span>
        </div>
    </div> -->
    <div class="m-8">
        <!-- list of job application -->
        <div class="mb-5 w-[1450px] flex overflow-x-scroll no-scrollbar">
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] min-w-[277px] h-[309px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#417E1B] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            PUBLISHED
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] h-[309px] min-w-[277px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#702828] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            UNPUBLISH
                        </button>
                    </div>
                </div>  
            </div>
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] h-[309px] min-w-[277px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            PUBLISH
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] h-[309px] min-w-[277px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            PUBLISH
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] h-[309px] min-w-[277px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            PUBLISH
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] h-[309px] min-w-[277px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            PUBLISH
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-offset-x-0 shadow-offset-y-4 shadow-blur-4 shadow-spread-0 shadow-opacity-25 w-[277px] h-[309px] min-w-[277px] min-h-[309px] p-3 flex flex-col mr-3">
                <div class="flex flex-col">
                    <span class="text-black font-inter text-xl font-extrabold leading-normal text-center">
                        Job Title
                    </span>
                    <span class="text-gray-600 font-inter text-sm font-normal leading-normal text-center">
                        Job Description
                    </span>
                </div>
                <div class="w-full mt-auto self-end">
                    <div class="grid grid-cols-2 gap-2 mt-auto mb-0">
                        <div class="flex">
                            <img src="images/loc_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Location Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Location Type</span>
                        </div>
                        <div class="flex">
                            <img src="images/emp_type-employer.png" class="h-3.5 w-3.5 mt-auto mb-auto mr-2" alt="Employment Type Logo">
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Internship</span>
                        </div>
                        <div class="flex">
                            <span class="text-red-700 font-inter text-base italic font-extrabold leading-normal mr-2">P</span>
                            <span class="text-gray-600 font-inter text-xs font-normal leading-normal mt-auto mb-auto">Salary</span>
                        </div>
                        <div class="flex">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-[100px] font-inter text-xs font-black text-white h-8 ml-auto mr-0 shadow-md">
                            PUBLISH
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- filter and applicants -->
        <div class="mb-5 w-screen w-max-screen flex">
            <!-- filter -->
            <div class="flex flex-col w-[277px] h-[329px] bg-white shadow-md pt-5 pb-5 pl-3 pr-3 mr-2">
                <span class="text-black text-justify font-inter text-xl font-semibold leading-normal">
                    Filter
                </span>
                <div>
                    <form class="flex flex-col">
                        <select class="text-black text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3">
                            <option selected>Field Experience</option>
                        </select>
                        <select class="text-black text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3">
                            <option selected>Course</option>
                        </select>
                        <select class="text-black text-justify font-inter text-lg font-semibold leading-normal border border-gray-300 bg-white shadow-md mb-3">
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
                <div class="border border-gray-300 bg-white shadow-md w-[1125px] max-w-[1125px] flex-shrink-0 p-3 mb-5">
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
                        <div class="border-r w-2/12 pl-3">
                            <span class="text-green-600 font-inter text-[36px] font-extrabold leading-normal mr-3">
                                ✓
                            </span>
                            <span class="text-[#858585] font-inter text-[36px] font-extrabold leading-normal mr-3">
                                ?
                            </span>
                            <span class="text-[#D00000] font-inter text-[36px] font-extrabold leading-normal mr-3">
                                X
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>