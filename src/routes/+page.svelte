<script>
    import { onMount } from 'svelte';
</script>

<style>
    .center-container {
        display: flex;
        justify-content: right;
        align-items: center;
        height: 75vh;
        margin-right: 90px;
        padding: 50px;
    }

    .wrapcontainer {
        background-color: #702828;
        padding: 10px;
        width: 35%;
        height: 45%;
    }

    .questions{
        display: flex;
        flex-direction: column;
    }
</style>
<div class="bg-[url('/static/pup.jpg')]"> <!--ayaw pa nito gumana-->
<div class="center-container">
    <div class="wrapcontainer">
        <div class="questions">
            <select class="person mt-4 mb-1 p-5">
                <option value="" disabled selected>I'm a</option>
                <option>PUP Student</option>
                <option>PUP Alumni</option>
                <option>Member of Partnered Company</option>
            </select>

            <select class="job mb-1 p-5">
                <option value="" disabled selected>I'm looking for</option>
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Internship</option>
            </select>

            <select class="field p-5">
                <option value="" disabled selected>In the field of</option>
                <option>Science</option>
                <option>Secret</option>
                <option>Ewan</option>
            </select>
        </div>
        <div class="search">
            <button type="button" class="text-white bg-[#D2AC72] hover:bg-[#AD9673] font-bold rounded-md text-xl p-5 w-full mt-2">SEARCH</button>
        </div>
    </div>
</div>
</div>
