const aboutSection = document.querySelector("#about h1");
const skillsSection = document.querySelector("#skills h1");
const experienceSection = document.querySelector("#experience h1");
const projectsSection = document.querySelector("#projects h1");
const contactSection = document.querySelector("#contact h1");

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");

var current = "";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  var button = document.querySelector(".scroll-to-top-button");
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
  }

  // Nav menu code

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (document.documentElement.scrollTop >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((aEle) => {
    aEle.classList.remove("active");
    if (aEle.classList.contains(current)) {
      aEle.classList.add("active");
    }
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
