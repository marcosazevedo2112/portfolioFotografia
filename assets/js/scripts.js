const swiper = new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 80,
    grabCursor: true,
    lazy: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    parallax: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
            loop: true,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
            loop: true
        }
    }
});