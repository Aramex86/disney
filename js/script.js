$(document).ready(function () {
    $('.slider').bxSlider({
        pager:false,
        minSlides:3,
        moveSlides:1,
        slideWidth:362,
        keyboardEnabled:true,
        //randomStart:true
    });
    $('.slide1__card--info-link').on('click',function () {
        $('.big__cardwrap--1').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--1-btn').click(function () {
            $('.big__cardwrap--1').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide2__card--info-link').on('click',function () {
        $('.big__cardwrap--2').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--2-btn').click(function () {
            $('.big__cardwrap--2').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide3__card--info-link').on('click',function () {
        $('.big__cardwrap--3').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--3-btn').click(function () {
            $('.big__cardwrap--3').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide4__card--info-link').on('click',function () {
        $('.big__cardwrap--4').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--4-btn').click(function () {
            $('.big__cardwrap--4').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });


});




