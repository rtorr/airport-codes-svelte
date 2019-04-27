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

  onMount(getPage);
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

<main style="background-image: url(/assets/images/card/{data.id}.webp)">
  {#if data}
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
  {:else}
  <p>loading...</p>
  {/if}
</main>
