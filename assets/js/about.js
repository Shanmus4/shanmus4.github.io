const gradientsabout = [
  "linear-gradient(30deg, #6db0db 30%, #3a7d92 60%)",
  "linear-gradient(50deg, #72c1d7 0%, #3a7d92 60%)",
  "linear-gradient(45deg, #60a4d4 30%, #1d6b7e 60%)",
  "linear-gradient(50deg, #6592d9 30%, #1e667c 60%)",
  "linear-gradient(60deg, #76b0d7 30%, #1f7b93 60%)",
  "linear-gradient(45deg, #5ab2cc 30%, #2b6d80 60%)"
];
const randomIndex = Math.floor(Math.random() * 6);
const about = document.getElementsByClassName("about")[0];
about.style.background = gradientsabout[randomIndex];

LottieInteractivity.create({
  player: "#footballlottie",
  mode: "cursor",
  actions: [
    {
      type: "toggle",
    },
  ],
});
