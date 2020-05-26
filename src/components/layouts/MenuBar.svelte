<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
  export let title;
</script>

<style>
  .tabs {
    margin: 20px 20px;
    border-bottom: solid rgb(145, 145, 145) 2px;
  }
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: auto 16px;
    font-size: 24px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #ff4000;
  }
  .title {
    font-size: 48px;
    margin-right: 36px;
    font-weight: 150;
  }
  @media screen and (max-width: 1060px) {
    /*
    화면 크기가 줄어들면 가로 방향의 메뉴바를 세로로 변경한다. 
    */
    ul {
      flex-direction: column;
    }
    li {
      margin-bottom: 15px;
    }
  }
  @media (prefers-color-scheme: dark) {
    li {
      color: azure;
    }
  }
</style>

<div class="tabs noselect">
  <ul>
    <li>
      <div class="title" on:click={() => dispatch('tabChange', 'title')}>
        {title}
      </div>
    </li>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>
