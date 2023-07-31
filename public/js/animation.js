// Sidebar animation
gsap.from(".profile-details-row", {
  duration: 0.5,
  opacity: 0,
  x: -100,
  //   y: "random(-50, 50)",
  stagger: 0.1,
});

// About content
gsap.from(".about-content", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  stagger: 0.1,
});
