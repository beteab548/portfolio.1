const goFrom = document.querySelector(".portfolio-link");
const goFrom2 = document.querySelector(".about-link");
const goTo = document.querySelector(".header2");
const goTo2 = document.querySelector(".header4");
const goFrom4 = document.querySelector(".about-button");
const goFrom5 = document.querySelector(".contact");
const cv = document.querySelector(".cv");
cv.addEventListener("click", function (e) {
  e.preventDefault();
});
goFrom.addEventListener("click", function (e) {
  e.preventDefault();
  goTo.scrollIntoView({ behavior: "smooth" });
});
goFrom2.addEventListener("click", function (e) {
  e.preventDefault();
  goTo2.scrollIntoView({ behavior: "smooth" });
});
goFrom4.addEventListener("click", function (e) {
  e.preventDefault();
  goTo.scrollIntoView({ behavior: "smooth" });
});
goFrom5.addEventListener("click", function (e) {
  e.preventDefault();
  goTo2.scrollIntoView({ behavior: "smooth" });
});
const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
});
