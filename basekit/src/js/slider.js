var swiper = new Swiper('.slider-container-main', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    coverflow: {
        rotate: 100,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows : true
    }
});

var swiperTwo = new Swiper('.slider-container-two', {
    pagination: '.slider-container-two__pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplayDisableOnInteraction: false
});

var swiperThre = new Swiper('.slider-container-thre', {
    pagination: '.slider-container-thre__pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplayDisableOnInteraction: false
});

var swiperFour = new Swiper('.slider-container-four', {
    pagination: '.slider-container-four__pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplayDisableOnInteraction: false
});