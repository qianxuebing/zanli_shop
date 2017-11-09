$(document).ready(function(){
	// subnav
	$(".sidebar ul li").hover(function(){
				var index = $(this).index();
				$(".sidebar .subnav .item").removeClass("active").eq(index).addClass("active");
			
			});
	
	
	
	
	/***************banner carousel(轮播) start************/
	var ul = $(".banner_img ul");
	var count = $(".banner_img ul").children().length;
	var width = $(".banner_img").width();
	var index = 0;
	var items = $(".banner_img .items").children();
	ul.width(width*(count+1));
	
	var first = $(".banner_img ul li").first().clone(true);
	ul.append(first);
	
	items.eq(0).addClass("current");
	
	setInterval(function(){
		index = (index+1)%count;
		items.removeClass("current").eq(index).addClass("current");
		if (index == 0) {			
			ul.animate({left:-1*width*count+"px"},500,function(){
				ul.css("left","0px");
		});
		} else{		
			ul.animate({left:-1*width*index+"px"},500);
		}		
	},2000);
	/*************banner end*****************/
	
	/***************new product start************************/	
	var new_ul = $(".product_img ul");
	var new_count = $(".product_img ul").children().length;
	var new_width = $(".product_img").width();
	var d = 0;
	var points = $(".product_img .items");
	
	
	new_ul.width(new_width*(new_count+1));
	
	var new_first = $(".product_img ul li").first().clone(true);
	new_ul.append(new_first);
	
	for (var i = 0; i < new_count; i++) {
		points.append("<span></span>");
	}
	
	points.css("margin-left",-1*points.width()/2+"px");
	
	var item = points.children();
	item.eq(0).addClass("current");
	
	setInterval(function(){
		d = (d+1)%new_count;
		item.removeClass("current").eq(d).addClass("current");
		if (d == 0) {			
			new_ul.animate({left:-1*new_width*new_count+"px"},500,function(){
				new_ul.css("left","0px");
			});
		} else{		
			new_ul.animate({left:-1*new_width*d+"px"},500);
		}	
	},2000);
	/***************new product end************************/
	
	
	
	
	
	
	
	
	
})