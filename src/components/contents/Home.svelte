<script>
  import Page from "../templates/Page.svelte";
  import Profile from "../layouts/Profile.svelte";

  let page = {
    title: "Nice to meet you.",
    description: [
      "This is a blog of myself, pushing me to look back and to go forward.",
      "There aren't much things here now, but I will make this place much better!"
    ]
  };
</script>

<style>
  .home {
    display: flex;
    align-items: flex-start;
  }
</style>

<div class="home">
  <div class="content">
    <Page {page} />
  </div>
  <div class="content">
    <Profile />
  </div>
</div>
