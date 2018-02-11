//验证码
var code;
function createCode(){
    code ="";
    var codeLength = 4;
    var random = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','K','M','J','M','N','S','Y');
    for(var i=0 ; i<codeLength ; i++){
        var index = Math.floor(Math.random()*23);
        code += random[index];
    };
    $("#yanzhengma").html(code);
}

window.onload = function(){
    createCode();
}



$(()=>{
	$(function(){
		// 初始化 传入dom id
		var victor = new Victor("container", "output");
	});
})



$(()=>{
	$("#lg_part input").focus(function(){
		$(this).css("border","1px solid red");
		$("#hint").addClass("true");
	})
	$("#lg_part input").blur(function(){
		$(this).css("border","1px solid #a1a1a1");
	})
})


$(()=>{
    $("#remember").click(function(){
    	if($(this).attr("checked")){
        	$(this).attr("checked",false);
    	}else{
            $(this).attr("checked",true);
		}
    })
})


$(()=>{
    $("#chkcode").click(function(){
        createCode();
    });
	$("#btn").click(function(){
		if(!$("#uname").val()){
			$("#uname").focus();
			$("#hint").html("用户名不能为空").removeClass("true").addClass("error");
			return;
		}
		var nreg=/^\w{4,10}$/;
		if(!nreg.test($("#uname").val())){
			$("#uname").focus();
			$("#hint").html("用户名格式不正确").removeClass("true").addClass("error");
			return;
		}

		if(!$("#upwd").val()){
			$("#upwd").focus();
			$("#hint").html("密码不能为空").removeClass("true").addClass("error");
			return;
		}
		
		ureg=/^\w{6,10}$/;
		
		if(!ureg.test($("#upwd").val())){
			$("#upwd").focus();
			$("#hint").html("密码格式不正确").removeClass("true").addClass("error");
			return;
		}

		if(!$("#code").val()){
			$("#code").focus();
			$("#hint").html("验证码不能为空").removeClass("true").addClass("error");
			return;
		};
		if(($("#code").val()).toLowerCase()!=code.toLowerCase()){
			$("#code").focus();
			$("#hint").html("验证码不正确").removeClass("true").addClass("error");
			return;
		};
		$.ajax({
			type:"post",
			url:"/login",
			data:{uname:$("#uname").val(),upwd:$("#upwd").val()},
			success:function(data){//返回数:php->js 结果
				if(data.code>0){
					alert("登录成功");
                    location=decodeURIComponent(
                        location.search.slice(6)
                    );
				}else{
					$("#hint").html(data.msg).removeClass("true").addClass("error");
				}
			},
			error:function(){
				alert("网络故障，请检查")
			}
		})
	})
})




