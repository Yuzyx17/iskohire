<script>
    import { onMount } from 'svelte';
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
    import { goto, invalidate, invalidateAll } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';
	export let data

    /* Hacky Solution to redirect */
    $: if (data.session !== null) {
        goto('/api/redirect/dashboard')
    }
</script>


<svelte:head>
	<title>Login Page</title>
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
		        <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./images/logo_name.png" alt="logo_name" >
            </a>
            <div class="col-6 form-widget">
                <Auth
                    supabaseClient={data.supabase}
                    view="sign_in"
                    redirectTo={`${data.url}/api/auth/callback`}
                    showLinks={false}
                    appearance={{
                        style: { 
                            input: 'color: #000; background:white; padding: 7px; border: none; border-radius:4px; ',
                            button: 'font:bold; color:white; background:green; border:none; padding:10px; ButtonBackgroundHover:black',
                            message:'color:white',
                            label:'display:none;'}
                            }}
                />
            </div>
        </div>
    </div>
</div>
