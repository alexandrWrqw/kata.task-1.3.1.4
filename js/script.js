// swiper
window.addEventListener('DOMContentLoaded', () => {
    const resizeSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
        }
        
        const checkBreakpointDestroy = function() {
            if (breakpoint.matches) { // попадаем ли мы в промежуток медиа 
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) { // если свайпера нет, то не нужно удалять его
                    swiper.destroy(true, true); // удалить инстанс и стили
                };
                return;
            }
        };

        breakpoint.addEventListener('change', checkBreakpointDestroy);
        checkBreakpointDestroy();
    };

    resizeSwiper(
        '(max-width: 580px)',
        '.slider-brands', // отдельный класс для этого свайпера
        {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.3,
                },
                360: {
                    slidesPerView: 1.6,
                },
                470: {
                    slidesPerView: 2,
                },
            },
            autoplay: {
                delay: 1500,
            },
        }
    );
});

// show btn
const showBrands = document.querySelector('.brands__show-btn');
const listBrands = document.querySelector('.brands__list');

showBrands.addEventListener('click', function() {
    this.classList.toggle('btn--show--active');
    listBrands.classList.toggle('brands__list--visible');
    this.textContent = this.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
});