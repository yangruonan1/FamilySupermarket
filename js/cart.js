$(function() {
	if(getCookie("username")){
		$.get("http://47.104.244.134:8080/cartlist.do",{"token":getCookie("username")},function(data){
			
			var str = "";
			for(var i = 0; i < data.length; i++){
				var sum = data[i].goods.price * data[i].count;//保存某件商品的数量
				str += `<ul class="p-list">
							<li class="inp">
								<input type="checkbox" />
							</li>
							<li class="p-li">
								<a href="#" class="p-pic"><img src="${data[i].goods.picurl}"/></a>
								<a href="#" class="p-text" >
									${data[i].goods.name}
								</a>
							</li>
							<li class="td-info">
								<p class="sku-line">商品号:${data[i].goods.id}</p>
								<p class="sku-line">尺码:S</p>
							</li>
							<li class="td-price">
								<p class="old-price">￥149.90</p>
								<p class="now-price">${data[i].goods.price/100}</p>
							</li>
							<li class="td-am">
								<a href="#" class="no-minus no-minus1" data-id="${data[i].id}" data-gid="${data[i].gid}">-</a>
								<input type="text" data-id="${data[i].id}" value="${data[i].count}"/>
								<a href="#" class="no-minus no-minus2" data-id="${data[i].id}" data-gid="${data[i].gid}">+</a>
							</li>
							<li class="td-sum">￥<span>${(Math.ceil(sum)/100).toFixed(2)}</span></li>
							<li class="td-op" data-id="${data[i].id}" data-gid="${data[i].gid}"><a href="#">删除</a></li>
						</ul>`;
				
			}
			$(".product-list").html(str);
			
			//点击增加购物车商品数量
			$(".no-minus2").click(function(){
				var a = $(this).attr("data-gid");//获得属性的属性值
				var b = $(this).attr("data-id");
				$.get("http://47.104.244.134:8080/cartupdate.do",{"id":$(this).attr("data-id"),"gid":$(this).attr("data-gid"),"num":1,"token":getCookie("username")},function(data1){
					
					for(var j = 0; j < data.length; j++){
						if(data[j].gid == a){
							//console.log(data)
							location.reload();
						}
					}
					
				});
					
			});
			
			//点击减少购物车商品数量
			$(".no-minus1").click(function(){
				var a = $(this).attr("data-id");
				var b = $(this).attr("data-gid");
				
				var pp = $(this);
				var p = $(this).siblings().eq(0);
				
				$.get("http://47.104.244.134:8080/cartupdate.do",{"id":$(this).attr("data-id"),"gid":$(this).attr("data-gid"),"num":-1,"token":getCookie("username")},function(data1){
					//console.log(p.val());
					if(p.val() <= 1){
						$.get("http://47.104.244.134:8080/cartupdate.do",{"id":a,"gid":b,"num":0,"token":getCookie("username")},function(data1){
							
							location.reload();
							
						})
					}
					location.reload();
					
				})
			
			});
			
			//num=0 删除该商品
			$(".td-op").click(function(){
				
				$.get("http://47.104.244.134:8080/cartupdate.do",{"id":$(this).attr("data-id"),"gid":$(this).attr("data-gid"),"num":0,"token":getCookie("username")},function(data1){
					
					location.reload();
					
				})
			
			});
			
			
			//选中要买的物品
			var sum = 0;
			$.getChecked = function(){
				$(".inp input").each(function(index){
					var str = "";
					
					$(".inp input").eq(index).click(function(){
						var a = $(this);
						
						if($(this).is(':checked')){//判断是否选中
							var s = $(this).parent().siblings().eq(4).find("span").text() - 0;
							sum += s;
						}else {
							var s = $(this).parent().siblings().eq(4).find("span").text() - 0;
							sum -= s;
						}
						
						$(".price-sum strong span").text(sum.toFixed(2));
						
						var arr = $(".inp input:checked");//选择被选中的input
						$(".amount-sum strong").text(arr.length)
						//如果选中的input的数量等于0，另全选框不选中
						if(arr.length == 0){
							$(".allChecked").prop('checked', false);
							$(".price-sum strong span").text(0);
						}
						//如果选中的input的数量等于总的input的数量，另全选框选中
						if(arr.length==$(".inp input").length){
							$(".allChecked").prop('checked', true);
						}
					})
				})
				
			}
			$.getChecked();		
			
			var sum = 0;
			
			//全选功能
			$(".allChecked").click(function(){
				var sum = 0;
				if($(this).is(':checked')){
					$(".p-list input").prop('checked', true);
					$(".inp input").each(function(index){
						var s = $(this).parent().siblings().eq(4).find("span").text() - 0;
						sum += s;
						
						$(".price-sum strong span").text(sum.toFixed(2));
							
					})
					$(".inp input").each(function(index){
						var str = "";
						$(".inp input").eq(index).click(function(){
							if($(this).is(':checked')){//判断是否选中
								var s = $(this).parent().siblings().eq(4).find("span").text() - 0;
								sum += s;
							}else {
								var s = $(this).parent().siblings().eq(4).find("span").text() - 0;
								sum -= s;
							}
							
							$(".price-sum strong span").text(sum.toFixed(2));
							
							var arr = $(".inp input:checked");//选择被选中的input
							$(".amount-sum strong").text(arr.length)
							if(arr.length == 0){
								$(".allChecked").prop('checked', false);
								$(".price-sum strong span").text(0);
							}
							
						})
					})	
					//$.getChecked();
				}else {
					$(".p-list input").prop('checked', false)
					$(".price-sum strong span").text(0);	
					sum = 0;
				}
				
				var arr = $(".inp input:checked");//选择被选中的input
				$(".amount-sum strong").text(arr.length)
				
			})
				
			
			
		});
		
		
		
		
		
			
		
		
		
	}
	
	



})






