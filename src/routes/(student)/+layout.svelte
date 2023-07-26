<style>
  :global(body) {
    background-color: #F1EFEC;
  }

  html, body {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #sidebar-left a:hover{
    background-color: #dfbfbf;
    font-weight: bold;
  }
  #sidebar-left a:active{
    background-color: #DBCBCB;
    font-weight: bold;
  }
  #sidebar-left a{
    padding: 15px 75px 15px 15px;
    background-color: #F8F8F8;
    outline: solid 1px #bbbbbb;
  }
  #sidebar-left #logout a{
    background-color: rgb(199, 199, 199);
    color: #702828;
  }
    main {
      flex-grow: 1;
    }

  #logo_name{
    width: clamp(128px, 50%, 256px);
    align-self: center;
  }
  #logo{
    width: clamp(64px, 10%, 128px);
    aspect-ratio: 1/1;
  }
</style>

<script lang="ts">
  import '../../theme.postcss'
  //import '@skeletonlabs/skeleton/themes/theme-sahara.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../../app.postcss';
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
  import { IconMenu2 } from '@tabler/icons-svelte';
  import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
  import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
  import User from '$lib/components/User.svelte';
  import Register from '$lib/components/Register.svelte';
  
  import {logged_in} from '$lib/stores/auth'

  export let data;

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<AppShell>
	<svelte:fragment slot="header">
    <AppBar background="bg-[#702828]" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
      <!-- Left End Items -->
      <svelte:fragment slot="lead">
        <a href="./">
        <img id="logo_name" src="./images/logo_name.png" alt="logo_name">
        </a>
      </svelte:fragment>

      <svelte:fragment slot="trail">

        {#if $logged_in}
          <User/>
        {:else}
          <Register/>
        {/if}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

	<slot />
  <svelte:fragment slot="sidebarLeft">
    <div id="sidebar-left" class="flex flex-col h-full w-full bg-[white] justify-between shadow">
      <div class="container flex flex-col bg-[EDECEC]">
        <a href="../profile" class="flex">
          <img src="./images/prof.png" alt="profile" class="h-6 mr-3">
          Profile
        </a>
        <a href="../app-status" class="flex">
          <img src="./images/appli.png" alt="appstat" class="h-6 mr-3">
          Application Status
        </a>
        <a href="../add-exp" class=" flex">
          <img src="./images/exp.png" alt="add exp" class="h-6 mr-3"> 
          Add Experience
        </a>
        <a href="../add-edu"class=" flex"> 
          <img src="./images/exp.png" alt="add edu" class="h-6 mr-3"> 
          Add Education
        </a>
        <!-- <a href="../saved" class="flex">
           <img src="./images/savedicon.png" alt="profile" class="h-6 mr-3"> 
           Saved
        </a> -->
      </div>
      <div class="flex flex-col" id="logout">
        <a href="./" class="font-bold tracking-wider flex" > 
          <img src="./images/logout.png" alt="logout" class="h-6 mr-3">
          LOGOUT
        </a>
      </div>
    </div>
  </svelte:fragment>
  
	<svelte:fragment slot="footer">
    <AppBar background="bg-[#702828]">
      <a href="./">
      <img id="logo" src="./images/logo.png" alt="logo">
      </a>
    </AppBar>
  </svelte:fragment>
</AppShell>
