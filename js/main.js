window.onload = function() {
  const navbar = document.querySelector("#navbar");
  const positionOnTop = navbar.offsetTop + navbar.offsetHeight;
  let links = document.querySelectorAll("#navbar a, a.btn");
  // links.forEach(elem => elem.addEventListener("click", navLinkClick));

  for (let i = 0; i < links.length; i++) {
    const elem = links[i];
    elem.addEventListener("click", navLinkClick);
  }

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
    const duration = 800; // ms
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

  function easeOutQuint(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
  }
};

var map;
function initMap() {
  // The location of NY
  var loc = { lat: 40.71427, lng: -74.00597 };
  // The map, centered at NY
  var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: loc });
  // The marker, positioned at location
  var marker = new google.maps.Marker({ position: loc, map: map });
}
