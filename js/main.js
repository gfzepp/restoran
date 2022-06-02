const menu = document.querySelector(".header-nav");
const menuItems = document.querySelectorAll(".header-item");
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const hamburger = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}))