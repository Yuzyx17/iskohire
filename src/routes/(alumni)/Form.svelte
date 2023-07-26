<style>
	.employerForm {
        display: grid;
        place-items: center;
        height: max-content;
        margin: auto;
	}
	.employerForm > :global(.action-container) {
        display: flex;
		width: 100%;
		justify-content: flex-end;
	}
	#formContainer {
		display: flex;
		flex-flow: column;
        width: 75%;
		margin-top: 100px;
	}
	#row-1, #row-2 {
		display: grid;
        justify-content: space-between;
	}
    #row-1{
		grid-template-columns: 65% 30%;
    }
    #row-2{
        grid-template-columns: 40% 25% 25%;
    }
	.employerForm > :global(.action-container) > :global(.action) {
		padding: 0.5rem;
		border-width: 1px;
		min-width: 9.5rem;
		font-weight: bolder;
		font-size: 1.5rem;
		margin: 1% 1%;
		box-shadow: 2px 3px 4px gray;
	}
	.employerForm > :global(.action-container) > :global(#submit) {
		color: white;
		border-color: rgba(103, 84, 56, 0.5);
	}
	.employerForm > :global(.action-container) > :global(#delete) {
		color: #371414;
		border-color: #371414;
	}
    .form-el{
		display: flex;
        flex-flow: column;
        margin-bottom: 1.2rem;
    }
    input, select, textarea{
		resize: none;
        font-size: 1.2rem;
        padding: .75rem 1.5rem;
        border: none;
        background-color: rgb(239, 239, 239);
        box-shadow: 2px 2px 4px rgb(190, 190, 190);
    }
    ::placeholder {
        font-style: italic;
    }

    input:focus::placeholder{
        font-weight: lighter !important;
    }
	
	label {
		font-size: 1.2rem;
		font-weight: bolder;
        margin-bottom: 4px;
        text-indent: 5px;
	}
	
    #desc{
		height: 25rem;
    }
</style>
<script lang="ts">
	import { i_types } from "$lib/reference/VALUES";
	import type { Database } from "$lib/db/types";

	export let values: Database['public']['Tables']['job_post']['Row'];
</script>
<div class="outside bg-white m-10">
<form method="POST" class="employerForm">
	<div id="formContainer">
		<div id="row-1">
			<div class="form-el">
				<label for="job_title">Job Title</label>
				<input bind:value={values.job_title} required name="job_title" type="text" placeholder="Title of the Job"/>
			</div>
			<div class="form-el">
				<label for="salary">Salary</label>
				<input bind:value={values.salary} required name="salary" type="number" placeholder="Salary of the Job"/>
			</div>
		</div>
		<div id="row-2">
			<div class="form-el">
				<label for="industry_type">Industry Type</label>
				<select name="industry_type" id="industry_type">
					{#each i_types as i_type}
						<option selected={i_types.indexOf(i_type)+1 == values.industry_type} value={i_types.indexOf(i_type)+1}>{i_type}</option>
					{/each}
				</select>
			</div>

			<div class="form-el">
				<label for="employment_type">Employment Type</label>
				<select name="employment_type" id="employment_type">
					<option selected={values.employment_type == "Part-time" } value="Part-time">Part-time</option>
					<option selected={values.employment_type == "Full-time" } value="Full-time" >Full-time</option>
					<option selected={values.employment_type == "Internship"} value="Internship">Internship</option>
				</select>
			</div>

			<div class="form-el">
				<label for="loc_type">Location Type</label>
				<select name="loc_type" id="loc_type">
					<option selected={values.loc_type == "Online"} value="Online">Online</option>
					<option selected={values.loc_type == "Onsite"} value="Onsite">Onsite</option>
					<option selected={values.loc_type == "Hybrid"} value="Hybrid">Hybrid</option>
				</select>
			</div>
		</div>
		<div class="form-el">
			<label for="location">Location Address</label>
			<input bind:value={values.location} required name="location" type="text" placeholder="Location of the Company or Job site"/>
		</div>
		<div class="form-el">
			<label for="url">Website</label>
			<input bind:value={values.url} required name="url" type="url" placeholder="Link of your website"/>
		</div>
		<div class="form-el">
			<label for="desc">Description</label>
			<textarea bind:value={values.desc} required name="desc" id="desc" placeholder="Short Description of the Job"></textarea>
			<!-- <input required name="desc" id="desc" type="text" placeholder="Short Description of the Job"/> -->
		</div>
	</div>
	<slot name="buttons">
		<span>EMPTY</span>
	</slot>
</form>
</div>