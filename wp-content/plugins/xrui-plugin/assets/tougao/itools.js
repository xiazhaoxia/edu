/*
	 *  token = 3fdFD0$4a26@49d8
		+ api接口方法名 + \n
		+ 时间戳（自1970.1.1以来的秒数） + \n
		+ 按参数名字典序排列后的参数值列表（每个参数用\n分隔）
		+ A684^bF4b(8DBe4* 
	 */

function timestamp(sends) {
	var a = new Date(new Date().toLocaleDateString() + ' 00:00:00').getTime();
	return a + send;
}
//JS / formatDate.js //实现GMT转换成.当前系统区域设置格式
function DateUtil() {}
/**  
 *功能:格式化时间  
 *示例:DateUtil.Format("yyyy/MM/dd","Thu Nov 9 20:30:37 UTC+0800 2006 ");  
 *返回:2006/11/09  
 */
DateUtil.Format = function(fmtCode, date) {
	var result, d, arr_d;

	var patrn_now_1 = /^y{4}-M{2}-d{2}\sh{2}:m{2}:s{2}$/;
	var patrn_now_11 = /^y{4}-M{1,2}-d{1,2}\sh{1,2}:m{1,2}:s{1,2}$/;

	var patrn_now_2 = /^y{4}\/M{2}\/d{2}\sh{2}:m{2}:s{2}$/;
	var patrn_now_22 = /^y{4}\/M{1,2}\/d{1,2}\sh{1,2}:m{1,2}:s{1,2}$/;

	var patrn_now_3 = /^y{4}年M{2}月d{2}日\sh{2}时m{2}分s{2}秒$/;
	var patrn_now_33 = /^y{4}年M{1,2}月d{1,2}日\sh{1,2}时m{1,2}分s{1,2}秒$/;

	var patrn_date_1 = /^y{4}-M{2}-d{2}$/;
	var patrn_date_11 = /^y{4}-M{1,2}-d{1,2}$/;

	var patrn_date_2 = /^y{4}\/M{2}\/d{2}$/;
	var patrn_date_22 = /^y{4}\/M{1,2}\/d{1,2}$/;

	var patrn_date_3 = /^y{4}年M{2}月d{2}日$/;
	var patrn_date_33 = /^y{4}年M{1,2}月d{1,2}日$/;

	var patrn_time_1 = /^h{2}:m{2}:s{2}$/;
	var patrn_time_11 = /^h{1,2}:m{1,2}:s{1,2}$/;
	var patrn_time_2 = /^h{2}时m{2}分s{2}秒$/;
	var patrn_time_22 = /^h{1,2}时m{1,2}分s{1,2}秒$/;

	if(!fmtCode) {
		fmtCode = "yyyy/MM/dd hh:mm:ss";
	}
	if(date) {
		d = new Date(date);
		if(isNaN(d)) {
			msgBox("时间参数非法\n正确的时间示例:\nThu Nov 9 20:30:37 UTC+0800 2006\n或\n2006/      10/17");
			return;
		}
	} else {
		d = new Date();
	}

	if(patrn_now_1.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.yyyy + "-" + arr_d.MM + "-" + arr_d.dd + " " + arr_d.hh + ":" + arr_d.mm + ":" + arr_d.ss;
	} else if(patrn_now_11.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.yyyy + "-" + arr_d.MM + "-" + arr_d.dd + " " + arr_d.hh + ":" + arr_d.mm + ":" + arr_d.ss;
	} else if(patrn_now_2.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.yyyy + "/" + arr_d.MM + "/" + arr_d.dd + " " + arr_d.hh + ":" + arr_d.mm + ":" + arr_d.ss;
	} else if(patrn_now_22.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.yyyy + "/" + arr_d.MM + "/" + arr_d.dd + " " + arr_d.hh + ":" + arr_d.mm + ":" + arr_d.ss;
	} else if(patrn_now_3.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.yyyy + "年" + arr_d.MM + "月" + arr_d.dd + "日" + " " + arr_d.hh + "时" + arr_d.mm + "分" + arr_d.ss + "秒";
	} else if(patrn_now_33.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.yyyy + "年" + arr_d.MM + "月" + arr_d.dd + "日" + " " + arr_d.hh + "时" + arr_d.mm + "分" + arr_d.ss + "秒";
	} else if(patrn_date_1.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.yyyy + "-" + arr_d.MM + "-" + arr_d.dd;
	} else if(patrn_date_11.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.yyyy + "-" + arr_d.MM + "-" + arr_d.dd;
	} else if(patrn_date_2.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.yyyy + "/" + arr_d.MM + "/" + arr_d.dd;
	} else if(patrn_date_22.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.yyyy + "/" + arr_d.MM + "/" + arr_d.dd;
	} else if(patrn_date_3.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.yyyy + "年" + arr_d.MM + "月" + arr_d.dd + "日";
	} else if(patrn_date_33.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.yyyy + "年" + arr_d.MM + "月" + arr_d.dd + "日";
	} else if(patrn_time_1.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.hh + ":" + arr_d.mm + ":" + arr_d.ss;
	} else if(patrn_time_11.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.hh + ":" + arr_d.mm + ":" + arr_d.ss;
	} else if(patrn_time_2.test(fmtCode)) {
		arr_d = splitDate(d, true);
		result = arr_d.hh + "时" + arr_d.mm + "分" + arr_d.ss + "秒";
	} else if(patrn_time_22.test(fmtCode)) {
		arr_d = splitDate(d);
		result = arr_d.hh + "时" + arr_d.mm + "分" + arr_d.ss + "秒";
	} else {
		msgBox("没有匹配的时间格式!");
		return;
	}

	return result;
};

function splitDate(d, isZero) {
	var yyyy, MM, dd, hh, mm, ss;
	if(isZero) {
		yyyy = d.getYear();
		MM = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
		dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
		hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
		mm = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
		ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
	} else {
		yyyy = d.getYear();
		MM = d.getMonth() + 1;
		dd = d.getDate();
		hh = d.getHours();
		mm = d.getMinutes();
		ss = d.getSeconds();
	}
	return {
		"yyyy": yyyy,
		"MM": MM,
		"dd": dd,
		"hh": hh,
		"mm": mm,
		"ss": ss
	};
}
/**
 * 数组快速排序
 * @param  {[Array]} arr [数组对象]
 * @return {[Array]} newArr [新排列的数组对象]
 */
function quickSort(arr) {
	if(arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
};

function compare(a, b) {
	return a.orderby - b.orderby;
};

function listCompare(x, y) {
	return(x.create_time < y.create_time) ? 1 : -1
};
//时间戳转日期时间
function getDate(time) {
	var UnixTime = time * 1000;
	var dateObj = new Date(UnixTime);
	var UnixTimeToDate = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1) + '-' + dateObj.getUTCDate(); //+ '-' + dateObj.getUTCHours() + ':' + dateObj.getUTCMinutes() + ':' + dateObj.getUTCSeconds()
	return UnixTimeToDate;
}

//日期时间转时间戳
function getUnixTime() {
	var year = parseInt($('#year').val());
	var month = parseInt($('#month').val());
	var day = parseInt($('#day').val());
	var hour = parseInt($('#hour').val());
	var minute = parseInt($('#minute').val());
	var second = parseInt($('#second').val());
	var now = new Date(new Date().getTime() + 28800000); //东8区时间偏移量为28800000毫秒
	if(isNaN(year)) {
		year = now.getUTCFullYear();
	}
	if(isNaN(month)) {
		month = now.getUTCMonth();
	} else {
		month--;
	}
	if(isNaN(day)) {
		day = now.getUTCDate();
	}
	if(isNaN(hour)) {
		hour = now.getUTCHours();
	}
	if(isNaN(minute)) {
		minute = now.getUTCMinutes();
	}
	if(isNaN(second)) {
		second = now.getUTCSeconds();
	}
	var UnixTime = new Date(Date.UTC(year, month, day, hour, minute, second));
	$('#DateToUnixTime').text(UnixTime / 1000);
	$('#year').val(year);
	$('#month').val(month + 1);
	$('#day').val(day);
	$('#hour').val(hour);
	$('#minute').val(minute);
	$('#second').val(second);
}

//当前时间
setInterval("clock()", 50);

function clock() {
	var UnixTime = new Date().getTime();
	var now = new Date(UnixTime + 28800000);
	$('#now').text(now.getUTCFullYear() + ' 年 ' + now.getUTCMonth() + ' 月 ' + now.getUTCDate() + ' 日 ' + now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds());
	$('#nowUnix').text(parseInt(UnixTime / 1000));
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

//复制当前时间戳
function copyUnixTime() {
	$('#UnixTime').val($('#nowUnix').text());
}

function isNull(str) {
	if(str == "") return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}

function msgBox(msg) {
	console.log(msg);
}

function isUrl(url) {
	url = url.toLowerCase();
	var urlChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~!*'();:@&=+$,/?#[";
	var xurl = url.split("");
	for(var i = 0; i < url.length; i++) {
		if(urlChar.indexOf(xurl[i]) < 0) {
			return false;
		}
	}
	var strRegex = '(([a-zA-Z0-9\\._-]+\\.[a-zA-Z]{2,6})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,4})*(/[a-zA-Z0-9\\&%_\\./-~-]*)?';
	var re = new RegExp(strRegex);
	//re.test() 
	if(re.test(url)) {
		return(true);
	} else {
		return(false);
	}
};

function getThemeNum(num) {
	var digits = num.toString();
	var newNum = num.toString();
	if(digits.length == 1) {
		newNum = "00" + newNum
	} else if(digits.length == 2) {
		newNum = "0" + newNum
	} else {
		newNum = num.toString();
	}
	return newNum;
};

function checkBrowser1() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;
	if(isOpera) {
		return "Opera"
	}; //判断是否Opera浏览器
	if((userAgent.indexOf("Firefox") > -1 || userAgent.indexOf("Mozilla") > -1) && (userAgent.indexOf("Gecko") < 0)) {
		return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
		return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
		return "Safari";
	} //判断是否Safari浏览器
	if((userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) || (userAgent.indexOf("Gecko") > -1)) {
		return "IE";
	}; //判断是否IE浏览器
};

function testIE() {
	if(checkBrowser1() == "IE") {
		var items = {};
		if(document.queryCommandState('bold')) {
			items.bold = true;
		}
		if(document.queryCommandState('italic')) {
			items.italic = true;
		}
		if(document.queryCommandState('underline')) {
			items.underline = true;
		}
		return items;
	}
	return false;
}

function isNumber(val) {
	if(!isNaN(val) && val != '') {
		return true;
	} else {
		return false;
	}
}
String.prototype.gblen = function() {
	var len = 0;
	for(var i = 0; i < this.length; i++) {
		if(this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
			len += 2;
		} else {
			len++;
		}
	}
	return len;
}

String.prototype.gblenSubstr = function(len) {
	var char_length = 0;
	for(var i = 0; i < this.length; i++) {
		var son_str = this.charCodeAt(i);
		son_str > 127 || son_str == 94 > 2 ? char_length += 2 : char_length += 1;
		if(char_length >= len) {
			var sub_len = char_length == len ? i + 1 : i;
			return this.substr(0, sub_len);
		}
	}
}

function decodeContent(str) {
	//	while(str.indexOf("[br]")>=0){
	//		str = str.replace("[br]","<br>")
	//	}
	//	for(var i = 0; i < prefixs1.length; i++) {
	//		var preReg = prefixs[i];
	//		var preReg1 = prefixs1[i];
	//		var sufReg = suffixs[i];
	//		var sufReg1 = suffixs1[i];
	//		while(str.indexOf(preReg1) >= 0 && preReg1 != "") {
	//			var str1 = str.substring(0, str.indexOf(preReg1)) || "";
	//			var str2 = str.substring(str.indexOf(preReg1));
	//			var str4 = str2.substring(str2.indexOf(sufReg1) + sufReg1.length);
	//			var str3 = str2.substring(0, str2.indexOf(sufReg1) + sufReg1.length);
	//			str3 = str3.replace(preReg1, preReg);
	//			str3 = str3.replace(sufReg1, sufReg);
	//			str = str1 + str3 + str4;
	//		}
	//	}
	if(checkBrowser() == "FF" || checkBrowser() == "IE") {
		console.log(checkBrowser());
		while(str.indexOf('style="text-align: right;"') >= 0) {
			str = str.replace('style="text-align: right;"', 'align="right"')
		}
		while(str.indexOf('style="text-align: center;"') >= 0) {
			str = str.replace('style="text-align: center;"', 'align="center"')
		}
		while(str.indexOf('style="text-align: left;"') >= 0) {
			str = str.replace('style="text-align: left;"', 'align="left"')
		}
	}
	return str;
}

function encodeContent(str) {
	//	while(str.indexOf("<br>")>=0){
	//		str = str.replace("<br>","[br]")
	//	}
	//	str.find("*").each(function(index,ele){
	//		console.log($(ele));
	//		if($(ele).html() == "" ){
	//			$(ele).remove();
	//		}
	//	});
	str.find("i").removeAttr("style").removeAttr("lang").removeAttr("size");
	str.find("b").removeAttr("style").removeAttr("lang").removeAttr("size");
	str.find("u").removeAttr("style").removeAttr("lang").removeAttr("size");
	str.find("span").removeAttr("style").removeAttr("lang").removeAttr("size");
	str = str.html();
	str = str.replace(/(\n)/g,"");
	while(str.indexOf("letter-spacing: 0.02rem;") >= 0) {
		str = str.replace(" letter-spacing: 0.02rem;", "");
		str = str.replace("letter-spacing: 0.02rem; ", "");
		str = str.replace("letter-spacing: 0.02rem;", "");
	}
	while(str.indexOf("font-size: 16px;") >= 0) {
		str = str.replace(" font-size: 16px;", "");
		str = str.replace("font-size: 16px; ", "");
		str = str.replace("font-size: 16px;", "");
	}
	while(str.indexOf("box-sizing: border-box;") >= 0) {
		str = str.replace(" box-sizing: border-box;", "");
		str = str.replace("box-sizing: border-box; ", "");
		str = str.replace("box-sizing: border-box;", "");
	}
	while(str.indexOf("overflow: hidden;") >= 0) {
		str = str.replace(" overflow: hidden;", "");
		str = str.replace("overflow: hidden; ", "");
		str = str.replace("overflow: hidden;", "");
	}
	while(str.indexOf("background: rgb(231, 232, 235);") >= 0) {
		str = str.replace(" background: rgb(231, 232, 235);", "");
		str = str.replace("background: rgb(231, 232, 235); ", "");
		str = str.replace("background: rgb(231, 232, 235);", "");
	}
	while(str.indexOf("<strong>") >= 0) {
		str = str.replace("<strong>", "<b>");
	}
	while(str.indexOf("</strong>") >= 0) {
		str = str.replace("</strong>", "</b>");
	}
	while(str.indexOf("<em>") >= 0) {
		str = str.replace("<em>", "<i>");
	}
	while(str.indexOf("</em>") >= 0) {
		str = str.replace("</em>", "</i>");
	}
	while(str.indexOf("<span>") >= 0) {
		str = str.replace("<span>", "");
	}
	while(str.indexOf("</span>") >= 0) {
		str = str.replace("</span>", "");
	}
	while(str.indexOf(" style=\"\"") >= 0) {
		str = str.replace(" style=\"\"", "");
	}
	while(str.indexOf(" style=\" \"") >= 0) {
		str = str.replace(" style=\" \"", "");
	}
	while(str.indexOf('<div align="center">') >= 0) {
		str = str.replace('<div align="center">', '<div style="text-align: center;">');
	}
	while(str.indexOf('<div align="left">') >= 0) {
		str = str.replace('<div align="left">', '<div style="text-align: left;">');
	}
	while(str.indexOf('<div align="right">') >= 0) {
		str = str.replace('<div align="right">', '<div style="text-align: right;">');
	}

	return str;
}