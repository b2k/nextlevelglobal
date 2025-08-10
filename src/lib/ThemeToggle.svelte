<script lang="ts">
  import { onMount } from 'svelte';
  let dark = false;
  onMount(() => {
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches ||
           document.documentElement.classList.contains('dark');
  });
  function toggle(){
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
  }
</script>

<button class="btn btn-outline" on:click={toggle} aria-label="Toggle theme">
  {#if dark}🌙{/if}{#if !dark}☀️{/if}
</button>
