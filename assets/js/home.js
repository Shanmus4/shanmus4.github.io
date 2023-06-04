// const gradientshome = [
//   "linear-gradient(45deg, #6881a8 10%, #364d6c 50%)",
//   "linear-gradient(60deg, #6c7b9f 10%, #3e4e6d 50%)",
//   "linear-gradient(75deg, #6d769a 10%, #45517a 50%)",
//   "linear-gradient(90deg, #6e738e 10%, #4a4e6b 50%)",
//   "linear-gradient(45deg, #596c86 80%, #2d4a5b 90%)",
// ];
// const home = document.getElementsByClassName("home")[0];

// // Generate a random number to select a gradient from the array
// const randomIndex = Math.floor(Math.random() * 5);

// home.style.background = gradientshome[randomIndex];

LottieInteractivity.create({
  player: "#footballlottie",
  mode: "cursor",
  actions: [
    {
      type: "toggle",
    },
  ],
});
