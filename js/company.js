$(document).ready(function() {

	$(".work_list ul li").hover(function() {
		var index = $(this).index();
		$(".work_list ul li").removeClass("current").eq(index).addClass("current");
	}, function() {
		$(".work_list ul li").removeClass("current");
	});
	$(".clicktop").click(function() {
		$(".work_list ul").slideUp();
	});
	$(".clickbottom").click(function() {
		$(".work_list ul").slideDown();
	});

})