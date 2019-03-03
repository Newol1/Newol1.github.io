"use strict"


var animation_time = 500;
var self;


$(function() {
		$(".article__logo").hover(animate_dot);
		$(".title-block nav button").click(about_us_block_text);
})

function animate_dot() {
	var dot = $(this).parent().find(".dot");
	if (dot.data("state") === "on") {return 0}

			dot.data("state")
			dot.find("hr").animate({
				"width" : "60px"
			}, animation_time)
			dot.find("div").animate({
				"left": "60px"
			}, animation_time)
}
function animate_dot_h2() {
	var dot = $(".first-about-us-h2").parent().find(".dot");
	if (dot.data("state") === "on") {return 0}

			dot.data("state")
			dot.find("hr").animate({
				"width" : "150px"
			}, animation_time)
			dot.find("div").animate({
				"left": "150px"
			}, animation_time)
}

function about_us_block_text() {
	var busines_plan_text = ["OUR BUSINESS PLAN", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit esse, modi praesentium rerum non culpa doloremque vero nostrum ea quam aspernatur officia nisi quisquam itaque minus tempora rem magni, delectus illum quasi sapiente error vel!" ];
	var indusrty_plan_text = ["INDUSTRY PLAN", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ad exercitationem tempore animi autem amet accusamus laboriosam voluptas ut fuga vitae fugit quibusdam deserunt sapiente a dolores facere consequatur, alias omnis reprehenderit quod deleniti vel."];

	if ($(this).hasClass("active")) return 0;

	$(".second-about-us-h2, .about-us-block p").animate({"opacity" : "0"}, 500);
	var self = $(this);

	setTimeout(function() {
		$(".title-block nav button").removeClass("active");
				if (self.hasClass("busines-plan-button") == true) {
		
					$(".second-about-us-h2").text(busines_plan_text[0]);
					$(".about-us-block p").text(busines_plan_text[1]);
				} else {
		
					$(".second-about-us-h2").text(indusrty_plan_text[0]);
					$(".about-us-block p").text(indusrty_plan_text[1]);
				}
			self.addClass("active");
	} , 500);

	$(".second-about-us-h2, .about-us-block p").animate({"opacity" : "1"}, 500);

		function changeText() {
			$(".title-block nav button").removeClass("active");
				if ($(this).hasClass("busines-plan-button") == true) {
		
					$(".second-about-us-h2").text(busines_plan_text[0]);
					$(".about-us-block p").text(busines_plan_text[1]);
				} else {
		
					$(".second-about-us-h2").text(indusrty_plan_text[0]);
					$(".about-us-block p").text(indusrty_plan_text[1]);
				}
			$(this).addClass("active");
		}

}


var h2 = $('.first-about-us-h2').offset().top - $('.first-about-us-h2').height() - $(window).height(); 

$(window).scroll(function() {
	if ($(window).scrollTop() > h2) {
		animate_dot_h2();
	}
})

