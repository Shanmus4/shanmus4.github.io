const gradientshome = [
  "linear-gradient(45deg, #6e8a78 10%, #3d4f62 50%)",
  "linear-gradient(45deg, #c8b8aa 10%, #4a3d3a 60%)",
  "linear-gradient(45deg, #5385c2 50%, #8aa9ce 70%)",
  "linear-gradient(45deg, #845b4f 10%, #866c63 70%)",
  "linear-gradient(45deg, #777185 2%, #c9cc93 90%)",
];

const home = document.getElementsByClassName("home")[0];




// Generate a random number to select a gradient from the array
const randomIndex = Math.floor(Math.random() * 5);


home.style.background = gradientshome[randomIndex];

