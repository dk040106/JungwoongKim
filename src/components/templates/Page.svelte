<script>
  import { fade } from "svelte/transition";

  // markdown formatter
  import marked from "marked";

  // contents
  export let page;
</script>

<style>
  h1 {
    font-size: 48px;
    margin: 48px auto;
  }
</style>

<div in:fade>
  <h1>{page.title}</h1>
  {#each page.description as d}
    <p>
      {@html marked(d)}
    </p>
  {/each}
</div>
