

$(()=> {

    function loadStatus() {
        //判断登录:
        var $loginList = $("#login_path");
        var $rwgisterList = $("#register_path");
        var $welcomeList = $("#loginafter");
        var $morelist = $("#more_line");
        $.post("/islogin")
            .then(data => {
                if (data.code == 1) {
                    $loginList.hide();
                    $rwgisterList.hide();
                    $morelist.hide();
                    $welcomeList.show();
                    $("#name").html(data.msg);
                } else {
                    $loginList.show();
                    $rwgisterList.show();
                    $morelist.show();
                    $welcomeList.hide();
                }
            });
    }

	
	
	$("#header").load("header.html",function(){

		if(location.search){
			$("#searchKeywords").val(
				decodeURI(location.search.split("=")[1])
			);
		}
	
		$("#searchFrom .ms_submit").click(()=>{
			var kw = $("#searchKeywords").val().trim();
			if(kw!==""){
				location="product_list.html?kw="+kw;
			}else{
				location="product_list.html";
			}
		})

		var $txtSearch=$("#searchKeywords"),
			  $shelper=$("#shelper");
		$txtSearch.keyup(e=>{
			if(e.keyCode!=13){
				if(e.keyCode==40){
					if(!$shelper.is(":has(.on)")){

						$shelper.children().first().addClass("on");

					}else{
						if($shelper.children().last().is(".on")){

							$shelper.children(".on").removeClass("on");

							$shelper.children().first().addClass("on");
						}else{
							$shelper.children(".on").removeClass("on").next().addClass("on");
						}
					}
					$txtSearch.val(
						$shelper.children(".on").attr("title")
					);
				}else if(e.keyCode==38){
					if(!$shelper.is(":has(.on)")){

						$shelper.children().last().addClass("on");

					}else{
						if($shelper.children().first().is(".on")){

							$shelper.children(".on").removeClass("on");

							$shelper.children().last().addClass("on");

						}else{
							
							$shelper.children(".on").removeClass("on")
								.prev().addClass("on");
						}
					}
					$txtSearch.val(
						$shelper.children(".on").attr("title")
					);
						
				}else{
					var $tar=$(e.target);
					$.get(
						"/searchHelp",
						"term="+$tar.val()
					).then(data=>{
						var html="";
						for(var p of data){
							html+=`<li title="${p.title}">
								<div class="search-item" title="${p.title}">${p.title}</div>
							</li>`
						}
						$shelper.show().html(html);
						$shelper.children("li").click(function(e){
							e.preventDafault;
							$tar = $(e.target);
							$txtSearch.val(
								$tar.attr("title")
							);
							$shelper.hide();
						})
					});
				}
			}else{
				$("#searchFrom .ms_submit").click();
			}
		})
		
		$("html").click(()=>$shelper.hide());

		
		
		$("#mm_list>li").mouseenter(function(){
			if($(this).className!="current"){
				$(this).addClass("current");
				$(this).siblings(".current").removeClass("current");
			}
		})

		$("#mm_list>li").mouseleave(function(){
			$("#mm_list>li:first-child").addClass("current");
			$("#mm_list>li:first-child").siblings(".current").removeClass("current");
		})
		

		$("#btnLogin").click(function(e){
			e.preventDefault();
			location.href="login.html?back="+location.href;
		})

        $("#registerBtn").click(function(e){
            e.preventDefault();
            location.href="register.html?back="+location.href;
        })

		loadStatus();

		function updateCart(){
			$.post("/islogin").then(data=>{
				if(data.code==1){
					$.ajax({
						type:"get",
						url:"/getCart"
					}).then(data=>{
						var html="",total=0;
						for(var p of data){
							total+=parseInt(p.count);
							html+=`
								<li class="item" alt="${p.title}">
									${p.title}<span>&nbsp;&nbsp;${p.count}件</span>
								</li>`
						}
						$("#cart_hovbox .shop_list").html(html);
						$("#cart_hovbox .cart_hvc").html(total);
					})
				}else{
					$("#cart_hovbox .shop_list").hide();
				}
			})
		}

		var timer = setInterval(updateCart,200);

		$("#btnLogout").click(()=>{
				$.post("/loginout")
					.then(()=>location.reload());
		})
	});
	
})



