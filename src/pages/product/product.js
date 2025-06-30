document.addEventListener("DOMContentLoaded", function () {
  const thumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: ".thumbs-button-next",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      clickable: true,
    },
  });

  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    thumbs: {
      swiper: thumbs,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
