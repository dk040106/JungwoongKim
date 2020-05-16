<script>
  let name = "Jungwoong Kim";
  let description = ["Student at KMLA"];
  let contacts = [
    {
      link: "https://github.com/dk040106",
      img: {
        src: "img/github.png",
        alt: "github icon"
      }
    },
    {
      link: "https://www.facebook.com/dk040106",
      img: {
        src: "img/facebook.png",
        alt: "facebook icon"
      }
    },
    {
      link: "mailto: kimjungwoong0106@gmail.com",
      img: {
        src: "img/gmail.png",
        alt: "gmail icon"
      }
    }
  ];
</script>

<style>
  .profile {
    border: solid 2px lightgrey;
    border-radius: 8px;
    padding: 36px 24px;
    margin: 48px 20px;
    max-width: 240px;
  }
  img.face {
    width: 100%;
    margin-bottom: 20px;
  }
  img.contact {
    width: 36px;
    margin: 8px 6px;
  }
  .copyright {
    color: #aaa;
    font-size: 12px;
    margin-top: 10px;
  }
</style>

<div class="profile">
  <img src="img/my-face.jpg" alt="my face" class="face" />
  <div class="content">
    <h2>{name}</h2>
    {#each description as d}
      <h3>{d}</h3>
    {/each}
    <div>
      {#each contacts as contact}
        <a href={contact.link}>
          <img src={contact.img.src} alt={contact.img.alt} class="contact" />
        </a>
      {/each}
    </div>
    <div class="copyright">
      Icons by
      <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  </div>
</div>
