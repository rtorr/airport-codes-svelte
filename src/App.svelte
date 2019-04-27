<script>
  import Search from './Search.svelte';
  import { onMount } from 'svelte';
  let initData;
  onMount(async () => {
    const res = await fetch(`/assets/dataTwo.json`);
    const json = await res.json();
    initData = json;
  });
</script>

<style>
  :global(html) {
    padding: 0;
    margin: 0;
  }
  :global(body) {
    padding: 0;
    margin: 0;
    background: #333;
    color: #fff;
  }
</style>

<Search initData="{initData}"></Search>
