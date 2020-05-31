export const Home = {
  title: "Hi, nice to meet you.",
  description: [
    "This is a blog of myself, to look back and to go forward.",
    "There aren't much things here now, but I'll make this place much better!",
  ],
};

export const AboutMe = {
  title: "About Me",
  description: [
    "High school student at Korean Minjok Leadership Academy.",
    "Interested in Computer Science.",
    "I'm doing some projects. You can see it on the projects tab.",
  ],
};

export const Projects = {
  page: {
    title: "Projects",
    description: ["The projects I'm doing so far."],
  },
  posts: [
    {
      title: "Chartreux",
      img: { src: "img/chartreux.png", alt: "chartreux os icon" },
      paragraph:
        "An Operating System, made in Rust language. Not that great, and I don't think I know much about OS. Just a project for testing how much I know about OS.",
    },
    {
      title: "MinsaCraft",
      img: { src: "img/minsacraft-full.png", alt: "minsacraft icon" },
      paragraph:
        "A [website](https://minsacraft.ml) for KMLA's virtual (MineCraft) campus. Made in svelte, and it supports MineCraft Api for getting the server status.",
    },
    {
      title: "Jungwoong and Juno show",
      paragraph:
        "A [Youtube channel](https://www.youtube.com/channel/UCFjz57a0bdlEFyAsjp9B7YQ) about making personal gadgets with arduino and raspberry pi. Started May 2020, due to the goal I've set. Doing with my highschool friend, Juno.",
    },
  ],
};

export const Goals = {
  page: {
    title: "Goals",
    description: ["The things that I want to achieve."],
  },
  posts: [
    {
      title: "Goal of this month",
      subtitle: "May 2020",
      paragraph:
        "Start a YouTube channel and upload 3 videos about making gadgets with basic materials. (with arduino and raspberry pi)",
    },
    {
      title: "My past Goals",
      paragraph: "Not much thing here yet!",
    },
  ],
};

export const Readings = {
  page: {
    title: "Readings",
    description: ["The books I read so far."],
  },
  posts: [
    {
      title: "Deep Work",
      subtitle: "by Cal Newport",
      paragraph:
        "깊게 몰입하는 것으로 생산성을 높일 수 있다는 말하자면 자기 개발서이다. 집중을 통해 성공한 다양한 사례들과 '딥 워크'를 수행하는 방법에 대해 자세하게 가르쳐 준다. 다양한 일들을 이것저것 펼쳐 놓고 하는 습관이 있었는데, 그러한 습관을 줄이려고 노력하니까 정말 많은 것들을 하면서도 시간을 잘 관리할 수 있게 되었다.",
    },
    {
      title: "Seven Languages in Seven Weeks",
      subtitle: "by Bruce Tate",
      paragraph:
        "이 책이 2010년에 출판된 조금 오래된 책이라서 처음 읽을 때는 Ruby이외의 언어는 잘 몰랐다. 그렇지만 모든 언어를 하나하나 실행해 보면서 각 언어들의 특징과 철학에 대해 알 수 있었다. 프로그래밍 초보자와 경험자 모두에게 프로그래밍 언어에 대한 흥미를 불러일으킬 수 있을 것이라고 생각한다.",
    },
  ],
};
