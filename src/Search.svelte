<script>
  import Card from './Card.svelte';
  export let initData = [];
  let query = '';
  $: results = initData;
  var SEARCH_FIELD = [
    'id',
    'name',
    'nameEnglish',
    'city',
    'city2',
    'state',
    'stateShort',
    'country'
  ];

  function search() {
    const searchTerm = new RegExp('^' + query, 'gi');
    results = initData.filter(function(airport) {
      let hasMatch = false;
      for (let i = 0; i < SEARCH_FIELD.length; i++) {
        const key = SEARCH_FIELD[i];
        if (searchTerm.test(airport[key])) {
          hasMatch = true;
          break;
        }
      }
      return hasMatch;
    });
  }
</script>

<style>
  header {
    align-items: center;
    animation: fadein 0.4s;
    background: #40bae2;
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: space-between;
    padding: 10px 15px;
  }
  header input {
    align-self: baseline;
    background-size: 14px 14px;
    border-radius: 4px;
    border: 1px solid #fff;
    flex: 1;
    font-family: Georgia, serif;
    font-size: 16px;
    font-style: italic;
    line-height: 1;
    max-width: 50%;
  }
  header input:focus {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.15);
    outline: 0;
  }
  header h1 {
    display: flex;
    flex-direction: row;
    font-size: 18px;
  }
  header h1 a {
    margin-right: 20px;
  }
  a,
  a:visited {
    color: #fff;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

<header>
  <h1><a href="#">Airport Codes</a><a class="nav-about" href="#about">About</a></h1>
  <input bind:value="{query}" on:input="{search}" placeholder="find your airport" />
</header>

<div class="container">
  {#if results} {#each results as result (result.id)}
  <Card airport="{result}"></Card>
  {/each} {/if}
</div>
