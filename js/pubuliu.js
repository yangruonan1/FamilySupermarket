

$(function(){
	
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":1,"limit":150},function(data){
		
		//console.log(data);
		var str = "";
		for(var i = 0; i < data.data.length; i++){
			if(data.data[i].picurl){
				
				//分割小数与整数部分
				var x = data.data[i].price/100;
				x = x+"";
				var y = x.split(".");
				var Int = y[0];
				var Lit = y[1];
				str += `<a href="detail.html?id=${data.data[i].id}" class="m-sale yiqiang">
							<div class="m-sale-div">
								<img class="lazy" src="${data.data[i].picurl}"/>
								<p class="title">${data.data[i].info}</p>
								<div class="price-info">
									<p class="cur-price">
										<span class="currency">￥</span>
										<span class="price-num">${Int}</span>
										<span class="price-little">.${Lit}</span>
									</p>
									<p class="old-price">￥39.9</p>
									<p class="discount-des">7.5折</p>
								</div>
							</div>
							
						</a>`;
				
			}
			
		}
		$(".product-shows").html(str);
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
})



























/*var data = [
	{
		id: 1,
		hot:"hot",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/37579331426083_800x800.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 2,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/63505892007314_800x800.jpg!100x100.jpg",
		price:[19,.90],
		oldprice:39.9,
		discontdes:"8.5折"
	},
	{
		id: 3,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/48745382529633_800x800.jpg!100x100.jpg",
		price:[29,.90],
		oldprice:39.9,
		discontdes:"7.5折"
	},
	{
		id: 4,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/57604604753300_800x800_jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 4,
		hot:"hot",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/69479432641727_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 5,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/46972149325171_800x800_jpg!100x100.jpg",
		price:[19,.90],
		oldprice:39.9,
		discontdes:"8.5折"
	},
	{
		id: 6,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/63505892007314_800x800.jpg!100x100.jpg",
		price:[29,.90],
		oldprice:39.9,
		discontdes:"7.5折"
	},
	{
		id: 7,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/61895261076784_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 8,
		hot:"hot",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/00339200066964_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 9,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/08754609819799_800x800.jpg!100x100.jpg",
		price:[19,.90],
		oldprice:39.9,
		discontdes:"8.5折"
	},
	{
		id: 10,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/13367799249686_800x800.jpg!100x100.jpg",
		price:[29,.90],
		oldprice:39.9,
		discontdes:"7.5折"
	},
	{
		id: 11,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/20630815470134_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 12,
		hot:"hot",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/22751564064810_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 13,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/19495569153333_800x800.jpg!100x100.jpg",
		price:[19,.90],
		oldprice:39.9,
		discontdes:"8.5折"
	},
	{
		id: 14,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/20351552809682_800x800.jpg!100x100.jpg",
		price:[29,.90],
		oldprice:39.9,
		discontdes:"7.5折"
	},
	{
		id: 15,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/61411680725525_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 16,
		hot:"hot",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/56983762749828_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 17,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/35540545706350_800x800.jpg!100x100.jpg",
		price:[19,.90],
		oldprice:39.9,
		discontdes:"8.5折"
	},
	{
		id: 18,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/86659294996731_800x800.jpg!100x100.jpg",
		price:[29,.90],
		oldprice:39.9,
		discontdes:"7.5折"
	},
	{
		id: 19,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/80410661524740_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 20,
		hot:"hot",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/64794836836943_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	},
	{
		id: 21,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/92489847329180_800x800.jpg!100x100.jpg",
		price:[19,.90],
		oldprice:39.9,
		discontdes:"8.5折"
	},
	{
		id: 22,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/48745382529633_800x800.jpg!100x100.jpg",
		price:[29,.90],
		oldprice:39.9,
		discontdes:"7.5折"
	},
	{
		id: 23,
		hot:"",
		title:"湖南麻阳冰糖橙&nbsp;9斤装&nbsp;果经55mm以上",
		src:"img/69479432641727_800x800.jpg!100x100.jpg",
		price:[9,.9],
		oldprice:19.9,
		discontdes:"7.5折"
	}
]
var aA = document.getElementsByClassName("m-sale");
var oProductShows = document.getElementsByClassName("product-shows")[0];

window.onload = window.onresize = function(){
	
	var cou = 0
	var arr = [];//保存hot的id
	for(var i = 0; i < data.length; i++){
		
		if(data[i].hot == "hot"){
			cou++;
			arr.push(data[i].id);
		}
		
	}
	var num = Math.floor(Math.random()*cou);
	//console.log(arr[num]);
	var str = ``;
	str += `<a href="#" class="m-sale yiqiang">
								<div class="m-sale-div">
									<img class="bitui" src="img/6766c06058f86ced_174x174.png"/>
									<div class="top-produce">
										今日以抢
										<span class="top-num">7</span>
										<span class="top-num">0</span>
										<span class="top-num">8</span>
										<span class="top-num">4</span>
										<span class="top-num">6</span>
										件
									</div>
									<img class="lazy" src="${data[arr[num]].src}"/>
									<p class="title">${data[arr[num]].title}</p>
									<div class="price-info">
										<p class="cur-price">
											<span class="currency">￥</span>
											<span class="price-num">${data[arr[num]].price[0]}</span>
											<span class="price-little">${data[arr[num]].price[1]}</span>
										</p>
										<p class="old-price">￥${data[arr[num]].oldprice}</p>
										<p class="discount-des">${data[arr[num]].discontdes}</p>
									</div>
								</div>
								
							</a>`;
	
	oProductShows.innerHTML += str;
	
	
	//	window.onscroll = function() {
//		
//		//var ch = document.documentElement.clientHeight; //可视区高度
//		var st = document.documentElement.scrollTop || document.body.scrollTop;
//		
//		console.log(st);
//		var str = "";
//		if(st){
//			
//			for(var j = 0; j < data.length; j++) {
//				str += `<a href="#" class="m-sale yiqiang">
//								<div class="m-sale-div">
//									<img class="lazy" src="${data[j].src}"/>
//									<p class="title">${data[j].title}</p>
//									<div class="price-info">
//										<p class="cur-price">
//											<span class="currency">￥</span>
//											<span class="price-num">${data[j].price[0]}</span>
//											<span class="price-little">${data[j].price[1]}</span>
//										</p>
//										<p class="old-price">￥${data[j].oldprice}</p>
//										<p class="discount-des">${data[j].discontdes}</p>
//									</div>
//								</div>
//								
//							</a>`;
//			}
//			oProductShows.innerHTML += str;
//			
//		}
//		
//	}

}*/



