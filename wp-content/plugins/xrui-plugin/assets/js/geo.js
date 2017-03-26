function locationError(error){
    switch(error.code) {
	   case error.TIMEOUT:
		   alert("A timeout occured! Please try again!连接超时，请重试 ");
		   break;
	   case error.POSITION_UNAVAILABLE:
		   alert('We can\'t detect your location. Sorry! 非常抱歉，我们暂时无法为您提供位置服务');
		   break;
	   case error.PERMISSION_DENIED:
		   alert('Please allow geolocation access for this to work.您拒绝了使用位置共享服务，查询已取消');
		   break;
	   case error.UNKNOWN_ERROR:
		   alert('An unknown error occured!');
		   break;
    }
}

function translatePoint(position) {
	var currentLat = position.coords.latitude;
	var currentLon = position.coords.longitude;
	var gpsPoint = new BMap.Point(currentLon, currentLat);
	BMap.Convertor.translate(gpsPoint, 0, getAddress); //转换坐标
}

function getAddress(point) {
 	data = {};
	data.lat = point.lat;
	data.lng = point.lng;
	data.p = 5;
 
	
	$.ajax( {
		url:  ajaxurl,
		type: 'post',
		data: {
			action: 'sp_get_address',
			lat : point.lat,
			lng : point.lng,
			p : 5 
		},
		dataType: "json",
		success: function (result) {
			var res = result['result'];
			if (result['status'] == 'fail') {
				$.alert(res);
				return false;
			}
			res = res['addressComponent'];
			sessionStorage.city = res.city;
			//sessionStorage.city = res.city;
		}
	} );		
}
 
$(function() {  
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			translatePoint, 
			locationError,
			{
				// 指示浏览器获取高精度的位置，默认为false
				enableHighAccuracy: true,
				// 指定获取地理位置的超时时间，默认不限时，单位为毫秒
				//timeout: 5000,
				// 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
				//maximumAge: 3000
			}
		);
	} else {
		alert("浏览器不支持html5来获取地理位置信息");
	}
});  