
function loadProducts(pno=0){//(反复被调用)
	$.ajax({
		type:"get",
		url:"/product_list",
		data:location.search.slice(1)+"&pno="+pno,
		success:function(output){
			var html = "";
			for(var p of output.data){
				html +=`<li>
							<p class="p_img">
								<a href="product_detail.html?pid=${p.p}">
									<img src="${p.md}" alt="">
								</a>
							</p>
							<p class="p_price">
								${p.price}
							</p>
							<a href="product_detail.html?pid=${p.p}" class="a_title">
								<span>
									${p.title}
								</span>
							</a>
							<div class="shops" id="shops-cart">
								<p class="count" id="count">
									<button class="number_reduce">-</button>
									<input alt="${p.p}" type="text" value="1">
									<button class="number_add">+</button>
								</p>
								<a href="javascript:;" class="addCart">加入购物车</a>
							</div>
						</li>`
			}
			
			$("#prol_lists").html(html);
			
			var pageCount=output.pageCount,
			  pageNo=output.pageNo;
			var html=`<a href="javascript:;" class="previous">上一页</a>`;
			for(var i=1;i<=pageCount;i++){
				html+=`<a href="javascript:;">${i}</a>`;
			}
			html+=`<a href="javascript:;" class="next">下一页</a>`;
			var $divPages=$("#pages");
			$divPages.html(html);
			$divPages.children(":eq("+(pageNo+1)+")")
							.addClass("current");

			checkAStatus($divPages,pageCount,pageNo);

			$divPages.off("click").click(e=>{//为divPages绑定单击事件
				var $tar=$(e.target);
				if($tar.is("a")){//如果目标元素是a
					//如果a不是divPages的第一个子元素和最后一个子元素
					if(!$tar.is(":first-child,:last-child")){
						//如果当前a的class不是current
						if(!$tar.is(".current")){
							//获得当前a的内容-1，保存在pno中
							var pno=$tar.html()-1;
							//调用loadProducts(pno)重新加载第pno页
							loadProducts(pno);
						}
					}else{
						//如果class不以disabled结尾
						if(!$tar.is(".disabled")){
							//在divPages下查找class为current的a
							var $curr=
								$divPages.children(".current");
							//如果class以next开头
							if($tar.is(".next")){
								//重新加载商品列表传入current的内容作为pno
								loadProducts($curr.html());
							}else{
								loadProducts($curr.html()-2);
							}
						}
					}
				}
			})
			
			function checkAStatus($divPages,pageCount,pageNo){
				//获得divPages下两个a
				var $prev=$divPages.children().first();
				var $next=$divPages.children().last();
				//如果pageNo不是0，也不是pageCount
				if(pageNo!=0&&pageNo!=pageCount-1){
					//两个按钮都启用
					$prev.removeClass("disabled");
					$next.removeClass("disabled");
				}else{//否则
					if(pageNo==0)//如果pageNo==0,就prev禁用
						$prev.addClass("disabled");
					//如果pageNo==pageCount-1,就next禁用
					if(pageNo==pageCount-1)
						$next.addClass("disabled");
				}
			}
		},
			error:function(){
			alert("网络错误请检查。。。。");
		}
	})
}

function loadCart(){
	$.ajax({
		type:"get",
		url:"/getCart"
	}).then(data=>{
		var html="",total=0;
		for(var p of data){
			total+=p.price.slice(1)*p.count;
			html+=`
				<div class="item">
					<span>${p.title}</span>...
				</div>
				<div class="count_rd">
					<button class="reduce">-</button>
					<input alt="${p.iid}" type="text" value="${p.count}">
					<button class="add">+</button>
				</div>
				<p>
					<span>¥${(p.price.slice(1)*p.count).toFixed(2)}</span>	
				</p> `
		}
		$("#cart_content").html(html);
		$("#total").html(total.toFixed(2));
	})
}

$(()=>{
	loadProducts();
	loadCart();
	//为商品列表的按钮绑定单击事件
	$("#prol_lists").click(e=>{
		var $tar=$(e.target);
		//如果目标元素的className为reduce或add
		if($tar.is(".number_reduce")||$tar.is(".number_add")){
			
			//找到目标元素旁边的input
			var $input=$tar.siblings("input");
			//获得input的值转为整数n
			var n=parseInt($input.val());
			//如果目标元素的className为add
			if($tar.is(".number_add"))
				n++;//将n+1
			else if(n>1)//否则,如果n>1
				n--;//将n-1
			$input.val(n);//将n保存回input的值中
		}else if($tar.is(".addCart")){
			$.post("/islogin").then(data=>{
				if(data.code<0){
					var url=location.href;
					//将back参数值中的: /等保留字转为单字节
					url=encodeURIComponent(url);
					location="login.html?back="+url;
				}else{
					var pid = $tar.siblings().children("input").attr("alt");
					var count = $tar.siblings().children("input").val();
					$.ajax({
						type:"get",
						url:"/addcart",
						data:{
							"pid":pid,
							"count":count
						},
						success:function(data){
							if(data){
								alert("加入购物车成功!");
								$("#count input").val(1);
								loadCart();
							}
						},
						error:function(){
							alert("网络错误请检查。。。。");
						}
					})
				}
			})
		}
	})

	$("#cart_content").click(e=>{
		var $tar=$(e.target);
		if($tar.is(".reduce")||$tar.is(".add")){
			
			var $input=$tar.siblings("input");
			
			var n=parseInt($input.val());
			
			if($tar.is(".add")){n++;}

			else{n--;}
			
			$input.val(n);
			
			var iid = $input.attr("alt");
			
			$.get(
				"/updateCart",
				"count="+n+"&iid="+iid
			).then(()=>{
				loadCart();
			})	
		}
	})
	
	$("#clear_allCart").click(function(){
		$.ajax({
			type:"get",
			url:"/clearCart",
		}).then((data)=>{
			$("#total").html("0.00");
			loadCart();
		})
	})

})

