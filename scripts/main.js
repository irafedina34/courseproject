const dialog = document.getElementById("mobileOverlay");

function closeMobileOverlay() {
  dialog.close();
}

const our_service_swiper = new Swiper(".our-service__swiper", {
  slidesPerView: 1,
  spaceBetween: 37,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".our-service__header-swiper-button-next",
    prevEl: ".our-service__header-swiper-button-prev",
  },
});

const testimonials_swiper = new Swiper(".testimonials__swiper", {
  slidesPerView: 1,
  spaceBetween: 64,
  loop: true,

  breakpoints: {
    1440: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: ".testimonials__swiper-button-next",
    prevEl: ".testimonials__swiper-button-prev",
  },
});
