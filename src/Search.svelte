<script>
  import { get } from 'svelte/store';
  import { results, data } from './store';

  let query = '';
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
    results.set(
      get(data).filter(function(airport) {
        let hasMatch = false;
        for (let i = 0; i < SEARCH_FIELD.length; i++) {
          const key = SEARCH_FIELD[i];
          if (searchTerm.test(airport[key])) {
            hasMatch = true;
            break;
          }
        }
        return hasMatch;
      })
    );
  }
</script>

<style>
  header {
    align-items: center;
    animation: fadein 0.4s;
    background: #135e77;
    padding: 10px 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: row;
  }
  header input {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="40" width="40"><text x="10" y="20" fill="black" font-size="16">🔍</text></svg>');
    background-repeat: no-repeat;
    border-radius: 4px;
    border: 1px solid #fff;
    font-family: Georgia, serif;
    font-size: 16px;
    font-style: italic;
    line-height: 1;
    margin: 0;
    width: 50%;
    padding: 0.4em 0.4em 0.4em 32px;
    position: relative;
  }
  header label {
    width: 0;
    overflow: hidden;
  }
  header input:focus {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.15);
    outline: 0;
  }
  header h1 {
    margin: 0;
    float: left;
    font-size: 18px;
    line-height: 1;
    padding: 0.4em 0;
    flex: 1 1;
    min-width: 0px;
    white-space: nowrap;
    text-overflow: clip;
    overflow: hidden;
  }
  header h1 a {
    margin-right: 20px;
  }
  a,
  a:visited {
    color: #fff;
  }

  @media only screen and (max-width: 600px) {
    header input {
      transition: flex-basis ease .2s;
      flex: 0;
    }

    header input:focus {
      flex-basis: 100%;
    }
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
  <h1><a href="#">Airport Codes (svelte)</a><a class="nav-about" href="#/about">About</a></h1>
  <input id="search" bind:value="{query}" on:input="{search}" placeholder="find your airport" />
  <label for="search">find your airport</label>
</header>
