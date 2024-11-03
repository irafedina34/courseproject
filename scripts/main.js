const our_service_swiper = new Swiper(".our-service__swiper", {
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    768: {
        slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: ".our-service__header-swiper-button-next",
    prevEl: ".our-service__header-swiper-button-prev",
  },
});
