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

  #sidebar-left a{
    outline: solid 1px;
    padding: 10px;
    background-color: #F8F8F8;
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

<Drawer 
  position="right"
  width="w-2/3"
>
<nav class="list-nav">
	<ul>
		<li class=""><a href="/">Home</a></li>
		<li><a href="/expform">About</a></li>
		<li><a href="/eduform">Blog</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/index">Index</a></li>
	</ul>
</nav>
</Drawer>

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
  
	<svelte:fragment slot="footer">
    <AppBar background="bg-[#702828]">
      <a href="./">
      <img id="logo" src="./images/logo.png" alt="logo">
      </a>
    </AppBar>
  </svelte:fragment>
</AppShell>
