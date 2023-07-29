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
    width: clamp(192px, 50%, 256px);
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

  
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  export let data

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => subscription.unsubscribe()
  });
</script>

<slot />
<a href="/api/auth/signout" class="font-bold tracking-wider flex">
  <img src="./images/logout.png" alt="logout" class="h-6 mr-3" />
  LOGOUT
</a>