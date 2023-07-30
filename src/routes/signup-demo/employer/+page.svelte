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

    let firstName = ''
    let lastName = ''
    let studentId = ''
    let companyId = ''
    let companyName = ''
    let contactNumber = ''
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
		        <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./../images/logo_name.png" alt="logo_name" >
            </a>
            <div class="col-6 form-widget">
                <label>
                    First Name:
                    <input type="text" bind:value={firstName} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" bind:value={lastName} required />
                </label>
                <label>
                    Company ID:
                    <input type="text" bind:value={companyId} required />
                </label>
                <label>
                    Company Name:
                    <input type="text" bind:value={companyName} required />
                </label>
                <label>
                    Contact number:
                    <input type="text" bind:value={contactNumber} required />
                </label>
                <Auth
                    supabaseClient={data.supabase}
                    view="sign_up"
                    redirectTo={`${data.url}/api/auth/callback`}
                    showLinks={false}
                    appearance={{style: { input: 'color: #000; ' } }}
                    additionalData={
                        {
                            'role_id': 3, // 3 for employer
                            'first_name': firstName,
                            'last_name': lastName,
                            'student_id': studentId,
                            'company_name': companyName,
                            'contact_number': contactNumber,
                            'company_id': companyId,
                            'status': "PENDING",
                            'is_approved': false,
                        }
                    }
                />
            </div>
        </div>
    </div>
</div>
