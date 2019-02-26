function next_slide() {
	if (click_state_slider === "on") return 0;
	click_state_slider = "on";
	setTimeout(function() {
		click_state_slider = "off"
	},(slider_time - 200))
	if (active == 2) {
		active = 0;
	} else {
		active++
	}
	main_slide();
}

function prev_slide() {
	if (click_state_slider === "on") return 0;
	click_state_slider = "on";
	setTimeout(function() {
		click_state_slider = "off"
	}, (slider_time - 200))
	if (active == 0) {
		active = 2;
	} else {
		active--
	}
	main_slide()
}

function main_slide() {
	$("#slider .slide").each(function(index) {
		// FOCUS SLIDE
		if (index == active) {
					first_scale = 1;
					// ADD ADAPTIVE DESIGN TO SLIDER START
						if ($(window).width() < 575) {
							first_scale = 0.5;
							var name = $(this).find(".name").text();
							$(".min-name").css("display", "inline-block");
							$(".min-name span").text(name);
						}
						else if ($(window).width() < 767) {
							first_scale = 0.45;
							$(".min-name").css("display", "none");	
						}
						else if ($(window).width() < 1200) first_scale = 0.7;
					var	new_scale = first_scale*1.5;
					// ADD ADAPTIVE DESIGN TO SLIDER END
					$(this).css({
						opacity : "1",
						transform : "scale("+new_scale+")",
						"z-index" : 10,
						transition : "all "+slider_time_transform+"" 
					});
					$(this).find($(".position")).animate({
						opacity : "1",
						"margin-left" : "-2.5rem"
					}, slider_time);

					console.log($(this).find($(".personal_inf")));
					// $(this).find($(".personal_inf")).animate({
					// 	"margin-top" : "-110px"
					// }, slider_time);
		// NON FOCUS SLIDES
		} else {
					$(this).css({
						opacity : "0.7",
						transform : "scale("+first_scale+")",
						"z-index" : 1,
						transition : "all "+slider_time_transform+""
					});
					$(this).find($(".position")).animate({
						opacity : "0",
						"margin-left" : "-2rem"
					}, slider_time);
					// $(this).find($(".personal_inf")).animate({
					// 	"margin-top" : "-100px"
					// }, slider_time);
		}
	})
}