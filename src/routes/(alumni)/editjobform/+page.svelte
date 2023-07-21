<script lang=ts>
    import Form from "../Form.svelte";
</script>


<Form>
    <div class="action-container" slot="buttons">
        <button formaction="/employer?/update" id="submit" class="action bg-tertiary-500">UPDATE</button>
        <button formaction="/employer?/delete" id="delete" class="action bg-warning-500">DELETE</button>
    </div>
</Form>
