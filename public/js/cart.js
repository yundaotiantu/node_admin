$(()=>{
	
	function loadCart(){
		$.get("/getCart").then(data=>{
			var html = "";
			for(var p of data){
				html +=`<div class="imfor">
							<div class="check">
								<span><input type="checkbox" ${parseInt(p.is_checked)==1?"checked":""} alt="${p.iid}"></span>
							</div>
							<div class="product">
								<a href="product_detail.html?pid=${p.product_id}">
									<img src="${p.sm}">
								</a>
								<span class="decs">
									<a href="product_detail.html?pid=${p.product_id}">
										${p.title}
									</a>
								</span>
							</div>
							<div class="price">
								<p>会员专享</p>
								<b>${p.price}</b>
							</div>
							<div class="num" id="count_num">
								<button class="reduce">-</button>
								<input data-iid="${p.iid}" type="text" value="${p.count}">
								<button class="add">+</button>
							</div>
							<div class="total-price">
								<span>¥</span>
								<span>${(p.price.slice(1)*p.count).toFixed(2)}</span>
							</div>
							<div class="del">
								<a href="javascript:;" alt="${p.iid}">删除</a>
							</div>
						</div>`;
			}
			$("#content-box-body").html(html);

			var html =`<span><input type="checkbox"></span>全选`;
			$("#check-top").html(html);	
			
			var html =`<span><input type="checkbox"></span>全选`;
			$("#all_chk").html(html);	
			
			if($("#content-box-body .imfor").length==0){
				$("#cart_kong").show();
			}else{
				$("#cart_kong").hide();
			}

			var $checkAlls = $("#check-top>span>input ,#all_chk>span>input");
			//var $checkAlls = $("#check-top>span>input");

			var $inputs = $("#content-box-body .check input");

			$checkAlls.off("click").click(e=>{
				var $tar=$(e.target);
				if($tar.attr("checked")){
					$.get(
						"/selectAll",
						"chkAll=0"
					).then(()=>{
						loadCart();
					});
					
					//$tar.attr("checked",false);

				}else{
					$.get(
						"/selectAll",
						"chkAll=1"
					).then(()=>{
						loadCart();
					});
					
					//$tar.attr("checked",true);
					
				}
			})

			


			$("#count_num button").off("click").click(e=>{
				$tar = $(e.target);
				var $input = $tar.parent().children("input");
				var n=parseInt($input.val());
				if($tar.is(".add")){
					n++;
				}else{
					n--;
				}
				if(n==0){
					if(confirm("是否继续删除?")){
						$.get(
							"/updateCart",
							"count="+n+"&iid="+$input.data("iid")
						).then(()=>{

							loadCart();

						})
					}
				}else{
					$.get(
							"/updateCart",
							"count="+n+"&iid="+$input.data("iid")
						).then(()=>{
							loadCart();
						})	
				}
			})

			
			$("#count_num input").off("blur").blur(e=>{
				
				var $tar = $(e.target);
				
				var n = $tar.val();

				if(n==0){
					if(confirm("是否继续删除?")){
						$.get(
							"/updateCart",
							"count="+n+"&iid="+$tar.data("iid")
						).then(()=>{

							loadCart();

						})
					}else{
						$.get(
							"/updateCart",
							"count="+1+"&iid="+$tar.data("iid")
						).then(()=>{

							loadCart();

						})	
					}
				}else{
					$.get(
							"/updateCart",
							"count="+n+"&iid="+$tar.data("iid")
						).then(()=>{

							loadCart();

						})	
				}
			})



			$inputs.off("click").click(e=>{
				var $tar=$(e.target);
				if($tar.attr("checked")){
					$.get(
						"/selectOne",
						"chkOne=0&iid="+$tar.attr("alt")
					).then(()=>{

						loadCart();
						
					});
				}else{
					$.get(
						"/selectOne",
						"chkOne=1&iid="+$tar.attr("alt")
					).then(()=>{
						loadCart();
					});
				}
			})

			var $counts=
				$("#shopping-cart .total,#shopping-cart .totalOne");
			var $totals=
				$("#shopping-cart .totalPrices,#shopping-cart .foot-price");
		

			function getTotal(){
				var $rows =  $(".imfor:has(.check>span>input[checked])");
				
				var $inputs=$rows.find(".num>input");
				
				var $subs=$rows.find(".total-price>:last-child");

				var count=0;
				var total=0;
				for(var input of $inputs){
					count+=parseInt($(input).val());
				}
				for(var sub of $subs){
					total+=parseFloat($(sub).html());
				}

				$counts.html(count);
				$totals.html(total.toFixed(2));
			}
			

			function chk_all(){

				$checkAlls.attr("checked",$("#content-box-body .check input").not("input:checked").length==0?true:false
				);
				
			}
			
			getTotal();


			chk_all();

			var dels=$("#content-box-body .del a");
			
			dels.off("click").click(e=>{

				var $tar = $(e.target);

				if(confirm("是否继续删除?")){
					$.get(
						"/del",
						"select=1&iid="+$tar.attr("alt")
					).then(()=>{

						loadCart();

					})
				}
			})

			$("#del_chks").off("click").click(e=>{

				var $tar = $(e.target);

				if(confirm("是否确认删除所选中商品?")){
					$.get(

						"/del"

					).then(()=>{

						loadCart();

					})
				}
			})

		})
	}

	$.post("/islogin")
		.then(data=>{
		if(data.ok==0)
			location=
				"login.html?back="+
				encodeURIComponent(location.href);
		loadCart();
	})
})