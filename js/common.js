
//cookie封装
function getCookie(name) { //查询cookie
	var cookies = document.cookie;
	var arr = cookies.split("; "); //以"; " 分割，存入数组
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] == name) {
			return newArr[1];
		}
		//return "";
	}
}

function setCookie(name, val, n) { //修改cookie
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + val + "; expires=" + oDate;
}

function removeCookie(name) { //删除cookie
	setCookie(name, 1, -1);
}