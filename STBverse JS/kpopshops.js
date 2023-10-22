
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2, // Start at the third slide (0-based index)
    loop: true, // Enable the loop
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


  const typed = new Typed('.multiple-text', {
    strings: ['SEVENTEEN', 'TOMORROW X TOGETHER', 'BLACKPINK'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});