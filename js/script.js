$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
});

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });