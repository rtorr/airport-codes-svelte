<script>
  import { onMount } from 'svelte';
  export let id;
  let data = {};

  async function getPage() {
    const res = await fetch(`/assets/data/${id}.json`);
    const json = await res.json();

    if (res.ok) {
      data = json;
    } else {
      throw new Error(json);
    }
  }
  console.log(id);
  if (id !== 'about') {
    onMount(getPage);
  }
</script>

<style>
  main {
    background-size: cover;

    height: 100%;
    width: 100%;
  }
  section {
    padding: 50px;
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .data {
    max-width: 500px;
  }
</style>

{#if id === 'about'}
<main style="background-image: url(/assets/images/card/{data.id}.webp)">
  <section>
    <div class="data">
      <div>
          <p>This site was designed and built by <a href="https://twitter.com/lynnandtonic">Lynn Fisher</a> and <a href="https://twitter.com/nickcrohn">Nick Crohn</a>.
          </p>
          <p>The orginal is found here <a href="https://airportcod.es/">https://airportcod.es/</a></p>
    </div>
  </section>
</main>
{:else} {#if data.id}
<main style="background-image: url(/assets/images/card/{data.id}.webp)">
  <section>
    <div class="data">
      <div>
        <h1>{data.id}</h1>
        <h2>{data.name}</h2>
        <h3>
          <span class="city">{data.city}</span>
          <span class="country">{data.country}</span>
        </h3>
        <div>
          <p>
            {data.description}
          </p>
        </div>
      </div>
      <div>photo by <a href="{data.imageCreditLink}">{data.imageCredit}</a></div>
      <a href="#">Airport Codes</a>
    </div>
  </section>
</main>
{:else}
<p>loading...</p>
{/if} {/if}
