// document.addEventListener('DOMContentLoaded', () => {
//     const width = window.innerWidth
//     if (width < 768) {
//     }
// })

const changeDirection = (swiper) => {
    window.innerWidth <= 768 ? swiper.destroy(true, true) : slider.init();
};

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    pagination: {
    el: '.swiper-pagination',
    clicable: true,
    },

    slidersPerView: 2,
    
    watchOverflow: true,

    spaceBetween: 16,

    //     autoplay: {
    //         delay: 2000,
    //         stopOnLastSlide: false,
    //         disableOnInteraction: true,
    //     },

    // speed: 800,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
    },

});