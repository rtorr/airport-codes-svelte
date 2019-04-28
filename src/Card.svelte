<script>
  import { onMount } from 'svelte';
  export let airport;
  let section;
  let observer;
  let visible = false;
  let imageExtension = window.webpSupported ? '.webp' : '.jpg';
  onMount(() => {
    if (!visible) {
      observer = new IntersectionObserver(([entry]) => {
        visible = entry && entry.isIntersecting;
      });
      observer.observe(section);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
</script>

<style>
  .card {
    background: rgba(108, 129, 150, 0.56);
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    flex: 1 0 50%;
    font-size: 60px;
    font-weight: 900;
    height: 220px;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
  }

  .card a {
    transition: background-color 0.5s ease;
    background: rgba(0, 0, 0, 0.45);
    line-height: 70px;
    padding: 75px 0;
    width: 100%;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  .card a:hover,
  .card a:focus {
    background: rgba(0, 0, 0, 0);
  }

  @media only screen and (min-width: 600px) {
    .card {
      flex-basis: 33.333%;
    }
  }

  @media only screen and (min-width: 800px) {
    .card {
      flex-basis: 25%;
    }
  }

  @media only screen and (min-width: 1100px) {
    .card {
      flex-basis: 20%;
    }
  }

  @media only screen and (min-width: 1500px) {
    .card {
      flex-basis: 16.667%;
    }
  }

  @media only screen and (min-width: 2000px) {
    .card {
      flex-basis: 14.286%;
    }
  }

  @media only screen and (min-width: 2500px) {
    .card {
      flex-basis: 12.5%;
    }
  }
</style>

<li
  class="card"
  bind:this="{section}"
  class:active="{visible}"
  style="background: {
    visible ? `url('/assets/images/card/${airport.id}${imageExtension}')` : 'transparent'
  }">
  <a href="#/airport/{airport.id}">{airport.id}</a>
</li>
