$(document).ready(function() {
	//subnav
	$(".sidebar ul li").mouseenter(function() {
		var index = $(this).index();
		$(".sidebar .subnav .item").removeClass("active");
		$(".sidebar .subnav .item").eq(index).addClass("active");
	});
	$(".sidebar ul li").mouseleave(function() {
		$(".sidebar .subnav .item").removeClass("active");
	});

	//banner carousel(轮播) start
	var ul = $(".banner_img ul");
	var count = $(".banner_img ul").children().length;
	var width = $(".banner_img").width();
	var index = 0;
	var items = $(".banner_img .items").children();
	ul.width(width * (count + 1));
	var first = $(".banner_img ul li").first().clone(true);
	ul.append(first);
	items.eq(0).addClass("current");
	var t = setInterval(run, 2000);
	$(".banner_img").hover(function() {
		clearInterval(t);
	}, function() {
		t = setInterval(run, 2000);
	});
	$(".banner_img .items span").mouseover(function() {
		var index = $(this).index();
		$(".banner_img .items span").removeClass("current").eq(index).addClass("current");
		ul.css("left", -1 * width * index + "px");
	});

	function run() {
		index = (index + 1) % count;
		items.removeClass("current").eq(index).addClass("current");
		if(index == 0) {
			ul.animate({
				left: -1 * width * count + "px"
			}, 500, function() {
				ul.css("left", "0px");
			});
		} else {
			ul.animate({
				left: -1 * width * index + "px"
			}, 500);
		}
	}
	//banner end

	//new product start
	var new_ul = $(".product_img ul");
	var new_count = $(".product_img ul").children().length;
	var new_width = $(".product_img").width();
	var point = $(".product_img .items");

	new_ul.width(new_width * (new_count + 1));
	var new_first = $(".product_img ul li").first().clone(true);
	new_ul.append(new_first);
	for(var i = 0; i < new_count; i++) {
		point.append("<span></span>");
	}
	point.css("margin-left", -1 * point.width() / 2 + "px");
	var item = point.children();
	item.eq(0).addClass("current");
	item.mouseover(function(){
		var d = $(this).index();
		console.log(d);
		item.removeClass("current").eq(d).addClass("current");
		new_ul.children().eq(d).fadeIn(1000).siblings().fadeOut();
	});
	//new product end
	
	//兑换专区  start
	var n = 0;
	var count1 = $(".product .productcon dl").length;
	var width1 = $(".product .productcon dl").width() + 42;	
	var T = setInterval(running,1000);
	$(".product").hover(function(){
		clearInterval(T);
		$('.clickyou').show();
		$('.clickzuo').show();
	},function(){
		$('.clickyou').hide();
		$('.clickzuo').hide();
		T = setInterval(running,1000);
	});
	$(".clickzuo").click(function(){
		if (n < 6 && n > 0) {
			n = (n-1)%6;
			$(".productcon").animate({left:-width1*n+"px"});
		}
	});
	$(".clickyou").click(function(){
		if (n < 5) {
			n = (n+1)%6;
			$(".productcon").animate({left:-1*width1*n+"px"});
		}
	});
	function running(){
		n = (n+1)%6;
		if (n == 0) {
			$(".productcon").animate({left: "0px"});
		} else{
			$(".productcon").animate({left:-1*width1*n+"px"});
		}
	}
	
	//销量最多
	$(".mostproduct dl").mouseenter(function(){
		index = $(this).index();
		$(".mostproduct dl .inner").show().eq(index).hide();
	});
	$(".mostproduct dl").mouseleave(function(){
		$(".mostproduct dl .inner").hide();
	});
})