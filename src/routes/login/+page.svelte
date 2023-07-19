<script>
    import { onMount } from 'svelte';
</script>

<style>
    .center-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 50px;
    }

</style>

<div class="bg-[url('/images/backup.png')] bg-cover m-0 h-full">
    <div class="center-container"> <!-- flex justify-center items-center h-screen-3/4 p-13-->
        <div class="flex flex-col gap-4 bg-[#702828] p-5 w-2/4 h-5/4">
            <a href="../././test-job-board">
		    <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./images/logo_name.png" alt="logo_name">
            </a>
            <div class="flex justify-between items-center bg-white text-[#702828]">
                <span class="mb-2 p-7 text-4xl font-extrabold">STUDENT</span>
                <a href="/account" class="p-2 w-36 text-lg text-center rounded mr-5 font-bold text-white variant-filled-tertiary cursor-pointer hover:bg-[#AD9673]">LOGIN</a>
            </div>
            <div class="flex justify-between items-center bg-white text-[#702828]">
                <span class="mb-2 p-7 text-4xl font-extrabold">ALUMNI</span>
                <a href="/account" class="p-2 w-36 text-lg text-center rounded mr-5 font-bold text-white variant-filled-tertiary cursor-pointer hover:bg-[#AD9673]">LOGIN</a>
            </div>
            <div class="flex justify-between items-center bg-white text-[#702828]">
                <span class="mb-2 p-7 text-4xl font-extrabold">EMPLOYER</span>
                <a href="/account" class="p-2 w-36 text-lg text-center rounded mr-5 font-bold text-white variant-filled-tertiary cursor-pointer hover:bg-[#AD9673]">LOGIN</a>
            </div>
        </div>
    </div>
</div>
