<script lang=ts>
    import Form from "../Form.svelte";
</script>

<svelte:head>
	<title>Add Job</title>
</svelte:head>

<Form>
    <div class="action-container" slot="buttons">
        <button formaction="/employer?/create" id="submit" class="action bg-tertiary-500">ADD</button>
    </div>
</Form>