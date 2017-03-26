var servererror;// = JSON.parse(localStorage.servererror).content;
//servererror = JSON.parse(servererror);
var access_token = '6724166|4ef57d97ebfc0459da4077f558395e04';
var web_has_login = '0';
web_has_login = parseInt(web_has_login);

jQuery( document ).ready
( 
  function ( $ ) 
  {
    var mp_id = getQueryString('id');
    var user_id = access_token.split('|');
    $('#web-pvw').attr('src', Meipian.src + mp_id + '?from=webview&user=' + user_id[0]);
    $('.user-name').attr("data-userid", user_id[0]);
    var searchObj = Meipian.searchParse();
    var hasView = 0;

    if (mp_id) {
        var listJson = {
            controller: 'article',
            action: 'full',
            'access_token': access_token,
            'article_id': mp_id
        };
        Meipian.ajaxApi(listJson,
        function(res) {
            if (res.code == '1000') {
                var section = $('.mp-section');
                var content = res.content;
                $('#access_token').attr({
                    'data-categoryid': res.category_id,
                    'data-privacy': res.privacy,
                    'data-state': res.state
                });
                if (res.state > 10) {
                    $('#work-null').find('.tools button').attr('disabled', 'disabled');
                }
                $('#templateWrap a[data-num="' + getThemeNum(res.theme) + '"]').addClass('sel');
				
                //封面
                var $header = $('.essay-header').css('background-image', 'url(' + res.cover_img_url + ')').attr('data-src', res.cover_img_url);
				if (res.music_desc != '') 
				{
                    var item_content_text = res.music_desc.split('|');
                    var desc = item_content_text[0] + ' - ' + item_content_text[1];
                    $header.find('.icon-music').attr('data-src', res.music_url).text(desc).attr('data-desc', res.music_desc);
                    if (localStorage.musicList) {
                        var musicList = JSON.parse(localStorage.musicList);
                        var flag = true;
                        for (var i = 0; i < musicList.length; i++) {
                            if (res.music_url == musicList[i].src) {
                                flag = false;
                            }
                        }
                        if (flag) {
                            var obj = {};
                            obj.src = res.music_url;
                            obj.txt = desc;
                            obj.desc = res.music_desc;
                            musicList.push(obj);
                            localStorage.musicList = JSON.stringify(musicList);
                        }
                    } else {
                        var musicList = [];
                        var obj = {};
                        obj.src = res.music_url;
                        obj.txt = desc;
                        obj.desc = res.music_desc;
                        musicList.push(obj);
                        localStorage.musicList = JSON.stringify(musicList);
                    }
                } else if (res.music_desc == "" && res.music_url == "") {
                    $("i.music").text("添加音乐");
                } else {
                    $header.find('i.icon-music').attr('data-src', res.music_url);
                    var recommusicList = JSON.parse(localStorage.recommusicList);
                    recommusicList = JSON.parse(recommusicList.content);
                    for (var i = 0; i < recommusicList.length; i++) {
                        for (var j = 0; j < recommusicList[i].list.length; j++) {
                            if (recommusicList[i].list[j].url == res.music_url) {
                                $header.find('.icon-music').text(recommusicList[i].list[j].name);
                            }
                        }
                    }
                }
                $('h2.edit-title').text(res.title == "我的美篇" ? "点击设置标题": res.title);
                $.each(content,
                function(idx, obj) {
                    var demo = $('.mp-item.demo').clone();
                    var color = 'c' + (content[idx].text_color ? content[idx].text_color: 0);
                    demo.addClass(content[idx].text_center ? 'center': '').addClass(color).addClass(content[idx].text_strong ? 'bold': '' + ' ').addClass(content[idx].text_large ? 'size': '').attr('color', color);
                    if (content[idx].img_url) {
                        demo.addClass('img').removeClass('demo').attr('data-orderby', idx + 1).find('.left').css('background-image', 'url("' + content[idx].img_url + '")').attr('data-src', content[idx].img_url);
                        demo.find('.content p').html(content[idx].text ? decodeContent(content[idx].text) : "");
                    } else if (content[idx].video_id) {
                        demo.addClass('video').removeClass('demo').attr('data-orderby', idx + 1).find('.left').css('background-image', 'url("' + content[idx].video_thumbnail + '")').attr('data-id', content[idx].video_id).attr('data-cover', content[idx].video_thumbnail);
                        demo.find('.content p').html(content[idx].text ? decodeContent(content[idx].text) : "");
                    } else if (content[idx].video_url) {
                        demo.addClass('selfVideo').removeClass('demo').attr('data-orderby', idx + 1).find('.left').css('background-image', 'url("' + content[idx].video_thumbnail + '")').attr('data-url', content[idx].video_url).attr('data-cover', content[idx].video_thumbnail);
                        demo.find('.content p').html(content[idx].text ? decodeContent(content[idx].text) : "");
                    } else {
                        demo.addClass('text').removeClass('demo').attr('data-orderby', idx + 1);
                        demo.find('.content p').html(content[idx].text ? decodeContent(content[idx].text) : "");
                    }
                    var desc = content[idx].link_desc;
                    var src = content[idx]['link'];
                    if (desc && src) {
                        demo.find('b.link').text('[链接:' + content[idx].link_desc + ']').attr({
                            'data-src': content[idx].link,
                            'data-desc': content[idx].link_desc
                        });
                    }
                    section.append(demo);
                });
                scrollBar();
            } else if (res.code == '1006' || res.code == '9999') {
                Meipian.backLogin(res.code);
            } else {
                //				Meipian.alertMessage(err[res.code]);
            }
            Meipian.sectionHeight();
            Meipian.orderbyPosition();
            sum = Meipian.maxImgLength();
        });
    };

    var res = {content:"{}"};//JSON.parse(localStorage.recommusicList);
    var div = $("<div></div>");
	res = JSON.parse(res.content);
    for (var i = 0; i < res.length; i++) {
        var title = $('<h3></h3>').text(res[i].category);
        var list = $('<div class="list"></div>');
        for (var j = 0; j < res[i].list.length; j++) {
            if (j == res[i].list.length - 1) {
                list.append($('<p class="last iconfont" onclick="setDefaultMusic(this)"></p>').text(res[i].list[j].name).attr('data-src', res[i].list[j]['url']));
            } else {
                list.append($('<p class="iconfont" onclick="setDefaultMusic(this)"></').text(res[i].list[j].name).attr('data-src', res[i].list[j]['url']));
            }
        }
        div.append(title).append(list);
    };
    $('#work-music .section.default').append(div);
    $('#mp-pvw').click(function(event) {
        /* Act on the event */
        var pvw = $('#work-null');
        pvw.show().siblings().hide();
        var data = Meipian.getJSONData(access_token, getQueryString('id'));
        Meipian.ajaxApi(data,
        function(res) {
            if (res.code == 1000) {
                var src = $('#web-pvw').attr('src');
                $('#web-pvw').attr('src', src);
            } else if (res.code == 9999 || res.code == 1006) {
                Meipian.backLogin(res.code);
            } else {
                Meipian.alertMessage(servererror[res.code]);
            }
        });

    });
    $("#article_finish").click(function() {
        $("body").append('<div id="alert"><div class="win win-del"><p style="text-align:center;font-size:18px;margin:40px 0 0">正在保存</p><img src="img/loadingBar.gif" style="width:85%;margin:15px auto;"/></div></div>');
        var data = Meipian.getJSONData(access_token, getQueryString('id'));
        var keyWord1 = ["集赞", "转发", "集满", "转发", "集齐", "分享", "转疯了", "必转"];
        var keyWord2 = ["捐款", "募捐", "爱心众筹", "账号", "卡号", "汇款", "转账", "打款", "好心人", "求救"];
        var checkData = JSON.stringify(data.content);
        var arr = [];
        for (var i = 0; i < keyWord1.length; i++) {
            if (checkData.indexOf(keyWord1[i]) > 0) {
                arr.push(1);
            }
        };
        for (var i = 0; i < keyWord2.length; i++) {
            if (checkData.indexOf(keyWord2[i]) > 0) {
                if (arr[0] == 1) {
                    arr[1] = 2;
                } else if (!arr[0]) {
                    arr[0] = 2;
                }
            }
        };
        if (arr.length == 2) {
            Meipian.warning(1,
            function() {
                Meipian.ajaxApi(data,
                function(res) {
                    if (res.code == 1000) {
                        window.location.href = '/list.php?over=' + getQueryString('id');
                    } else if (res.code == 9999 || res.code == 1006) {
                        Meipian.backLogin(res.code);
                    } else {
                        Meipian.alertMessage(servererror[res.code]);
                    }
                });
            })
        } else if (arr.length == 1) {
            Meipian.warning(arr[0],
            function() {
                Meipian.ajaxApi(data,
                function(res) {
                    if (res.code == 1000) {
                        window.location.href = '/list.php?over=' + getQueryString('id');
                    } else if (res.code == 9999 || res.code == 1006) {
                        Meipian.backLogin(res.code);
                    } else {
                        Meipian.alertMessage(servererror[res.code]);
                    }
                });
            })
        } else {
            Meipian.ajaxApi(data,
            function(res) {
                $("#alert").remove();
                if (res.code == 1000) {
                    window.location.href = '/list.php?over=' + getQueryString('id') + "&hasView=" + hasView;
                } else if (res.code == 9999 || res.code == 1006) {
                    Meipian.backLogin(res.code);
                } else {
                    Meipian.alertMessage(servererror[res.code]);
                }
            });
        }
    });
    $('#master').click(function() {
        var $this = $(this);
        var $master = $('.masterplate');
        if ($master.is(':hidden')) {
            $master.fadeIn();
            // $('.masterplate .item').width(($('.masterplate .item a').width() + 10) * $('.masterplate .item a').length);
            var width = parseInt($(".masterplate .label").width());
            $(".masterplate .label").css("margin-left", -(width / 2));
            $this.addClass('on');
        } else {
            $master.fadeOut();
            $this.removeClass('on');
        }
    });
    $('.masterplate .item a').click(function() {
        var $this = $(this);
        var terplate = $this.attr('data-num');
        var mp_id = getQueryString('id');
        var plate_id = $this.attr('data-num');
        var json = {
            controller: 'article',
            action: 'setting',
            'access_token': access_token,
            'article_id': mp_id,
            theme: parseInt(plate_id)
        };
        Meipian.ajaxApi(json,
        function(res) {
            if (res.code == 1000) {
                var dataNum = $this.attr("data-num");
                $("#templateWrap a").removeClass("sel");
                $("#templateWrap a[data-num=" + dataNum + "]").addClass("sel");
                var $page = $('#web-pvw');
                var src = $page.attr('src');
                $page.attr('src', src);
            } else if (res.code == 9999 || res.code == 1006) {
                Meipian.backLogin(res.code);
            } else {
                Meipian.alertMessage(servererror[res.code]);
            }
        });
    });
    var clip = '';
    $('#share').click(function() {
        var $sel = $('.list-item.sel');
        var $token = $('#access_token');
        var mp_id = getQueryString('id');
        var category_id = $token.attr('data-categoryid');
        var privacy = $token.attr('data-privacy');
        if (category_id == 0) {
            privacy = 1;
            Meipian.setPrivacy(privacy,
            function(state) {
                privacy = state;
                var json = {
                    controller: 'article',
                    action: 'setting',
                    'access_token': access_token,
                    'article_id': mp_id,
                    'category_id': 99,
                    'privacy': privacy
                };
                if (state == '2' || state == 2) {
                    json.password = $.md5("eV7J1S~34Gp{]Fxs" + $.md5(arguments[1]) + "#dXf^adFxTdfKh*+");
                }
                Meipian.ajaxApi(json,
                function(res) {
                    if (res.code == 1000) {
                        $token.attr('data-categoryid', 9999);
                        $token.attr('data-privacy', privacy);
                    } else if (res.code == 9999 || res.code == 1006) {
                        Meipian.backLogin(res.code);
                    } else {
                        var code = res.code;
                        Meipian.alertMessage(servererror[code]);
                    }
                });
                var src = Meipian.src + mp_id;
                if (privacy != 3) {
                    $.confirm(src, 'share',
                    function() {
                        alert(1);
                    },
                    function() {
                        alert(2);
                    });
                }
                clip = new ZeroClipboard(document.getElementById("copy"));
                $('#copy').click(function() {
                    Meipian.alertMessage('复制成功');
                })
            });
        } else {
            if (privacy != 3) {
                var json = {
                    controller: 'article',
                    action: 'setting',
                    'access_token': access_token,
                    'article_id': mp_id,
                    'category_id': 99
                    //					'privacy':privacy
                };
                Meipian.ajaxApi(json,
                function(res) {
                    if (res.code == 1000) {
                        var src = Meipian.src + mp_id;
                        $.confirm(src, 'share',
                        function() {
                            alert(1);
                        },
                        function() {
                            alert(2);
                        });
                        clip = new ZeroClipboard(document.getElementById("copy"));
                        $('#copy').click(function() {
                            Meipian.alertMessage('复制成功');
                        })
                    } else if (res.code == 9999 || res.code == 1006) {
                        Meipian.backLogin(res.code);
                    } else {
                        var code = res.code;
                        Meipian.alertMessage(servererror[code]);
                    }
                });
            } else {
                Meipian.alertMessage('私密文章不能分享');
            }
        };

 
    });

    var showTip = 1;
    $("#showTips").click(function() {
        if (!web_has_login) { //初次使用为0，非初次使用1
            if (parseInt(searchObj.hasView)) { //判断是否是编辑页面回来
                showTip = 2; //showTip为2时不显示2次点击，为1显示二次点击
            } else {
                showTip = 1;
                searchObj.hasView = 1; //初次登陆弹出提示框后，讲标志位改为1
            }
        } else {
            showTip = 2;
        };
        Meipian.editorHelper();
        var id = $(".meipian-right div:visible").attr("id");
        $("#editorHelper div").css("display", "none");
        if (showTip == 1) {
            $("#editorHelper .null_templates").css("display", "block");
            $("#editorHelper .null_finish").css("display", "block");
            $("#editorHelper .item_tips").css("display", "block");
            return false;
        }
        switch (id) {
        case "work-null":
            $("#editorHelper .null_share").css("display", "block");
            $("#editorHelper .null_finish").css("display", "block");
            $("#editorHelper .null_templates").css("display", "block");
            break;
        case "work-title":
            $("#editorHelper .title_finish").css("display", "block");
            $("#editorHelper .title_content").css("display", "block");
            break;
        case "work-cover":
            $("#editorHelper .cover_img").css("display", "block");
            $("#editorHelper .cover_finish").css("display", "block");
            break;
        case "work-music":
            if ($("#music-search").text().trim() == "在线搜索") {
                $("#editorHelper .local_music_search").css("display", "block");
                $("#editorHelper .local_music_finish").css("display", "block");
                $("#editorHelper .local_music_choose").css("display", "block");
            } else if ($("#music-search").text().trim() == "推荐音乐") {
                $("#editorHelper .net_music_search").css("display", "block");
                $("#editorHelper .net_music_back").css("display", "block");
                $("#editorHelper .net_music_finish").css("display", "block");
            }
            break;
        case "work-text":
            $("#editorHelper .txt_tools").css("display", "block");
            $("#editorHelper .txt_link").css("display", "block");
            $("#editorHelper .txt_content").css("display", "block");
            $("#editorHelper .txt_finish").css("display", "block");
            $("#editorHelper .txt_addImg").css("display", "block");
            break;
        case "work-img":
            $("#editorHelper .img_change").css("display", "block");
            $("#editorHelper .img_finish").css("display", "block");
            $("#editorHelper .img_del").css("display", "block");
            $("#editorHelper .img_tools").css("display", "block");
            $("#editorHelper .img_link").css("display", "block");
            $("#editorHelper .img_content").css("display", "block");
            break;
        case "work-video":
            $("#editorHelper .video_tools").css("display", "block");
            $("#editorHelper .video_link").css("display", "block");
            $("#editorHelper .video_content").css("display", "block");
            $("#editorHelper .video_finish").css("display", "block");
            break;
        default:
            break;
        }
        $("#editorHelper .item_tips").css("display", "block");
        $("#editorHelper .title_tips").css("display", "block");
        $("#editorHelper .preview_tips").css("display", "block");

    });
    
    $("#editorHelper").click(function() {
        if (showTip == 1) {
            $("#editorHelper div").css("display", "none");
            $("#showTips").addClass("tip");
            showTip++;
        } else if (showTip == 2) {
            $(this).css("display", "none");
            $("#showTips").removeClass("tip");
        }
    });
   if (!web_has_login) {
      if (parseInt(searchObj.hasView)) {

      } 
      else 
      {
         $("#showTips").trigger("click");
         hasView = 1;
      }
   }

    /**
			 *  点击显示颜色列表 
			 */
    $('body').click(function(event) {
        /* Act on the event */
        $('.color-list').fadeOut().siblings("a").removeClass("on");
        $('.blod-list').fadeOut().siblings("a").removeClass("on");
        $('.size-list').fadeOut().siblings("a").removeClass("on");
        $('.center-list').fadeOut().siblings("a").removeClass("on");
    });
    
    $('.color-list').click(function(event) {
        /* Act on the event */
        event.stopPropagation();
    });

    $(".set-sup").click(function() {
        var tIE = testIE();
        document.execCommand('formatBlock', false, '<h5>');
        if (tIE) {
            tIE.bold && document.execCommand("bold");
            tIE.italic && document.execCommand("italic");
            tIE.underline && document.execCommand("underline", false, null);
        }
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-normal").click(function() {
        var tIE = testIE();
        document.execCommand('formatBlock', false, '<h3>');
        if (tIE) {
            tIE.bold && document.execCommand("bold");
            tIE.italic && document.execCommand("italic");
            tIE.underline && document.execCommand("underline", false, null);
        }
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-big").click(function() {
        var tIE = testIE();
        document.execCommand('formatBlock', false, '<h1>');
        if (tIE) {
            tIE.bold && document.execCommand("bold");
            tIE.italic && document.execCommand("italic");
            tIE.underline && document.execCommand("underline", false, null);
        }
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-bold").click(function() {
        document.execCommand("bold");
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-italic").click(function() {
        document.execCommand("italic");
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-underline").click(function() {
        document.execCommand("underline", false, null);
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-left").click(function(event) {
        event.stopPropagation();
        $(this).toggleClass("had").siblings().removeClass("had");
        document.execCommand("justifyLeft", false, null);
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-right").click(function(event) {
        event.stopPropagation();
        $(this).toggleClass("had").siblings().removeClass("had");
        document.execCommand("justifyRight", false, null);
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".set-center").click(function(event) {
        event.stopPropagation();
        $(this).toggleClass("had").siblings().removeClass("had");
        document.execCommand("justifyCenter", false, null);
        var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
        $(".mp-item[data-orderby=" + orderby + "]").find("p").html($(".textarea:visible").html());
    });
    $(".undo").click(function(event) {
        document.execCommand('Undo');
    });
    $(".redo").click(function(event) {
        document.execCommand('Redo');
    });

    $(window).on("keyup",
		function() {
			var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
			if (textDom.text().replace(/(\n)/g).length <= 5000) {
				window.str = textDom.html();
			} else {
				textDom.html(window.str);
				Meipian.alertMessage("输入不能超过5000字");

			};
			$(".mp-item[data-orderby=" + orderby + "]").find("p").html(textDom.html());
		}
	);
	$(".tools").click(function() {
        $(this).siblings(".textarea").trigger("click");
    });

    $(".textarea").on("click",
    function(e) {
        var items = {};
        if (document.queryCommandState('bold')) {
            items.bold = true;
        }
        if (document.queryCommandState('italic')) {
            items.italic = true;
        }
        if (document.queryCommandState('subscript')) {
            items.subscript = true;
        }
        if (document.queryCommandState('superscript')) {
            items.superscript = true;
        }
        if (document.queryCommandState('underline')) {
            items.underline = true;
        }
        if (document.queryCommandState('Redo')) {
            items.Redo = true;
        }
        if (document.queryCommandState('Undo')) {
            items.Undo = true;
        }
        if (checkBrowser1() != "IE") {
            if (document.queryCommandState('justifyCenter')) {
                items.justifyCenter = true;
            }
            if (document.queryCommandState('justifyLeft')) {
                items.justifyLeft = true;
            }
            if (document.queryCommandState('justifyRight')) {
                items.justifyRight = true;
            }
        }
        try {
            var formatBlock = document.queryCommandValue('formatBlock');
            if (formatBlock == "h1" || formatBlock == "h5" || formatBlock == "标题 1" || formatBlock == "标题 5") {
                formatBlock == "h1" || formatBlock == "标题 1" ? items.h1 = true: items.h1 = false;
                formatBlock == "h5" || formatBlock == "标题 5" ? items.h5 = true: items.h5 = false;
            } else {
                items.h3 = true;
            }
        } catch(e) {
            //TODO handle the exception
        }

        //		    return items;
        items.bold ? $(".set-bold").addClass("had") : $(".set-bold").removeClass("had");
        items.italic ? $(".set-italic").addClass("had") : $(".set-italic").removeClass("had");
        items.underline ? $(".set-underline").addClass("had") : $(".set-underline").removeClass("had");
        items.justifyLeft ? $(".set-left").addClass("had") : $(".set-left").removeClass("had");
        items.justifyRight ? $(".set-right").addClass("had") : $(".set-right").removeClass("had");
        items.justifyCenter ? $(".set-center").addClass("had") : $(".set-center").removeClass("had");
        items.h1 ? $(".set-big").addClass("had") : $(".set-big").removeClass("had");
        items.h3 ? $(".set-normal").addClass("had") : $(".set-normal").removeClass("had");
        items.h5 ? $(".set-sup").addClass("had") : $(".set-sup").removeClass("had");
        items.Redo ? $(".redo").addClass("had") : $(".redo").removeClass("had");
        items.Undo ? $(".undo").addClass("had") : $(".undo").removeClass("had");
    });
    $('[contenteditable]').each(function() {
        // 干掉IE http之类地址自动加链接
        try {
            document.execCommand("AutoUrlDetect", false, false);
        } catch(e) {}

        $(this).on('paste',
        function(e) {
            e.preventDefault();
            var text = "";

            if (window.clipboardData && clipboardData.setData) {
                // IE
                text = window.clipboardData.getData('text');
            } else {
                text = (e.originalEvent || e).clipboardData.getData('text/plain') || "";
            }
            if (document.body.createTextRange) {
                if (document.selection) {
                    textRange = document.selection.createRange();
                } else if (window.getSelection) {
                    sel = window.getSelection();
                    var range = sel.getRangeAt(0);

                    // 创建临时元素，使得TextRange可以移动到正确的位置
                    var tempEl = document.createElement("span");
                    tempEl.innerHTML = "&#FEFF;";
                    range.deleteContents();
                    range.insertNode(tempEl);
                    textRange = document.body.createTextRange();
                    textRange.moveToElementText(tempEl);
                    tempEl.parentNode.removeChild(tempEl);
                }
                textRange.text = text;
                textRange.collapse(false);
                textRange.select();
            } else {
                // Chrome之类浏览器
                document.execCommand("insertText", false, text);
            }
            var orderby = $(".textarea:visible").parents(".win-edite").attr("orderby");
            console.log(textDom.text().length);
            if ($(".textarea:visible").text().replace(/(\n)/g).length <= 5000) {
                window.str = $(".textarea:visible").html();
            } else {
                $(".textarea:visible").html(window.str);
                Meipian.alertMessage("输入不能超过5000字");
            };
            $(".mp-item[data-orderby=" + orderby + "]").find("p").html(textDom.html());
        });
    });

    setInterval(function() {
        var data = JSON.stringify(Meipian.getJSONData($('#access_token').attr('data-token'), getQueryString('id')));
        var checked = Meipian.checkData(localStorage.getItem('oldData'), data);
        if (!checked) {
            var data = Meipian.getJSONData(access_token, getQueryString('id'));
            Meipian.ajaxApi(data,
            function(res) {
                if (res.code == 1000) {
                    localStorage.setItem('oldData', JSON.stringify(data));
                } else if (res.code == 9999 || res.code == 1006) {
                    Meipian.backLogin(res.code);
                } else {
                    Meipian.alertMessage(servererror[res.code]);
                }
            });
        };
    },
    120000); //120000
    scrollBar();
 }
);

 