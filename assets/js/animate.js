window.addEventListener('DOMContentLoaded', function(event) {

  // Animate all elements with the .animate classname
  // (see .animate and .js-start-animation in components/_animate.css)

  const animationTargets = document.querySelectorAll('.animate');
  if (animationTargets) {
    animationTargets.forEach(t => {
      let observer = new IntersectionObserver(e => {
        e.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('js-start-animation');
            observer.unobserve(e.target);
          }
        });
      });
      observer.observe(t);
    });
  }
}, false);
