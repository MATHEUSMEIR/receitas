$(document).ready(function(){
    $('header button').on('click', function(){
        $('.menu, header button').toggleClass('active');
    });
    $(function(){
        $("#slides").slidesjs({
            navigation: {
                active: true,
                effect: "slide"
            },
            play: {
                active: true,
                effect: "slide",
                interval: 5000,
                auto: false,
                swap: true,
                pauseOnHover: false,
                restartDelay: 2500
            },
            width: 940,
            height: 528
        });
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});