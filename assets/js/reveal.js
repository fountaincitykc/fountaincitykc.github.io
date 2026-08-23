window.addEventListener("DOMContentLoaded", function (event) {

  // Add additional classnames with the .reveal classname when they become visible in the viewport
  // See: assets/scss/components/_reveal.scss

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");
  if (!prefersReducedMotion && targets) {
    targets.forEach(t => {
      t.classList.add("reveal--start");
      let observer = new IntersectionObserver(e => {
        e.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal--end");
            observer.unobserve(e.target);
          }
        });
      });
      observer.observe(t);
    });
  }
}, false);
