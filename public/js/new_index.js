
$(()=>{
	$.ajax({
		type:"get",
		url:"php/data/product.php",
		success:function(data){
			var html = "";
			for(var item of data){
				html +=`<li>
					<a href="product_detail.html?pid=${item.pid}" target="_blank">
						<img src=${item.pic}>
						<h2>${item.title.slice(6)}</h2>
						<p>${item.detail}</p>
					</a>
				</li>`;
			}
			$("#product").html(html);
		},
		error:function(){
			alert("网络故障，请检查。。。。");
		}
	})
})

$(()=>{
	$("#lb_btn li").click(function(){
		var a = $(this).index();
		$("#lb_btn li.on").removeClass("on");
		$(this).addClass("on");
		$("#lb_img li:nth-child("+(parseInt(a)+1)+")").addClass("on")
			.siblings(".on").removeClass("on");
	})
	function go(){
		var b = $("#lb_btn li.on").index();
		if(b==$("#lb_btn li").length-1){
			$("#lb_btn li.on").removeClass("on");
			$("#lb_btn li:first-child").addClass("on");
			$("#lb_img li.on").removeClass("on");
			$("#lb_img li:first-child").addClass("on");
		}else{
			$("#lb_btn li.on").removeClass("on").next().addClass("on");
			$("#lb_img li.on").removeClass("on").next().addClass("on");
		}
	};
	
	$("#lb_rt").click(go);

	var timer = setInterval(go,3000);

	$("#lb_img").mouseenter(function(){
		clearInterval(timer);
		timer = null;
	})
	$("#lb_img").mouseleave(function(){
		timer = setInterval(go,3000);
	})

	$("#lb_lf").click(function(){
		var b = $("#lb_btn li.on").index();
		if(b==0){
			$("#lb_btn li.on").removeClass("on");
			$("#lb_btn li:last-child").addClass("on");
			$("#lb_img li.on").removeClass("on");
			$("#lb_img li:last-child").addClass("on");
		}else{
			$("#lb_btn li.on").removeClass("on").prev().addClass("on");
			$("#lb_img li.on").removeClass("on").prev().addClass("on");
		}
	})
	
})

$(()=>{
	var n = parseInt(location.search.slice(3));
	if(n==1){
		$("#new_nav").addClass("on").siblings().removeClass("on");
		$("#product").removeClass("move").siblings("ul").addClass("move");
	}else{
		$("#re_nav").addClass("on").siblings().removeClass("on");
		$("#re_product").removeClass("move").siblings("ul").addClass("move");
	}

	$("#re_product li").mouseenter(function(){
		$(this).children("div").css({"top":0,"height":"40px"});
		$(this).children("div").children(".show_title").html("即将推出");
	})
	$("#re_product li").mouseleave(function(){
		$(this).children("div").css({"top":"128px","height":"107px"});
		$(this).children("div").children(".show_title").html("推出时间");
	})
	$("#renew_nav span").click(function(){
		var n = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		if(n==0){
			$("#product").removeClass("move").siblings("ul").addClass("move");
		}else{
			$("#re_product").removeClass("move").siblings("ul").addClass("move");
		}
	})
})
