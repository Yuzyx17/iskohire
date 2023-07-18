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
  import '../theme.postcss'
  //import '@skeletonlabs/skeleton/themes/theme-sahara.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
  import { IconMenu2 } from '@tabler/icons-svelte';
  import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
  import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
  import Profile from './components/Profile.svelte';
  import Register from './components/Register.svelte';
  
  import {logged_in} from './store'

	export let data./with navbar and footer/$types.js

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
	<svelte:fragment slot="pageHeader">
    <AppBar background="bg-[#702828]" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
      <!-- Left End Items -->
      <svelte:fragment slot="lead">
        <img id="logo_name" src="./images/logo_name.png" alt="logo_name">
      </svelte:fragment>

      <!-- Center Items
      <div class="hidden tablet:flex gap-x-8 text-primary-50">
        <p>Search Jobs</p>
        <p>Search Employers</p>
        <a href="/index">Index</a>
      </div>
       -->

      <!-- Right End Items -->
      <svelte:fragment slot="trail">
        <!-- <div class="hidden flex-row gap-x-4 tablet:flex">
          <button type="button" class="btn variant-filled-surface rounded-none">
            Sign Up
          </button>
          <button type="button" class="btn variant-ringed rounded-none">
            Sign In
          </button>
        </div>
        <div class="block tablet:hidden">
          <button type="button" class="btn-icon !bg-transparent" on:click={() => drawerStore.open()}>
            <IconMenu2 size={48} />
          </button>
        </div> -->
        {#if $logged_in}
          <Profile/>
        {:else}
          <Register/>
        {/if}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="pageFooter">
    <AppBar background="bg-[#702828]">
      <img id="logo" src="./images/logo.png" alt="logo">
    </AppBar>
  </svelte:fragment>
</AppShell>
