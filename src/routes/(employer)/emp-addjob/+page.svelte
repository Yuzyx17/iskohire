<script lang=ts>
    import Form from "../Form.svelte";
</script>

<svelte:head>
	<title>Add Job</title>
</svelte:head>

<div class="outside bg-white m-10">
<Form>
    <div class="action-container" slot="buttons">
        <button formaction="/employer?/create" id="submit" class="action bg-tertiary-500 m3-5">ADD</button>
    </div>
</Form>
</div>