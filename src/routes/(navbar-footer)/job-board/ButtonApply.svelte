<script lang=ts>
	import { goto } from "$app/navigation";
	import type { Database } from "$lib/db/types";
    import { JobApplications } from "$lib/stores/alumni_store";
    import { logged_in } from "$lib/stores/auth";

    export let item: Database['public']['Views']['posts']['Row'];
    export let apply: Function;
    export let disable: any;
</script>

<div>
    {#if !$logged_in}
        <button on:click|preventDefault={() => goto("login")} class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-lg font-black text-white h-10 hover:bg-[#AD9673]">
            APPLY
        </button>
    {:else if ($JobApplications.map((val)=> val.job_id)).includes(item.job_id == null ? 0 : item.job_id)}
        <button disabled class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-lg font-black text-white h-10 hover:bg-[#AD9673] bg-[#00ff00]">
            APPLIED
        </button>
    {:else}
        <button on:click|preventDefault={() => apply(item.job_id)} disabled={disable} class="bg-[#D2AC72] border border-solid border-[#AB7C7C] w-24 font-inter text-lg font-black text-white h-10 hover:bg-[#AD9673]">
            APPLY
        </button>
    {/if}
</div>