<script>
	import { enhance } from '$app/forms';
    // function submitForm() {
    //   console.log({
    //     title,
    //     emptype,
    //     compname,
    //     loc,
    //     loctype,
    //     startDate,
    //     endDate,
    //     industry,
    //     desc,
    //     skills,
    //   });
    // }

    let title = "";
    let emptype = "";
    let compname = "";
    let loc = "";
    let loctype = "";
    let startDate = "";
    let endDate = "";
    let industry = "";
    let desc = "";
    let skills = "";

    export let data;
    export let form;

    export const i_types = [
        "Business & Management",
        "Creative Arts",
        "Engineering & Mathematics",
        "Food, Hospitality, & Personal Services",
        "General Skills & Pathways",
        "Humanities, Arts & Social Sciences",
        "IT & Computer Science",
        "Law, Legal Studies, & Justice",
        "Medical & Health Sciences",
        "Property & Builty Environment",
        "Sciences",
        "Teaching & Education", 
        "Trades & Services"
    ]

    async function handleSubmit() {
        let title = "";
        let emptype = "";
        let compname = "";
        let loc = "";
        let loctype = "";
        let startDate = "";
        let endDate = "";
        let industry = "";
        let desc = "";
        let skills = "";
    }
</script>

<style>
    .container {
        display: grid;
        place-items: center;
        height: 100vh;
        margin: auto;
    }

    .form-wrapper {
        width: 75%;
    }

    .form-wrapper form {
        width: 100%;
    }

    #startDate,
    #endDate {
        width: 220px;
    }

    select#loctype,
    select#emptype {
        width: 300px;
        height: 50px;
        background-color: #F1EFEC;
        padding: 0.75rem;
        border: 1px solid #D1D5DB;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    select#industry {
        height: 50px;
        padding: 0.75rem;
        background-color: #F1EFEC;
        border: 1px solid #D1D5DB;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    textarea,
    input[type="text"],
    input[type="date"] {
        padding: 0.75rem;
        height: 50px;
        background-color: #F1EFEC;
        border: 1px solid #D1D5DB;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    textarea {
        resize: none;
    }

    h1 {
        font-size: 75px;
    }
</style>

<div class="outside bg-white m-10 shadow">
    <div class="container">
        <div class="form-wrapper">
            <main class="p-8">
                <h1 class="font-bold mb-20 mt-10 text-center">Add Experience</h1>
                <form method="POST" action="?/add_exp" use:enhance={handleSubmit}>
                    <div class="mb-4">
                        <label class="block font-bold mb-4" for="title">Title</label>
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="title"
                            name="title"
                            bind:value="{title}"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="compname">Company Name</label>
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="compname"
                            name="compname"
                            bind:value="{compname}"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="loc">Location</label>
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="loc"
                            name="loc"
                            bind:value="{loc}"
                            required
                        />
                    </div>

                    <div class="flex gap-4 mb-4">
                        <div class="mb-4">
                            <label class="block font-bold mb-1" for="loctype">Location Type</label>
                            <select
                                class="w-full px-3 py-2 color"
                                id="loctype"
                                name="loctype"
                                bind:value="{loctype}"
                                required
                            >
                                <option value="" disabled selected>Please Select</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Online">Online</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block font-bold mb-1" for="emptype">Employment Type</label>
                            <select
                                class="w-full px-3 py-2"
                                id="emptype"
                                name="emptype"
                                bind:value="{emptype}"
                                required
                            >
                                <option class="text-slate-400" disabled selected>Please Select</option>
                                <option value="Onsite">Full Time</option>
                                <option value="Online">Part Time</option>
                                <option value="Hybrid">Internship</option>
                            </select>
                        </div>

                        <div>
                            <label class="block font-bold mb-1" for="startDate">Start Date</label>
                            <input
                                class="w-full px-3 py-2"
                                type="date"
                                id="startDate"
                                name="startDate"
                                bind:value="{startDate}"
                                required
                            />
                        </div>

                        <div>
                            <label class="block font-bold mb-1" for="endDate">End Date</label>
                            <input
                                class="w-full px-3 py-2"
                                type="date"
                                id="endDate"
                                name="endDate"
                                bind:value="{endDate}"
                                required
                            />
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="industry">Industry</label>
                        <select
                            class="w-full px-3 py-2 h-1"
                            id="industry"
                            name="industry"
                            bind:value="{industry}"
                            required
                        >
                            <!-- <option class="text-slate-400" disabled selected>Please Select</option>
                            <option value="Bussiness">Business & Management</option>
                            <option value="Arts">Creative Arts</option>
                            <option value="Engineer">Engineering & Mathematics</option>
                            <option value="Food">Food, Hospitality, & Personal Services</option>
                            <option value="General">General Skills & Pathways</option>
                            <option value="Social">Humanities, Arts & Social Sciences</option>
                            <option value="CCIS">IT & Computer Science</option>
                            <option value="Law">Law, Legal Studies, & Justice</option>
                            <option value="Medical">Medical & Health Sciences</option>
                            <option value="Property">Property & Built Environment</option>
                            <option value="Sciences">Sciences</option>
                            <option value="Education">Teaching & Education</option>
                            <option value="Services">Trades and Services</option> -->
                            {#each i_types as item, index}
                                <option value="{index}">{item}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="desc">Description</label>
                        <textarea
                            class="w-full px-3 py-2"
                            id="desc"
                            name="desc"
                            bind:value="{desc}"
                            required
                        ></textarea>
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="skills">Skills</label>
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="skills"
                            name="skills"
                            bind:value="{skills}"
                            required
                        />
                    </div>

                    <div class="text-right">
                        <button
                            class="px-4 py-2 text-white font-bold bg-[#417E1B] hover:bg-[#395A24]"
                            id="save"
                            type="submit"
                            formaction="?/add_exp"
                        >
                            SAVE
                        </button>
                    </div>
                </form>
            </main>
        </div>
    </div>
</div>
