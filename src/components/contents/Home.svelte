<script>
  import Page from "../templates/Page.svelte";
  import Profile from "../layouts/Profile.svelte";

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
  <div class="content">
    <Page page={Home} />
  </div>
  <div class="profile">
    <Profile />
  </div>
</div>
