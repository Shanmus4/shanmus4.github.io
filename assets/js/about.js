const gradientsabout = [
  "linear-gradient(45deg, #00cdac 10%, #02aab0 60%)",
  "linear-gradient(45deg, #eaafc8 15%, #654f43 80%)",
  "linear-gradient(45deg, #6ec792 10%, #35805c 90%)",
  "linear-gradient(45deg, #ffb260 10%, #c06e30 90%)",
  "linear-gradient(45deg, #ff9fed 10%, #d161ca 50%)",
];

const randomIndex = Math.floor(Math.random() * 5);
const about = document.getElementsByClassName("about")[0];
about.style.background = gradientsabout[randomIndex];
