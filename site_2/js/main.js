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

// RESIZING CONTAINER START
$(window).resize(function() {
		if ( $(window).width() > 780 ) {
			$("header li:not(:eq(0))").css( "display", "inline-block");
		} else $("header li:not(:eq(0))").css( "display", "none");
})
// RESIZING CONTAINER END


