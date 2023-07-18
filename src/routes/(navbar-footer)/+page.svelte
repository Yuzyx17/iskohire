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
        width: 50%;
        height: 75%;
    }

    .questions {
        display: flex;
        flex-direction: column;
        margin-top: 0;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-right: 2.5rem;
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5rem;
        background-image: url('./images/arrow.png');
        outline: none;
    }

    select::-ms-expand {
        display: none;
    }
    
</style>
<div class="bg-[url('/images/backup.png')] bg-cover m-0 h-full">
    <div class="center-container">
        <div class="wrapcontainer">
            <div class="questions">
                <select class="mt-4 mb-1 p-10 text-lg">
                    <option value="" disabled selected class="text-lg">I'm a</option>
                    <option value="stud" class="text-lg">PUP Student</option>
                    <option value="alumn" class="text-lg">PUP Alumni</option>
                    <option value="comp" class="text-lg">Member of Partnered Company</option>
                </select>

                <select class="mb-1 p-10 text-lg">
                    <option value="" disabled selected class="text-lg">I'm looking for</option>
                    <option value="pt" class="text-lg">Part Time</option>
                    <option value="ft" class="text-lg">Full Time</option>
                    <option value="intern" class="text-lg">Internship</option>
                </select>

                <select class="mb-2 p-10 text-lg">
                    <option value="" disabled selected class="text-lg">In the field of</option>
                    <option class="text-lg">Science</option>
                    <option class="text-lg">Secret</option>
                    <option class="text-lg">Ewan</option>
                </select>
            </div>
            <div class="search">
                <button type="button" class="text-white variant-filled-tertiary hover:bg-[#AD9673] font-bold rounded-md text-4xl p-7 w-full mt-2">SEARCH</button>
            </div>
        </div>
    </div>
</div>
