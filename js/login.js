
$(function(){
	
	$(".tuozhuai").on("mousedown",function(e){
		//console.log($left,$top);
		var isMove = true;
		var $disX = $(".tuozhuai").offset().left;
		var $disY = $(".tuozhuai").offset().top;
		
		$(document).mousemove(function(e){
			if(isMove){
				var $left = e.pageX - $disX;
				var $top = e.pageY - $disY;
				
				var $w = $(".yanzheng").outerWidth()-$(".tuozhuai").outerWidth();
				var $h = $(".yanzheng").outerHeight()-$(".tuozhuai").outerHeight();
				
				$left = $left <= 0 ? 0 : $left >= $w ? $w : $left;
				$top = $top <= 0 ? 0 : $top >= $h ? $h : $top;
				
				$(".tuozhuai").css({"left":$left,"top":$top});
				$(".nc-bg").css({"width":$left+"px"});
			}
				
		
		})
		$(document).mouseup(function(e){
			isMove = false;
			var $_left = $(".tuozhuai").offset().left;
			var $w = $(".yanzheng").outerWidth()+$_left-$(".tuozhuai").outerWidth();
			if(e.clientX < $w){
				
				$(".tuozhuai").css({"left":0,"top":0},1000);
				$(".nc-bg").css({"width":0},1000);
				
			}else {
				var $tuozhuai = $(".yanzheng").outerWidth()- $(".tuozhuai").outerWidth();
				$(".tuozhuai").css({"left":$tuozhuai,"top":0,"color":"#f00"});
				$(".nc-bg").css({"width":$(".yanzheng").outerWidth()});
			}
		})
	
	})
	
	//验证用户名		
	$("input").eq(0).focus(function(){
		$(".tishi").eq(0).text('支持"汉字"、"字母"、"数字"、"_"组合格式');
		$(".tishi").eq(0).show();
	})		
	$("input").eq(0).blur(function(){
		if($("input").eq(0).val() == ""){
			$(".tishi").eq(0).text("不能为空");
			$(".tishi").eq(0).show();
			return;
		}
		var reg1 = /[\u4e00-\u9fa5]/g;
		var reg2 = /\w/ig;
		if(reg2.test($("input").eq(0).val($("input").eq(0).val()))||reg1.test($("input").eq(0).val())||reg1.test()&&reg2.test($("input").eq(0).val()&&reg1.test($("input").eq(0).val()))){
			
			$(".tishi").eq(0).hide();
			$(".tishi").eq(0).text('');
		}else {
			$(".tishi").eq(0).text('格式错误,仅支持"汉字"、"字母"、"数字"、"_"组合格式');
			$(".tishi").eq(0).show();
		}
	
	});
	//验证密码(不封装)
	$("input").eq(1).focus(function(){
		$(".tishi").eq(1).text("6-20个字符");
		$(".tishi").eq(1).show();
	})
	$("input").eq(1).blur(function(){
		if($("input").eq(1).val() == ""){
			$(".tishi").eq(1).text("不能为空");
			$(".tishi").eq(1).show();
			return;
		}
		var reg = /^[a-zA-Z0-9]{6,20}$/;
		if(reg.test($("input").eq(1).val()) == false){
			$(".tishi").eq(1).text("格式错误,密码格式为6-20个字符");
			$(".tishi").eq(1).show();
			
		}else {
			$(".tishi").eq(1).hide();
			$(".tishi").eq(1).text('');
		}
		
	})
	
	
	
	
	
	
	$(".input-btn").click(function(){
		
		if($(".tishi").eq(0).text()==""&&$(".tishi").eq(1).text()==""){
			if($("input").eq(0).val()!=""&&$("input").eq(1).val()!=""){
				
				
				$.post("http://47.104.244.134:8080/userlogin.do",{"name":$("input").eq(0).val(),"password":$("input").eq(1).val()},function(data){
					//console.log(data);
					if(data.code == "0"){
						//console.log(data.data.token);//token值用来标识当前用户
						setCookie("username", data.data.token, 7);
						
						location.href = "index.html";
						
					}else {
						alert("账号或密码填写不正确");
					}
					
				});
				
			}
			
		}else {
			alert("请正确输入账号和密码");
		}
		
		
		
		
		//console.log($(".ln").offset().left);
			
		
		
	})
		
	
	
	
	
	
	
	
	
})













