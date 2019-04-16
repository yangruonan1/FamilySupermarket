var oList = document.getElementsByClassName("list")[0];
function jsonp(data){
	//console.log(data);
	var data1 = data.result;
	console.log(data1);
	var str = "";
	for(var i = 0; i < data1.length; i++){
		
		str += "<li><a href = 'https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q="+data1[i][0]+"'>"+data1[i][0]+"<span>约有"+data1[i][1]+"件</span></a></li>";
		
	}
	oList.innerHTML = str;
	
}



$(function(){
	
	$(".search-input").on("input propertychange", function() {

		//console.log($(".search-input").val())
		
		var oScript = document.createElement("script");
		oScript.src = "https://suggest.taobao.com/sug?code=utf-8&q="+$(".search-input").val()+"&_ksTS=1548333639860_285&callback=jsonp&k=1&area=c2c&bucketid=11";

		//cb=aa,是指需要有一个aa()方法，来接收数据
		document.body.appendChild(oScript);
		
	});
	
	
	
	
	
})
