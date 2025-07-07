const swiperShop = new Swiper('.shop-swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 2,
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  navigation: false,
  pagination: false,

  breakpoints: {
    376: {
      spaceBetween: 10,
    },
    993: {
      spaceBetween: 21,
    }
  },
});






const swiperCollection = new Swiper('.collection-swiper', {
  breakpoints: {
    0: {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      allowTouchMove: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.collection-arrows__next',
        prevEl: '.collection-arrows__prev',
      },
      pagination: false,
    },

    376: {
      slidesPerView: 3,
      centeredSlides: false,
      loop: false,
      navigation: false,
    },
  }
});

