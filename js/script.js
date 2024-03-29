document.addEventListener("DOMContentLoaded", function () {
  const showSlider = new Swiper(".showcase-carousel", {
    loop: true,
    speed: 1800,
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
      nextEl: ".showcase-navigation__next",
      prevEl: ".showcase-navigation__prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });

  document.querySelector("video").playbackRate = 2;
});
