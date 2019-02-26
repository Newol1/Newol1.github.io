var active = Math.round((($("#slider .slide").length)/2 ) - 1);
var click_state_slider = "off";
var slider_time = 1500;
var slider_time_transform = slider_time + "ms";
var first_scale;

$(function() {
	//SEARCH INPUT HANDLER
	$("header .fa-search").data("state", "off");
	$("header .fa-search").click(toggle_search_input);

	// SLIDER HANDLER
	$("#next-btn").click(next_slide);
	$("#prev-btn").click(prev_slide);

	//SCROLL TO SLIDER
    var target = $('#team');
		var targetPos = target.offset().top;
		var winHeight = $(window).height();
		var scrollToElem = targetPos - winHeight;

		$(window).on("scroll", function(){
		  var winScrollTop = $(this).scrollTop();
		  if(winScrollTop > scrollToElem){
		    main_slide();
		    $(window).off('scroll');
  }})
})



function toggle_search_input() {
		if( $(this).data("state") === "off") {
			$("header form input").animate({"width" : "100px"}, 1000)
			$("header .fa-search").data("state", "on");
		} else {
			$("header form input").animate({"width" : "0px"}, 1000)
			$("header .fa-search").data("state", "off");
		}
}



