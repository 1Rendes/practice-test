const goToHero = document.querySelector("#go-to-hero");
const goToPurposes = document.querySelector("#go-to-purposes");
const goToCases = document.querySelector("#go-to-cases");
const goToBlog = document.querySelector("#go-to-blog");
const goToFeedback = document.querySelector("#go-to-feedback");
const goToPurposesHero = document.querySelector("#go-to-purposes-hero");
const goToCasesPurpose = document.querySelector("#go-to-cases-purpose");
var header = document.getElementById("header");

goToHero.addEventListener("click", function (e) {
  e.preventDefault();
  hero.scrollIntoView({ behavior: "smooth" });
});

goToPurposes.addEventListener("click", function (e) {
  e.preventDefault();
  purposes.scrollIntoView({ behavior: "smooth" });
});

goToPurposesHero.addEventListener("click", function (e) {
  e.preventDefault();
  purposes.scrollIntoView({ behavior: "smooth" });
});

goToCases.addEventListener("click", function (e) {
  e.preventDefault();
  cases.scrollIntoView({ behavior: "smooth" });
});

goToCasesPurpose.addEventListener("click", function (e) {
  e.preventDefault();
  blog.scrollIntoView({ behavior: "smooth" });
});

goToBlog.addEventListener("click", function (e) {
  e.preventDefault();
  blog.scrollIntoView({ behavior: "smooth" });
});

goToFeedback.addEventListener("click", function (e) {
  e.preventDefault();
  feedback.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
