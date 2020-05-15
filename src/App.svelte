<script>
  import MenuBar from "./components/MenuBar.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./components/Home.svelte";
  import AboutMe from "./components/AboutMe.svelte";
  import Projects from "./components/Projects.svelte";
  import Goals from "./components/Goals.svelte";

  export let name;

  // tabs
  let items = ["Home", "About Me", "Projects", "Goals"];
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
    max-width: 720px;
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
  {/if}
</main>
<Footer />
