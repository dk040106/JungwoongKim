<script>
  // markdown formatter
  import marked from "marked";

  // contents
  export let posts;
  console.log(posts);
</script>

<style>
  h2 {
    font-size: 40px;
    margin-top: 50px;
    border-top: 2px solid #ff4000;
    padding-top: 10px;
  }
  img {
    width: 100%;
  }
  p {
    text-indent: 18px;
  }
  @media screen and (min-width: 600px) {
    img {
      height: 120px;
      width: inherit;
    }
  }
</style>

<div>
  {#each posts as post}
    <h2>{post.title}</h2>
    {#if post.img !== undefined}
      <img src={post.img.src} alt={post.img.alt} />
    {/if}
    <p>
      {@html marked(post.paragraph)}
    </p>
  {/each}
</div>
