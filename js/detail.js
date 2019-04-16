/*******获取地址栏中传过来的参数********/
/*其他页面向该页传送数据*/
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg); //arch,查询？后面的参数，并匹配正则
	if(r != null) return unescape(r[2]);
	return null;
}

// 调用方法
//console.log(GetQueryString("id"));
$.get("http://47.104.244.134:8080/goodsbytid.do", {
	"tid": 13,
	"page": 1,
	"limit": 1291
}, function(data) {

	console.log(data);
	for(var i = 0; i < data.data.length; i++) {
		if(GetQueryString("id") == data.data[i].id) {
			var str = "";

			str = `<img src="${data.data[i].picurl}" width="400">
					<div class="magnifier"></div>`;
			$(".thumbnail").html(str);
			str = `<img src="${data.data[i].picurl}" style="position: absolute;" width="1000">`;
			$(".origin").html(str);
			str = `<li><a href="#"><img src="${data.data[i].picurl}"/></a></li>`;
			$(".thumb-cont-list").html(str);

			str = `<h3>
						<span>今日特卖</span>
						${data.data[i].name} 
					</h3>
					<p>${data.data[i].info}</p>`;
			$(".title1").html(str);

			str = `<em>￥<i>${data.data[i].price/100}</i></em>`;
			$(".now-price").html(str);
			str = `<label>上架时间</label>
					<ul class="value">
						<li>
							<a href="#">
								<img src="${data.data[i].picurl}"/>
								<span>${data.data[i].pubdate}</span>
							</a>
						</li>
						

					</ul>`;
			$(".view-stu").html(str);

			//分割小数与整数部分
			var x = (data.data[i].price / 100).toFixed(2);
			x = x + "";
			var y = x.split(".");
			var Int = y[0];
			var Lit = y[1];
			str = `<span class="currency">￥</span>
					<span class="price-inte">${Int}</span>
					<span class="price-lit">.${Lit}</span>`;

			$(".ops .price-wrap").html(str);
			
		}

	}

});


$(".add-cart").click(function() {
	if(getCookie("username")) {
		//console.log(getCookie("username"));
		//console.log(GetQueryString("id"))
		$.get("http://47.104.244.134:8080/cartsave.do",{"gid":GetQueryString("id"),"token":getCookie("username")},function(data){
			//console.log(data);
			if(data.code== "0"){
				console.log("加入购物车成功");	
				$(".sale-attrs .add-cart a i").fadeIn().fadeOut(800);
			}
			
			
		})
		
		

	}
})










$('.thumbnail').mouseover(function(e) {
	$('.origin').css('display', 'block');
	$('.magnifier').css('display', 'block');

})
// 当鼠标在“缩略图”窗口中移动时
$('.thumbnail').mousemove(function(e) {
	// 一、首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）

	// 获取鼠标当前位置
	var pageX = e.pageX;
	var pageY = e.pageY;
	// 获取“缩略图”窗口在整个文档中的偏移位置
	var offsetX = $('.thumbnail').offset().left;
	var offsetY = $('.thumbnail').offset().top;
	// 计算鼠标在缩略图中的相对位置
	var relativeX = pageX - offsetX;
	var relativeY = pageY - offsetY;
	// 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
	var magOffsetX = $('.magnifier').width() / 2;
	var magOffsetY = $('.magnifier').height() / 2;
	$('.magnifier').css({
		left: relativeX - magOffsetX + 'px',
		top: relativeY - magOffsetY + 'px'
	});
	// 获取“放大镜”框的新位置，后面会用到
	var magX = $('.magnifier').position().left;
	var magY = $('.magnifier').position().top;

	// 二、处理越界情况

	// 确定边界
	var maxMagX = $('.thumbnail').width() - $('.magnifier').width()
	var maxMagY = $('.thumbnail').height() - $('.magnifier').height()
	// 左边界
	if(magX <= 0) {
		$('.magnifier').css('left', '0px');
	}
	// 右边界
	if(magX >= maxMagX) {
		$('.magnifier').css('left', maxMagX + 'px');
	}
	// 上边界
	if(magY <= 0) {
		$('.magnifier').css('top', '0px');
	}
	// 下边界
	if(magY >= maxMagY) {
		$('.magnifier').css('top', maxMagY + 'px');
	}

	// 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动

	// 按照之前确定的缩放比例移动“原图”窗口中的图片
	// 注意：图片的移动方向与鼠标的移动方向是相反的！
	var originX = magX * 2;
	var originY = magY * 2;
	$('.origin img').css({
		left: -originX + 'px',
		top: -originY + 'px'
	});
})
// 当鼠标离开“缩略图”窗口时，隐藏“原图”窗口和“放大镜”框
$('.thumbnail').mouseout(function() {
	$('.origin').css('display', 'none');
	$('.magnifier').css('display', 'none');
})

//购买件数
var c = 1;
$(".jia").click(function(e) {
	c++;
	$(".by-number input").val(c);
	e.preventDefault(); //阻止默认行为
});
$(".jian").click(function(e) {
	c--;
	if(c <= 0) {
		c = 0;

	}
	$(".by-number input").val(c);
	e.preventDefault(); //阻止默认行为

});

//




//var data = ["img/fangda.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/by1.jpg", "img/by2.jpg", "img/by3.jpg"];

/*
var totalNums = data.length; //获取数据的总条数
var numPerPage = 4; //每一页几条数据
var pages = Math.ceil(totalNums / numPerPage); //总共有几页

var curIndex = 0; //初始当前页  为0
//对当前页的处理
function showNews(curIndex) {
	var str = "";
	for(var i = numPerPage * curIndex; i < Math.min(numPerPage * (curIndex + 1), totalNums); i++) {
		str += `<li><a href="#"><img src="${data[i]}"/></a></li>`;
	}
	$(".thumb-cont-list").html(str);

	$(".thumb-cont-list li").each(function(index) {

		$(".thumb-cont-list li").eq(index).click(function() {
			//console.log(index,curIndex,index+curIndex*4);
			var str = "";
			str = `<img src="${data[index+curIndex*4]}" width="400">
				<div class="magnifier"></div>`;
			$(".thumbnail").html(str);

			str = `<img src="${data[index+curIndex*4]}" style="position: absolute;" width="1000">`;
			$(".origin").html(str);

		});

	});

}

showNews(0); //默认显示第一页

//若数据多于4条，上一页与下一页的按钮出现
if(data.length > 4) {
	$(".shangyiye").show();
	$(".xiayiye").show();
}
//上一页
$(".shangyiye").click(function() {
	curIndex--;
	if(curIndex < 0) {
		curIndex = 0;
	}
	showNews(curIndex);
})
//下一页
$(".xiayiye").click(function() {
	curIndex++;
	if(curIndex > pages - 1) {
		curIndex = pages - 1;
	}
	showNews(curIndex);
})

//购买件数
var c = 1;
$(".jia").click(function(e) {
	c++;
	$(".by-number input").val(c);
	e.preventDefault(); //阻止默认行为
});
$(".jian").click(function(e) {
	c--;
	if(c <= 0) {
		c = 0;

	}
	$(".by-number input").val(c);
	e.preventDefault(); //阻止默认行为

});


//判断选中哪一款
$(".value a").click(function() {
	$(this).css({
		"border": "2px solid #F34660"
	});

}).click(function() {
	$(".value a").click(function() {
		$(this).css({
			"border": "1px solid #b8b7bd"
		});

	});
	
});*/