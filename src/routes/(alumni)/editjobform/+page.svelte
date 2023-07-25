<script lang="ts">
  import { onMount } from "svelte";
  import Form from "../Form.svelte";
  import { getJobPosts } from "$lib/stores/post_store";
  import type { Database } from "$lib/db/types";
  import { user_id } from "$lib/stores/auth";

  let payload: any = {};
  let jobpost: Database["public"]["Tables"]["job_post"]["Row"] = {
    job_id: 0,
    desc: "",
    job_title: "",
    employment_type: "",
    loc_type: "",
    location: "",
    salary: 0,
    status: "",
    industry_type: 0,
    user_id: 0,
    url: "",
  };
  onMount(async () => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.forEach((value, key) => {
      payload[key] = value;
    });

    let post: any = await getJobPosts(payload["job_id"]);
    jobpost = post[0];
  });
</script>

<Form values={jobpost}>
  <div class="action-container" slot="buttons">
    <input type="hidden" name="job_id" value={payload["job_id"]} />
    <input type="hidden" name="user_id" value={jobpost.user_id} />
    <input type="hidden" name="status" value={jobpost.status} />
    <button
      formaction="/alumni-dashboard?/update"
      id="submit"
      class="action bg-tertiary-500">UPDATE</button
    >
    <button
      formaction="/alumni-dashboard?/delete"
      id="delete"
      class="action bg-warning-500">DELETE</button
    >
  </div>
</Form>
