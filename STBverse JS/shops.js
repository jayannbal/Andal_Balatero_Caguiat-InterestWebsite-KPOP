const typed = new Typed('.multiple-text', {
    strings: ['SEVENTEEN', 'TOMORROW X TOGETHER', 'BLACKPINK'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2000, // Set the delay (in milliseconds) between each slide transition
      disableOnInteraction: false, // Set this to true if you want the autoplay to stop when the user interacts with the swiper
    },
    draggable: true, // Enable dragging the slides
  });