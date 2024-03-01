<script lang="ts">
  import { location } from "svelte-spa-router";
  export let params = null;
  console.log(params);
</script>

<h1>Complex Route: {$location}</h1>
