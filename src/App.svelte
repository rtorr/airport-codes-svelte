<script>
  import Search from './Search.svelte';
  import List from './List.svelte';
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

<Search/>
<List/>