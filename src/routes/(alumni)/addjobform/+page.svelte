<script lang=ts>
    import { crudPostStatus, uploadPosts } from "$lib/stores/post_store";
    import Form from "../Form.svelte";
</script>

<svelte:head>
	<title>Add Job</title>
</svelte:head>

<div class="outside bg-white m-10">
<Form>
    <div class="action-container" slot="buttons">
        <button formaction="?/create" id="submit" class="action bg-tertiary-500">ADD</button>
    </div>
</Form>
</div>