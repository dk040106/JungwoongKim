<script>
  import Card from "../shared/Card.svelte";
</script>

<style>
  h2 {
    margin: 20px auto;
  }
  img {
    height: 120px;
    display: block;
  }
</style>

<div class="projects">
  <h1>Projects</h1>
  <p>These are some projects I do for myself.</p>
  <Card>
    <h2>Chartreux</h2>
    <img src="img/chartreux.png" alt="chartreux os" />
    <p>
      An Operating System, made in Rust language. Not that great, cause I don't
      think I know much about OS. Just a project for testing how much I know
      about OS.
    </p>
  </Card>
  <Card>
    <h2>MinsaCraft</h2>
    <img src="img/minsacraft-full.png" alt="chartreux os" />
    <p>
      A website for our virtual(MineCraft) campus. Made in svelte, and it
      supports MineCraft Api for getting the server status.
    </p>
    <a href="https://minsacraft.ml">Link</a>
  </Card>
</div>
