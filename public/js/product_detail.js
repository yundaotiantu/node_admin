
$(()=>{
	if(location.search!=""){
		$.ajax({
			type:"get",
			url:"/product_detail",
			data:{pid:location.search.slice(5)},
			success:function(data){
				var {product:p,imgs} = data;
				var html =`<h1 id="title">${p.title}</h1>
					<ul>
						<li class="number"><span class="basic-a">商品编号</span>${p.number}</li>
						<li class="price"><span class="basic-a">价格</span>
							<span class="new_price">${p.price}</span>
						</li>
						<li class="selprice"><span class="basic-a">市场价</span>
							<del class="price">${p.selprice}</del>
						</li>
						<li class="site">
							<span class="basic-a">配送至：</span><b>${p.site}</b>
							<span class="cost">运费:</span><b>${p.cost}</b>
						</li>
						<li class="spc"><span class="basic-a">规格</span>${p.spec}</li>
					</ul>
					<p class="count" id="count">
						<span class="basic-a">数量</span>
						<button class="number_reduce" id="number_reduce">-</button>
						<input type="text" value="1">
						<button class="number_add" id="number_add">+</button>
					</p>
					<div class="shops" id="shops-cart">
						<a href="javascript:;">加入购物车</a>
					</div>`;
				$("#show_detail").html(html);
				var html="";
				for(var pic of imgs){
					html +=`<li>
 								<img src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"> 
 								<i></i> 
 							</li>`;
				}
				$("#icon_list").html(html);
				$("#Img").attr("src",imgs[0].md);
				var html = `<img src="${imgs[0].lg}">`; 
				$("#largeDiv").html(html);
				$("#icon_list li img").mouseover(function(){
					$("#Img").attr("src",$(this).attr("data-md"));
					var html = `<img src="${$(this).attr("data-lg")}">`; 
					$("#largeDiv").html(html);
				});
				$("#superMask").mouseover(function(){
					$("#mask").css("display","block");
					$("#largeDiv").css("display","block")
				});
				$("#superMask").mouseout(function(){
					$("#mask").css("display","none");
					$("#largeDiv").css("display","none")
				});
				var MSIZE=200;
				$("#superMask").mousemove(function(e){
					var x = e.offsetX,y=e.offsetY;
					var top = y-MSIZE/2,left = x- MSIZE/2;
					if(top<0) top = 0;
					else if(top>200) top=200;
					if(left<0) left =0;
					else if(left>200) left=200;
					$("#mask").css({"top":top,"left":left});
					$("#largeDiv img").css({"top":-2.5*top,"left":-2.5*left});
				});
				$("#number_reduce").click(function(){
					if($("#count input").val()>1){
						$("#count input").val(parseInt($("#count input").val())-1);
					}else{
						$("#count input").val(1);
					}
				});
				$("#number_add").click(function(){
					$("#count input").val(parseInt($("#count input").val())+1);
				});
				
				if(p.cpic&&p.xpic&&p.dpic){
				var html = `<div><img src="${p.dpic}"></div>
					<div><img src="${p.cpic}"></div>
					<div><img src="${p.xpic}"></div>`;
				$("#inner").html(html);
				$("#inner div:first-child").addClass("on");
				$("#tabs li").click(function(){
					var a=$(this).index();
					$(this).addClass("cur").siblings().removeClass("cur");
					$("#inner div:nth-child("+(parseInt(a)+1)+")")
						.addClass("on").siblings().removeClass("on");
				})
				}else{
					$("#intro").hide();
				}
				
				
				$("#shops-cart").click(function(){
					$.post("/islogin")
						.then(data=>{
						if(data.code<0){
							var url=location.href;
							//将back参数值中的: /等保留字转为单字节
							url=encodeURIComponent(url);
							location="login.html?back="+url;
						}else{
							var pid = location.search.split("=")[1];
							var count = $("#count input").val();
							$.ajax({
								type:"get",
								url:"/addCart",
								data:{
									"pid":pid,
									"count":count
								},
								success:function(data){
									if(data.code>0){
										alert("加入购物车成功!");
										$("#count input").val(1);
									}
								},
								error:function(){
									alert("网络错误请检查。。。。");
								}
							})
						}
					})
				})
			},
			error:function(){
				alert("网络错误请检查。。。。");
			}
		})
	}
})

