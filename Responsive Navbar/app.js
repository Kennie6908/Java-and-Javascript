const hamburgerbutton = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburgerbutton.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
