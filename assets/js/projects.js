window.onscroll = function () {
  showBackToTopButton();
};

function showBackToTopButton() {
  var btn = document.getElementById("backToTopBtn");
  if (window.scrollY > 1200) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
}

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
