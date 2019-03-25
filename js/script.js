$(document).ready(function () {
    $('.slider').bxSlider({
        pager:false,
        minSlides:3,
        moveSlides:1,
        slideWidth:362,
        keyboardEnabled:true,
        //randomStart:true,
        shrinkItems:true,
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
    $('.slide5__card--info-link').on('click',function () {
        $('.big__cardwrap--5').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--5-btn').click(function () {
            $('.big__cardwrap--5').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide6__card--info-link').on('click',function () {
        $('.big__cardwrap--6').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--6-btn').click(function () {
            $('.big__cardwrap--6').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide7__card--info-link').on('click',function () {
        $('.big__cardwrap--7').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--7-btn').click(function () {
            $('.big__cardwrap--7').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide8__card--info-link').on('click',function () {
        $('.big__cardwrap--8').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--8-btn').click(function () {
            $('.big__cardwrap--8').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide9__card--info-link').on('click',function () {
        $('.big__cardwrap--9').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--9-btn').click(function () {
            $('.big__cardwrap--9').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide10__card--info-link').on('click',function () {
        $('.big__cardwrap--10').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--10-btn').click(function () {
            $('.big__cardwrap--10').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide11__card--info-link').on('click',function () {
        $('.big__cardwrap--11').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--11-btn').click(function () {
            $('.big__cardwrap--11').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide12__card--info-link').on('click',function () {
        $('.big__cardwrap--12').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--12-btn').click(function () {
            $('.big__cardwrap--12').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide13__card--info-link').on('click',function () {
        $('.big__cardwrap--13').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--13-btn').click(function () {
            $('.big__cardwrap--13').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide14__card--info-link').on('click',function () {
        $('.big__cardwrap--14').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--14-btn').click(function () {
            $('.big__cardwrap--14').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide15__card--info-link').on('click',function () {
        $('.big__cardwrap--15').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--15-btn').click(function () {
            $('.big__cardwrap--15').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide16__card--info-link').on('click',function () {
        $('.big__cardwrap--16').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--16-btn').click(function () {
            $('.big__cardwrap--16').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide17__card--info-link').on('click',function () {
        $('.big__cardwrap--17').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--17-btn').click(function () {
            $('.big__cardwrap--17').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });
    $('.slide18__card--info-link').on('click',function () {
        $('.big__cardwrap--18').fadeIn(500).toggleClass("bla");

        $('.section__sliderwrap').fadeOut();
        $('.big__cardwrap--18-btn').click(function () {
            $('.big__cardwrap--18').fadeOut().removeClass("bla");
            $('.section__sliderwrap').fadeIn();
        });
    });

    $('#x').keyup(function () {
        $('#result').html('');

        var searchField = $('#x').val();

        var expression = new RegExp(searchField,"i");

        $.getJSON("data.json",function (data) {
            $.each(data,function (key,value) {
                if (value.name.search(expression) !=-1 || value.movie.search(expression) !=-1){
                    $('#result').append('<li class="list-item">'+ value.name + ' | <span>'+'Movie ' + value.movie+'</span>'+'</li>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');
        $('#x').val($.trim(click_text[0]));
        $("#result").html('');
    });

/*
$('#x').on('keyup',function () {
   var value = $(this).val().toLowerCase();
   $('.list li').filter(function () {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
   });


});
*/

});





































