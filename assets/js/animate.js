window.addEventListener("DOMContentLoaded", function (event) {

  // Animate all elements with the .animate classname when they become visible in the viewport
  // See: assets/scss/components/_animate.scss

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".animate");
  if (!prefersReducedMotion && targets) {
    targets.forEach(t => {
      t.classList.add("animate--start");
      let observer = new IntersectionObserver(e => {
        e.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("animate--end");
            observer.unobserve(e.target);
          }
        });
      });
      observer.observe(t);
    });
  }
}, false);
