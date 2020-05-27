<script>
  // markdown formatter
  import marked from "marked";

  // contents
  export let posts;
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
    {#if post.subtitle !== null}
      <h3>{post.subtitle}</h3>
    {/if}
    {#if post.img !== null}
      <img src={post.img.src} alt={post.img.alt} />
    {/if}
    <p>
      {@html marked(post.paragraph)}
    </p>
  {/each}
</div>
