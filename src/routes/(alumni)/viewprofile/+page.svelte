<script>
    // in student_info
    // name 
    // student id
	import { ApplicantInfo, loadStudent } from '$lib/stores/student/student_store';
    import { onMount } from 'svelte';
    // $ApplicantInfo
    let loading = true;
    onMount(async () => {
        ApplicantInfo.subscribe(() => {
            loading = false;
        });
    });
</script>


<style>
    h1 {
        font-size: 75px;
    }
</style>

<div class="outside bg-white m-10">
    <div class="container">
        <div class="form-wrapper">
            <main class="p-8">
                <h1 class="font-bold mb-20 mt-10">Profile</h1>
                {#if loading }
                    <p>Loading...</p>
                {:else if $ApplicantInfo}
                    <div>
                        <div class="w-full px-3 py-2 text-3xl">
                            <h3 class="font-bold">{ $ApplicantInfo.name }</h3>
                        </div>
                        <div class="w-full px-3 py-2 text-3xl">
                            { $ApplicantInfo.student_uid }
                        </div>
                    </div>
                    <hr>
                    <main class="container mx-auto py-10">
                        <section class="mb-8">
                            <h2 class="text-2xl font-bold mb-4">Education</h2>
                            <!-- Bachelor's education details will be placed here -->
                            <h3 class="text-xl font-bold mb-2">{ $ApplicantInfo.course }</h3>
                            <p class="text-gray-600 mb-1">{ $ApplicantInfo.school }</p>
                        </section>
                        <hr>
                        <section class="mt-8">
                            <h2 class="text-2xl font-bold mb-4">Skills</h2>
                            <ul class="grid grid-cols-2 gap-4">
                                <!-- Skills list as mentioned before -->
                                <!-- <li class="bg-[#702828] text-white rounded px-4 py-2">HTML</li>
                                <li class="bg-[#702828] text-white rounded px-4 py-2">CSS</li>
                                <li class="bg-[#702828] text-white rounded px-4 py-2">JavaScript</li>
                                <li class="bg-[#702828] text-white rounded px-4 py-2">Tailwind CSS</li>
                                <li class="bg-[#702828] text-white rounded px-4 py-2">React</li>
                                <li class="bg-[#702828] text-white rounded px-4 py-2">Node.js</li> -->
                                {#if $ApplicantInfo.skill_titles}
                                    {#each  $ApplicantInfo.skill_titles as skill }
                                        <li class="bg-[#702828] text-white rounded px-4 py-2">{ skill }</li>
                                        
                                    {/each}
                                {/if}
                            </ul>
                        </section>
                    </main>
                {/if}
            </main>
        </div>
    </div>
</div>