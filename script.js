const hamburger = document.querySelectorAll(".hamburger");
const mobileNav = document.querySelector(".hamburger-container");
const clear = document.querySelector(".clear");
const containerSticky = document.querySelector(".sticky-header");
const closeNav = document.querySelectorAll(".hamburger-li");

hamburger[0].addEventListener(
  "click",
  () => (mobileNav.style.display = "block")
);
hamburger[1].addEventListener(
  "click",
  () => (mobileNav.style.display = "block")
);
clear.addEventListener("click", () => (mobileNav.style.display = "none"));
closeNav[0].addEventListener("click", () => (mobileNav.style.display = "none"));
closeNav[1].addEventListener("click", () => (mobileNav.style.display = "none"));
closeNav[2].addEventListener("click", () => (mobileNav.style.display = "none"));

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    containerSticky.style.display = "block";
  } else {
    containerSticky.style.display = "none";
  }
};

window.onscroll = () => scrollFunction();

// const cursor = document.getElementById("cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
//   console.log(e.pageX, e.pageY);
// });

// document.addEventListener("scroll", () => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#61fba1"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 10 + "px";
    circle.style.top = y - 10 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2;
    y += (nextCircle.y - y) * 0.2;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
