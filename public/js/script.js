const aboutSection = document.querySelector("#about h1");
const skillsSection = document.querySelector("#skills h1");
const experienceSection = document.querySelector("#experience h1");
const projectsSection = document.querySelector("#projects h1");
const contactSection = document.querySelector("#contact h1");
let selectedMenu = "";

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

  //   const scrollTop = document.documentElement.scrollTop;
  //   const checkAbout =
  //     aboutSection.offsetTop > scrollTop &&
  //     scrollTop + this.window.innerHeight > aboutSection.offsetTop;

  //   const checkSkills =
  //     skillsSection.offsetTop < scrollTop &&
  //     scrollTop + this.window.innerHeight > skillsSection.offsetTop;

  //   const checkExperience =
  //     experienceSection.offsetTop < scrollTop &&
  //     scrollTop + this.window.innerHeight > experienceSection.offsetTop;

  //   const checkProjects =
  //     projectsSection.offsetTop < scrollTop &&
  //     scrollTop + this.window.innerHeight > projectsSection.offsetTop;

  //   const checkContact =
  //     contactSection.offsetTop < scrollTop &&
  //     scrollTop + this.window.innerHeight > contactSection.offsetTop;

  //   const changeMenu = (id) => {
  //     selectedMenu = id;
  //     document
  //       .querySelectorAll(".h-menu")
  //       .forEach((ele) => ele.classList.remove("active"));
  //     document.getElementById(id).classList.add("active");
  //   };

  //   if (checkContact && selectedMenu !== "menu-contact")
  //     changeMenu("menu-contact");
  //   else if (checkProjects && selectedMenu !== "menu-projects")
  //     changeMenu("menu-projects");
  //   else if (checkExperience && selectedMenu !== "menu-experience")
  //     changeMenu("menu-experience");
  //   else if (checkSkills && selectedMenu !== "menu-skills")
  //     changeMenu("menu-skills");
  //   else if (checkAbout && selectedMenu !== "menu-about")
  //     changeMenu("menu-about");
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
