window.onload = function() {
  const navbar = document.querySelector("#navbar");
  let links = document.querySelectorAll("#navbar a, a.btn");
  const positionOnTop = navbar.offsetTop + navbar.offsetHeight;
  links.forEach(elem => elem.addEventListener("click", navLinkClick));

  window.addEventListener(
    "scroll",
    () => {
      if (this.pageYOffset >= positionOnTop) {
        navbar.classList.add("animate-opacity");
      } else {
        navbar.classList.remove("animate-opacity");
      }
    },
    false
  );

  function smoothScroll(event) {
    event.preventDefault();
    const targetId =
      event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const offset = -65; // scroll offset in px
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      window.scrollTo(0, easeOutQuint(progress, startPosition, distance, duration) + offset);

      if (progress < duration) window.requestAnimationFrame(step);
    }
  }

  function navLinkClick(event) {
    smoothScroll(event);
  }
  // Easing function
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function easeOutQuint(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
  }
};
