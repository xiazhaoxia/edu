var sum = 0;
var noUpload = true;
var uploadDomian = "static2.ivwen.com";
jQuery( document ).ready( function ( $ ) {
	var uploader1 = new plupload.Uploader({
		runtimes: 'html5,flash,html4',
		browse_button: 'change',
		container: 'content-img',
		multi_selection: false,
		max_file_size : '10mb',
		
		url: ajaxurl,
		resize: {
		  width: 400,
		  height: 400,
		  crop: false,
		  quality: 90,
		  preserve_headers: true
		},			
		multipart: true,
		multipart_params: {
			action: 'meipian_save_post_photos',
			'cookie': encodeURIComponent( document.cookie ) 
		},

		flash_swf_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/flash/Moxie.cdn.swf',
		silverlight_xap_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/silverlight/Moxie.cdn.xap',
		filters: {
			mime_types: [
			{
				title: "Image files",
				extensions: "jpg,jpeg,gif"
			}],
			// max_file_size: '5mb',
			prevent_duplicates: false
		},

		init: {
			FilesAdded: function(up, files) {
//				console.log($(".mp-item.sel").is(".img"));
				console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				if(files.length <= Meipian.maxImgLength()||$(".mp-item.sel").is(".img")) 
				{
					// plupload.each(files, function(file) {
						// var old_name = file.name;
						// var new_name = old_name.split('.');
						// file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
						// // file.type = "image/jpeg";
// //						console.log('文件名:' + file.name);
					// });

					$("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
					up.start();
				}
				else {
					noUpload = false;
					Meipian.alertMessage('您最多上传100张图');
					up.files.splice(up.files[0].id, (up.files).length);
					up.stop();
				}
			},
			UploadProgress: function(up, file) {
//				console.log(file);
			},
			FileUploaded: function(up, file, info) {
				// 每个文件上传成功后,处理相关的事情
				// 其中 info 是文件上传成功后，服务端返回的json，形式如
				// {
				//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
				//    "key": "gogopher.jpg"
				//  }
				// 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
				//var domain = up.getOption('domain');
				var responseJSON = $.parseJSON( info.response );
                //console.log( responseJSON );
                //_l.$hidden_field.val( responseJSON.attachment_id );
                //_l.$image.attr( 'src', responseJSON.url ).show();
					
				//var res = JSON.parse(info);
				//var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				//sourceLink = sourceLink.toLocaleLowerCase();
//				console.log('文件地址:' + sourceLink);

				var $this = $('#add-pic');
				var orderby = $this.parents('#work-text').attr('orderby');
				$this.parents('#work-text').hide().siblings('#work-img').show();
				$("#work-img").find('.textarea').html($('.mp-item.sel').find('p').html());
				var $work_img = $("#work-img").attr('orderby', orderby).find('.pvw').removeAttr('style');
				$('.mp-item.sel').removeClass('text').addClass('img');

				$('#content-img .pvw').attr('src', responseJSON.url);

				var order = $('#work-img').attr('orderby');
				
				var src = $(".mp-item[data-orderby='" + order + "']").find(".left").attr("data-src");
				if(src == $(".essay-header").attr("data-src")){
					$(".essay-header").attr("data-src",responseJSON.url);
					$(".essay-header").css({'background-image': 'url("' + responseJSON.url + '")'})
				}
				
				$(".mp-item[data-orderby='" + order + "'] .left").css({
					'background-image': 'url("' + responseJSON.url + '")',
					color: "#fff"
				}).attr('data-src', responseJSON.url);
//				console.log($(".mp-item[data-orderby='" + order + "']"));
			},
			UploadComplete: function(file) {
				$('#alert').remove();
//				Meipian.eachSectionIsCover(true);
				console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			},
			Error: function(up, err) {
//				console.error("\nError #" + err.code + ": " + err.message);
				$('#alert').remove();
//				Meipian.alertMessage("上传图片失败，请重新上传！");
			}
		}
	});

	uploader1.init();
	
	var uploader2 = new plupload.Uploader({
		runtimes: 'html5,flash,html4',
		browse_button: 'add-img',
		container: 'editoer-tools',
		
		max_file_size : '10mb',
		
		url: ajaxurl,
		resize: {
		  width: 400,
		  height: 400,
		  crop: false,
		  quality: 90,
		  preserve_headers: true
		},		
		
		multipart: true,
		multipart_params: {
			action: 'meipian_save_multi_photos',
			'cookie': encodeURIComponent( document.cookie ) 
		},

		flash_swf_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/flash/Moxie.cdn.swf',
		silverlight_xap_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/silverlight/Moxie.cdn.xap',
		filters: {
			mime_types: [
			{
				title: "Image files",
				extensions: "jpg,jpeg,gif"
			}],
			// max_file_size: '5mb',
			prevent_duplicates: false
		},

		init: {
			PostInit: function() {},
			FilesAdded: function(up, files) {
//				console.log('shangchuan .....');
				console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				var itemNum = $('.mp-item').not('.demo').length;
				orderpload = uploader2.files.length;
				if(itemNum + files.length <= 150) {
					if(noUpload) {
						uploader2.stop();
					}
					noUpload = true;
					if(files.length <= Meipian.maxImgLength()) {
						plupload.each(files, function(file) {
							var old_name = file.name;
							var new_name = old_name.split('.');
							file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
							// console.log('文件名:' + file.name);
						});
						$("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
					} else {
						Meipian.alertMessage('最多上传100张图！');
						uploader2.splice(uploader2.files[0].id, (uploader2.files).length);
						noUpload = false;
					}
				} else {
					Meipian.alertMessage('段落不可以超过150！');
					noUpload = false;
				}
			},
			UploadProgress: function(up, file) {},
			FileUploaded: function(up, file, info) {
				// console.log(1);
				// if (noUpload) {
				//     var domain = up.getOption('domain');
				//     var res = JSON.parse(info);
				//     var order = parseInt(Meipian.maxOrderby()) + 1;
				//     var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				//     console.log(domain);
				//     // console.log('文件地址:' + sourceLink);
				//     //			$('.add-section').hide();
				//     var $item = $('.mp-item.demo').clone();
				//     var selOrderby = parseInt($('.mp-item.sel').attr('data-orderby'));
				//     console.log(selOrderby)
				//     Meipian.afterOrderby(selOrderby); //获取当前 orderby 值小的 DOM
				//     //创建 DOM
				//     $('.mp-item').last().after($item.removeClass('demo').addClass('img').attr('data-orderby', selOrderby + 1));
				//     // console.log($(".mp-item[data-orderby='" + (selOrderby + 1) + "'] .left"));
				//     //设置上传的 DOM 数据绑定
				//     $(".mp-item[data-orderby='" + (selOrderby + 1) + "'] .left").css({
				//         'background-image': 'url("http://' + sourceLink + '")',
				//         color: "#fff"
				//     }).attr('data-src', "http://" + sourceLink);
				//     //重置定位排序
				//     Meipian.orderbyPosition();
				//     //添加按钮
				//     Meipian.nextItem(selOrderby, function($nThis) {
				//         $nThis.css('top', $nThis.position().top + 30);
				//     });
				//     Meipian.sectionHeight();
				// } else {
				//     uploader2.stop();
				// }
			},
			UploadComplete: function(up, files) {
//				console.log(up);
//				console.log(files);
				if(noUpload && files != "undefined") {
					var arrFiles = files;
					// console.log(files.files);
					var selOrderby = parseInt($('.mp-item.sel').attr('data-orderby'));
					for(var i = 0; i < arrFiles.length; i++) {
						Meipian.nextItem(selOrderby, function($nThis) {
							$nThis.attr("data-orderby", parseInt($nThis.attr("data-orderby")) + 1)
						});
						var $item = $('.mp-item.demo').clone();
						var sourceLink = uploadDomian + "/" + arrFiles[i].name;
						sourceLink = sourceLink.toLocaleLowerCase();
						$('.mp-item').eq(selOrderby).after($item.removeClass('demo').addClass('img').attr('data-orderby', selOrderby + 1));
						$(".mp-item[data-orderby='" + (selOrderby + 1) + "'] .left").css({
							'background-image': 'url("http://' + sourceLink + '")',
							color: "#fff"
						}).attr('data-src', "http://" + sourceLink);
						selOrderby++;
						//重置定位排序
						Meipian.orderbyPosition();
						//添加按钮
					}

					Meipian.nextItem(parseInt($('.mp-item.sel').attr('data-orderby')), function($nThis) {
						$nThis.css('top', $nThis.position().top + 30);
					});
					//                      Meipian.afterOrderby(selOrderby);
					$('#alert').remove();
					uploader2.files.splice(uploader2.files[0].id, (uploader2.files).length);
					scrollBar();
					var oldtop = parseInt($(".mp-section").css("top"));
					mouseScroll(oldtop);
				} else {
					uploader2.stop();
				}
				console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			},
			//			Meipian.updateData();
			Error: function(up, err) {
				console.error("\nError #" + err.code + ": " + err.message);
				$('#alert').remove();
				Meipian.alertMessage("上传图片失败，请重新上传！");
			}

		}
	});

	uploader2.init();

	var uploader3 = new plupload.Uploader({
		runtimes: 'html5,flash,html4',
		browse_button: 'add-mp',
		container: 'editoer',
		
		max_file_size : '10mb',
		
		// Fake server response here 
		// url : '../upload.php',
		url: "/echo/json",

		flash_swf_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/flash/Moxie.cdn.swf',
		silverlight_xap_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/silverlight/Moxie.cdn.xap',
		filters: {
			mime_types: [
			{
				title: "Image files",
				extensions: "jpg,jpeg,gif"
			}],
			// max_file_size: '5mb',
			prevent_duplicates: false
		},
		init: {
			PostInit: function() {
				//document.getElementById('filelist').innerHTML = '';

				//          document.getElementById('upload').onclick = function() {
				//              uploader.start();
				//              return false;
				//          };
			},
			UploadFile: function(up, files) {},
			FilesAdded: function(up, files) {
				console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				if(files.length <= Meipian.maxImgLength()) {
					noUpload = true;
					$("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
					plupload.each(files, function(file) {
						var old_name = file.name;
						var new_name = old_name.split('.');
//						console.log(file.name);
						file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
//						console.log('文件名:' + file.name);
					});
				} else {
					noUpload = false;
					Meipian.alertMessage('您最多上传100张图');
					uploader3.files.splice(uploader3.files[0].id, (uploader3.files).length);
					uploader3.stop();
//					console.log(noUpload);
				}
			},
			UploadProgress: function(up, file) {},
			FileUploaded: function(up, file, info) {
//				console.log(noUpload)
				if(noUpload) {
					var domain = up.getOption('domain');
					var res = JSON.parse(info);
					var order = parseInt(Meipian.maxOrderby()) + 1;
					var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
					sourceLink = sourceLink.toLocaleLowerCase();
					console.log('文件地址:' + sourceLink);
				}

			},
			UploadComplete: function(uploader, file) {
//				console.log(noUpload)
				if(noUpload) {
					//队列文件处理完毕后,处理相关的事情
					$('#alert').remove();
					var data = Meipian.firstUpload(access_token, file);
					//			console.log(data)
					Meipian.ajaxApi(data, function(res) {
						if(res.code == 1000) {
							window.location.href = '/edit.php?id=' + res.article_id + "&hasView=" + hasView;
						} else {
							//                              console.error(json.code)
							Meipian.alertMessage(servererror[res.code]);
							//                              Meipian.alertMessage('发布失败');
						}
					})
				};
				console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			},
			Error: function(up, err) {
				console.error("\nError #" + err.code + ": " + err.message);
				$('#alert').remove();
				Meipian.alertMessage("上传图片失败，请重新上传！");
				// document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
			}
		}
	});

	uploader3.init();
	
	var bgImgUploader = new plupload.Uploader({
		runtimes: 'html5,flash,html4',
		browse_button: 'bgImg-choose',
		container: 'content-cover',
		
		max_file_size : '10mb',
		multi_selection: false,
		// Fake server response here 
		// url : '../upload.php',
		url: "/echo/json",

		flash_swf_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/flash/Moxie.cdn.swf',
		silverlight_xap_url : 'http://rawgithub.com/moxiecode/moxie/master/bin/silverlight/Moxie.cdn.xap',
		filters: {
			mime_types: [
			{
				title: "Image files",
				extensions: "jpg,jpeg,gif"
			}],
			// max_file_size: '5mb',
			prevent_duplicates: false
		},
		init: {
			PostInit: function(up, file) {},
			FilesAdded: function(up, files) {
				plupload.each(files, function(file) {
					var old_name = file.name;
					var new_name = old_name.split('.');
					file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
					// console.log('文件名:' + file.name);
				});
				$("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
			},
			UploadProgress: function(up, file) {},
			FileUploaded: function(up, file, info) {
				console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				// 每个文件上传成功后,处理相关的事情
				// 其中 info 是文件上传成功后，服务端返回的json，形式如
				// {
				//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
				//    "key": "gogopher.jpg"
				//  }
				// 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
				var flag = true;
				var domain = up.getOption('domain');
				var res = JSON.parse(info);
				var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				sourceLink = sourceLink.toLocaleLowerCase();
				sourceLink = "http://" + sourceLink;
//				console.log('文件地址:' + sourceLink);
				$('#alert').remove();
				var src = $('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src");
				var bgSrc = $('.essay-header').attr('data-src');
				$(".mp-item.img").each(function(index, ele) {
					if($(ele).find(".fl").attr("data-src") == bgSrc) {
						flag = false;
					}
				});
				if(flag) {
					$('#work-cover .mp-content ul li').eq(0).find("a").css({
						'background-image': 'url("' + sourceLink + '")'
					}).attr('data-src', sourceLink);
				} else {
					$('#work-cover .mp-content ul li').removeClass("sel");
					$('#work-cover .mp-content ul').prepend('<li class="sel"><a href="javascript:void(0);" style="background-image:url(' + sourceLink + ')" onclick="coverSel(this)" data-src="' + sourceLink + '"></a></li>')
				}
				$(".essay-header").css({
					'background-image': 'url("' + sourceLink + '")'
				}).attr('data-src', sourceLink);
				$(".cover").trigger("click");
			},
			UploadComplete: function(file) {
				//              $('#alert').remove();
				//              var src = $('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src");
				//              var bgSrc = $('.essay-header').attr('data-src');
				//              if(src == bgSrc){
				//              		$('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src",src);
				//              }
				//              $('.essay-header').attr('data-src',src).css("backgroud-image",src);
				//              Meipian.eachSectionIsCover(true);
				console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			},
			Error: function(up, err) {
				console.error("\nError #" + err.code + ": " + err.message);
				$('#alert').remove();
				Meipian.alertMessage("上传图片失败，请重新上传！");
			}
		}
	});

	bgImgUploader.init();
	
	// var bgImgUploader = new plupload.Uploader({
		// runtimes: 'html5,flash,html4',
		// browse_button: 'bgImg-choose',
		// container: 'content-cover',
		// flash_swf_url: 'file/Moxie.swf',
		// //chunk_size: '0',
		// multi_selection: false,
		// //uptoken_url: '/token.php', // uptoken 是上传凭证，由其他程序生成
		// //domain: uploadDomian,
		// resize: {
			// width: 1200,
			// height: 2200,
			// quality: 80,
			// preserve_headers: false
		// },
		// filters: {
			// mime_types: [{
				// title: "Image files",
				// extensions: "jpg,jpeg,gif"
			// }],
			// prevent_duplicates: false
		// },
		// //get_new_uptoken: true,
		// //auto_start: true,
		// init: {
			// PostInit: function(up, file) {},
			// FilesAdded: function(up, files) {
				// plupload.each(files, function(file) {
					// var old_name = file.name;
					// var new_name = old_name.split('.');
					// file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
					// // console.log('文件名:' + file.name);
				// });
				// $("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
			// },
			// UploadProgress: function(up, file) {},
			// FileUploaded: function(up, file, info) {
				// console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				// // 每个文件上传成功后,处理相关的事情
				// // 其中 info 是文件上传成功后，服务端返回的json，形式如
				// // {
				// //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
				// //    "key": "gogopher.jpg"
				// //  }
				// // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
				// var flag = true;
				// var domain = up.getOption('domain');
				// var res = JSON.parse(info);
				// var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				// sourceLink = sourceLink.toLocaleLowerCase();
				// sourceLink = "http://" + sourceLink;
// //				console.log('文件地址:' + sourceLink);
				// $('#alert').remove();
				// var src = $('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src");
				// var bgSrc = $('.essay-header').attr('data-src');
				// $(".mp-item.img").each(function(index, ele) {
					// if($(ele).find(".fl").attr("data-src") == bgSrc) {
						// flag = false;
					// }
				// });
				// if(flag) {
					// $('#work-cover .mp-content ul li').eq(0).find("a").css({
						// 'background-image': 'url("' + sourceLink + '")'
					// }).attr('data-src', sourceLink);
				// } else {
					// $('#work-cover .mp-content ul li').removeClass("sel");
					// $('#work-cover .mp-content ul').prepend('<li class="sel"><a href="javascript:void(0);" style="background-image:url(' + sourceLink + ')" onclick="coverSel(this)" data-src="' + sourceLink + '"></a></li>')
				// }
				// $(".essay-header").css({
					// 'background-image': 'url("' + sourceLink + '")'
				// }).attr('data-src', sourceLink);
				// $(".cover").trigger("click");
			// },
			// UploadComplete: function(file) {
				// //              $('#alert').remove();
				// //              var src = $('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src");
				// //              var bgSrc = $('.essay-header').attr('data-src');
				// //              if(src == bgSrc){
				// //              		$('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src",src);
				// //              }
				// //              $('.essay-header').attr('data-src',src).css("backgroud-image",src);
				// //              Meipian.eachSectionIsCover(true);
				// console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			// },
			// Error: function(up, err) {
				// console.error("\nError #" + err.code + ": " + err.message);
				// $('#alert').remove();
				// Meipian.alertMessage("上传图片失败，请重新上传！");
			// }
		// }
	// });
	
	// bgImgUploader.init();	
});

window.onload = function() {
	// var uploader1 = Qiniu.uploader({
		// runtimes: 'html5,flash,html4',
		// browse_button: 'change',
		// container: 'content-img',
		// flash_swf_url: 'file/Moxie.swf',
		// chunk_size: '0',
		// multi_selection: false,
		// uptoken_url: '/token.php', // uptoken 是上传凭证，由其他程序生成
		// domain: uploadDomian,
		// resize: {
			// width: 1200,
			// height: 2200,
			// quality: 80,
			// preserve_headers: false
		// },
		// filters: {
			// mime_types: [{
				// title: "Image files",
				// extensions: "jpg,jpeg,gif"
			// }],
			// // max_file_size: '5mb',
			// prevent_duplicates: false
		// },
		// get_new_uptoken: true,
		// // downtoken_url: '/downtoken',
		// // unique_names: true,
		// // save_key: true,
		// // x_vars: {
		// //     'id': '1234',
		// //     'time': function(up, file) {
		// //         var time = (new Date()).getTime();
		// //         // do something with 'time'
		// //         return time;
		// //     },
		// // },
		// auto_start: true,
		// //log_level: 5,
		// init: {
			// FilesAdded: function(up, files) {
// //				console.log($(".mp-item.sel").is(".img"));
				// console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				// if(files.length <= Meipian.maxImgLength()||$(".mp-item.sel").is(".img")) {
					// plupload.each(files, function(file) {
						// var old_name = file.name;
						// var new_name = old_name.split('.');
						// file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
						// // file.type = "image/jpeg";
// //						console.log('文件名:' + file.name);
					// });

					// $("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
				// } else {
					// noUpload = false;
					// Meipian.alertMessage('您最多上传100张图');
					// uploader1.files.splice(uploader1.files[0].id, (uploader1.files).length);
					// uploader1.stop();
				// }
			// },
			// UploadProgress: function(up, file) {
// //				console.log(file);
			// },
			// FileUploaded: function(up, file, info) {
				// // 每个文件上传成功后,处理相关的事情
				// // 其中 info 是文件上传成功后，服务端返回的json，形式如
				// // {
				// //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
				// //    "key": "gogopher.jpg"
				// //  }
				// // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
				// var domain = up.getOption('domain');
				// var res = JSON.parse(info);
				// var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				// sourceLink = sourceLink.toLocaleLowerCase();
// //				console.log('文件地址:' + sourceLink);

				// var $this = $('#add-pic');
				// var orderby = $this.parents('#work-text').attr('orderby');
				// $this.parents('#work-text').hide().siblings('#work-img').show();
				// $("#work-img").find('.textarea').html($('.mp-item.sel').find('p').html());
				// var $work_img = $("#work-img").attr('orderby', orderby).find('.pvw').removeAttr('style');
				// $('.mp-item.sel').removeClass('text').addClass('img');

				// $('#content-img .pvw').attr('src', 'http://' + sourceLink);

				// var order = $('#work-img').attr('orderby');
				
				// var src = $(".mp-item[data-orderby='" + order + "']").find(".left").attr("data-src");
				// if(src == $(".essay-header").attr("data-src")){
					// $(".essay-header").attr("data-src",'http://' + sourceLink);
					// $(".essay-header").css({'background-image': 'url("http://' + sourceLink + '")'})
				// }
				
				// $(".mp-item[data-orderby='" + order + "'] .left").css({
					// 'background-image': 'url("http://' + sourceLink + '")',
					// color: "#fff"
				// }).attr('data-src', "http://" + sourceLink);
// //				console.log($(".mp-item[data-orderby='" + order + "']"));
			// },
			// UploadComplete: function(file) {
				// $('#alert').remove();
// //				Meipian.eachSectionIsCover(true);
				// console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			// },
			// Error: function(up, err) {
// //				console.error("\nError #" + err.code + ": " + err.message);
				// $('#alert').remove();
// //				Meipian.alertMessage("上传图片失败，请重新上传！");
			// }
		// }
	// });
	
 
	// var Q2 = new QiniuJsSDK();
	// var uploader2 = Q2.uploader({
		// runtimes: 'html5,flash,html4',
		// browse_button: 'add-img',
		// container: 'editoer-tools',
		// flash_swf_url: 'file/Moxie.swf',
		// chunk_size: '0',
		// uptoken_url: '/token.php', // uptoken 是上传凭证，由其他程序生成
		// domain: uploadDomian,
		// filters: {
			// mime_types: [{
				// title: "Image files",
				// extensions: "jpg,jpeg,gif"
			// }],
			// // max_file_size: '5mb',
			// prevent_duplicates: false
		// },
		// resize: {
			// width: 1200,
			// height: 2200,
			// quality: 80,
			// preserve_headers: false
		// },
		// multi_selection: true,
		// get_new_uptoken: true,
		// auto_start: true,
		// init: {
			// PostInit: function() {},
			// FilesAdded: function(up, files) {
// //				console.log('shangchuan .....');
				// console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				// var itemNum = $('.mp-item').not('.demo').length;
				// orderpload = uploader2.files.length;
				// if(itemNum + files.length <= 150) {
					// if(noUpload) {
						// uploader2.stop();
					// }
					// noUpload = true;
					// if(files.length <= Meipian.maxImgLength()) {
						// plupload.each(files, function(file) {
							// var old_name = file.name;
							// var new_name = old_name.split('.');
							// file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
							// // console.log('文件名:' + file.name);
						// });
						// $("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
					// } else {
						// Meipian.alertMessage('最多上传100张图！');
						// uploader2.splice(uploader2.files[0].id, (uploader2.files).length);
						// noUpload = false;
					// }
				// } else {
					// Meipian.alertMessage('段落不可以超过150！');
					// noUpload = false;
				// }
			// },
			// UploadProgress: function(up, file) {},
			// FileUploaded: function(up, file, info) {
				// // console.log(1);
				// // if (noUpload) {
				// //     var domain = up.getOption('domain');
				// //     var res = JSON.parse(info);
				// //     var order = parseInt(Meipian.maxOrderby()) + 1;
				// //     var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				// //     console.log(domain);
				// //     // console.log('文件地址:' + sourceLink);
				// //     //			$('.add-section').hide();
				// //     var $item = $('.mp-item.demo').clone();
				// //     var selOrderby = parseInt($('.mp-item.sel').attr('data-orderby'));
				// //     console.log(selOrderby)
				// //     Meipian.afterOrderby(selOrderby); //获取当前 orderby 值小的 DOM
				// //     //创建 DOM
				// //     $('.mp-item').last().after($item.removeClass('demo').addClass('img').attr('data-orderby', selOrderby + 1));
				// //     // console.log($(".mp-item[data-orderby='" + (selOrderby + 1) + "'] .left"));
				// //     //设置上传的 DOM 数据绑定
				// //     $(".mp-item[data-orderby='" + (selOrderby + 1) + "'] .left").css({
				// //         'background-image': 'url("http://' + sourceLink + '")',
				// //         color: "#fff"
				// //     }).attr('data-src', "http://" + sourceLink);
				// //     //重置定位排序
				// //     Meipian.orderbyPosition();
				// //     //添加按钮
				// //     Meipian.nextItem(selOrderby, function($nThis) {
				// //         $nThis.css('top', $nThis.position().top + 30);
				// //     });
				// //     Meipian.sectionHeight();
				// // } else {
				// //     uploader2.stop();
				// // }
			// },
			// UploadComplete: function(up, files) {
// //				console.log(up);
// //				console.log(files);
				// if(noUpload && files != "undefined") {
					// var arrFiles = files;
					// // console.log(files.files);
					// var selOrderby = parseInt($('.mp-item.sel').attr('data-orderby'));
					// for(var i = 0; i < arrFiles.length; i++) {
						// Meipian.nextItem(selOrderby, function($nThis) {
							// $nThis.attr("data-orderby", parseInt($nThis.attr("data-orderby")) + 1)
						// });
						// var $item = $('.mp-item.demo').clone();
						// var sourceLink = uploadDomian + "/" + arrFiles[i].name;
						// sourceLink = sourceLink.toLocaleLowerCase();
						// $('.mp-item').eq(selOrderby).after($item.removeClass('demo').addClass('img').attr('data-orderby', selOrderby + 1));
						// $(".mp-item[data-orderby='" + (selOrderby + 1) + "'] .left").css({
							// 'background-image': 'url("http://' + sourceLink + '")',
							// color: "#fff"
						// }).attr('data-src', "http://" + sourceLink);
						// selOrderby++;
						// //重置定位排序
						// Meipian.orderbyPosition();
						// //添加按钮
					// }

					// Meipian.nextItem(parseInt($('.mp-item.sel').attr('data-orderby')), function($nThis) {
						// $nThis.css('top', $nThis.position().top + 30);
					// });
					// //                      Meipian.afterOrderby(selOrderby);
					// $('#alert').remove();
					// uploader2.files.splice(uploader2.files[0].id, (uploader2.files).length);
					// scrollBar();
					// var oldtop = parseInt($(".mp-section").css("top"));
					// mouseScroll(oldtop);
				// } else {
					// uploader2.stop();
				// }
				// console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			// },
			// //			Meipian.updateData();
			// Error: function(up, err) {
				// console.error("\nError #" + err.code + ": " + err.message);
				// $('#alert').remove();
				// Meipian.alertMessage("上传图片失败，请重新上传！");
			// }

		// }
	// });
	
	
	// var Q3 = new QiniuJsSDK();
	// var uploader3 = Q3.uploader({
		// runtimes: 'html5,flash,html4',
		// browse_button: 'add-mp',
		// container: 'editoer',
		// flash_swf_url: 'file/Moxie.swf',
		// chunk_size: '0',
		// uptoken_url: '/token.php', // uptoken 是上传凭证，由其他程序生成
		// domain: uploadDomian,
		// filters: {
			// mime_types: [{
				// title: "Image files",
				// extensions: "jpg,jpeg,gif"
			// }],
			// // max_file_size: '5mb',
			// prevent_duplicates: false
		// },
		// resize: {
			// width: 1200,
			// height: 2200,
			// quality: 80,
			// preserve_headers: false
		// },
		// multi_selection: true,
		// get_new_uptoken: true,
		// auto_start: true,
		// init: {
			// PostInit: function() {
				// //document.getElementById('filelist').innerHTML = '';

				// //          document.getElementById('upload').onclick = function() {
				// //              uploader.start();
				// //              return false;
				// //          };
			// },
			// UploadFile: function(up, files) {},
			// FilesAdded: function(up, files) {
				// console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				// if(files.length <= Meipian.maxImgLength()) {
					// noUpload = true;
					// $("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
					// plupload.each(files, function(file) {
						// var old_name = file.name;
						// var new_name = old_name.split('.');
// //						console.log(file.name);
						// file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
// //						console.log('文件名:' + file.name);
					// });
				// } else {
					// noUpload = false;
					// Meipian.alertMessage('您最多上传100张图');
					// uploader3.files.splice(uploader3.files[0].id, (uploader3.files).length);
					// uploader3.stop();
// //					console.log(noUpload);
				// }
			// },
			// UploadProgress: function(up, file) {},
			// FileUploaded: function(up, file, info) {
// //				console.log(noUpload)
				// if(noUpload) {
					// var domain = up.getOption('domain');
					// var res = JSON.parse(info);
					// var order = parseInt(Meipian.maxOrderby()) + 1;
					// var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
					// sourceLink = sourceLink.toLocaleLowerCase();
					// console.log('文件地址:' + sourceLink);
				// }

			// },
			// UploadComplete: function(uploader, file) {
// //				console.log(noUpload)
				// if(noUpload) {
					// //队列文件处理完毕后,处理相关的事情
					// $('#alert').remove();
					// var data = Meipian.firstUpload(access_token, file);
					// //			console.log(data)
					// Meipian.ajaxApi(data, function(res) {
						// if(res.code == 1000) {
							// window.location.href = '/edit.php?id=' + res.article_id + "&hasView=" + hasView;
						// } else {
							// //                              console.error(json.code)
							// Meipian.alertMessage(servererror[res.code]);
							// //                              Meipian.alertMessage('发布失败');
						// }
					// })
				// };
				// console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			// },
			// Error: function(up, err) {
				// console.error("\nError #" + err.code + ": " + err.message);
				// $('#alert').remove();
				// Meipian.alertMessage("上传图片失败，请重新上传！");
				// // document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
			// }
		// }
	// });
	
	// var bgImg = new QiniuJsSDK();
	// var bgImgUploader = bgImg.uploader({
		// runtimes: 'html5,flash,html4',
		// browse_button: 'bgImg-choose',
		// container: 'content-cover',
		// flash_swf_url: 'file/Moxie.swf',
		// chunk_size: '0',
		// multi_selection: false,
		// uptoken_url: '/token.php', // uptoken 是上传凭证，由其他程序生成
		// domain: uploadDomian,
		// resize: {
			// width: 1200,
			// height: 2200,
			// quality: 80,
			// preserve_headers: false
		// },
		// filters: {
			// mime_types: [{
				// title: "Image files",
				// extensions: "jpg,jpeg,gif"
			// }],
			// prevent_duplicates: false
		// },
		// get_new_uptoken: true,
		// auto_start: true,
		// init: {
			// PostInit: function(up, file) {},
			// FilesAdded: function(up, files) {
				// plupload.each(files, function(file) {
					// var old_name = file.name;
					// var new_name = old_name.split('.');
					// file.name = ('user/' + Meipian.getUserId() + '/' + UUID.prototype.createUUID() + '.' + new_name[new_name.length - 1]).toLowerCase();
					// // console.log('文件名:' + file.name);
				// });
				// $("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">图片上传</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
			// },
			// UploadProgress: function(up, file) {},
			// FileUploaded: function(up, file, info) {
				// console.log("上传前-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
				// // 每个文件上传成功后,处理相关的事情
				// // 其中 info 是文件上传成功后，服务端返回的json，形式如
				// // {
				// //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
				// //    "key": "gogopher.jpg"
				// //  }
				// // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
				// var flag = true;
				// var domain = up.getOption('domain');
				// var res = JSON.parse(info);
				// var sourceLink = domain + '/' + res.key; //获取上传成功后的文件的Url
				// sourceLink = sourceLink.toLocaleLowerCase();
				// sourceLink = "http://" + sourceLink;
// //				console.log('文件地址:' + sourceLink);
				// $('#alert').remove();
				// var src = $('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src");
				// var bgSrc = $('.essay-header').attr('data-src');
				// $(".mp-item.img").each(function(index, ele) {
					// if($(ele).find(".fl").attr("data-src") == bgSrc) {
						// flag = false;
					// }
				// });
				// if(flag) {
					// $('#work-cover .mp-content ul li').eq(0).find("a").css({
						// 'background-image': 'url("' + sourceLink + '")'
					// }).attr('data-src', sourceLink);
				// } else {
					// $('#work-cover .mp-content ul li').removeClass("sel");
					// $('#work-cover .mp-content ul').prepend('<li class="sel"><a href="javascript:void(0);" style="background-image:url(' + sourceLink + ')" onclick="coverSel(this)" data-src="' + sourceLink + '"></a></li>')
				// }
				// $(".essay-header").css({
					// 'background-image': 'url("' + sourceLink + '")'
				// }).attr('data-src', sourceLink);
				// $(".cover").trigger("click");
			// },
			// UploadComplete: function(file) {
				// //              $('#alert').remove();
				// //              var src = $('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src");
				// //              var bgSrc = $('.essay-header').attr('data-src');
				// //              if(src == bgSrc){
				// //              		$('#work-cover .mp-content ul li').eq(0).find("a").attr("data-src",src);
				// //              }
				// //              $('.essay-header').attr('data-src',src).css("backgroud-image",src);
				// //              Meipian.eachSectionIsCover(true);
				// console.log("上传后-已有图片："+ $(".mp-item.img").length +";还可以上传：" + Meipian.maxImgLength()+"张图片");
			// },
			// Error: function(up, err) {
				// console.error("\nError #" + err.code + ": " + err.message);
				// $('#alert').remove();
				// Meipian.alertMessage("上传图片失败，请重新上传！");
			// }
		// }
	// })
}