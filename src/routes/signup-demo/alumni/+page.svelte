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

    let fullName = ''
    let studentId = ''
    let companyId = ''
    let companyName = ''
    let contactNumber = ''
</script>



<svelte:head>
	<title>Alumni Sign Up Page</title>
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
                    <input type="text" bind:value={fullName} required placeholder="Full Name" class="border border-gray-300 text-black text-sm mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded"/>
                </label>
                <label>
                    <input type="text" bind:value={studentId} required placeholder="Student ID" class="border border-gray-300 text-black color-black text-sm mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded"/>
                </label>
                <label>
                    <input type="text" bind:value={contactNumber} required placeholder="Contact Number" class="border border-gray-300 text-gray-900 text-sm mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded"/>
                </label>
                <label>
                    <input type="text" bind:value={companyName} placeholder="Company Name" class="border border-gray-300 text-gray-900 text-sm mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded"/>
                </label>
                <label>
                    <input type="text" bind:value={companyId} placeholder="DTI Registration Number" class="border border-gray-300 text-gray-900 text-sm mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded"/>
                </label>
                <Auth
                    supabaseClient={data.supabase}
                    view="sign_up"
                    redirectTo={`${data.url}/api/auth/callback`}
                    showLinks={false}
                    localization={{
                        variables: {
                          sign_in: {
                            email_label: '',
                            password_label: '',
                          },
                        },
                      }}                  
                    appearance={{
                        style: { 
                            input: 'color: #000; background:white; padding: 7px; border: none; border-radius:4px; ',
                            button: 'font:bold; color:white; background:green; border:none; padding:10px; ButtonBackgroundHover:black',
                            message:'font-style: italic; font-weight: 700; text-align: center; color: #FFE1B4;',
                            label:'display:none;'}
                            }}
                    additionalData={
                        {
                            'role_id': '2', // 1 for student
                            'full_name': fullName,
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
