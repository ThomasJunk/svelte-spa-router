<script lang="ts">
  import { push, pop, replace } from "svelte-spa-router";
  import { location } from "svelte-spa-router";
  const routeToHome = () => {
    push("/");
  };
</script>

<h1>About page</h1>

<button on:click={routeToHome}>Home</button>
<p>{$location}</p>
