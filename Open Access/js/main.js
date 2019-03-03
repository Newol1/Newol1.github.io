"use strict"

$(function() {
	mobileContainer();
	$(window).resize(mobileContainer);
})

function mobileContainer() {

	if($(window).width() < 640) {
		$(".flex-row .flex-item").css({
			"order" : 0,
			"flex" : "0 0 100%",
			"max-width" : "100%",
			"width" : "100%"
		});
		$(".flex-row").css({"max-height" : "1000px"});


		$(".flex-row .flex-item:eq(0)").removeClass("flex-item_right");
		$(".flex-row .flex-item:eq(1)").removeClass("flex-item_left").addClass("flex-item_margin-top");
		$(".flex-row .flex-item:eq(2)").removeClass("flex-item_left");
		$(".flex-row .flex-item:eq(3)").removeClass("flex-item_right");
		$(".flex-row .flex-item:eq(4)").removeClass("flex-item_left");
		$(".flex-row .flex-item:eq(5)").removeClass("flex-item_right");
		$(".flex-row .flex-item:eq(6)").removeClass("flex-item_right");
	}


}
