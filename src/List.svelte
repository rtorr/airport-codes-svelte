<script>
  import Card from './Card.svelte';
  import { data, results, windowScrollY } from './store';
  import { onMount, afterUpdate } from 'svelte';
  onMount(async () => {
    const res = await fetch(`/assets/dataTwo.json`);
    const json = await res.json();
    data.update(() => json);
    results.update(() => json);
  });
  afterUpdate(() => {
    window.scrollTo(0, $windowScrollY);
  });
</script>

<style>
  .container {
    color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  p {
    font-size: 30px;
    text-align: center;
  }
</style>

<div class="container" class:active="{$results.length}">
  {#if $results.length} {#each $results as result (result.id)}
  <Card airport="{result}"></Card>
  {/each} {:else}
  <p>loading...</p>
  {/if}
</div>
