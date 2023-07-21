<script lang="ts">
    import { test_employ_form } from "./store";
</script>

<div id="container">
	<aside id="test-sidebar">
        <a href="/employer" class="select">DASHY</a>
        <a href="/employer/add" class="select">ADD</a>
        <a href="/employer/edit" class="select">EDIT</a>
        <div>TEST: {$test_employ_form}</div>
    </aside>
	<main id="content">
        <slot/>
    </main>
</div>

<style>
    #container{
        position: relative;
        display: grid;
        grid-template-columns: 17.5% 82.5%;
        height: clamp(50%, 100%, 80vh);
        max-height: clamp(50%, 100%, 80vh);
    }
	#test-sidebar {
		background-color: red;
		height: 100%;
        top: 0;
        left: 0;
        position: sticky;
	}
    #content{
        overflow-y: scroll;
        overflow-x: hidden;
        height: inherit;
        max-height: 80vh;
        padding: 2.5%;
    }
</style>
