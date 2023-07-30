<script lang=ts>
    import Form from "../Form.svelte";
    import type { Database } from "$lib/db/types";
    let jobpost: Database['public']['Tables']['job_post']['Row'] = {
		job_id: 0,
		desc: "",
		job_title: "",
		employment_type: "",
		loc_type: "",
		location: "",
		salary: 0,
		status: "",
		industry_type: 0,
		user_id: '',
		url: "",
	};
</script>

<svelte:head>
	<title>Add Job</title>
</svelte:head>

<div class="outside bg-white m-10">
    <Form values={jobpost}>
        <div class="action-container" slot="buttons">
            <button formaction="/alumni-dashboard?/create" id="submit" class="action bg-tertiary-500 hover:bg-[#AD9673]">ADD</button>
        </div>
    </Form>
</div>