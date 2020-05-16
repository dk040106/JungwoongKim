<script>
  import MenuBar from "./components/layouts/MenuBar.svelte";
  import Footer from "./components/layouts/Footer.svelte";

  import Home from "./components/contents/Home.svelte";
  import AboutMe from "./components/contents/AboutMe.svelte";
  import Projects from "./components/contents/Projects.svelte";
  import Goals from "./components/contents/Goals.svelte";
  import Posts from "./components/contents/Posts.svelte";

  export let name;

  // contents
  let items = ["Home", "About Me", "Projects", "Goals", "Posts"];
  let activeItem = "Home";
  let title = name;
  const tabChangeHandler = event => {
    if (event.detail == "title") {
      activeItem = "Home";
    } else {
      activeItem = event.detail;
    }
  };
</script>

<style>
  main {
    text-align: left;
    padding: 1em;
    max-width: 960px;
    margin: 0 auto;
  }
</style>

<MenuBar {title} {items} {activeItem} on:tabChange={tabChangeHandler} />
<main>
  {#if activeItem == 'Home'}
    <Home />
  {:else if activeItem == 'About Me'}
    <AboutMe />
  {:else if activeItem == 'Projects'}
    <Projects />
  {:else if activeItem == 'Goals'}
    <Goals />
  {:else if activeItem == 'Posts'}
    <Posts />
  {/if}
</main>
<Footer />
