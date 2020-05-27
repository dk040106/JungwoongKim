<script>
  // page layouts (not changed frequently)
  import MenuBar from "./components/layouts/MenuBar.svelte";
  import Footer from "./components/layouts/Footer.svelte";

  // page contents
  import Home from "./components/contents/Home.svelte";
  import AboutMe from "./components/contents/AboutMe.svelte";
  import Projects from "./components/contents/Projects.svelte";
  import Goals from "./components/contents/Goals.svelte";
  import Readings from "./components/contents/Readings.svelte";

  // my name
  export let name;

  // tabs
  let items = ["Home", "About Me", "Projects", "Goals", "Readings"];
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
  {:else if activeItem == 'Readings'}
    <Readings />
  {/if}
</main>
<Footer />
