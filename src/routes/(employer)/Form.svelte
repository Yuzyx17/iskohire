<script lang="ts">
	import { i_types } from "$lib/reference/VALUES";
</script>

<style>
	.employerForm {
        display: grid;
        place-items: center;
        height: 100vh;
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
		resize: none;
    }
</style>
<div class="outside bg-white m-10">
<form method="POST" class="employerForm">
	<slot name="buttons">
		<span>EMPTY</span>
	</slot>
	<div id="formContainer">
		<div id="row-1">
			<div class="form-el">
				<label for="job_title">Job Title</label>
				<input name="job_title" type="text" placeholder="Title of the Job"/>
			</div>
			<div class="form-el">
				<label for="salary">Salary</label>
				<input name="salary" type="number" placeholder="Salary of the Job"/>
			</div>
		</div>
		<div id="row-2">
			<div class="form-el">
				<label for="i-type">Industry Type</label>
				<select name="i-type" id="i-type">
					{#each i_types as i_type}
						<option value={i_type}>{i_type}</option>
					{/each}
				</select>
			</div>

			<div class="form-el">
				<label for="emp_class">Employment Type</label>
				<select name="emp_class" id="emp_class">
					<option value="Part-time" selected>Part-time</option>
					<option value="Full-time" selected>Full-time</option>
					<option value="Internship" selected>Internship</option>
				</select>
			</div>

			<div class="form-el">
				<label for="mode">Location Type</label>
				<select name="mode" id="mode">
					<option value="Online" selected>Online</option>
					<option value="Onsite" selected>Onsite</option>
					<option value="Hybrid" selected>Hybrid</option>
				</select>
			</div>
		</div>
		<div class="form-el">
			<label for="addr">Location Address</label>
			<input name="addr" type="text" placeholder="Location of the Company or Job site"/>
		</div>
		<div class="form-el">
			<label for="web_url">Website</label>
			<input name="web_url" type="url" placeholder="Link of your website"/>
		</div>
		<div class="form-el">
			<label for="desc">Description</label>
			<!-- <input name="desc" id="desc" type="text" placeholder="Short Description of the Job"/> -->
			<textarea id="desc" name="desc" placeholder="Short Description of the Job"></textarea>
		</div>
	</div>
</form>
</div>