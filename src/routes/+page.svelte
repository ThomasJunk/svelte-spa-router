<script lang="ts">
  import Home from "$lib/routes/Home.svelte";
  import About from "$lib/routes/About.svelte";
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  const routes = {
    // Exact path
    "/": Home,
    "/about": About
  };
</script>

<div class="container">
  <div class="aside">
    <h1>Welcome to $APP</h1>
    <ul class="menu">
      <li><a href="/" use:link use:active={"/"}>Home</a></li>
      <li><a href="/about" use:link use:active={"/about"}>About</a></li>
    </ul>
  </div>
  <div>
    <Router {routes} />
  </div>
</div>

<style>
  :root {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  :global(a.active) {
    font-weight: bold;
    font-size: large;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .aside {
    background: blue;
    color: white;
    height: 100dvh;
  }
  .menu a {
    color: white;
  }
</style>
