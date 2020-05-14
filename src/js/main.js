$(function() {

    // slider 
    $('.slider').slick({
        arrows:false,
        fade:true,
        autoplay:3000,
        infinite: true,
        dots:true,

    });

    // menu
    $('.header-btn').on('click', function() {
        $('.menu').addClass('active');


        $('.menu-close__btn').on('click', function(){
            $('.menu').removeClass('active');
        });
    });
});