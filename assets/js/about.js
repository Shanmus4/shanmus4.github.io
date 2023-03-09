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

const scroller = document.querySelector('.gallery_scroller');
const dotsContainer = document.querySelector('.dot-indicators');

// create dots
for (let i = 0; i < scroller.children.length-1; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    const scrollAmount = i * scroller.children[0].offsetWidth;
    scroller.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    // update active dot
    const activeDot = dotsContainer.querySelector('.active');
    activeDot.classList.remove('active');
    dot.classList.add('active');
  });
  dotsContainer.appendChild(dot);
}

// update active dot on scroll
scroller.addEventListener('scroll', () => {
  const scrollAmount = scroller.scrollLeft;
  const activeIndex = Math.round(scrollAmount / scroller.children[0].offsetWidth);
  const activeDot = dotsContainer.querySelector('.active');
  activeDot.classList.remove('active');
  const newActiveDot = dotsContainer.children[activeIndex];
  newActiveDot.classList.add('active');
});






