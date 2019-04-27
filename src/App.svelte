<script>
  import Search from './Search.svelte';
  let data;
  async function fetchData() {
    const res = await fetch(`/assets/dataTwo.json`);
    const text = await res.json();
    if (res.ok) {
      data = text;
      return text;
    } else {
      throw new Error(text);
    }
  }
  fetchData();
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

{#if data}
<Search initData="{data}"></Search>
{:else}
<Search initData="{data}"></Search>
{/if}
