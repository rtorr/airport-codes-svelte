<script>
  import { onMount } from 'svelte';
  import Page from './Page.svelte'
  import Search from './Search.svelte';
  import List from './List.svelte';

	let page;

	function hashchange() {
    const path = window.location.hash.slice(1);
		if (path.startsWith('/airport')) {
			const id = path.slice(9);
			page = `${id}`
		} else if(path.startsWith('/about')){
      page = 'about'
    }else {
			page = null;
  }
}

	onMount(hashchange);
</script>

<style>
  :global(html) {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  :global(body) {
    padding: 0;
    margin: 0;
    background: #333;
    color: #fff;
    height: 100%;
    width: 100%;
  }
</style>
<svelte:window on:hashchange={hashchange}/>

  {#if page}
  <Page id={page} />
  {:else}
  <Search/>
  <List/>
  {/if}
