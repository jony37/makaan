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









  
});
