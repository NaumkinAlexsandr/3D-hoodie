$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slideToScroll: 1,
    speed: 700,
    initialSlide: 2,
  });

  document.querySelector('video').playbackRate = 3;
});
