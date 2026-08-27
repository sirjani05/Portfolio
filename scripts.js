/* menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

/* menu show - hide */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/* remove menu mobile */

/* change background header */

/* scroll sections active link */

/* services swiper */
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,

  pagination: {
    el: ".swiper-pagination",
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
    el: ".swiper-scrollbar",
  },
});

/* mixitup filter portfolio */
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* active work */
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });

  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/* resume */
const accordianItems = document.querySelectorAll(".resume-item");

accordianItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
    content = item.querySelector(".resume-content"),
    icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordian-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : "0";
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    accordianItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordian-open")
      ) {
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").classList = "ri-add-line";
        otherItem.classList.remove("accordian-open");
      }
    });
  });
});

/* testimonials swiper */

/* email js */

/* style switcher */
const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle"),
  switcherClose = document.getElementById("switcher-close");

/* switcher show */
switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

/* switcher hidden */
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/* theme colors */
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});

/* light/dark mode */
let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});
