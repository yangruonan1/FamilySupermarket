$(function(){
	
	var data = [
		{
			id:0,
			xinxi:[["纸尿裤","img/z1.jpg"],["奶瓶","img/ping1.jpg"],["益智早教","img/yizhizaojiao.jpg"],["奶粉","img/n2.jpg"],["套装","img/taozhuang.jpg"],["哈衣爬服","img/hayipafu.jpg"],["童鞋爆款","img/x3.jpg"],["鞋包配饰","img/1.jpg"],["服装","img/2.jpg"],["床品","img/3.jpg"],["护肤","img/4.jpg"]]
		},
		{
			id:1,
			xinxi:[["套装1","img/taozhuang.jpg"],["套装2","img/taozhuang.jpg"],["套装3","img/taozhuang.jpg"],["套装4","img/taozhuang.jpg"],["套装5","img/taozhuang.jpg"],["套装6","img/taozhuang.jpg"],["套装7","img/taozhuang.jpg"],["套装8","img/taozhuang.jpg"],["套装9","img/taozhuang.jpg"],["套装10","img/taozhuang.jpg"],["套装11","img/taozhuang.jpg"],["套装12","img/taozhuang.jpg"]]
		},
		{
			id:2,
			xinxi:[["婴儿装","img/e1.jpg"],["婴儿装","img/e2.jpg"],["婴儿装","img/e3.jpg"],["婴儿装","img/e4.jpg"],["婴儿装","img/e5.jpg"],["婴儿装","img/e6.jpg"],["婴儿装","img/e7.jpg"],["婴儿装","img/e8.jpg"],["婴儿装","img/e9.jpg"]]
		},
		{
			id:3,
			xinxi:[["童鞋","img/x1.jpg"],["童鞋","img/x2.jpg"],["童鞋","img/x3.jpg"],["童鞋","img/x4.jpg"],["童鞋","img/x5.jpg"],["童鞋","img/x6.jpg"],["童鞋","img/x7.jpg"],["童鞋","img/x8.jpg"]]
		},
		{
			id:4,
			xinxi:[["奶粉","img/n1.jpg"],["奶粉","img/n2.jpg"],["奶粉","img/n3.jpg"],["奶粉","img/n4.jpg"],["奶粉","img/n5.jpg"],["奶粉","img/n6.jpg"],["奶粉","img/n1.jpg"],["奶粉","img/n2.jpg"],["奶粉","img/n3.jpg"],["奶粉","img/n4.jpg"],["奶粉","img/n5.jpg"],["奶粉","img/n6.jpg"],["奶粉","img/n4.jpg"],["奶粉","img/n5.jpg"],["奶粉","img/n6.jpg"]]
		},
		{
			id:5,
			xinxi:[["纸尿裤","img/z1.jpg"],["纸尿裤","img/z2.jpg"],["纸尿裤","img/z3.jpg"],["纸尿裤","img/z4.jpg"],["纸尿裤","img/z5.jpg"],["纸尿裤","img/z6.jpg"],["纸尿裤","img/z7.jpg"],["纸尿裤","img/z1.jpg"],["纸尿裤","img/z2.jpg"],["纸尿裤","img/z3.jpg"],["纸尿裤","img/z4.jpg"],["纸尿裤","img/z5.jpg"],["纸尿裤","img/z6.jpg"],["纸尿裤","img/z7.jpg"],["纸尿裤","img/z4.jpg"],["纸尿裤","img/z5.jpg"],["纸尿裤","img/z6.jpg"],["纸尿裤","img/z7.jpg"]]
		},
		{
			id:6,
			xinxi:[["哺育喂养","img/by1.jpg"],["哺育喂养","img/by2.jpg"],["哺育喂养","img/by3.jpg"],["哺育喂养","img/by4.jpg"],["哺育喂养","img/by5.jpg"],["哺育喂养","img/by6.jpg"],["哺育喂养","img/by7.jpg"],["哺育喂养","img/by8.jpg"]]
		},
		{
			id:7,
			xinxi:[["洗护清洁","img/xh1.jpg"],["洗护清洁","img/xh2.jpg"],["洗护清洁","img/xh3.jpg"],["洗护清洁","img/xh4.jpg"],["洗护清洁","img/xh5.jpg"],["洗护清洁","img/xh6.jpg"],["洗护清洁","img/xh7.jpg"],["洗护清洁","img/xh8.jpg"],["洗护清洁","img/xh9.jpg"],["洗护清洁","img/xh10.jpg"],["洗护清洁","img/xh11.jpg"],["洗护清洁","img/xh12.jpg"]]
		},
		{
			id:8,
			xinxi:[["睡眠出行","img/xm1.jpg"],["睡眠出行","img/xm2.jpg"],["睡眠出行","img/xm3.jpg"],["睡眠出行","img/xm4.jpg"],["睡眠出行","img/xm5.jpg"],["睡眠出行","img/xm6.jpg"],["睡眠出行","img/xm8.jpg"],["睡眠出行","img/xm8.jpg"]]
		},
		{
			id:9,
			xinxi:[["玩具文体","img/wj1.jpg"],["玩具文体","img/wj2.jpg"],["玩具文体","img/wj3.jpg"],["玩具文体","img/wj4.jpg"],["玩具文体","img/wj5.jpg"],["玩具文体","img/wj6.jpg"],["玩具文体","img/wj7.jpg"],["玩具文体","img/wj8.jpg"],["玩具文体","img/wj9.jpg"],["玩具文体","img/wj1.jpg"],["玩具文体","img/wj2.jpg"],["玩具文体","img/wj3.jpg"],["玩具文体","img/wj4.jpg"]]
		},
		{
			id:10,
			xinxi:[["孕妈专区","img/ym1.jpg"],["孕妈专区","img/ym2.jpg"],["孕妈专区","img/ym3.jpg"],["孕妈专区","img/ym4.jpg"],["孕妈专区","img/ym5.jpg"],["孕妈专区","img/ym6.jpg"],["孕妈专区","img/ym7.jpg"],["孕妈专区","img/ym8.jpg"],["孕妈专区","img/ym9.jpg"],["孕妈专区","img/ym10.jpg"],["孕妈专区","img/ym11.jpg"],["孕妈专区","img/ym12.jpg"]]
		},
		{
			id:11,
			xinxi:[["流行服饰","img/lx1.jpg"],["流行服饰","img/lx2.jpg"],["流行服饰","img/lx3.jpg"],["流行服饰","img/lx4.jpg"],["流行服饰","img/lx5.jpg"],["流行服饰","img/lx6.jpg"],["流行服饰","img/lx7.jpg"],["流行服饰","img/lx8.jpg"],["流行服饰","img/lx1.jpg"],["流行服饰","img/lx2.jpg"],["流行服饰","img/lx3.jpg"],["流行服饰","img/lx4.jpg"],["流行服饰","img/lx5.jpg"],["流行服饰","img/lx6.jpg"]]
		},
		{
			id:11,
			xinxi:[["鞋包配饰","img/xb1.jpg"],["鞋包配饰","img/xb2.jpg"],["鞋包配饰","img/xb3.jpg"],["鞋包配饰","img/xb4.jpg"],["鞋包配饰","img/xb5.jpg"],["鞋包配饰","img/xb6.jpg"],["鞋包配饰","img/xb7.jpg"],["鞋包配饰","img/xb8.jpg"],["鞋包配饰","img/xb9.jpg"],["鞋包配饰","img/xb10.jpg"],["鞋包配饰","img/xb11.jpg"],["鞋包配饰","img/xb12.jpg"],["鞋包配饰","img/xb13.jpg"],["鞋包配饰","img/xb14.jpg"],["鞋包配饰","img/xb15.jpg"],["鞋包配饰","img/xb1.jpg"],["鞋包配饰","img/xb2.jpg"],["鞋包配饰","img/xb3.jpg"],["鞋包配饰","img/xb4.jpg"],["鞋包配饰","img/xb5.jpg"],["鞋包配饰","img/xb6.jpg"],["鞋包配饰","img/xb7.jpg"],["鞋包配饰","img/xb8.jpg"],["鞋包配饰","img/xb9.jpg"]]
		},
		{
			id:12,
			xinxi:[["居家百货","img/jj1.jpg"],["居家百货","img/jj2.jpg"],["居家百货","img/jj3.jpg"],["居家百货","img/jj4.jpg"],["居家百货","img/jj5.jpg"],["居家百货","img/jj6.jpg"],["居家百货","img/jj7.jpg"],["居家百货","img/jj8.jpg"]]
		},
		{
			id:13,
			xinxi:[["美妆个户","img/mz1.jpg"],["美妆个户","img/mz2.jpg"],["美妆个户","img/mz3.jpg"],["美妆个户","img/mz4.jpg"],["美妆个户","img/mz5.jpg"],["美妆个户","img/mz6.jpg"],["美妆个户","img/mz7.jpg"],["美妆个户","img/mz8.jpg"],["美妆个户","img/mz9.jpg"],["美妆个户","img/mz1.jpg"],["美妆个户","img/mz2.jpg"],["美妆个户","img/mz3.jpg"]]
		}
		
	]
	
	
	//默认显示“热销分类”的信息
	var str = "";
	for(var j = 0; j < data[0].xinxi.length; j++){
		str += `<a href="#">
					<dl>
						<dt><img src="${data[0].xinxi[j][1]}"/></dt>
						<dd>${data[0].xinxi[j][0]}</dd>
					</dl>
				</a>`;
	}
	$(".feilei").html(str);
	
	
	
	var arr = [];
	for(var i = 0; i < data.length; i++) {
		var _i = i;
		var str = "";
		for(var j = 0; j < data[i].xinxi.length; j++){
			str += `<a href="#">
						<dl>
							<dt><img src="${data[_i].xinxi[j][1]}"/></dt>
							<dd>${data[_i].xinxi[j][0]}</dd>
						</dl>
					</a>`;
			
		}
		arr.push(str);
		//console.log(arr[i]);
	}
	
		
	
	$(".list-level li").each(function(){
		var index = $(this).index();
		
		$(".list-level li").eq(index).mouseover(function(){
			//console.log(index);
			
			var $fenlei = $(".feilei");
			for(var i = 0; i < arr.length; i++){
				var _i = i;
				if(index == _i){
					
					$fenlei.html(arr[index]);
				
				}
				
			}
			$(".feilei").show();
		})
		
	})
	
	
	
	
	
	
})
