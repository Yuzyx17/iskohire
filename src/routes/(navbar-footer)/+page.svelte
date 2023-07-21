<script>
    import { onMount } from 'svelte';
</script>

<style>
    .container {
        display: flex;
        align-items: center;
        height: 75vh;
        padding: 50px;
        margin: auto;
    }

    .wrapcontainer {
        background-color: #702828;
        padding: 10px;
        width: 50%;
        height: 55%;
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
    <div class="container">
        <div class="text-container mr-28 w-3/6">
            <h2 class="text-3xl font-bold mb-4 text-[#7C0000]">Iskohire</h2>
            <span class="text-lg inline-grid">Iskohire is your gateway to success, providing effortless access to a wide range of internships and job opportunities. Discover the perfect match for your skills and aspirations with a click of a button. Let Iskohire empower your career path and unlock your potential for excellence.</span>
        </div>
        <div class="wrapcontainer">
            <div class="questions">
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
                <a href="../././test-job-board" class="text-white bg-[#AD9673] hover:bg-[#D2AC72] font-bold rounded-md text-4xl p-7 w-full mt-2 block text-center">
                  SEARCH
                </a>
              </div>
              
        </div>
    </div>
</div>
