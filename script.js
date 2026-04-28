const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const backToTop = document.querySelector("#backToTop");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});