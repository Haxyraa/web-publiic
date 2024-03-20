const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const mountains_front = document.getElementById("mountains_front");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.marginRight = value * 4 + "px";
  text.style.transform = "translateY(" + (250 + value * 0.5) + "px)";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});