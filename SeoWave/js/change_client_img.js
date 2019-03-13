	$(".other_clients div").click(change_client_message)

function change_client_message() {
	let bg = $(this).css("background");
	let main_img = $(".client_img");
	if (main_img.css("background") === bg) return 0;
	main_img.animate({"opacity" : 0}, 300);
	setTimeout(function() {
		main_img.css({"background" : bg});
		main_img.animate({"opacity" : 1}, 300)
	}, 300)
}