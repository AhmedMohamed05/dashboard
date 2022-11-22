// Back To Top button

const backButton = document.querySelector(".back-to-top");

backButton.addEventListener("click", backToTopFn);

window.onscroll = () => {
  if (window.scrollY >= 700) {
    backButton.style.right = "20px";
  } else {
    backButton.style.right = "-40px";
  }
};
function backToTopFn() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}
