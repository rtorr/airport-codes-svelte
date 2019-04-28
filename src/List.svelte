<script>
  import Card from './Card.svelte';
  import { get } from 'svelte/store';

  import { data, results, windowScrollY } from './store';
  import { onMount } from 'svelte';
  if (!get(data)) {
  }
  async function getData() {
    const res = await fetch(`/assets/dataTwo.json`);
    const json = await res.json();
    data.update(() => json);
    results.update(() => json);
    window.scrollTo(0, $windowScrollY);
  }
  onMount(!get(data).length ? getData : () => window.scrollTo(0, $windowScrollY));
</script>

<style>
  .container {
    color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: center;
  }
  p {
    font-size: 30px;
    text-align: center;
  }
  ul {
    margin: 52px 0 0 0;
    padding: 0;
    list-style: none;
  }
</style>

<ul class="container" class:active="{$results.length}">
  {#if $results.length} {#each $results as result (result.id)}
  <Card airport="{result}"></Card>
  {/each} {:else}
  <p>loading...</p>
  {/if}
</ul>
