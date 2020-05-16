<script>
  export let posts;
</script>

<style>
  h2 {
    font-size: 36px;
    margin-top: 50px;
    border-top: 3px solid #ff4000;
    padding-top: 10px;
  }

  img {
    width: 100%;
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
    {#if post.img !== null}
      <img src={post.img.src} alt={post.img.alt} />
    {/if}
    <p>{post.paragraph}</p>
  {/each}
</div>
