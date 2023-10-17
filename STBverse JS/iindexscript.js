    /*scroll activation link*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    
        /*sticky navbar*/
        let header = document.querySelector('header');
    
        header.classList.toggle('sticky', window.scrollY > 100);
    
        /*removing the toglle icon and navbar when you click navbar link (scroll)*/
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    
    };
    
    
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        breakpoints:{
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
    
    let isDragging = false, startX, startScrollLeft;
    
    let cardconPerview = Math.round(carousel.offsetWidth / firstCardconWidth);
    
    carouselChildrens.slice(-cardconPerview).reverse().forEach(cardcon => {
        carousel.insertAdjacentHTML("afterbegin", cardcon.outerHTML);
    });
    
    carouselChildrens.slice(0, cardconPerview).forEach(cardcon => {
        carousel.insertAdjacentHTML("beforeend", cardcon.outerHTML);
    });
    
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? - firstCardconWidth : firstCardconWidth;
        })
    })
    
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }
    
    const dragging = (e) => {
        if(isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    
    const dragStop = () => {
        isDragging = false;
        carousel.classList.add("dragging");
    }
    
    const autoPLay = () => {
        if(window.innerWidth < 800) return; 
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardconWidth, 2500);
    }
    autoPLay();
    
    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    
        clearTimeout(timeoutId);
        if(!latestwrapper.matches(":hover")) autoPLay();
    }
    
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    latestwrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    latestwrapper.addEventListener("mouseleave", autoPLay);