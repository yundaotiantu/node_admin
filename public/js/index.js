
$(()=>{
	$.ajax({
		type:"get",
		url:"/floors",
		success:function(data){
			var{pc_hot,ct_ts,ar_qt,floor1,floor2,floor3} = data;
			var html = "";
			var n =0;
			for(var hot of pc_hot){
				n++;
				html += `<div class="hotarea">
						<div class="ht_inner">
							<h2>
								<img src="picture/newioc2_0${n}.png">
							</h2>
							<a href="product_detail.html?pid=${hot.pid}" target="_blank" class="ht_img">
								<img src="${hot.pic}">
								<img src="${hot.pic}">
							</a>
						</div>
						<span class="ht_bp">
							<b>${hot.site}</b>
							${hot.title}
						</span>
					</div>`;
			}
			$("#pc_hot .pc_content").html(html);

			var html = "";
			for(var ts of ct_ts){
				html += `<li>
						<a class="zsxg_tp" href="product_detail.html?pid=${ts.pid}" target="_blank">
							<b class="new-hg-d"></b>
							<img src="${ts.pic}">
							<b class="zsxg-wz-b ">${ts.title}</b>
							<span class="zsxg-wz new-hg-a">${ts.subtitle}</span>
						</a>
					</li>`;
			}
			$("#ts_part3>ul").html(html);
			
			var html = ""
			for(var qt of ar_qt){
				html += `<div>
							<div class="qt_jd_bn">
								${qt.site.slice(0,2)}
							</div>
							<div class="qt_jd_lf">
								<div class="qt_img">
									<a href="product_detail.html?pid=${qt.pid}" target="_blank">
										<img src="${qt.pic}">
									</a>
								</div>
								<div class="qt_btg">
									<img src="picture/ljr_jd_ct.jpg">
								</div>
							</div>
							<div class="qt_jd_rt">
								<span class="site">${qt.site.slice(2)}</span>
								<span class="caption">${qt.title}</span>
								<p class="line"></p>
								<span class="intro">
									<a href="product_detail.html?pid=${qt.pid}" target="_blank">${qt.subtitle}</a>
								</span>
							</div>
						</div>`;
			}
			
			$("#qt_bng").html(html);

			var html = "";
			for(var f of floor1){
				html += `<li>
						<div>
							<p>${f.title}</p>
							<p>${f.subtitle}</p>
							<p>${f.site}</p>
						</div>
						<a target="blank" href="product_detail.html?pid=${f.pid}">
							<img src="${f.pic}">
						</a>
				</li>`;
			}
			$("#floor1 .floors_ul").html(html);
			
			var html = "";
			for(var f of floor2){
				html += `<li>
						<div>
							<p>${f.title}</p>
							<p>${f.subtitle}</p>
							<p>${f.site}</p>
						</div>
						<a target="blank" href="product_detail.html?pid=${f.pid}">
							<img src="${f.pic}">
						</a>
				</li>`;
			}
			$("#floor2 .floors_ul").html(html);

			var html = "";
			for(var f of floor3){
				html += `<li>
						<div>
							<p>${f.title}</p>
							<p>${f.subtitle}</p>
							<p>${f.site}</p>
						</div>
						<a target="blank" href="product_detail.html?pid=${f.pid}">
							<img src="${f.pic}">
						</a>
				</li>`;
			}
			$("#floor3 .floors_ul").html(html);


		},
		error:function(){
			alert("网络故障请检查。。。。");
		}
	})
})


$(()=>{
	$.ajax({
		type:"get",
		url:"/lunbo",
		success:function(data){
			var html = "";
			for(var lb of data){
				html +=`<li>
					<div class="st_pclf">
						<h2>${lb.title}</h2>
						<p>${lb.t_detail}</p>
					</div>
					<div class="st_pcrt">
						<i>
							<img src="${lb.bg}">
						</i>
						<div class="st_pcrt_inner">
							<h2>${lb.subtitle}</h2>
							<p>
								${lb.s_detail}
								<a href="product_detail.html?pid=${lb.pid}" target="_blank">【查看详情】</a>
							</p>
							<a href="product_detail.html?pid=${lb.pid}" target="_blank">
								<img src="${lb.pic}">
							</a>
						</div>
					</div>
				</li>`; 
			};
			$("#st_pc .cf").html(html);
			$("#st_pc .cf li:first-child").addClass("mg_select");
		},
		error:function(){
			alert("网络故障请检查。。。。");
		}
	})
})

$(()=>{
	$("#btn_area a").hover(function(){
		$(this).addClass("ckgdxp").siblings().removeClass("ckgdxp");
	})
})

$( () => {
 $("#st_list>ul>li") . click( function () {

	if ($(this) .className != "on" ){

		$(this) .addClass("on");

		$(this) .siblings(".on") .removeClass("on");

		var a = $(this) .index();

		$("#st_pc>ul>li.mg_select") .removeClass("mg_select");

		$("#st_pc>ul>li:nth-child("+(parseInt(a)+1)+")") .addClass("mg_select");

		if (a>=4) $("#st_list>ul") .addClass("lf");

		else $("#st_list>ul") .removeClass("lf");
	}
 })

 })

$( () => {

function go(){

	var a = parseInt($("#st_list>ul>li.on") .index());

	$("#st_pc>ul>li.mg_select") .removeClass("mg_select");

	if (a!=7) {

		$("#st_list>ul>li.on") .removeClass("on") .next() .addClass("on");

		$("#st_pc>ul>li:nth-child("+(parseInt(a)+2)+")") .addClass("mg_select");

	} else {

		$("#st_list>ul li.on") .removeClass("on");

		$("#st_list>ul li:first-child") .addClass("on");

		$("#st_pc>ul>li:first-child") .addClass("mg_select");

	}
	if (a>2&&a<=6) $("#st_list>ul") .addClass("lf");

	else $("#st_list>ul") .removeClass("lf");
}
$("#next") .click(go);

setInterval(go,3000);

})


$( () => {

	$("#prev") .click( function () {

		var a = parseInt($("#st_list>ul>li.on") .index());

		$("#st_pc>ul>li.mg_select") .removeClass("mg_select");

		if (a!=0) {

			$("#st_list>ul>li.on") .removeClass("on") .prev() .addClass("on");

			$("#st_pc>ul>li:nth-child("+(parseInt(a))+")") .addClass("mg_select");

		} else {

			$("#st_list>ul li.on") .removeClass("on");

			$("#st_list>ul li:last-child") .addClass("on");

			$("#st_pc>ul>li:last-child") .addClass("mg_select");

		}
		if (a>=5||a==0) $("#st_list>ul") .addClass("lf");

		else $("#st_list>ul") .removeClass("lf");
	})

})

$(()=>{
	
	$("#qt_btn>span") .click( function () {
	
		var a = $( this ) .index() , n = 1200 ;

		$("#qt_inner>.qt_bng") .css( "left" , -parseInt(a)*n + "px" );

		$( "#qt_btn>span.qt_current" ) .removeClass( "qt_current" );

		$( this ) .addClass( "qt_current" );

	} )
	
	function rear() {
		
		var a = $("#qt_btn>span.qt_current") .index() , n = 1200 ;

		if (a<=3) {
		
		$("#qt_btn>span.qt_current") .removeClass("qt_current") .next()
			
		.addClass("qt_current");

		$("#qt_inner>.qt_bng") .css("left", -(parseInt(a)+1) * n + "px");
		
		} else {
			$("#qt_btn>span.qt_current") .removeClass("qt_current");
			
			$("#qt_btn>span:first-child") .addClass("qt_current");

			$("#qt_inner>.qt_bng") .css("left",-(parseInt(a) + 1) * n + "px");

			$("#qt_inner>.qt_bng") .css("left","0px");
		}
	}

	setInterval(rear,4000);

})

$(()=>{
	
	var key=true;

	$("#gd").click (function () {
		
		if(key){
	
			$(this).css( "left","1100px") ;

			$("#nav_btxs").css("width","1100px");

			key=false
		
		}else{
		
			$(this).css( "left","350px") ;

			$("#nav_btxs").css("width","320px");

			key=true;

		}
	})

})

/*$(()=>{
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
function arose(c,b){
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#aaa";
	ctx.arc(50,50,38,0*Math.PI/180,360*Math.PI/180);
	ctx.stroke();
	var str = b;
	ctx.font = "25px SimHei bold";
	var obj = ctx.measureText(str);
	ctx.fillText(str,50-obj.width/2,50+10);
	var start = -90;
	var end = -90;
	var timer = setInterval(function(){
		ctx.beginPath();
		ctx.arc(50,50,38,start*Math.PI/180,end*Math.PI/180);
		end +=2;
		ctx.strokeStyle = "#E64040";
		ctx.stroke();
		if(end>(parseInt(str)/10*360-90)){
			clearInterval(timer);
			tmer=null;
		}
	},5)
}
arose(c1,9.0);
arose(c2,9.3);
arose(c3,9.4);
arose(c4,9.3);
})*/

//圆形进度条
$(function(){
	var ggname = {};

	/*for (var i = 1; i <= $('#pic_carousel ul li').length; i++) {*/
	for (var j = 1; j <= 4; j++) {
		
	   ggname["gg"+"1"/*.toString()*/+j.toString()] = new JustGage({
			id: "gg"+"1"/*i.toString()*/+j.toString(),
			valueFontColor: "black",
            min: 0,
			max: 10,
		   // value: $('#gg'+i.toString()+j.toString()).attr('data-value'),
			//title: $('#gg'+i.toString()+j.toString()).attr('data-title'),
			donut: true,
			decimals: 1,
			titleFontColor: '#000',
			gaugeWidthScale: 0.1,
		   // levelColors: [$('#gg'+i.toString()+j.toString()).attr('data-color')],
			levelColorsGradient: true,
			hideInnerShadow: false,
			counter: true

		});

	};
})

$(()=>{
	var $divLift=$("#lift"),
			  $floors=$(".title_list");
	$(window).scroll(()=>{
			var scrollTop=$("html body").scrollTop();
			var offsetTop=$("#recent").offset().top;
			if(offsetTop<scrollTop+20){
				$divLift.show();
			}
			else{
				$divLift.hide();
			}
			for(var f of $floors){
				var $f=$(f);
				var offsetTop=$f.offset().top;
				if(offsetTop<(scrollTop+innerHeight/2)){
					//找到该楼层对应的li按钮
					var i=$floors.index($f);
					var $a=
						$divLift.find(".lift_btn:eq("+i+")");
					//为li添加lift_item_on class
					$a.addClass("on");
						//为其兄弟去掉lift_item_on class
					$a.parent().siblings().children("a").removeClass("on");
				}
			}
	})
	$divLift.on("click",".lift_item",function(){
		var $li=$(this);
		console.log($li);
		if(!$li.is(":last-child")){
			var i = $li.index();
			console.log(i);
			var offsetTop=$floors.eq(i).offset().top;
			$("html,body").stop(true).animate({
				scrollTop:offsetTop-10
			},500)
		}else{
			$("html,body").stop(true).animate({
				scrollTop:0
			},500);
		}
	})
})

//$(()=>{
//	//$("html body").scrollTop(0);
//})

