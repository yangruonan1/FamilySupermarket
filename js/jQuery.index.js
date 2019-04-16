$(function() {
	$(".classify").mouseover(function() {
		$(".product-list").show();
	})
	$(".classify").mouseout(function() {
		$(".product-list").hide();
	})

	

	//滚动顶部导航出现
	$(document).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 156) {
			$(".sub-nav-outer2").show();
		} else {
			$(".sub-nav-outer2").hide();
		}

		//回到顶部
		$(".backtop").click(function() {
			$("body,html").stop().animate({
				"scrollTop": 0
			}, 1000)
		});
		
	});

	 
	if(getCookie("username")){
		//console.log(getCookie("username"));
		var str = "";
		str += `${getCookie("username")}`;
		$(".view-LoginStatus span").eq(0).html(str);
		$(".view-LoginStatus span").eq(1).text("退出登录");
	}
	
	$(".view-LoginStatus span").eq(1).click(function(){
		//
		console.log(getCookie("username"));
		setCookie("username", 3806, -7);
		location.reload();
	})
	
	//点击进入购物车时，先判断是否登录
	$.fn.getClick = function(){
		$(this).click(function(){
			if(getCookie("username")){
				$(location).attr('href', 'cart.html');
			}else{
					alert("请登录");
				}
		})
	}
	$(".nav-cart > a").getClick();
	$(".cart-jiesuan").getClick();
	$(".side-a1").getClick();
	
	
	
	//获得购物车的信息
	
	if(getCookie("username")){
		//$(".cart-nothing").hide();
		$.get("http://47.104.244.134:8080/cartlist.do",{"token":getCookie("username")},function(data){
			console.log(data);
			if(data.length > 0){
				$(".cart-nothing").hide();
				$(".side-div2").hide();
			}
			var str = "";
			var str1 = "";
			var sum = 0;
			var count = 0;
			for(var i = 0; i < data.length; i++){
				sum += data[i].goods.price/100 * data[i].count;
				var onesum = data[i].goods.price/100 * data[i].count;
				count += data[i].count;
				//console.log(sum);
				str += `<ul class="cart-pro">
							<li>
								<a href="cart.html" class="c-pic">
									<img src="${data[i].goods.picurl}"/>
								</a>
								<a href="cart.html" class="xiangqing">${data[i].goods.name}</a>
								<div class="caozuo">
									<p class="c-price">￥${onesum.toFixed(2)}</p>
									<p class="c-del">${data[i].count}件</p>
								</div>
							</li>
						</ul>`;
				$(".product").html(str);
				str1 += `<ul class="pro-cart">
							<li>
								<p class="pro-cart-p1">
									<img src="${data[i].goods.picurl}"/>
								</p>
								<p class="pro-cart-p2">${data[i].goods.name}</p>
								<div class="pro-cart-p3">
									<p class="price">￥${onesum.toFixed(2)}</p>
									<p class="count">${data[i].count}件</p>
								</div>
								<p class="del" data-id="${data[i].id}" data-gid="${data[i].gid}">删除</p>
							</li>
						</ul>`;
				$(".product1").html(str1);
			}
			$(".cart-xiaoji span").eq(1).text(sum.toFixed(2));	
			$(".side-footer-xiaoji span").eq(1).text(sum.toFixed(2));
			$(".side-num").text(count);
			$(".del").click(function(){
				
				$.get("http://47.104.244.134:8080/cartupdate.do",{"id":$(this).attr("data-id"),"gid":$(this).attr("data-gid"),"num":0,"token":getCookie("username")},function(data1){
					
					location.reload();
					
				})
				
				
			})
			
		});
		
		$(".side-jiesuan").click(function(){
			if(getCookie("username")){
				$(location).attr('href', 'cart.html');
			}else{
				alert("请登录");
			}
			
		})
		
		
	}
	
	
	
	
	
	$(".J-sort li").each(function() {
		var index = $(this).index();

		$(".J-sort li").eq(index).mouseover(function() {
			var str = ``;
			//console.log(index);
			switch(index) {
				case 0:
					str += `<a href="#">
								<dl>
									<dt>
										<img src="img/09183067406350_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/09183067406350_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/09183067406350_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/09183067406350_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/09183067406350_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/09183067406350_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a>`;
					break;
				case 1:
					str += `<a href="#">
								<dl>
									<dt>
										<img src="img/05274180499151_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/05274180499151_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/05274180499151_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/05274180499151_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/05274180499151_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/05274180499151_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a>`;
					break;

				case 2:
					str += `<a href="#">
								<dl>
									<dt>
										<img src="img/13367799249686_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/13367799249686_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/13367799249686_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/13367799249686_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/13367799249686_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/13367799249686_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a>`;
					break;

				case 3:
					str += `<a href="#">
								<dl>
									<dt>
										<img src="img/22751564064810_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/22751564064810_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/22751564064810_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/22751564064810_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/22751564064810_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a><a href="#">
								<dl>
									<dt>
										<img src="img/22751564064810_800x800.jpg!100x100.jpg"/>
									</dt>
									<dd>
										<p class="jieshao">2件装 新年专享 戴维贝拉儿童宝宝秋冬季超值限量福袋 不退不换</p>
										<p class="jiage">
											<span>￥<span class="price">99.00</span></span>
											
											<span class="th-line">￥699</span>
										</p>
									</dd>
								</dl>
							</a>`;
					break;
			}
			//$(".hot-sort-list a").eq(index).show().siblings().hide();
			$(".hot-sort-list").html(str);
		})

	})
	
	
	

})