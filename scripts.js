/* menu */
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle');

/* menu show - hide */
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  navToggle.classList.toggle('animate-toggle');
});

/* remove menu mobile */

/* change background header */

/* scroll sections active link */

/* services swiper */
var servicesSwiper = new Swiper('.services-swiper', {
  spaceBetween: 32,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },

  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* mixitup filter portfolio */

/* active work */

/* resume */

/* testimonials swiper */

/* email js */

/* style switcher */
const styleSwitcher = document.getElementById('style-switcher'),
  switcherToggle = document.getElementById('switcher-toggle'),
  switcherClose = document.getElementById('switcher-close');

/* switcher show */
switcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.add('show-switcher');
});

/* switcher hidden */
switcherClose.addEventListener('click', () => {
  styleSwitcher.classList.remove('show-switcher');
});

/* theme colors */
const colors = document.querySelectorAll('.style-switcher-color');

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue('--hue');

    colors.forEach((c) => c.classList.remove('active-color'));
    color.classList.add('active-color');

    document.documentElement.style.setProperty('--hue', activeColor);
  };
});

/* light/dark mode */
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener('change', () => {
    currentTheme = input.value;
    document.body.className = currentTheme
  });
});
