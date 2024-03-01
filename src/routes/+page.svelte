<script lang="ts">
  import Home from "$lib/routes/Home.svelte";
  import About from "$lib/routes/About.svelte";
  import Login from "$lib/routes/Login.svelte";
  import Things from "$lib/routes/Things.svelte";
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { appStore } from "$lib/store";
  import { wrap } from "svelte-spa-router/wrap";
  import { push, pop, replace } from "svelte-spa-router";

  const routes = {
    // Exact path
    "/": Home,
    "/about": About,
    "/login": Login,
    "/things": wrap({
      component: Things,
      userData: {
        loginRequired: true
      },
      conditions: [
        (detail) => {
          console.log(detail);
          return $appStore.app.login;
        }
      ]
    })
  };

  const toggleLogin = () => {
    const newState = !$appStore.app.login;
    appStore.setLoginState(newState);
  };

  const conditionsFailed = (event) => {
    if (event.detail.userData.loginRequired) {
      push("/login");
    }
  };
</script>

<div class="container">
  <div class="aside">
    <h1>Welcome to $APP</h1>
    <ul class="menu">
      <li><a href="/" use:link use:active={"/"}>Home</a></li>
      <li><a href="/things" use:link use:active={"/things"}>Things</a></li>
      <li><a href="/about" use:link use:active={"/about"}>About</a></li>
      <li>
        <button on:click={toggleLogin}>
          {#if $appStore.app.login}
            Logout
          {:else}
            Login
          {/if}
        </button>
      </li>
    </ul>
  </div>
  <div>
    <Router {routes} on:conditionsFailed={conditionsFailed} />
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
    text-decoration: none;
  }
  .menu {
    list-style-type: none;
  }
</style>
