<script>
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
  img {
    width: 100%;
  }
  img.contact {
    width: 24px;
    margin: 8px 6px;
  }
  .copyright {
    color: #aaa;
    font-size: 12px;
    margin-top: 10px;
  }

  .face {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1020px) {
    .profile {
      display: none;
    }
  }
</style>

<div class="profile">
  <div class="face">
    <img src="img/my-face.jpg" alt="my face" />
  </div>
  <div class="description">
    <h2>Jungwoong Kim</h2>
    <h3>Student at KMLA</h3>
  </div>
  <div>
    {#each contacts as contact}
      <a href={contact.link}>
        <img src={contact.img.src} alt={contact.img.alt} class="contact" />
      </a>
    {/each}
  </div>
  <div class="copyright">
    Social icons by
    <a target="_blank" href="https://icons8.com">Icons8</a>
  </div>
</div>
