// import { gsap } from "../node_modules/gsap/";
gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

const navButton = document.querySelector("#b6");
const navItem = document.querySelectorAll(".nav-item, .burger-item");

let anim2 = document.querySelectorAll(".burger-item");
let anim1 = document.querySelectorAll(".nav-item");

function navAnimation() {
  anim1.forEach((element) => {
    if (element.classList.contains("hide") == true) {
      gsap.fromTo(
        element,
        { y: 0, opacity: 1 },
        { y: 30, duration: 0.8, delay: 0.2, opacity: 0, ease: "power1" }
      );
    } else {
      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        { y: 0, duration: 0.6, delay: 0.2, opacity: 1, ease: "power1" }
      );
    }
  });

  anim2.forEach((element) => {
    if (element.classList.contains("hide") == true) {
      gsap.fromTo(
        element,
        { y: 0, opacity: 1 },
        { y: 30, duration: 0.5, delay: 0, opacity: 0, ease: "power1" }
      );
    } else {
      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        { y: 0, duration: 0.6, delay: 0.6, opacity: 1, ease: "power1" }
      );
    }
  });
}

navButton.addEventListener("click", (e) => {
  navItem.forEach((element) => {
    element.classList.toggle("hide");
  });
  document.querySelector(".nav__burger").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
  navAnimation();
});

const nav = document.querySelector("nav");
function toggleTopMenu() {
  if (pageYOffset > 30) {
    nav.classList.add("is-scroll");
  } else {
    nav.classList.remove("is-scroll");
  }
}
window.addEventListener("scroll", toggleTopMenu);

const menuLinks = document.querySelectorAll(".menu-link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".nav__content").offsetHeight +
        20;
      if (menuLink.classList.contains("burger-item")) {
        navButton.click();
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

let swiper = new Swiper(".mySwiper", {
  autoHeight: false,
  slidesPerView: 1,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return current + " — " + total;
    },
  },
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  },
});

//gsap

//   ScrollTrigger.defaults({
//               markers:true
//     })
function hide(element) {
  gsap.set(element, { opacity: 0, duration: 0.5 });
}

let tl = gsap.timeline();
const mm = window.matchMedia("(min-width: 768px)");
const headerItem = document.querySelectorAll(".header__item");

if (pageYOffset < 30) {
  if (mm.matches) {
    tl.fromTo(
      ".header__title h1",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        ".header__title p",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 },
        ">-0.7"
      )
        // .fromTo("nav",{opacity:0,y:-100},{opacity:1,y:0,duration:1.5},">-0.5")
      .fromTo(
        ".header__item",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 },
        ">-1"
      )
      .fromTo(
        ".header__item h3",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 },
        ">-0.9"
      )
      .fromTo(
        ".header__item p",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 },
        ">-0.9"
      );
  } else {
    tl.fromTo(
      ".header__title h1",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        ".header__title p",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 },
        ">-0.5"
      )
      .fromTo(
        "nav",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1.5 },
        ">-0.5"
      );

    headerItem.forEach(function (element) {
      hide(element);
      ScrollTrigger.create({
        start: "top-=100 bottom-=100",
        end: "bottom top",
        trigger: element,
        onEnter: function () {
          gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1 });
        },
        onLeaveBack: (self) => self.disable(),
      });
    });
  }
}

const gsapItem = [
  ".ideas__title h2",
  ".ideas__title p",
  ".benefit__container h2",
  ".gallery__desc ",
];
const gsapItemOpacity = [
  ".mySwiper",
  ".benefit__img",
  ".facts h2",
  ".facts__items",
  ".ideas__items",
  ".features__items",
];
const benefitItem = document.querySelectorAll(".benefit__item");

gsapItem.forEach(function (element) {
  hide(element);
  ScrollTrigger.create({
    start: "top-=100 bottom-=100",
    end: "bottom top",
    trigger: element,
    onEnter: function () {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    },
    onLeaveBack: (self) => self.disable(),
  });
});

benefitItem.forEach(function (element) {
  hide(element);
  ScrollTrigger.create({
    start: "top-=100 bottom-=100",
    end: "bottom top",
    trigger: element,
    onEnter: function () {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    },
    onLeaveBack: (self) => self.disable(),
  });
});

gsapItem.forEach(function (element) {
  hide(element);
  ScrollTrigger.create({
    start: "top-=100 bottom-=100",
    end: "bottom top",
    trigger: element,
    onEnter: function () {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    },
    onLeaveBack: (self) => self.disable(),
  });
});

gsapItemOpacity.forEach(function (element) {
  hide(element);
  ScrollTrigger.create({
    start: "top-=100 bottom-=100",
    end: "bottom top",
    trigger: element,
    onEnter: function () {
      gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    },
    onLeaveBack: (self) => self.disable(),
  });
});
