<script>
  // templates
  import Page from "../templates/Page.svelte";
  import Post from "../templates/Post.svelte";

  // content
  import { Readings } from "../../posts/posts.js";
</script>

<div class="posts">
  <Page page={Readings.page} />
  <Post posts={Readings.posts} />
</div>
