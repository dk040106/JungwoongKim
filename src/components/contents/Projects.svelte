<script>
  // templates
  import Page from "../templates/Page.svelte";
  import Post from "../templates/Post.svelte";

  // contents
  import { Projects } from "../../posts/posts.js";
</script>

<div class="projects">
  <Page page={Projects.page} />
  <Post posts={Projects.posts} />
</div>
