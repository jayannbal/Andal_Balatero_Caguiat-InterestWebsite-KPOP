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

document.addEventListener("DOMContentLoaded", function () {
  const aboutKpop = document.getElementById("aboutkpop");
  const latestUpdate = document.getElementById("latestupdate");
  const aboutUs = document.getElementById("about-us");
  const teamContainer = document.querySelector(".teamcontainer");
  const teamH2 = document.querySelector("#team h2");
  const teamCards = document.querySelectorAll(".teamcard");

  function checkScroll() {
    const aboutKpopOffset = aboutKpop.getBoundingClientRect().top;
    const latestUpdateOffset = latestUpdate.getBoundingClientRect().top;
    const aboutUsOffset = aboutUs.getBoundingClientRect().top;
    const teamContainerOffset = teamContainer.getBoundingClientRect().top;

    if (aboutKpopOffset < window.innerHeight / 2) {
      aboutKpop.classList.add("show");
    } else {
      aboutKpop.classList.remove("show");
    }

    if (latestUpdateOffset < window.innerHeight / 2) {
      latestUpdate.classList.add("show");
    } else {
      latestUpdate.classList.remove("show");
    }

    if (aboutUsOffset < window.innerHeight / 2) {
      aboutUs.classList.add("show");
    } else {
      aboutUs.classList.remove("show");
    }

    if (teamContainerOffset < window.innerHeight / 2) {
      teamH2.classList.add("show");
      teamCards.forEach((card) => card.classList.add("show"));
    } else {
      teamH2.classList.remove("show");
      teamCards.forEach((card) => card.classList.remove("show"));
    }
  }

  // Add a scroll event listener to continuously check for scroll position changes.
  window.addEventListener("scroll", checkScroll);

  // Initial check when the page loads.
  checkScroll();
  
});

document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact");

  // Add a scroll event listener to check when the contact section is scrolled into view.
  window.addEventListener("scroll", function () {
    if (contactSection.getBoundingClientRect().top < window.innerHeight / 2) {
      contactSection.classList.add("show");
    } else {
      contactSection.classList.remove("show");
    }
  });
});