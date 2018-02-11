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
    $("#mg_code").val(code);
}

window.onload = function(){
    createCode();
}


$(()=>{
	
	var msg={
		name:{
			nreg:/^\w{4,10}$/,
			k:"用户名不能为空",
			e:"用户名格式不正确",
			c:"用户名已存在",
			t:"通过"
		},
		upwd:{
			ureg:/^\w{6,10}$/,
			k:"密码不能为空",
			e:"密码格式不正确",
			t:"通过"
		},
		cpwd:{
			creg:/^\w{6,10}$/,
			k:"确认密码不能为空",
			e:"密码格式不正确",
			c:"两次密码不一致",
			t:"通过"
		},
		phone:{
			preg:/^1[34578]\d{9}$/,
			k:"电话号码不能为空",
			e:"电话号码格式不正确",
			c:"电话号码已被占用",
			t:"通过"
		},
		email:{
			ereg:/\w{6,11}@[A-Za-z]+\.com/,
			k:"邮箱不能为空",
			e:"邮箱格式不正确",
			c:"邮箱已被占用",
			t:"通过"
		},
		code:{
			k:"不能为空",
			e:"验证码不正确",
			t:"通过"
		}
	};
	
	var ng=msg.name.nreg,
		nk=msg.name.k,
		ne=msg.name.e,
		nc=msg.name.c,
		nt=msg.name.t;
	var phg=msg.phone.preg,
		phk=msg.phone.k,
		phe=msg.phone.e,
		phc=msg.phone.c,
		pht=msg.phone.t;
	var eg=msg.email.ereg,
		ek=msg.email.k,
		ee=msg.email.e,
		ec=msg.email.c,
		et=msg.email.t;
	var ug=msg.upwd.ureg, 
		uk=msg.upwd.k,
		ue=msg.upwd.e,
		ut=msg.upwd.t;
	var cg=msg.cpwd.creg,
		ck=msg.cpwd.k,
		ce=msg.cpwd.e,
		cc=msg.cpwd.c,
		ct=msg.cpwd.t;
	var cdk=msg.code.k,
		cde=msg.code.e,
		cdt=msg.code.t;

	$u = $("#uname");
	$p = $("#upwd");
	$c = $("#cpwd");
	$ph = $("#phone");
	$e = $("#email");
	$cd = $("#code");
	$btn = $("#rg_btn");

	function vail(n,a,b,c,m,f){
		n.removeClass("in");
		n.parent().next().children(".fs").removeClass("active");
		let $bl = n.parent().next().children(".bl");
		let $le = $bl.removeClass("leave").removeClass("error").removeClass("success");
		if(!n.val()){
			$le.addClass("error").html(a);
			return false;
		}
		if(!b.test(n.val())){
			$le.addClass("error").html(c);
			return false;
		}
		
		if(n==$c){
			if($c.val()!=$p.val()){
				$le.addClass("error").html(f);
				return false;
			}else{
				$le.addClass("success").html(m);
				return true;
			}
		}else if(n==$p){
			$le.addClass("success").html(m);
			return true;
		}else{
			return false;
		}
	}
	
	
	function pre(n,a,b,c,d,e,f){
			n.removeClass("in");
			n.parent().next().children(".fs").removeClass("active");
			let $bl = n.parent().next().children(".bl");
			let $le = $bl.removeClass("leave").removeClass("error").removeClass("success");
			if(!n.val()){
				$le.addClass("error").html(a);
				return false;
			}else if(!b.test(n.val())){
				$le.addClass("error").html(c);
				return false;
			}else{
				$.ajax({
					type:"post",
					url:"/rg_chk",
					data:{name:d,value:`${n.val()}`}
					}).then(function(data){
						if(data.code<0){
							$le.addClass("error").html(f);
						}else{
							$le.addClass("success").html(e);
						}
				})
				if($le.html()==e){
					return true;
				}else{
					return false;
				}
			}
		}

	$u.blur(function(){pre($u,nk,ng,ne,"uname",nt,nc);});			//用户名验证
	$ph.blur(function(){pre($ph,phk,phg,phe,"phone",pht,phc);});	//电话号码验证
	$e.blur(function(){pre($e,ek,eg,ee,"email",et,ec);});			//邮箱验证
	$p.blur(function(){vail($p,uk,ug,ue,ut);});						//密码验证
	$c.blur(function(){vail($c,ck,cg,ce,ct,cc);});					//确认密码验证


	$("#mg_code").click(function(){								//点击换一张验证码
        createCode();
	})

	function cdvail(){						//验证码验证
        $cd.removeClass("in");
        $cd.parent().next().children(".fs").removeClass("active");
        let $bl = $cd.parent().next().children(".bl");
        let $le = $bl.removeClass("leave").removeClass("error").removeClass("success");
        if(!$cd.val()){
            $le.addClass("error").html(cdk);
            return false;
        }else{
            if(($cd.val()).toLowerCase()!=code.toLowerCase()){
                $le.addClass("error").html(cde);
                return false;
            }else{
                $le.addClass("success").html(cdt);
                return true;
            }
		}

	}
	
	$cd.blur(function(){cdvail()});
	
	$("#rg input").focus(function(){
        hint($(this));}
    );
	
	function hint(n){
				n.addClass("in");
				n.parent().next().children(".fs")
					.addClass("active").removeClass("leave");
				n.parent().next().children(".bl")
					.removeClass("success").addClass("leave").removeClass("error");
		}

	$btn.click(function(){
		if(!pre($u,nk,ng,ne,"uname",nt,nc)){
			$u.focus();
			$u.parent().next().children(".fs").addClass("leave");
			$u.parent().next().children(".bl").addClass("error");
		}else if(!vail($p,uk,ug,ue,ut)){
			$p.focus();
			$u.parent().next().children(".bl").addClass("success");
			$p.parent().next().children(".fs").addClass("leave");
			$p.parent().next().children(".bl").addClass("error");
		}
		else if(!vail($c,ck,cg,ce,ct,cc,".cwd_part")){
			$c.focus();
			$u.parent().next().children(".bl").addClass("success");
			$p.parent().next().children(".bl").addClass("success");
			$c.parent().next().children(".fs").addClass("leave");
			$c.parent().next().children(".bl").addClass("error");
		}else if(!pre($e,ek,eg,ee,"email",et,ec)){
			$e.focus();
			$u.parent().next().children(".bl").addClass("success");
			$p.parent().next().children(".bl").addClass("success");
			$c.parent().next().children(".bl").addClass("success");
			$e.parent().next().children(".fs").addClass("leave");
			$e.parent().next().children(".bl").addClass("error");
		}else if(!pre($ph,phk,phg,phe,"phone",pht,phc)){
			$ph.focus();
			$u.parent().next().children(".bl").addClass("success");
			$p.parent().next().children(".bl").addClass("success");
			$c.parent().next().children(".bl").addClass("success");
			$e.parent().next().children(".bl").addClass("success");
			$ph.parent().next().children(".fs").addClass("leave");
			$ph.parent().next().children(".bl").addClass("error");
		}else if(!cdvail()){
			$cd.focus();
			$u.parent().next().children(".bl").addClass("success");
			$p.parent().next().children(".bl").addClass("success");
			$c.parent().next().children(".bl").addClass("success");
			$e.parent().next().children(".bl").addClass("success");
			$ph.parent().next().children(".bl").addClass("success");
			$cd.parent().next().children(".fs").addClass("leave");
			$cd.parent().next().children(".bl").addClass("error");
		}else{
			$.ajax({
				type:"post",
				url:"/register",
				data:{uname:$u.val(),
					upwd:$p.val(),
					phone:$ph.val(),
					email:$e.val()
				},
				success:function(data){
					if(data.code>0){
						alert("注册成功");
						$("#enter_lgp").css("display","block");
						$("#enter").click(function(){
                            location.href="login.html?back="+location.href.split("=")[1];
						});
						$("#quit").click(function(){
							location.href = "register.html";
						});
					}
				}
			})
		}
	})
})