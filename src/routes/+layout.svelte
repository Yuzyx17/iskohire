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
</script>

<slot />