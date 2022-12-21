const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* ----- scroll ----- */
const barreDemo = document.querySelector(".barre");
var scrolled;
var val;
var saturation = 0;

window.addEventListener("scroll", function () {
  scrolled = window.pageYOffset;
  val = scrolled * 0.9 + 20;
  saturation = (scrolled - 500) / 10;
  barreDemo.style.width = val + "px";

  if (scrolled > 500) {
    barreDemo.style.backgroundColor = "hsl(0," + saturation + "%, 50%)";
  }
});
