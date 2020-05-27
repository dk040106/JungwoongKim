<script>
  // templates
  import Page from "../templates/Page.svelte";
  import Profile from "../layouts/Profile.svelte";

  // contents
  import { Home } from "../../posts/posts.js";
</script>

<style>
  .home {
    display: flex;
    align-items: flex-start;
  }
  @media screen and (max-width: 1060px) {
    .home {
      flex-direction: column;
    }
  }
</style>

<div class="home">
  <Page page={Home} />
  <Profile />
</div>
