// create and assign variables
const hamburgerbutton = document.querySelector(".hamburger");
const links = document.querySelector(".links");

// if hamburger is clicked, display links by toggling css class
hamburgerbutton.addEventListener("click", function() {
  links.classList.toggle("show-links");
});
