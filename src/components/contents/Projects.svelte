<script>
  import Page from "../templates/Page.svelte";
  import Post from "../templates/Post.svelte";

  import { Projects } from "../../posts/posts.js";
</script>

<style>

</style>

<div class="projects">
  <Page page={Projects.page} />
  <Post posts={Projects.posts} />
</div>
