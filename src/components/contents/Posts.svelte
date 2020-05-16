<script>
  import Page from "../templates/Page.svelte";
  import Post from "../templates/Post.svelte";

  let page = {
    title: "Posts",
    description: []
  };
  let posts = [
    {
      title: "Chartreux",
      img: null,
      paragraph:
        "An Operating System, made in Rust language. Not that great, cause I don't think I know much about OS. Just a project for testing how much I know about OS."
    },
    {
      title: "MinsaCraft",
      img: null,
      paragraph:
        "A website for KMLA's virtual(MineCraft) campus. Made in svelte, and it supports MineCraft Api for getting the server status."
    }
  ];
</script>

<style>

</style>

<div class="posts">
  <Page {page} />
  <Post {posts} />
</div>
