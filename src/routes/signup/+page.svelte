<script>
    import { onMount } from 'svelte';
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
    import { goto, invalidate, invalidateAll } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';
</script>

<svelte:head>
	<title>Sign Up Page</title>
</svelte:head>

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
    <div class="center-container">
        <div class="flex flex-col gap-4 bg-[#702828] p-5 w-2/4 h-5/4">
            <a href="./">
		    <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./images/logo_name.png" alt="logo_name">
            </a>
            <div class="flex justify-between items-center bg-white text-[#702828] card card-hover bg-white">
                <span class="mb-2 p-7 text-4xl font-extrabold">STUDENT</span>
                <a href="signup-demo/student" class="p-2 w-36 text-lg text-center rounded mr-5 font-bold text-white variant-filled-tertiary cursor-pointer hover:bg-[#AD9673]">SIGN UP</a>
            </div>
            <div class="flex justify-between items-center bg-white text-[#702828] card card-hover bg-white">
                <span class="mb-2 p-7 text-4xl font-extrabold">ALUMNI</span>
                <a href="signup-demo/alumni" class="p-2 w-36 text-lg text-center rounded mr-5 font-bold text-white variant-filled-tertiary cursor-pointer hover:bg-[#AD9673]">SIGN UP</a>
            </div>
            <div class="flex justify-between items-center bg-white text-[#702828] card card-hover bg-white">
                <span class="mb-2 p-7 text-4xl font-extrabold">EMPLOYER</span>
                <a href="signup-demo/employer" class="p-2 w-36 text-lg text-center rounded mr-5 font-bold text-white variant-filled-tertiary cursor-pointer hover:bg-[#AD9673]">SIGN UP</a>
            </div>
        </div>
    </div>
</div>