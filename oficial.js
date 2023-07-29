$(document).ready(function(){
    $('header #ricos').on('click', function(){
        $('.menu, header #riscos').toggleClass('active');
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
    $('#cardgrande').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })

$('#cardpequeno').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        },
        1200:{
            items:6
        }
    }
})
});