$(function() {
	$.getZong = function(){
		
		$.get("http://47.104.244.134:8080/goodsbytid.do", {
			"tid": 13,
			"page": 1,
			"limit": 110
		}, function(data) {
			//
			var count = 1; //记录上一页与下一页的页数
			var pages = Math.ceil(data.count / 110); //数据库中总的数据条数
			var str = "";
			for(var i = 0; i < pages; i++) {
				str += `<a href="#">${i+1}</a>`;
			}
			$(".pages").html(str);
	
			$(".pages a").each(function(index) {
				$(".pages a").eq(index).click(function() {
					$(this).getPages(index + 1);
					count = index + 1;
					console.log($(this));
					$(this).css({"background":"#F34660","color":"#fff"}).siblings().css({"background":"#fff","color":"#777"});
					$(".page > a").css({"background":"#fff","color":"#777"});
				})
	
			})
			//点击上一页
			$(".page > a").eq(0).click(function() {
				count--;
				if(count <= 1) {
					count = 1;
				}
				$(".page > a").eq(0).getPages(count);
				$(this).css({"background":"#F34660","color":"#fff"}).siblings().css({"background":"#fff","color":"#777"});
				$(".pages a").css({"background":"#fff","color":"#777"});
			})
			//点击下一页
			$(".page > a").eq(1).click(function() {
				count++;
				if(count >= pages) {
					count = pages;
				}
				$(".page > a").eq(0).getPages(count);
				$(this).css({"background":"#F34660","color":"#fff"}).siblings().css({"background":"#fff","color":"#777"});
				$(".pages a").css({"background":"#fff","color":"#777"});
			})
	
		})
	
		$.fn.getPages = function(num) {
			$.get("http://47.104.244.134:8080/goodsbytid.do", {
				"tid": 13,
				"page": num,
				"limit": 110
			}, function(data) {
	
				//	console.log(data);
	
				var str = "";
				for(var i = 0; i < data.data.length; i++) {
					//console.log(data.data[i].price/100);
					if(data.data[i].picurl) {
						str += `<div class="m-item-detail">
								<a href="detail.html?id=${data.data[i].id}">
									<img src="${data.data[i].picurl}"/>
									<p class="title">${data.data[i].name}</p>
									
									<div class="price-info">
										<p class="cur-price">
											<span class="currency">￥</span>
											<span class="price-num">${data.data[i].price/100}</span>
										</p>
										<p class="old-price">￥${data.data[i].price}</p>
										<p class="discount-box">2.3折</p>
									</div>
								</a>
								
							</div>`;
					}
				}
				$(".m-sale").html(str);
			})
	
		}
	
		//默认显示第一页
		$(".pages a").eq(0).getPages(1);
			

	}
	$.getZong();

	$(".z-current").click(function(){
		var str = "";
		str += `<a href="#" class="last-page">上一页</a>
				<div class="pages">
					
				</div>
				
				<a href="#" class="next-page">下一页</a>`;
			$(".page").html(str);
		$.getZong();
		
	})


	//按价格排序
	var arr = [];
	$.get("http://47.104.244.134:8080/goodsbytid.do", {
		"tid": 13,
		"page": 1,
		"limit": 1291
	}, function(data) {

		console.log(data);
		$(".my-ul li").eq(1).click(function() {

			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].picurl) {
					arr.push({
						"id": data.data[i].id,
						"price": data.data[i].price
					})
				}
			}

			for(var i = 0; i < arr.length - 1; i++) {
				var minIndex = i;
				for(var j = i + 1; j < arr.length; j++) {
					if(arr[minIndex].price > arr[j].price) {
						minIndex = j;
					}
				}
				var step = arr[minIndex];
				arr[minIndex] = arr[i];
				arr[i] = step;

			}
			//console.log(arr);
			var newArr = [];
			for(var k = 0; k < Math.ceil(arr.length / 48); k++) {
				newArr.push(arr.splice(0, 48));

			}
			//console.log(newArr);

			$.PaiXu = function(index) {
				var str = "";
				for(var n = 0; n < newArr[index].length; n++) {
					//console.log(newArr[index][n]);
					for(var i = 0; i < data.data.length; i++) {

						if(newArr[index][n].id == data.data[i].id) {
							str += `<div class="m-item-detail">
							<a href="detail.html?id=${data.data[i].id}">
								<img src="${data.data[i].picurl}"/>
								<p class="title">${data.data[i].name}</p>
								
								<div class="price-info">
									<p class="cur-price">
										<span class="currency">￥</span>
										<span class="price-num">${data.data[i].price/100}</span>
									</p>
									<p class="old-price">￥${data.data[i].price}</p>
									<p class="discount-box">2.3折</p>
								</div>
							</a>
							
						</div>`;
						}
					}
				}
				$(".m-sale").html(str);
			}

			$.PaiXu(0);
			var str = "";

			str += `<div class="pages">
						
					</div>`;
			$(".page").html(str);
			str = "";
			for(var i = 0; i < newArr.length; i++) {
				str += `<a href="#">${i+1}</a>`;
			}
			$(".pages").html(str);

			$(".pages a").each(function(index) {
				$(".pages a").eq(index).click(function() {
					str = "";

					$.PaiXu(index);

				})

			})

		})

	});

})