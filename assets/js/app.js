window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const scrolNavbar = document.querySelector("nav");
  const width = window.getComputedStyle(scrolNavbar).top,
    widthNum = width.slice(0, width.length - 2);

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 45) {
      scrolNavbar.classList.add("active-nav");
    } else {
      scrolNavbar.classList.remove("active-nav");
    }
  });

  //   slider 2
  const cards = document.querySelectorAll(".property-cards, .property-content, .property-animate, .property-list__btns, .property-list__card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("property-card__animation");
            observer.unobserve(entry.target); 
        }
    }), {
        threshold: 1.5
    }
  });

  cards.forEach(card => observer.observe(card))
});
