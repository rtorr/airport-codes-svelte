<script>
  import { onMount } from 'svelte';
  export let airport;
  let section;
  let observer;
  let visible = false;
  let webpSupported = window.webpSupported ? '.webp' : '.jpg';
  onMount(() => {
    if (!visible) {
      observer = new IntersectionObserver(([entry]) => {
        visible = entry && entry.isIntersecting;
      });
      observer.observe(section);
    }
    return () => {
      observer.disconnect();
    };
  });
</script>

<style>
  .card {
    align-items: center;
    align-self: stretch;
    background: rgba(108, 129, 150, 0.56);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-size: 60px;
    font-weight: 900;
    height: 300px;
    justify-content: center;
    opacity: 0.3;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    /* transition: opacity 0.5s ease; */
  }

  .card a {
    align-items: center;
    align-self: center;
    background-image: none;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    width: 100%;
  }
  a:hover .background {
    background: rgba(0, 0, 0, 0);
  }
  .background {
    align-items: center;
    align-self: center;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 20px;
    text-align: center;
    transition: background 0.5s ease;
    width: 100%;
  }
  .active {
    opacity: 1;
  }
</style>

<div class="card" bind:this="{section}" class:active="{visible}">
  {#if visible}
  <a
    href="#/airport/{airport.id}"
    style="background-image: url(/assets/images/card/{airport.id}{webpSupported})"
    ><span class="background"><span class="text">{airport.id}</span></span></a
  >
  {/if}
</div>
