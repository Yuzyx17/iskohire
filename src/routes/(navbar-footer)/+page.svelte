
<style>
    .container {
        display: flex;
        align-items: center;
        height: 75vh;
        padding: 50px;
        margin: auto;
        justify-content: center;
        justify-content: center;
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
        margin-top: 15px;
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

<script lang="ts">
    import { i_types } from "../../lib/reference/VALUES";
    import { goto } from "$app/navigation";
	import { Filters } from "../../lib/stores/post_store";

    let loctype: string;
    let industry_type: number;
    function gotoSearch(){
        Filters.set({industry: +industry_type, emp_type: loctype})
        goto("/job-board")
    }
</script>

<div class="bg-[url('/images/backup.png')] bg-cover m-0 h-full">
    <div class="container">
        <form method="POST" class="wrapcontainer">
            <div class="questions">
                <select bind:value={loctype} name="loc_type" required class="mb-1 p-10 text-lg card card-hover bg-white">
                    <option value="" disabled selected class="text-lg">I'm looking for</option>
                    <option value="Part-time" class="text-lg">Part Time</option>
                    <option value="Fulltime" class="text-lg">Full Time</option>
                    <option value="Internship" class="text-lg">Internship</option>
                </select>

                <select bind:value={industry_type} name="industry_type" required class="mb-2 p-10 text-lg card card-hover bg-white">
                    <option value="" disabled selected class="text-lg">In the field of</option>
                    {#each i_types as industry}
                        <option class="text-lg" value={i_types.indexOf(industry)+1}>{industry}</option>
                    {/each}

                </select>
            </div>
            <div class="search">
                <button on:click|preventDefault={() => gotoSearch()} class="text-white bg-[#AD9673] hover:bg-[#D2AC72] font-bold rounded-md text-4xl p-7 w-full mt-2 block text-center">
                  SEARCH
                </button>
            </div>
        </form>
    </div>
</div>
