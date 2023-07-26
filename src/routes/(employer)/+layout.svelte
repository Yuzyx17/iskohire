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
  main {
    flex-grow: 1;
  }
  #sidebar-left a{
    padding: 15px 126px 15px 15px;
    outline: solid 1px #bbbbbb;
  }
  #sidebar-left a:hover{
    background-color: #dfbfbf;
    font-weight: bold;
  }
  #sidebar-left a:active::before{
    background-color: #DBCBCB;
    font-weight: bold;
  }
  #sidebar-left a:active::after{
    background-color: #DBCBCB;
    font-weight: bold;
  }
  #sidebar-left #logout a{
    background-color: rgb(199, 199, 199);
    color: #702828;
  }
  #sidebar-left #logout a:hover{
    background-color: rgb(182, 181, 181);
  }
  #logo_name{
    width: clamp(128px, 50%, 256px);
    align-self: center;
  }
  #logo{
    width: clamp(64px, 10%, 128px);
    aspect-ratio: 1/1;
  }
  a.active{
    background-color: #dfbfbf;
    font-weight: bold
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
  import {page} from '$app/stores'
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
        <a href="../emp-dashboard" class=" flex" class:active={$page.url.pathname === "/emp-dashboard" ? "bg-[white]" : ""}>
          <img src="./images/dash.png" alt="dashboard" class="h-6 mr-3"> 
          Dashboard
        </a>
        <a href="../emp-addjob" class=" flex" class:active={$page.url.pathname === "/emp-addjob" ? "bg-[white]" : ""}>
          <img src="./images/addjob.png" alt="add job" class="h-6 mr-3"> 
          Add Job
        </a>
        <a href="../emp-editjob" class=" flex" class:active={$page.url.pathname === "/emp-editjob" ? "bg-[white]" : ""}>
          <img src="./images/editjob.png" alt="edit job" class="h-6 mr-3"> 
          Edit Job
        </a>
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
