

$(function(){
	
	
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
	
	})
	
	//封装
	$.fn.Style = function(reg,$num,$name,$tishi){
		if($("input").eq($num).val() == ""){
			$(".tishi").eq($num).html("不能为空");
			$(".tishi").eq($num).show();
			return;
		}
		if(reg.test($name) == false){
			$(".tishi").eq($num).text($tishi);
			$(".tishi").eq($num).show();
		}else {
			$(".tishi").eq($num).hide();
			$(".tishi").eq($num).text('');
		}
		
		
	}
	//验证密码
	$("input").eq(1).focus(function(){
		$(".tishi").eq(1).text("6-20个字符");
		$(".tishi").eq(1).show();
	})
	$("input").eq(1).blur(function(){
		var reg = /^[a-zA-Z0-9]{6,20}$/;
		var $tishi = "格式错误,密码格式为6-20个字符";
		$(this).Style(reg,1,$("input").eq(1).val(),$tishi);
		
	})
	
	
	//验证邮箱
	$("input").eq(2).focus(function(){
		$(".tishi").eq(2).text("邮箱格式:xxx@qq.com或xxx@163.com或xxxx@126.com");
		$(".tishi").eq(2).show();
	})
	$("input").eq(2).blur(function(){
		var reg = /^\w+@\w+(\.\w+)+$/;
		var $tishi = "邮箱格式不正确，请重新输入";
		$(this).Style(reg,2,$("input").eq(2).val(),$tishi);
		
	})
	
	
	
	$(".input-btn").click(function(){
		
		if($(".tishi").eq(0).text()==""&&$(".tishi").eq(1).text()==""&&$(".tishi").eq(2).text()==""){
			if($("input").eq(0).val()!=""&&$("input").eq(1).val()!=""&&$("input").eq(2).val()!=""){
				//console.log("注册成功");
				
				//看用户名是否可用，调用接口
				$.get("http://47.104.244.134:8080/username.do",{"username":$("input").eq(0).val()},function(data){
					//console.log(data.code);
					if(data.code == "0"){
						$(".tishi").eq(0).text("此用户名已被使用，请修改用户名");
						$(".tishi").eq(0).show();
					}
				});
				
				//看邮箱是否可用，调用接口
				$.get("http://47.104.244.134:8080/useremail.do",{"email":$("input").eq(2).val()},function(data){
					//console.log($("input").eq(2).val())
					//console.log(data);
					if(data.code == "0"){
						$(".tishi").eq(2).text("此邮箱已被占用，请修改邮箱");
						$(".tishi").eq(2).show();
					}
				});
				
				
				//注册接口
				$.post("http://47.104.244.134:8080/usersave.do",{"username":$("input").eq(0).val(),"password":$("input").eq(1).val(),"email":$("input").eq(1).val(),"sex":$(".sex:checked").val()},function(data){
					alert("注册成功");
					location.href = "login.html";
				});
			
			}
			
		}else {
			alert("信息必须填写完整");
		}
	
	});
	
	
	
	
	
	
	
	
})










































