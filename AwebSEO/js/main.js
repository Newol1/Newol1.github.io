 "use strict"


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });



      // hide #back-top first
    $("#go_to_top").hide();
     
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#go_to_top').fadeIn();
            } else {
                $('#go_to_top').fadeOut();
            }
        });
 
        // scroll body to 0px on click
        $('#go_to_top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(window).scroll(function() {
        	$("go_to_top").hide()
        })
    });

	 

	});