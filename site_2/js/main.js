"use strict"

$(function() {
	    $("header ul").on("click","a", function (event) {
        event.preventDefault();
        if ( $(window).width() < 780 ) {show_nav();
         console.log("hello");}
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    })
})

function show_nav() {
		var menu = $("header li:eq(0)");
	if ( menu.data("state") ==="on") {
		$("#cover").animate({
			"height" : "0%",
		}, 500)
		 menu.data("state", "off");
		 $("body").css("overflow-y", "auto")
	} else  {
				$("#cover").animate({
			"height" : "100%",
			}, 500)
		 menu.data("state", "on");
		 $("body").css("overflow-y", "hidden")
		}


	$("header li").each(function(index) {
		if (index != 0 ) {
		$(this).fadeToggle(500);
	 } 
	})
}




// SLIDEDR START
var slideNow = 1;
var viewportWidth = 3;
var slideCount = $('#slidewrapper').children().length;
console.log(slideCount);
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;


// RESIZE SLIER BLOCK START
$(window).resize(function() {
    resizing_slider();
    console.log(viewportWidth);
})
resizing_slider();
function resizing_slider() {
    if ( $(window).width() < 1250 ) {
        viewportWidth = 2;
        console.log(viewportWidth);
        $("#viewport").css({"width": "calc(100% * 2)"});
        $("#slidewrapper").css({"width": "calc((100%/2) * 6)"});
        $("#brand_slider .container").css({"width": "calc(400px * 2)"});
    }
    if ( $(window).width() < 850 ) {
        viewportWidth = 1;
        console.log(viewportWidth);
        $("#viewport").css({"width": "calc(100% * 1)"});
        $("#slidewrapper").css({"width": "calc((100%/1) * 6)"});
        $("#brand_slider .container").css({"width": "calc(400px * 1)"});
    }
    if ( $(window).width() < 500 ) {
        console.log(viewport);
        $("#brand_slider .container").css({"width": "calc(300px * 1)"});
    }   
    if ( $(window).width() > 1250 ) {
        viewportWidth = 3;
        console.log(viewportWidth);
        $("#viewport").css({"width": "calc(100% * 3)"});
        $("#slidewrapper").css({"width": "calc((100%/3) * 6)"});
        $("#brand_slider .container").css({"width": "calc(400px * 3)"});
    }

}
// RESIZE SLIDER BLOCK END

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });
});


function nextSlide() {
    if (slideNow == (slideCount -  viewportWidth + 1)) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        translateWidth = 0;
        slideNow = 1;
    } else {
        translateWidth = -($('#viewport').width() / viewportWidth) * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1) {
        translateWidth = -($('#viewport').width() / viewportWidth) * (slideCount - viewportWidth);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = (slideCount - viewportWidth + 1);
        translateWidth += (($('#viewport').width() / viewportWidth));
        $("slidewrapper")
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

// SLIDER END









// RESIZING CONTAINER START
$(window).resize(function() {
		if ( $(window).width() > 780 ) {
			$("header li:not(:eq(0))").css( "display", "inline-block");
		} else $("header li:not(:eq(0))").css( "display", "none");
})
// RESIZING CONTAINER END


