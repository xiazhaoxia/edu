var textDom = null;
$(function() {
	// ctrl + s监听事件
	$(document).keydown(function(e) {
		// ctrl + s
		if(e.ctrlKey == 17 || e.commandKey && e.keyCode == 83) { //e.ctrlKey == true||e.commandKey && e.keyCode == 83
			Meipian.updateData();
			return false; // 截取返回false就不会保存网页了
		}
	});
	document.body.onclick = function() {
		if($("video").length && $(".selfVideo").is(":hidden")) {
			$("video")[0].pause();
		}
	}
	window.onresize = function() {
		scrollBar();
		if($("#editorHelper").is(":visible")) {
			Meipian.editorHelper();
		}
	};
	$(".mp-section").css("top", 0);
	Meipian.sectionHeight();
	/*
	 * 封面图
	 */
	$(".essay-header .cover").click(function(event) {
		/* Act on the event */
		var work = $('#work-cover').removeAttr('style');
		var work_ul = work.find('#content-cover ul').empty();
		var coverBackground = $('.essay-header').attr('data-src');
		$("#audio")[0].pause();
		work.show().siblings().hide();
		Meipian.howImgNumber(function($this) {
			var src = $this.find(".content .icon").attr('data-src');
			if(src == coverBackground) {
				work_ul.append('<li class="sel"><a href="javascript:void(0);" style="background-image:url(\'' + src + '\')" onclick="coverSel(this)" data-src="' + src + '"></a></li>');
			} else {
				work_ul.append('<li><a href="javascript:void(0);" style="background-image:url(\'' + src + '\')" onclick="coverSel(this)" data-src="' + src + '"></a></li>');
			}
		});
		if(work_ul.find(".sel").length == 0) {
			work_ul.prepend('<li class="sel"><a href="javascript:void(0);" style="background-image:url(\'' + coverBackground + '\')" onclick="coverSel(this)" data-src="' + coverBackground + '"></a></li>');
		};
	});
	/**
	 *	编辑文章标题 
	 */
	$('.edit-title').click(function() {
		$("#audio")[0].pause();
		$this = $(this);
		var work = $('#work-title');
		$('*').unbind('keyup');
		$('#content-null').hide();
		work.show().siblings().hide();
		var textareText = '';
		var $textare = work.find('textarea');
		$textare.addClass("shen");
		if($this.text() == '点击设置标题' || $this.text() == '') {
			textareText = '输入标题内容...';
			//          $textare.css('color', '#ccc');
			$textare.attr("placeholder", textareText);
		} else {
			//			console.log($this.text())
			textareText = $this.text();
			$textare.val(textareText);
		}
		$textare.on("focus", function() {
			$(this).removeClass("shen");
		})
		$textare.on("blur", function() {
				$(this).addClass("shen");
			})
			//      $textare.focus(function(e) {
			//          var _this = $(this);
			//          //			console.log(_this.val());
			//          if (_this.val() == '输入标题内容...') {
			//              _this.val('')
			//          } else {
			//              _this.val(textareText)
			//          }
			//      });
			//		var t1;
			//      $textare.keyup(function(e) {
			//          //			clearTimeout(t1);
			//          _this = $(this);
			//          $.trim($this.text()) == '' ? $this.text('点击设置标题') : $this.text(_this.val());
			//          //			t1 = setTimeout(Meipian.updateData, 2000)
			//      }).removeAttr('class');
		$textare.on("input paste", function() {
			_this = $(this);
			var str = _this.val().replace(/[\r\n]/g, "");
			//         str = str.length <= 50 ? str : str.substring()
			$.trim($textare.val()) == '' ? $this.text('点击设置标题') : $this.text(str);
		})
	});
	/**
	 *  编辑文字变态，如：加粗，字体放大，居中 
	 */
	$(".tools .text-edit .fl>a").click(function(e) {
		e.stopPropagation();
		var $this = $(this);
		var $item = $('.mp-item.sel');
		$this.toggleClass("on").parent().siblings().children("a").removeClass("on").siblings().fadeOut();
		if($this.is("on")) {
			$('body').trigger("click");
		}
		$this.siblings().fadeToggle();
	});

	$(".tools .text-edit>a").click(function(e) {
		e.stopPropagation();
		var $this = $(this);
		var $item = $('.mp-item.sel');
		if(!$this.is('.on')) {
			$this.addClass('on');
			Meipian.addLink(function(ele) {
				var link = ele.find('#link-addr').val();
				var desc = ele.find('#link-describe').val() || "网页链接";
				if(isUrl(link)) {
					var $content_text = $('.win-edite:visible').find('#content-text');
					$this.parents('.win-edite').find('.linkshow').css("z-index", 999).find('i').addClass('icon-iconfontlink').attr('data-src', link).siblings('span').text(desc);
					$('.mp-item.sel .right-content b.link').show().text('[链接:' + desc + ']').attr({
						'data-src': link,
						'data-desc': desc
					});
					ele.hide().remove();
				} else {
					console.log('网页地址错误!');
					$("#link-addr").val("").attr("placeholder", "链接地址不正确，请检查修改").addClass("error");
				}
			});
		};
	})

	/**
	 *  添加文字段落 
	 */
	$("#add-text").click(function() {
		var itemNum = $('.mp-item').not('.demo').length;
		if(itemNum < 150) {
			var $item = $('.mp-item.demo').clone();
			Meipian.getThisTop();
			var selOrderby = parseInt($('.mp-item.sel').attr('data-orderby'));
			Meipian.afterOrderby(selOrderby); //获取当前 borderby 值小的说有 DOM
			$('.mp-item').last().after($item.removeClass('demo').addClass('text').attr('data-orderby', selOrderby + 1));
			//			$('.add-section').hide();
			Meipian.orderbyPosition();
			Meipian.nextItem(selOrderby, function($nThis) {
				$nThis.css('top', $nThis.position().top + 30);
			});
			Meipian.sectionHeight();
			scrollBar();
		} else {
			Meipian.alertMessage('段落不可以超过150!');
		}
	});
	/*
	 * 添加是视频段落
	 */
	$("#add-video").click(function() {
		var itemNum = $('.mp-item').not('.demo').length;
		var selOrderby = parseInt($('.mp-item.sel').attr('data-orderby'));
		if(itemNum < 150) {
			$.confirm('如何添加视频?', 'video', function(dom) {
				$('#alert').fadeOut(500, function() {
					$(this).remove();
				});
			}, function(dom) {
				//				$('.add-section').hide();
				var $this = $(dom);
				var src = $this.parent().siblings('.inputBox').find('.video-src').val();
				if(src.indexOf("http://v.youku.com/v_show/id_") >= 0 && src.indexOf(".html") >= 0) {
					var id = src.substring((src.indexOf('id_') + 3), src.indexOf('.html'));
					var $item = $('.mp-item.demo').clone();
					var index = $this.attr("data-orderby");
					$item.find('.left').removeClass('icon');
					//		Meipian.getTop();
					$.ajax({
						type: "get",
						url: "https://openapi.youku.com/v2/videos/show_basic.json?client_id=2f83f5a72d927f9b&video_id=" + id,
						dataType: 'json',
						success: function(res) {
							$item.find('.left').css('background-image', 'url(' + res.thumbnail + ')').attr('data-cover', res.thumbnail).attr('data-id', res.id).attr('data-player', res.player);
							Meipian.afterOrderby(selOrderby); //获取当前 borderby 值小的说有 DOM
							$('.mp-item').last().after($item.removeClass('demo').addClass('video').attr('data-orderby', selOrderby + 1));
							Meipian.orderbyPosition();
							Meipian.nextItem(selOrderby, function($nThis) {
								$nThis.css('top', $nThis.position().top + 30);
							});
							Meipian.sectionHeight();
							scrollBar();
							$('#alert').fadeOut(500, function() {
								$(this).remove();
							});
						},
						error: function() {
							Meipian.alertMessage("请填写正确的优酷地址!");
						}
					});
					// $.get('https://openapi.youku.com/v2/videos/show_basic.json?client_id=2f83f5a72d927f9b&video_id=' + id, function(res) {
					//     console.log(res);
					//     $item.find('.left').css('background-image', 'url(' + res.thumbnail + ')').attr('data-cover', res.thumbnail).attr('data-id', res.id).attr('data-player', res.player);
					// })

				} else {
					Meipian.alertMessage('请填写视频地址');
				}
			});
		} else {
			Meipian.alertMessage('段落不可以超过150！');
		}
	});
	/*
	 * 删除段落图片
	 */
	document.getElementById("del-pic").onclick = function() {
		var $this = $(this);
		$.confirm('您确定删除此图片？', '', function() {

		}, function() {
			Meipian.lastImg($('.mp-item.sel'), function() {
				var $item = $('.mp-item.sel');
				var $itemChil = $item.find(".left");
				var index = parseInt($item.attr("data-orderby"));
				var text = $item.find('p').html();
				if(text == '') {
					Meipian.nextItem(index, function($this) {
						$this.attr('data-orderby', $this.attr('data-orderby') - 1);
					});
					$(".mp-section").css({
						"height": Meipian.getThisTop() - 130
					});
					$item.remove();
					$(".add-section").hide();
					Meipian.eachSectionIsCover($itemChil);
					Meipian.orderbyPosition();
					var scrollTop = $(".mp-section").css("top") ? Math.abs(parseInt($(".mp-section").css("top"))) : 0;
					var boxHeight = $(".section-container").height();
					var contentHeight = $(".mp-section").height();
					var bottomHeight = contentHeight - boxHeight - scrollTop;
					if(contentHeight > boxHeight && bottomHeight <= -130) {
						$(".mp-section").animate({
							"top": -scrollTop + 130 + 32
						}, function() {
							scrollBar();
							oldtop = parseInt($(".mp-section").css("top"));
							mouseScroll(oldtop);
						});
					} else if(contentHeight <= boxHeight) {
						$(".mp-section").animate({
							"top": 0
						}, function() {
							scrollBar();
							oldtop = parseInt($(".mp-section").css("top"));
							mouseScroll(oldtop);
						});
					}
					scrollBar();
					$this.parents('#work-img').hide().siblings('#work-null').show();
				} else {
					var orderby = $this.parents('#work-img').attr('orderby');
					$this.parents('#work-img').hide().siblings('#work-text').show();
					$('#work-text').attr('orderby', orderby).find('.textarea').html(text);
					$(".mp-item.sel").removeClass('img').addClass('text').find('.left').removeAttr('style').removeAttr("data-src");
					Meipian.getStatus($item, $('#work-text'));
					//                  Meipian.eachSectionIsCover();
					var arr = [];
					var imgArr = $(".mp-item.img");
					$.each(imgArr, function(index, ele) {
						arr.push($(ele).attr("data-orderby"));
					});
					var min = arr[0];
					for(var i = 0; i < arr.length; i++) {
						if(min > arr[i]) {
							min = arr[i];
						}
					}
					var header_cover = $('.essay-header');
					var topSrc = $(".mp-item[data-orderby=" + min + "]").find(".left").attr("data-src");
					header_cover.attr('data-src', topSrc).css('background-image', 'url(' + topSrc + ')');
				}
			}, function() {
				Meipian.alertMessage('您至少要保留一张图片！');
			})
		})
	};
	/*
	 * 添加图文段落
	 */
	$("#add-pic").click(function() {
		$('#change').get(0).click();
		$("#work-img").attr('orderby', $('#work-text').attr('orderby'));
	});
	$('.color-list ul li').click(function(event) {
		/* Act on the eveent */
		var role = $(this).attr("data-color");
		console.log(role);
		document.execCommand("ForeColor", false, role);
		var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
		$(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
		//      var $this = $(this);
		//      var $item = $('.mp-item.sel');
		//      var color;
		//      if ($item.attr('color')) {
		//          color = $item.attr('color');
		//      }
		//      var selItem = $item.removeClass(color);
		//      var $text = $('textarea').not(':hidden').removeClass(color);
		//      color = $this.attr('class');
		//      $text.addClass(color);
		//      selItem.attr('color', color).addClass(color);
		$('.color-list').fadeOut();

	});
	/*
	 * 查看大图
	 */
	$('.pvw').click(function() {
		var $this = $(this)
		var src = $this.attr('src');
		$('.window').append("<div id='alert' style='background: rgba(0,0,0,.9);display:none;'><div style=\"position:absolute;top:20px;bottom:20px;right:0;left:0;margin:auto;width:70%;background-image:url('" + src + "'); background-size:contain;background-position:center;background-repeat: no-repeat;\" ></div><a href='javascript:void(0)' onclick='$(\"#alert\").fadeOut(function(){$(this).remove()})' style='position:absolute;top:32px;right:32px;width:29px;height:29px;background-image:url(img/close.png);background-image:-webkit-image-set(url(img/close.png) 1x,url(img/2x/close.png) 2x);background-repeat:no-repeat;/*background-position:0 -120px;*/'></a></div>");
		$('#alert').fadeIn();
	});
	/*
	 * 添加音乐
	 */
	$('i.music').click(function() {
		var $wrokMusic = $('#work-music');
		$wrokMusic.removeAttr('style').show().siblings().hide();
		$wrokMusic.find('.default').show().siblings().hide();
		$('a#music-search').attr('data-state', 1).text('在线搜索');
		getLocalMusic();
	});
	$('a#music-search').click(function() {
		var $this = $(this);
		var state = $this.attr('data-state');
		if(state == 1) {
			$this.text('在线搜索').attr('data-state', 0);
			$this.text('推荐音乐');
			$('.section.search').show().siblings('.section.default').hide();
		} else {
			$this.text('在线搜索').attr('data-state', 1);
			$('.section.default').show().siblings('.section.search').hide();
		};
		getLocalMusic();
	});
	$('#search-key form').submit(function(e) {
		e.preventDefault();
		var val = $('#search-key input').val();
		var listJson = {
			controller: 'music',
			action: 'search',
			'access_token': $("#access_token").attr("data-token"),
			target: val,
			page: 0
		};
		Meipian.ajaxApi(listJson, function(res) {
			var data = $('#work-music .search-data');
			data.children().remove();
			$("#m_more").remove();
			if(res.code == 1000) {
				if(res.music.length > 0) {
					for(var i = 0; i < res.music.length; i++) {
						var item_content_text = res.music[i].music_desc.split('|');
						var item = $('<div class="item clearfix iconfont"  onclick="setMusic(this);"></div>').attr({
							'data-src': res.music[i].music_url,
							'data-desc': res.music[i].music_desc
						});
						var item_left = $('<div class="fl music-conver"></div>').css('background-image', 'url(' + item_content_text[2] + ')');
						var item_content = $('<div class="music-content clearfix fl"><b>' + item_content_text[0] + '</b><span>' + item_content_text[1] + '</span></div>');
						item.append(item_left);
						item.append(item_content);
						data.append(item);
					}
					data.after('<div id="m_more" onclick="moreMusic()" style="cursor: pointer;width:100%;height:30px;line-height:30px;text-align:center;">加载更多...</div>')
				} else {
					data.after('<div id="m_more" onclick="moreMusic()" style="cursor: pointer;width:100%;height:30px;line-height:30px;text-align:center;">没有您要的歌曲</div>')
				}
			} else if(res.code == 9999 || res.code == 1006) {
				Meipian.backLogin(res.code);
			}
		});
	});
	//回到推荐音乐页面
	$('.finish').click(function() {
		var $this = $(this),
			$win_edite = $this.parents('.win-edite');
		var linksrc = $win_edite.find("i.iconfont").attr("data-src");
		if($win_edite.is('#work-text') && isNull($win_edite.find('.textarea').text()) && !linksrc) {
			//如果用户输入为空或者只是空格
			var index = $(".mp-section").find(".sel").attr("data-orderby");
			var $item = $(".mp-section").find(".sel");
			Meipian.nextItem(index, function($this) {
				$this.attr('data-orderby', $this.attr('data-orderby') - 1);
			});
			$item.remove();
			$(".mp-section").css({
				"height": Meipian.getThisTop() - 130
			});
			Meipian.orderbyPosition();
			$(".add-section").css("display", "none");
			$('#work-nll').show().siblings().hide();
			var scrollTop = $(".mp-section").css("top") ? Math.abs(parseInt($(".mp-section").css("top"))) : 0;
			var boxHeight = $(".section-container").height();
			var contentHeight = $(".mp-section").height();
			var bottomHeight = contentHeight - boxHeight - scrollTop;
			if(contentHeight > boxHeight && bottomHeight <= -130) {
				$(".mp-section").animate({
					"top": -scrollTop + 130 + 32
				});
			} else if(contentHeight <= boxHeight) {
				$(".mp-section").animate({
					"top": 0
				});
			}
			scrollBar();
			$(".scrollBar").trigger("click");
		} else if($win_edite.is('#work-music')) {
			//            关闭音乐
			$("#audio")[0].pause();
			//          console.log($(".search-data .sel"));
			var isAdd = true;
			//          console.log($(".search-data .sel"));
			if($(".search-data .sel").length) {
				//          		console.log($(".search-data .sel").attr(src));
				var txt = $(".search-data .sel").find("b").text() + " - " + $(".search-data .sel").find('span').text();
				var src = $(".search-data .sel").attr("data-src");
				var desc = $(".search-data .sel").attr("data-desc");
				//	            var musicList = JSON.parse(localStorage.musicList);
				for(var i = 0; i < musicList.length; i++) {
					console.log(musicList[i].src, src)
					if(musicList[i].src == src) {
						isAdd = false;
					}
				}
				if(isAdd) {
					var obj = {};
					obj.txt = txt;
					obj.src = src;
					obj.desc = desc;
					musicList.push(obj);
					localStorage.musicList = JSON.stringify(musicList);
				}
			}
		}
		$this.parents('.win-edite').hide();
		Meipian.updateData();
		$('#work-null').show();
		var newJson = JSON.stringify(Meipian.getJSONData());
		var oldJson = JSON.stringify(localStorage.getItem)
	});

	function addTemplate() {
		var template = JSON.parse(localStorage.templateinfo);
		template = JSON.parse(template.content);
		for(var i = 0, len = template.length; i < len; i++) {
			var labelItem = template[i];
			if(labelItem.id != "9999") {
				var label = '<div class="item">' + labelItem.name + '</div>'
				$(".masterplate .label").append(label);
				var templateItem = '<div class="templateContent clearfix item" style="left: 0px;display:none;"><a href="#" data-num="000"><img width=65 src="img/theme/000-biaozhun.png"></a>';
				for(var j = 0; j < labelItem.list.length; j++) {
					var id = "";
					if(labelItem.list[j].id.length == 1) {
						id = "00" + labelItem.list[j].id
					} else if(labelItem.list[j].id.length == 2) {
						id = "0" + labelItem.list[j].id
					} else {
						id = labelItem.list[j].id
					}
					templateItem += '<a href="#" data-num="' + id + '"><img width=65 src="' + labelItem.list[j].image + '"></a>'
				}
				templateItem += '</div>'
				$("#templateWrap").append(templateItem);
			}
		}
		for(var i = 0, len = template.length; i < len; i++) {
			var labelItem = template[i];
			if(labelItem.id == "9999") {
				var templateItem = '';
				for(var j = 0; j < labelItem.list.length; j++) {
					var id = "";
					if(labelItem.list[j].id.length == 1) {
						id = "00" + labelItem.list[j].id
					} else if(labelItem.list[j].id.length == 2) {
						id = "0" + labelItem.list[j].id
					} else {
						id = labelItem.list[j].id
					}
					templateItem += '<a href="#" data-num="' + id + '"><img width=65 src="' + labelItem.list[j].image + '"></a>'
				}
				$("#templateWrap > div").each(function(index, ele) {
					$(ele).find("a").eq(0).after(templateItem);
				})
			}
		}
	}
	addTemplate();

	//模板选项卡
	var currentIndex = 0
	$(".masterplate .label .item").click(function(e) {
		var $this = $(this),
			$templateContent = $(".templateContent"),
			index = $this.index();
		$this.addClass('cur').siblings().removeClass('cur');
		$templateContent.eq(index).show().siblings().hide();
		currentIndex = parseInt($(".templateContent:visible").css("left")) || 0;
		currentIndex = Math.abs(currentIndex / 496);
	});
	//更换模板轮播图
	$("#leftScroll").click(function() {
		currentIndex--;
		templateAnimate();
	})
	$("#rightScroll").click(function() {
		currentIndex++;
		templateAnimate();
	});
	$(".masterplate .label .item").eq(0).trigger("click");

	function templateAnimate() {
		var content = $(".templateContent:visible");
		var contentWidth = $(".templateContent:visible").find("a").length * 70;
		var boxWidth = 496;
		var maxIndex = Math.floor(contentWidth / boxWidth);
		if(currentIndex < 0) {
			currentIndex = 0;
		} else if(currentIndex > maxIndex) {
			currentIndex = maxIndex;
		};
		content.stop().animate({
			'left': -(currentIndex * boxWidth)
		});
	}

	function close(id) {
		$('#' + id).hide();
	};
});
var m_page = 0;

function getLocalMusic() {
	var flag = true;
	if(localStorage.musicList) {
		musicList = JSON.parse(localStorage.musicList);
		if(musicList.length) {
			if($("#onlineMusic").length) {
				var str = "";
				for(var i = 0; i < musicList.length; i++) {
					str += '<p class="iconfont" onclick="setMusic(this)" data-src="' + musicList[i].src + '"" data-desc="' + musicList[i].desc + '">' + musicList[i].txt + '</p>'
				};
				$("#olmusic").html(str);
			} else {
				var str = "<h3 id = 'onlineMusic'>在线音乐</h3><div id='olmusic' class='list'>";
				for(var i = 0; i < musicList.length; i++) {
					str += '<p class="iconfont" onclick="setMusic(this)" data-src="' + musicList[i].src + '" data-desc="' + musicList[i].desc + '">' + musicList[i].txt + '</p>'
				}
				str += "</div>";
				$(".default>div>.list").eq(0).after(str);
			}
		};
	};
	$(".default").find("p").each(function(index, ele) {
		if($(ele).text() == $("i.music").text()) {
			$("p.sel").removeClass("sel icon-sel");
			$(ele).addClass("sel icon-sel");
			flag = false;
		}
	})
	var str = $("i.music").text();
	if(flag && str == "添加音乐") {
		$(".default").find("p").removeClass("sel icon-sel");
		$(".last").eq(0).addClass("sel icon-sel");
	}
}

function moreMusic() {
	m_page++;
	$("#m_more").remove();
	var val = $('#search-key input').val();
	var listJson = {
		controller: 'music',
		action: 'search',
		'access_token': $("#access_token").attr("data-token"),
		target: val,
		page: m_page
	};
	Meipian.ajaxApi(listJson, function(res) {
		var data = $('#work-music .search-data');
		if(res.code == 1000) {
			if(res.music.length > 0) {
				for(var i = 0; i < res.music.length; i++) {
					var item_content_text = res.music[i].music_desc.split('|');
					var item = $('<div class="item iconfont clearfix"  onclick="setMusic(this);"></div>').attr('data-src', res.music[i].music_url);
					var item_left = $('<div class="fl music-conver"></div>').css('background-image', 'url(' + item_content_text[2] + ')');
					var item_content = $('<div class="music-content clearfix fl"><b>' + item_content_text[0] + '</b><span>' + item_content_text[1] + '</span></div>');
					item.append(item_left);
					item.append(item_content);
					data.append(item);
				}
				data.after('<div id="m_more" onclick="moreMusic()" style="cursor: pointer;width:100%;height:30px;line-height:30px;text-align:center;">加载更多...</div>')
			} else {
				data.after('<div id="m_more" onclick="moreMusic()" style="cursor: pointer;width:100%;height:30px;line-height:30px;text-align:center;">没有数据啦!</div>')
			}
		} else if(json.code == 9999) {
			Meipian.alertMessage(servererror[res.code]);
		}
	})
}

function edit(dom) {
	var $this = $(dom);
	var work;
	var index = parseInt($this.attr("data-orderby"));
	var p_text = $this.find('p').html() == '' ? '' : $this.find('p').html();
	//	var t1;
	window.str = p_text;
	var $add = $('.add-section').css('display', 'none');
	$this.addClass('sel').siblings().removeClass('sel').find(".section").removeAttr('style');
	if($this.is('.text')) {
		var orderby = $this.attr('data-orderby');
		work = $("#work-text").attr('orderby', orderby).removeAttr('style');
		work.show().siblings().hide();
	} else if($this.is('.img')) {
		var orderby = $this.attr('data-orderby');
		var src = $this.find('.left').attr('data-src');
		work = $("#work-img").attr('orderby', orderby).removeAttr('style');
		work.find('.pvw').attr('src', src);
		work.show().siblings().removeAttr("orderby").hide();
	} else if($this.is('.video')) {
		var orderby = $this.attr('data-orderby');
		work = $('#work-video').attr('orderby', orderby).removeAttr('style');
		work.show().siblings().hide();
		work.find('iframe').attr('src', 'http://a.meipian.cn/video.php?vid=' + $this.find('.content .left').attr('data-id'));
	} else if($this.is('.selfVideo')) {
		var orderby = $this.attr('data-orderby');
		var src = $this.find(".left").attr("data-url");
		work = $('#work-selfVideo').attr('orderby', orderby).removeAttr('style');
		work.show().siblings().hide();
		work.find("video").attr("src", src);
	}
	work.siblings().removeAttr('orderby').find('.textarea').empty();
	textDom = work.find(".textarea");
	var linkshow = work.find('.linkshow')
	linkshow.unbind('click');
	linkshow.click(function(event) {
		var $this = $(this).find('i');
		var old_link = $this.attr('data-src');
		var old_desc = $this.siblings('span').text();
		Meipian.modLink(function(ele) {
			var link = ele.find('#link-addr').val();
			var desc = ele.find('#link-describe').val();
			desc = $.trim(desc) == ""? "网页链接":$.trim(desc);
			if(isUrl(link)) {
				var $content_text = $('.win-edite:visible').find('#content-text');
				$this.parents('.win-edite').find('.linkshow').find('i').addClass('icon-iconfontlink').attr('data-src', link).siblings('span').text(desc);
				$('.mp-item.sel .right-content b.link').show().text('[链接:' + desc + ']').attr({
					'data-src': link,
					'data-desc': desc
				});
				ele.hide().remove();
			} else {
				console.log('网页地址错误!');
				$("#link-addr").val("").attr("placeholder", "链接地址不正确，请检查修改").addClass("error");
			}
		}, {
			'link': old_link,
			'desc': old_desc
		}, $this);
	});
	//  work.find('textarea').unbind();
	work.find('.textarea').html(p_text).click();
	//  .bind("input paste", function(e) {
	//      //		clearTimeout(t1);
	//      _this = $(this);
	//
	//      $this.find('p').text(_this.val());
	//      //		t1 = setTimeout(Meipian.updateData, 2000);
	//  }).removeAttr('class');
	//	if($())
	if(arguments[1]) {

	} else {
		Meipian.nextItem(index, function($nThis) {
			$nThis.css('top', $nThis.position().top + 30);
		});
		$add.fadeIn(100).css('top', $this.position().top + $this.height() + 10);
	}
	var b_height = $(".section-container").height();
	var c_height = $(".mp-section").height();
	if($this.attr("data-orderby") == Meipian.getMaxOrderBy() && c_height > b_height) {
		$(".mp-section").animate({
			"top": -(c_height - b_height + 30)
		}, function() {
			var $content = $(".mp-section").css("top");
			$content = parseInt($content);
			mouseScroll($content);
		});
	}
	Meipian.getStatus($this, work);
}

function del(e, dom) { //删除元素
	var $this = $(dom);
	var $item = $this.parents(".mp-item");
	var index = parseInt($item.attr("data-orderby"));
	var sectionHeight = 130;

	$.confirm('您确定删除本段?', '', function() {

	}, function() {
		//nextItem  $this是点击当前的对象orderid 后面的每一个元素
		Meipian.lastImg($item, function() {
			Meipian.nextItem(index, function($this) {
				$this.attr('data-orderby', $this.attr('data-orderby') - 1);
			});
			$item.remove();
			Meipian.eachSectionIsCover($this);
			$(".mp-section").css({
				"height": Meipian.getThisTop() - 130
			});
			Meipian.orderbyPosition();
			$(".add-section").css("display", "none");
			$('#work-nll').show().siblings().hide();
			var scrollTop = $(".mp-section").css("top") ? Math.abs(parseInt($(".mp-section").css("top"))) : 0;
			var boxHeight = $(".section-container").height();
			var contentHeight = $(".mp-section").height();
			var bottomHeight = contentHeight - boxHeight - scrollTop;
			if(contentHeight > boxHeight && bottomHeight <= -130) {
				$(".mp-section").animate({
					"top": -scrollTop + 130 + 32
				}, function() {
					scrollBar();
					oldtop = parseInt($(".mp-section").css("top"));
					mouseScroll(oldtop);
				});
			} else if(contentHeight <= boxHeight) {
				$(".mp-section").animate({
					"top": 0
				}, function() {
					scrollBar();
					oldtop = parseInt($(".mp-section").css("top"));
					mouseScroll(oldtop);
				});
			}
			$('.win-edite:visible').hide().siblings('#work-null').show();
			$(".scrollLeft").unbind();
			Meipian.updateData();
		}, function() {
			Meipian.alertMessage('您至少要保留一张图片！');
		});
	});
	//	e.stopPropagation();
};

function coverSel(dom) {
	var $this = $(dom);
	var src = $this.attr("data-src");
	$this.parent().addClass('sel').siblings().removeClass('sel');
	$(".essay-header").css({
		'background-image': 'url("' + src + '")'
	}).attr('data-src', src);
}

function scrollBar() {
	var bar = $(".scrollBar")[0];
	var content = $(".mp-section")[0];
	var boxHeight = $(".section-container").height(); //容器盒子高度
	var contentHeight = Meipian.getThisTop() < boxHeight ? boxHeight : Meipian.getThisTop(); //内容高度
	$(".scrollBar").css("height", boxHeight / contentHeight * boxHeight);
	startScroll(bar, content);

	function startScroll(obj, target) {
		obj.onmousedown = function(event) {
			var event = event || window.event;
			boxHeight = $(".section-container").height(); //容器盒子高度
			contentHeight = Meipian.getThisTop() < boxHeight ? boxHeight : Meipian.getThisTop(); //内容高度
			$(".scrollBar").css("height", boxHeight / contentHeight * boxHeight);
			var t = event.clientY - this.offsetTop; // 红色盒子距离 父亲 盒子顶部距离
			var that = this; // 把 bar 对象给 that 对象
			document.onmousemove = function(event) {
				var event = event || window.event;
				var barTop = event.clientY - t; // 红色移动的距离
				//内容盒子要移动距离
				// （内容盒子高度 -  大盒子高度） /  (大盒子高度 - 红色盒子的高度)   * 红色盒子移动的数值
				var contentTop = (contentHeight - target.parentNode.offsetHeight) / (target.parentNode.offsetHeight - that.offsetHeight) * barTop;
				// 内容盒子移动的距离
				if(barTop < 0) {
					barTop = 0;
					content.style.top = 0;
				} else if(barTop > target.parentNode.offsetHeight - that.offsetHeight)
				// 大于  大盒子的高度  -  红色盒子的高度
				{
					barTop = target.parentNode.offsetHeight - that.offsetHeight;
					content.style.top = -(contentHeight - boxHeight) + "px";
				} else {
					target.style.top = -contentTop + "px"; // 往上走是负值
				}
				that.style.top = barTop + "px";
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); // 防止拖动滑块的时候， 选中文字
			}
		}
		document.onmouseup = function() {
			document.onmousemove = null;
		};
	};
}
var isPlay = true;

function setDefaultMusic(dom) {
	var $this = $(dom);
	$('#work-music .mp-content .section p').removeClass('sel icon-sel');
	$("p.iconfont").removeClass("sel icon-sel");
	$("div.item").removeClass("sel icon-sel");
	$this.addClass('sel icon-sel');
	var src = $this.attr('data-src');
	var txt = $this.text();
	var playSrc = $("#audio").attr('src');
	var playDesc = $this.attr('data-desc') || $this.text();
	//  if (playDesc) {
	$('.iconfont.music').attr('data-src', src).text(txt);
	if($(dom).text() == "无背景音乐") {
		$('.iconfont.music').removeAttr("data-desc").text("添加音乐");
	}
	$('.iconfont.music').removeAttr("data-desc");
	//  } else {
	//      $('.iconfont.music').attr('data-src', src).text(txt).removeAttr('data-desc');
	//  }
	if(src.replace('music', "static2") === playSrc) {
		if(isPlay) {
			$("#audio")[0].pause();
		} else {
			$("#audio")[0].play();
		}
		isPlay = !isPlay;
	} else {
		$("#audio").attr('src', src.replace('music', "static2")); //因为阿里切换了七牛云(暂时的方案);
		$("#audio")[0].play();
		isPlay = true;
	}
}
var musicList = [];

function setMusic(dom) {
	var $this = $(dom);
	var src = $this.attr('data-src');
	var desc = $this.attr('data-desc');
	$(".section.default").find("p.iconfont").removeClass('sel icon-sel');
	$this.addClass('sel icon-sel').siblings().removeClass('sel icon-sel');
	//  section default
	var txt = $this.find('b').text() + " - " + $this.find('span').text();
	txt == " - " ? txt = $this.text() : txt;
	var start = $this.find('span').text();
	if(src != '') {
		$('.iconfont.music').attr({
			'data-src': src,
			'data-desc': desc
		}).text(txt);
	} else {
		$('.iconfont.music').attr('data-src', src).text(txt);
	};
	var playSrc = $("#audio").attr('src');

	if(src === playSrc) {
		if(isPlay) {
			$("#audio")[0].pause();
		} else {
			$("#audio")[0].play();
		}
		isPlay = !isPlay;
	} else {
		$("#audio").attr('src', src);
		$("#audio")[0].play();
		isPlay = true;
	}
}

function mouseScroll(oldtop) {
	var bar = $(".scrollBar")[0]; //滚动条
	var content = $(".mp-section")[0]; //内容
	var boxHeight = $(".section-container").height(); //容器盒子高度
	var contentHeight = Meipian.getThisTop() < boxHeight ? boxHeight : Meipian.getThisTop(); //内容高度
	var content = $(".mp-section")[0];
	var contentTop = oldtop;
	var barTop = (boxHeight - bar.offsetHeight) / (contentHeight - boxHeight) * contentTop;
	if(!barTop) {
		barTop = 0;
	}
	bar.style.top = -barTop + "px";
};

function video(dom) {};

//拖拽实现

//function dragging(ele, e) {
//	if(e.button == 2) {
//		return false;
//	}
//
//};

function dragging(ele, e) {
	console.log(e.button);
	if(e.button != 0) {
		return false;
	}
	unBindScroll();
	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	var that = ele;
	var offsetX = e.offsetX;
	var offsetY = e.offsetY;
	var left = 0;
	var top = 0;
	var oldTop = parseInt(that.style.top);
	var timer = null;
	var flag = true;
	var resize = true;
	var throttle = true;
	var dropDown = true; //为true放开表示在移动到第一个位置，反之则在最后一个；
	var maxOrderBy = document.querySelectorAll(".mp-item").length - 1;

	var mouseInContentTop = 0;
	var orderby = parseInt(that.getAttribute("data-orderby"));
	var count = 0;
	var prev = orderby;
	var scrollContent = document.getElementById("mp-section");
	var scrollBox = document.getElementById("section-container");
	var body = document.body;
	var shadow = document.getElementById("shadow");

	ele.style.position = "fixed";
	ele.style.left = e.pageX - offsetX + "px";
	ele.style.top = e.pageY - offsetY + "px";
	ele.style.zIndex = 1;

	edit(ele, true);
	$(".add-section").css("display", "none");
	//	console.log(maxOrderBy);
	scrollContent.style.height = Meipian.getThisTop() + "px";
	//	edit($(ele));
	document.onmousemove = function(e) {
		if(throttle) {
			Meipian.orderbyPosition();
			throttle = false;
			shadow.style.display = "block";
			shadow.style.top = $(ele).css("top");
		}
		left = e.pageX - offsetX;
		top = e.pageY - offsetY;
		that.style.left = left + "px";
		that.style.top = top + "px";
		if(e.clientY < 150) {
			resize = false;
			$(".liner").css({ //鼠标位置少于150，把标志线移动到最上方
				"display": "block",
				"top": 8
			});
			dropDown = true; //表示松开鼠标将当前元素放到第一位
			if(scrollContent.offsetHeight > scrollBox.offsetHeight) {
				if(flag) {
					clearInterval(timer);
					timer = setInterval(function() {
						var old = parseInt(scrollContent.style.top);
						if(old >= -20) {
							scrollContent.style.top = 0;
							clearInterval(timer);

							$(".scrollBar")[0].style.top = 0;
						} else {
							scrollContent.style.top = old + 20 + "px";
							flag = false;
							mouseScroll(old + 20);
						}
					}, 50)
				}
			}
		} else if(e.clientY > body.offsetHeight - 97) {
			resize = false;
			$(".liner").css({
				"display": "block",
				"top": maxOrderBy * 130 + 8
			});
			dropDown = false;
			if(scrollContent.offsetHeight > scrollBox.offsetHeight) {
				if(flag) {
					clearInterval(timer);
					timer = setInterval(function() {
						var old = parseInt(scrollContent.style.top);
						//						console.log("old:"+old,"box"+scrollBox.offsetHeight,"")
						if(old - scrollBox.offsetHeight < -scrollContent.offsetHeight) {
							scrollContent.style.top = -scrollContent.offsetHeight + scrollBox.offsetHeight + "px";
							clearInterval(timer);
							mouseScroll(parseInt(scrollContent.style.top));
						} else {
							scrollContent.style.top = old - 20 + "px";
							flag = false;
							mouseScroll(old - 20);
						}
					}, 50)
				}
			}
		} else {
			clearInterval(timer);
			flag = true;
			resize = true;
			mouseInContentTop = e.pageY - 150 + Math.abs(parseInt(scrollContent.style.top) || 0);
			count = Math.round(mouseInContentTop / 130);
			if(count > orderby) {
				count > maxOrderBy ? count = maxOrderBy : count = count;
				prev = count;
				$(".liner").css({
					"top": count * 130 + 8
				})
			} else if(count < orderby) {
				prev = count + 1;
				$(".liner").css({
					"top": count * 130 + 8
				})
			} else {
				prev = orderby;
			}
			prev == orderby ? $(".liner").hide() : $(".liner").show();
		}
	};

	$(document).on("DOMMouseScroll", function(e) {
		clearInterval(timer);
		if(throttle) {
			Meipian.orderbyPosition();
			throttle = false;
			shadow.style.display = "block";
			shadow.style.top = $(ele).css("top");
		}
		left = e.pageX - offsetX;
		top = e.pageY - offsetY;
		that.style.left = left + "px";
		that.style.top = top + "px";
		if(e.clientY < 150) {
			resize = false;
		} else if(e.clientY > body.offsetHeight - 97) {
			resize = false;
		} else {
			resize = true;
			mouseInContentTop = e.pageY - 150 + Math.abs(parseInt(scrollContent.style.top) || 0);
			count = Math.round(mouseInContentTop / 130);
			if(count > orderby) {
				count > maxOrderBy ? count = maxOrderBy : count = count;
				prev = count;
				$(".liner").css({
					"top": count * 130 + 8
				})
			} else if(count < orderby) {
				prev = count + 1;
				$(".liner").css({
					"top": count * 130 + 8
				})
			} else {
				prev = orderby;
			}
			prev == orderby ? $(".liner").hide() : $(".liner").show();
		}

		var offset_top = Meipian.getThisTop();
		var box_top = $(".section-container").height();
		var oldtop = parseInt($content.css("top"));
		var delta = e.originalEvent.detail > 0 ? -1 : 1;
		if(delta > 0) {
			if(oldtop >= -20) {
				$content.css("top", 0)
			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		} else if(delta < 0) {
			if(-oldtop <= offset_top - box_top && -oldtop >= offset_top - box_top - 20) {
				$content.css("top", -(offset_top - box_top));
			} else if(offset_top <= box_top) {

			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		};
		scrollBar();
		oldtop = parseInt($content.css("top"));
		mouseScroll(oldtop);

		document.onmouseup = function(e) {
			document.onmousemove = null;
			clearInterval(timer);
			ele.style.zIndex = 0;
			shadow.style.display = "none";
			if(resize) {
				mouseInContentTop = e.pageY - 150 + Math.abs(parseInt(scrollContent.style.top) || 0);
				prev < 1 ? prev = 1 : prev = prev;
				if(prev == orderby) {
					that.style.position = "absolute";
					that.style.top = oldTop + "px";
					that.style.left = "15px";
				} else if(prev > orderby) {
					prev > maxOrderBy ? prev = maxOrderBy : prev = prev;
					for(var i = orderby + 1; i <= prev; i++) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i - 1);
					};
					that.style.position = "absolute";
					that.style.left = "15px";
					$(that).attr("data-orderby", prev);
					Meipian.orderbyPosition();
					$(".liner").hide();
				} else {
					for(var i = orderby - 1; i >= prev; i--) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i + 1)
					};
					that.style.position = "absolute";
					that.style.left = "15px";
					$(that).attr("data-orderby", prev)
					Meipian.orderbyPosition();
					$(".liner").hide();
				}

			} else {
				if(dropDown) {
					that.style.position = "absolute";
					that.style.left = "15px";
					for(var i = orderby - 1; i > 0; i--) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i + 1)
					};
					that.setAttribute("data-orderby", 1);
					Meipian.orderbyPosition();
				} else {
					for(var i = orderby + 1; i <= maxOrderBy; i++) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i - 1);
					};
					that.style.position = "absolute";
					that.style.left = "15px";
					that.setAttribute("data-orderby", maxOrderBy);
					Meipian.orderbyPosition();
				}
				$(".liner").hide();
			}
			Meipian.orderbyPosition();
			bindScroll();
			edit(ele);
			$(document).unbind();
			this.onmouseup = null;
			scrollBar();
			oldtop = parseInt($content.css("top"));
			mouseScroll(oldtop);
		}
	});

	$(document).on("mousewheel", function(e) {
		clearInterval(timer);
		if(throttle) {
			Meipian.orderbyPosition();
			throttle = false;
			shadow.style.display = "block";
			shadow.style.top = $(ele).css("top");
		}
		left = e.pageX - offsetX;
		top = e.pageY - offsetY;
		that.style.left = left + "px";
		that.style.top = top + "px";
		if(e.clientY < 150) {
			resize = false;
		} else if(e.clientY > body.offsetHeight - 97) {
			resize = false;
		} else {
			resize = true;
			mouseInContentTop = e.pageY - 150 + Math.abs(parseInt(scrollContent.style.top) || 0);
			count = Math.round(mouseInContentTop / 130);
			if(count > orderby) {
				count > maxOrderBy ? count = maxOrderBy : count = count;
				prev = count;
				$(".liner").css({
					"top": count * 130 + 8
				})
			} else if(count < orderby) {
				prev = count + 1;
				$(".liner").css({
					"top": count * 130 + 8
				})
			} else {
				prev = orderby;
			}
			prev == orderby ? $(".liner").hide() : $(".liner").show();
		}

		var offset_top = Meipian.getThisTop();
		var box_top = $(".section-container").height();
		var oldtop = parseInt($content.css("top"));
		var delta = e.deltaY > 0 ? 1 : -1;
		if(delta > 0) {
			if(oldtop >= -20) {
				$content.css("top", 0)
			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		} else if(delta < 0) {
			if(-oldtop <= offset_top - box_top && -oldtop >= offset_top - box_top - 20) {
				$content.css("top", -(offset_top - box_top));
			} else if(offset_top <= box_top) {

			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		};
		scrollBar();
		oldtop = parseInt($content.css("top"));
		mouseScroll(oldtop);

		document.onmouseup = function(e) {
			document.onmousemove = null;
			clearInterval(timer);
			ele.style.zIndex = 0;
			shadow.style.display = "none";
			if(resize) {
				mouseInContentTop = e.pageY - 150 + Math.abs(parseInt(scrollContent.style.top) || 0);
				prev < 1 ? prev = 1 : prev = prev;
				if(prev == orderby) {
					that.style.position = "absolute";
					that.style.top = oldTop + "px";
					that.style.left = "15px";
				} else if(prev > orderby) {
					prev > maxOrderBy ? prev = maxOrderBy : prev = prev;
					for(var i = orderby + 1; i <= prev; i++) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i - 1);
					};
					that.style.position = "absolute";
					that.style.left = "15px";
					$(that).attr("data-orderby", prev);
					Meipian.orderbyPosition();
					$(".liner").hide();
				} else {
					for(var i = orderby - 1; i >= prev; i--) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i + 1)
					};
					that.style.position = "absolute";
					that.style.left = "15px";
					$(that).attr("data-orderby", prev)
					Meipian.orderbyPosition();
					$(".liner").hide();
				}

			} else {
				if(dropDown) {
					that.style.position = "absolute";
					that.style.left = "15px";
					for(var i = orderby - 1; i > 0; i--) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i + 1)
					};
					that.setAttribute("data-orderby", 1);
					Meipian.orderbyPosition();
				} else {
					for(var i = orderby + 1; i <= maxOrderBy; i++) {
						$(".mp-item[data-orderby='" + i + "']")
							.attr("data-orderby", i - 1);
					};
					that.style.position = "absolute";
					that.style.left = "15px";
					that.setAttribute("data-orderby", maxOrderBy);
					Meipian.orderbyPosition();
				}
				$(".liner").hide();
			}
			$(document).unbind();
			Meipian.orderbyPosition();
			bindScroll();
			edit(ele);
			this.onmouseup = null;
			scrollBar();
			oldtop = parseInt($content.css("top"));
			mouseScroll(oldtop);
		}
	});

	document.onmouseup = function(e) {
		document.onmousemove = null;
		clearInterval(timer);
		ele.style.zIndex = 0;
		shadow.style.display = "none";
		if(resize) {
			mouseInContentTop = e.pageY - 150 + Math.abs(parseInt(scrollContent.style.top) || 0);
			prev < 1 ? prev = 1 : prev = prev;
			if(prev == orderby) {
				that.style.position = "absolute";
				that.style.top = oldTop + "px";
				that.style.left = "15px";
			} else if(prev > orderby) {
				prev > maxOrderBy ? prev = maxOrderBy : prev = prev;
				for(var i = orderby + 1; i <= prev; i++) {
					$(".mp-item[data-orderby='" + i + "']")
						.attr("data-orderby", i - 1);
				};
				that.style.position = "absolute";
				that.style.left = "15px";
				$(that).attr("data-orderby", prev);
				Meipian.orderbyPosition();
				$(".liner").hide();
			} else {
				for(var i = orderby - 1; i >= prev; i--) {
					$(".mp-item[data-orderby='" + i + "']")
						.attr("data-orderby", i + 1)
				};
				that.style.position = "absolute";
				that.style.left = "15px";
				$(that).attr("data-orderby", prev)
				Meipian.orderbyPosition();
				$(".liner").hide();
			}

		} else {
			if(dropDown) {
				that.style.position = "absolute";
				that.style.left = "15px";
				for(var i = orderby - 1; i > 0; i--) {
					$(".mp-item[data-orderby='" + i + "']")
						.attr("data-orderby", i + 1)
				};
				that.setAttribute("data-orderby", 1);
				Meipian.orderbyPosition();
			} else {
				for(var i = orderby + 1; i <= maxOrderBy; i++) {
					$(".mp-item[data-orderby='" + i + "']")
						.attr("data-orderby", i - 1);
				};
				that.style.position = "absolute";
				that.style.left = "15px";
				that.setAttribute("data-orderby", maxOrderBy);
				Meipian.orderbyPosition();
			}
			$(".liner").hide();
			//          that.style.position = "absolute";
			//          that.style.top = oldTop + "px";
			//          that.style.left = "15px";
		}
		Meipian.orderbyPosition();
		bindScroll();
		edit(ele);
		$(document).unbind();
		this.onmouseup = null;
		scrollBar();
		oldtop = parseInt($content.css("top"));
		mouseScroll(oldtop);
	}
}

var $content = $(".mp-section");
var outTimer = true;

function bindScroll() {
	$("#mp-masterplate").on("DOMMouseScroll", function(e) {
		var offset_top = Meipian.getThisTop();
		var box_top = $(".section-container").height();
		var oldtop = parseInt($content.css("top"));
		var delta = e.originalEvent.detail > 0 ? -1 : 1;
		if(delta > 0) {
			if(oldtop <= 0 && oldtop >= -20) {
				$content.css("top", 0)
			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		} else if(delta < 0) {
			if(-oldtop <= offset_top - box_top && -oldtop >= offset_top - box_top - 20) {
				$content.css("top", -(offset_top - box_top));
			} else if(offset_top <= box_top) {

			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		};
		scrollBar();
		oldtop = parseInt($content.css("top"));
		mouseScroll(oldtop);
	});

	$("#mp-masterplate").on("mousewheel", function(e) {
		var offset_top = Meipian.getThisTop();
		var box_top = $(".section-container").height();
		var oldtop = parseInt($content.css("top"));
		var delta = e.deltaY > 0 ? 1 : -1;
		if(delta > 0) {
			if(oldtop <= 0 && oldtop >= -20) {
				$content.css("top", 0)
			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		} else if(delta < 0) {
			if(-oldtop <= offset_top - box_top && -oldtop >= offset_top - box_top - 20) {
				$content.css("top", -(offset_top - box_top));
			} else if(offset_top <= box_top) {

			} else {
				$content.css("top", (oldtop + delta * 20));
			}
		};
		scrollBar();
		oldtop = parseInt($content.css("top"));
		mouseScroll(oldtop);
	});
	//  $('.mp-masterplate').mousewheel(function(event, delta, deltaX, deltaY) {
	//      var delta = delta > 0 ? delta = 1 : -1;
	//
	//      if (delta > 0) {
	//          if (oldtop <= 0 && oldtop >= -20) {
	//              $content.css("top", 0)
	//          } else {
	//              $content.css("top", (oldtop + delta * 20));
	//          }
	//      } else if (delta < 0) {
	//          if (-oldtop <= offset_top - box_top && -oldtop >= offset_top - box_top - 20) {
	//              $content.css("top", -(offset_top - box_top));
	//          } else if (offset_top <= box_top) {
	//
	//          } else {
	//              $content.css("top", (oldtop + delta * 20));
	//          }
	//      };
	//      scrollBar();
	//      oldtop = parseInt($content.css("top"));
	//      mouseScroll(oldtop);
	//  });
}
bindScroll();

function unBindScroll() {
	$('#mp-masterplate').unbind();
}