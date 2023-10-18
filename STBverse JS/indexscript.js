var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
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

const latestwrapper = document.querySelector(".latestwrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".latestwrapper i");
const firstCardconWidth = carousel.querySelector(".cardcon").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
    startX,
    startScrollLeft;

let cardconPerview = Math.round(carousel.offsetWidth / firstCardconWidth);

carouselChildrens.slice(-cardconPerview).reverse().forEach(cardcon => {
    carousel.insertAdjacentHTML("afterbegin", cardcon.outerHTML);
});

carouselChildrens.slice(0, cardconPerview).forEach(cardcon => {
    carousel.insertAdjacentHTML("beforeend", cardcon.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardconWidth : firstCardconWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const autoPLay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardconWidth), 2500);
};
autoPLay();

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if (!latestwrapper.matches(":hover")) autoPLay();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
latestwrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
latestwrapper.addEventListener("mouseleave", autoPLay);


document.getElementById('page-wrapper').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Scroll smoothly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This enables smooth scrolling, but it may not work in all browsers.
    });
  });
  