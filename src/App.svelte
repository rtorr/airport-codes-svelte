<script>
  import { onMount } from 'svelte';
  import { windowScrollY } from './store'
  import Page from './Page.svelte'
  import Search from './Search.svelte';
  import List from './List.svelte';

  let page;
  let y;
  function hashchange() {
    const path = window.location.hash.slice(1);
    if (path.startsWith('/airport')) {
      const id = path.slice(9);
      page = `${id}`
      window.scrollTo(0, 0);
    } else if(path.startsWith('/about')){
      page = 'about'
      window.scrollTo(0, 0);
    } else {
      page = null;
     
    }
  }
  let lastYOffset = 0;
  function updateWindowY() {
    let currentYOffset = window.pageYOffset;
    if (!page && currentYOffset !== lastYOffset) {
      windowScrollY.update(() => currentYOffset);
      lastYOffset = currentYOffset;
    }
    requestAnimationFrame(updateWindowY);
  }
  updateWindowY();
</script>

<style>
  :global(html) {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  :global(body) {
    padding: 0;
    margin: 0;
    background: #333;
    color: #fff;
    height: 100%;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
</style>
<svelte:window on:hashchange={hashchange} />

{#if page}
  <Page id={page} />
{:else}
  <Search/>
  <List/>
{/if}
