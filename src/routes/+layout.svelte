<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
  import { IconMenu2 } from '@tabler/icons-svelte';
  import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
  import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

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
		<li><a href="/about">About</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>
</Drawer>

<AppShell>
	<svelte:fragment slot="pageHeader">
    <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
      <!-- Left End Items -->
      <svelte:fragment slot="lead">
        <h1>Iskohire</h1>
      </svelte:fragment>

      <!-- Center Items -->
      <div class="hidden tablet:flex gap-x-8">
        <p>Search Jobs</p>
        <p>Search Employers</p>
      </div>
      
      <!-- Right End Items -->
      <svelte:fragment slot="trail">
        <div class="hidden flex-row gap-x-4 tablet:flex">
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
        </div>
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
    <AppBar>Footer</AppBar>
  </svelte:fragment>
</AppShell>
<slot>
<p>Hello World</p>
</slot>