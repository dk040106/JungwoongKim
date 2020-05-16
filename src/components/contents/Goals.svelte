<script>
  import Page from "../templates/Page.svelte";
  import Post from "../templates/Post.svelte";

  let page = {
    title: "Goals",
    description: []
  };
  let posts = [
    {
      title: "Goal of this month (May 2020)",
      img: null,
      paragraph:
        "1. Start a YouTube channel and upload 3 videos about making gadgets with basic materials. (with arduino and raspberry pi)"
    },
    {
      title: "My past Goals",
      img: null,
      paragraph: "Not much things here yet!"
    }
  ];
</script>

<div class="goals">
  <Page {page} />
  <Post {posts} />
</div>
