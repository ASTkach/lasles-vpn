const slider = () => {
    var swiperSlider = new Swiper(".slider", {
        slidesPerView: 3,
        spaceBetween: 50,
        slideToClickedSlide: true,
        grabCursor: true,
        slidesPerView: "auto",
        speed: 600,
        loop: true,

        navigation: {
            nextEl: ".slider__button-next",
            prevEl: ".slider__button-prev",
        },

        pagination: {
            el: ".slider__pagination",
            clickable: true,
        },
    });
};

export default slider;
