<script>
  import Page from "../templates/Page.svelte";
  import Post from "../templates/Post.svelte";

  import { Goals } from "../../posts/posts.js";
</script>

<div class="goals">
  <Page page={Goals.page} />
  <Post posts={Goals.posts} />
</div>
