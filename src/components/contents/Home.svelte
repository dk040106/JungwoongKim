<script>
  import Page from "../templates/Page.svelte";
  import Profile from "../layouts/Profile.svelte";

  let page = {
    title: "Nice to meet you.",
    description: [
      "This is a blog of myself, to look back and to go forward.",
      "There aren't much things here now, but I'll make this place much better!"
    ]
  };
</script>

<style>
  .home {
    display: flex;
    align-items: flex-start;
  }
  @media screen and (max-width: 1020px) {
    .home {
      flex-direction: column;
    }
  }
</style>

<div class="home">
  <div class="content">
    <Page {page} />
  </div>
  <div class="profile">
    <Profile />
  </div>
</div>
