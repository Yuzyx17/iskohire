<script lang="ts">
	import { enhance } from '$app/forms';
    // import { onMount } from "svelte";
    // import { supabase } from '$lib/supabase';

    // function submitForm() {
    //   console.log({
    //     school,
    //     degree,
    //     field,
    //     grade,
    //     startDate,
    //     endDate,
    //     desc,
    //     acts,
    //   });
    // }

    // let desc1: string = "trail desc";
    // let field_study: number = 1;
    // let grade1: number = 1.3;
    // let is_finished: string = "true";
    // let role_id: number = 1;
    // let school1: string = "PUP";
    // let year_end: number = 2023;
    // let year_start: number = 2023;

    // Adding Education
    // async function addEduc() {

    // // get the equivalent enum of the field_study

    //     const { error } = await supabase
    //     .from("applicant_education")
    //     .insert({
    //         desc: desc1,
    //         field_study: field_study,
    //         grade: grade1,
    //         is_finished: is_finished,
    //         role_id: role_id,
    //         school: school1,
    //         user_id: 5,
    //         year_end: year_end,
    //         year_start: year_start 
    //     })
    // }

    // get the user data from the form

    // TRYING START FROM HERE:
    // export let data;

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

    let school = "";
    let degree = "";
    let field = "";
    let grade = "";
    let startDate = "";
    let endDate = "";
    let desc = "";
    let acts = "";

    export let data;
    export let form;

    async function handleSubmit() {
        let school = "";
        let degree = "";
        let field = "";
        let grade = "";
        let startDate = "";
        let endDate = "";
        let desc = "";
        let acts = "";
    }
</script>
<svelte:head>
	<title>Add Education</title>
</svelte:head>
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

    select#field {
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

<div class="outside bg-white m-10">
    <div class="container">
        <div class="form-wrapper">
            <main class="p-8">
                <h1 class="font-bold mb-20 mt-10 text-center">Add Education</h1>

                <form method="POST" action="?/add_educ" on:submit={handleSubmit}>
                    <div class="mb-4">
                        <label class="block font-bold mb-4" for="school">School</label>
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="school"
                            name="school"
                            bind:value="{school}"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="degree">Degree</label>
                        <!--dropdown-->
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="degree"
                            name="degree"
                            bind:value="{degree}"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="field">Field of Study</label>
                        <!--dropdown-->

                        <select
                            class="w-full px-3 py-2 h-1"
                            id="field"
                            name="field"
                            bind:value="{field}"
                            required
                        >
                            <option class="text-slate-400" disabled selected>Please Select</option>
                            <!-- <option value="Bussiness">Business & Management</option>
                            <option value="Arts">Creative Arts</option>
                            <option value="Engineer">Engineering & Mathematics</option>
                            <option value="Food">Food, Hospitality, & Personal Services</option>
                            <option value="General">General Skills & Pathways</option>
                            <option value="Social">Humanities, Arts & Social Sciences</option>
                            <option value="CCIS">IT & Computer Science</option>
                            <option value="Law">Law, Legal Studies, & Justice</option>
                            <option value="Medical">Medical & Health Sciences</option>
                            <option value="Property">Property & Built Environment</option>
                            <option value="Science">Sciences</option>
                            <option value="Education">Teaching & Education</option>
                            <option value="Services">Trades and Services</option> -->
                            {#each i_types as item, index}
                                <option value="{index}">{item}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="flex gap-4 mb-1">
                        <div class="mb-4">
                            <label class="block font-bold mb-1" for="grade">Grade</label>
                            <input
                                class="w-full px-3 py-2"
                                type="text"
                                id="grade"
                                name="grade"
                                bind:value="{grade}"
                                required
                            />
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
                        <label class="block font-bold mb-1" for="acts">Activities and Societies</label>
                        <textarea
                            class="w-full px-3 py-2"
                            id="acts"
                            name="acts"
                            bind:value="{acts}"
                            required
                        ></textarea>
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

                    <div class="text-right">
                        <button
                            class="px-4 py-2 text-white font-bold bg-[#417E1B] hover:bg-[#395A24]"
                            id="save"
                            type="submit"
                            formaction="?/add_educ"
                            on:click={handleSubmit}
                        >
                            SAVE
                        </button>
                    </div>
                </form>
            </main>
        </div>
    </div>
</div>
