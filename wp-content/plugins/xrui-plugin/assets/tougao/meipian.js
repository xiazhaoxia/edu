var Meipian = {
    src: "https://a.meipian.cn/",
    /*
     * 获取当前点击的对象是第几个
     */
    maxOrderby: function() { //获取index值方法
        var max = 0;
        $(".mp-item").each(function(index, ele) {
            var $this = $(this);
            if (parseInt($this.attr('data-orderby')) > max) {
                max = $this.attr('data-orderby');
            }
        });
        return max;
    },
    /*
     * 获取 top 值
     */
    getThisTop: function() {
        var num = $(".mp-item").not(".demo").length;
        var height = 110;
        //		return ((height + 20) * num) + 20; //((段落的高度 + 每个段落的上面的间距) * 段落的个数) + 第一个的 top 间距)
        if ($(".add-section").is(":visible")) {
            return ((height + 20) * num) + 20 + 30;
        } else {
            return ((height + 20) * num) + 20; //((段落的高度 + 每个段落的上面的间距) * 段落的个数) + 第一个的 top 间距)
        };
        // scrollBar();
    },
    /*
     * 获取下一个段落的 id
     */
    nextItem: function(idx, cb) {
        $('.mp-item').not('.demo').each(function(index, ele) {
            var $this = $(this);
            var orderby = parseInt($this.attr('data-orderby'));
            if (orderby > idx) {
                cb && cb($this);
            };
        });
    },
    /*
     * 获取段落的高度
     */
    sectionHeight: function(bo) {
        var $item = $('.mp-item')
        var boxHeight = this.getThisTop();
        $('.mp-section').height(boxHeight);
        return boxHeight;
    },
    getMaxOrderBy: function() {
        var num = 0;
        $(".mp-section").find(".mp-item").each(function() {
            parseInt($(this).attr("data-orderby")) > num ? num = $(this).attr("data-orderby") : num = num;
        });
        return num;
    },
    /*
     * 获取图片的数量
     */
    howImgNumber: function(cb) {
        var numbers = 0;
        var arr = [];
        $(".mp-item.img").each(function(index, ele) {
            arr.push(parseInt($(this).attr("data-orderby")));
        });
        numbers = arr.length;
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    var num = arr[i];
                    arr[i] = arr[j];
                    arr[j] = num;
                }
            }
        }
        for (var i = 0; i < arr.length; i++) {
            var $this = $(".mp-item[data-orderby=" + arr[i] + "]");
            cb && cb($this);
        }
        //      $(".mp-item").not('.demo').each(function(index, ele) {
        //          var $this = $(this);
        //          if ($this.is(".img")) {
        //              number++;
        //              cb && cb($this);
        //          }
        //      });
        return numbers;
    },
    orderbyPosition: function() {
        var $item = $('.mp-item').not('.demo');
        var itemArr = [];
        itemArr[0] = 20;
        for (var i = 1; i < $item.length; i++) {
            itemArr[i] = 130 * i + 20;
        };
        $item.each(function() {
            var this_order = parseInt($(this).attr("data-orderby"));
            var arr_order = this_order - 1;
            $(this).attr("data-orderby", this_order);
            $(this).css("top", itemArr[arr_order]);
        });
    },
    orderbyPositionArray: function() {
        var $item = $('.mp-item').not('.demo');
        var itemArr = [];
        itemArr[0] = 20;
        for (var i = 1; i < $item.length; i++) {
            itemArr[i] = 130 * i + 20;
        };
        return itemArr;
    },
    /**
     * 获取文章数据
     * @param  {[string]} access_token [description]
     * @param  {{string}} id           [article_id]
     * @return {[json]}              [文章json 数据]
     */
    getJSONData: function(access_token, id) {
        var arr = new Array();
        var textArr = [];
        var $item = $('.mp-item').not('.demo');
        var theme = $('#templateWrap .templateContent a.sel').attr('data-num');
        var $music = $('.iconfont.music');
        var music_desc = $music.attr('data-desc') ? $music.attr('data-desc') : "";
        var temp;
        $item.each(function(index, val) {
            var $this = $(this);
            if ($this.find('p').text() != '' || $this.is('.img') || $this.is('.video') || $this.is('.selfVideo')) {
                var color = '0';
                var img_src = $this.is('.img') ? $this.find('.section .left').attr('data-src') : '';
                var video_id = $this.is('.video') ? $this.find('.left').attr('data-id') : '';
                var video_cover = $this.is('.video') || $this.is('.selfVideo') ? $this.find('.left').attr('data-cover') : '';
                var video_url = $this.is('.selfVideo') ? $this.find('.left').attr('data-url') : '';
                var $link = $this.find('.link');
                var item_data = {
                    'text': encodeContent($this.find('p')),
                    'text_strong': $this.is(".bold") ? 1 : 0,
                    'text_center': $this.is(".center") ? 1 : 0,
                    'text_large': $this.is(".size") ? 1 : 0,
                    'text_color': $this.attr('color') ? $this.attr('color').split('c')[1] : color,
                    'img_url': img_src,
                    'img_widht': 0,
                    'img_height': 0,
                    'video_id': video_id,
                    'video_url': video_url,
                    'video_thumbnail': video_cover,
                    'link': $link.attr('data-src') ? $link.attr('data-src') : '',
                    'link_desc': $link.attr('data-desc') ? $link.attr('data-desc') : '',
                    'orderby': parseInt($this.attr('data-orderby'))
                };
                arr.push(item_data);
                textArr.push($this.find('p').text());
            }
        });
        var abstract = "";
        $.each(textArr, function(i, v) {
            if (textArr[i] != "") {
                if (abstract.length <= 50) {
                    var num = 50 - abstract.length;
                    abstract += (textArr[i]).replace(/\s+/g, " ").replace(/(\n)+|(\r\n)+/g, "").replace(/["'\<\>]/g, "").substring(0, num) + " ";
                } else {
                    return false;
                }
            }
        });
        arr.sort(compare);
        arr.forEach(function(ele, idx, arr) {
            delete ele.orderby;
        });
        if (!theme) {
            theme = 0;
        }
        var MP_JSON = {
            "controller": "article",
            "action": "update",
            'article_id': id,
            "access_token": access_token,
            "title": $.trim($('.edit-title').text() == '点击设置标题' ? '我的美篇' : $('.edit-title').text()),
            "cover_img_url": $('.essay-header').attr('data-src'),
            "music_url": $music.attr('data-src') ? $music.attr('data-src') : "",
            "music_desc": music_desc,
            "theme": theme,
            "abstract": /\S/g.test(abstract) ? abstract.replace(/(\s*$)/g, "") : "分享自「美篇」",
            "content": arr
        }
        return MP_JSON;
    },
    /*
     * 获取状态
     */
    getStatus: function($this, $work) {
        var $work_text = $work.find('textarea').not("#work-title #content-text");
        $work_text.removeAttr("class");
//      console.log($work_text);
        $this.is('.bold') ? $work_text.addClass('bold').siblings('.tools').find('a.bold').addClass('on') : $work_text.removeClass('bold').siblings('.tools').find('a.bold').removeClass('on');
        $this.is('.center') ? $work_text.addClass('center').siblings('.tools').find('a.center').addClass('on') : $work_text.removeClass('center').siblings('.tools').find('a.center').removeClass('on');
        $this.is('.size') ? $work_text.addClass('size').siblings('.tools').find('a.size').addClass('on') : $work_text.removeClass('size').siblings('.tools').find('a.size').removeClass('on');
        //link
        $this.find('b.link').text().trim() != '' ? $work.find('.icon-iconfontlink').addClass('on') : $work.find('.icon-iconfontlink').removeClass('on');
        $this.find('b.link').text().trim() != '' ? $work.find('.linkshow').css("z-index", 999) : $work.find('.linkshow').css("z-index", -1);
        var color = $this.attr('color');
//      console.log(color);
        $work_text.addClass(color);
        var link = $this.find('.right-content>b');
        if (!isNull(link.text().trim())) {
            $work.find('.linkshow').find('i').addClass('icon-iconfontlink').attr('data-src', link.attr('data-src')).siblings('span').text(link.attr('data-desc'));
        } else {
            $work.find('.linkshow').find('i').removeClass('icon-iconfontlink').removeAttr('data-src').siblings('span').text('');
        }
    },
    getUserId: function() {
        return $('.user-name').attr("data-userid");
    },
    firstUpload: function(access_token, file) {
        var arr = new Array();
        $.each(file, function(idx, obj) {
            var item_data = {
                'img_url': 'http://static2.ivwen.com/' + file[idx].name,
                'img_widht': 0,
                'img_height': 0,
            };
            arr.push(item_data);
        });
        var MP_JSON = {
            "controller": "article",
            "action": "add",
            "access_token": access_token,
            "title": '我的美篇',
            "cover_img_url": 'http://static2.ivwen.com/' + file[0].name,
            "privacy": 3,
            "theme": 0,
            category_id: 0,
            "content": arr
        }
        return MP_JSON;
    },
    maxImgLength: function() {
        return 100 - $('.mp-item.img').length;
    },
    lastImg: function(dom, true_cb, false_cb) {
        var imgLength = $('.mp-item.img').length;
        if (imgLength > 1 || ($('.mp-item').length > 1 && !dom.is('.img'))) {
            true_cb && true_cb();
        } else {
            false_cb && false_cb();
        }
    },
    eachSectionIsCover: function(ele) { //更改封面方法
        var $item = ele.parents(".mp-item");
        var header_cover = $('.essay-header');
        var cover = header_cover.attr('data-src');
        var flag = false;
        var src = $item.find('.left').attr('data-src');
        if (src == cover) {
            flag = true;
        }
        //      $item.each(function() {
        //          var $this = $(this);
        //          var src = $this.find('.left').attr('data-src');
        //          if (src == cover) {
        //              flag = true;
        //          }
        //      });
        if (flag) {
            var arr = [];
            var imgArr = $(".mp-item.img");
            $.each(imgArr, function(index, ele) {
                arr.push($(ele).attr("data-orderby"));
            });
            var min = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (parseInt(min) > parseInt(arr[i])) {
                    min = arr[i];
                }
            }
            var topSrc = $(".mp-item[data-orderby=" + min + "]").find(".left").attr("data-src");
            header_cover.attr('data-src', topSrc).css('background-image', 'url(' + topSrc + ')');
        }
    },
    updateData: function() {
        var data = Meipian.getJSONData($('#access_token').attr('data-token'), getQueryString('id'));
        localStorage.setItem('oldData', JSON.stringify(data));
        this.ajaxApi(data, function(res) {
            if (res.code == 1000) {
                var $web_pvw = $('#web-pvw');
                $web_pvw.attr('src', $web_pvw.attr('src'));
            } else if (res.code == 9999 || res.code == 1006) {
                Meipian.backLogin(res.code);
            } else {
                console.error(servererror[res.code]);
                //                  window.location.href = '/login.htm';
            }
        });
    },
    afterOrderby: function(orderby) {
        $('.mp-item').not('.demo').each(function(index, ele) {
            var $this = $(this)
            var thisOrderby = parseInt($this.attr('data-orderby'));
            if (thisOrderby > orderby) {
                $this.attr('data-orderby', thisOrderby + 1);
            }
        });
    },
    alertMessage: function(mess, dom) {
        $("#alertMessage").remove();
        //      if (timer) {
        //          clearTimeout(timer);
        //      }
        var str = "<div id='alertMessage'>" + mess + "</div>";
        if (dom) {
            dom.append(str);
            var boxHeight = dom.height() / 2;
        } else {
            $("#meipian").append(str);
            var boxHeight = $("#meipian").height() / 2;
        }
        var halfWidth = $("#alertMessage").width() / 2;
        var halfHeight = $("#alertMessage").height() / 2;
        $("#alertMessage").css({
            "margin-left": -halfWidth - 12,
            "margin-top": halfHeight
        });
        $("#alertMessage").addClass("animate");
        document.getElementById("alertMessage").addEventListener("animationend", function() {
            $("#alertMessage").remove();
        });
        document.getElementById("alertMessage").addEventListener("webkitAnimationEnd", function() {
            $("#alertMessage").remove();
        });
        document.getElementById("alertMessage").addEventListener("MSAnimationEnd", function() {
            $("#alertMessage").remove();
        });
    },
    backLogin: function(code) {
        $("#alert").remove();
        var $meipian = $("body");
        $meipian.append('<div id="alert"><div class="win win-backLogin"><div class="mess"><p></p></div><div class="backConfirm"><button id="btn">确定</button></div></div></div>');
        if (code == 9999) {
            $("#alert").find(".mess p").html("登录超时，请重新登录")
        } else {
            $("#alert").find(".mess p").html("用户验证失败，请退出账号重新登录")
        }
        $("#btn").click(function() {
            window.location.href = "login.htm";
        })
    },
    addLink: function(cb, json, $this) {
        $("#alert").remove();
        var $meipian = $("body");
        $meipian.append('<div id="alert"><div class="win win-link"><h2>添加链接</h2><div class="link clearfix"><span>链接地址：</span><input type="text" placeholder="输入需要跳转的网址" id="link-addr"/></div><div class="link clearfix"><span>链接描述：</span><input type="text" maxlength="50" placeholder="输入超链接文字描述" id="link-describe"/></div><div class="del"><a id="del-link" href="javascript:void(0);" style="cursor:default;">&nbsp</a></div><div class="box-btn clearfix"><button class="fr add">添加</button><button class="fl cancel">取消</button></div></div></div>');
        var $alert = $('#alert');
        if (json) {
            $alert.find('#link-addr').val(json.link);
            $alert.find('#link-describe').val(json.desc);
        };
        $alert.find('button.add').click(function() {
            cb && cb($('#alert'));
        });
        $alert.find('button.cancel').click(function() {
            $alert.remove();
            $(".icon-iconfontlink").removeClass("on");
        });
    },
    modLink: function(cb, json, $this) {
        $("#altert").remove();
        var $meipian = $("body");
        $meipian.append('<div id="alert"><div class="win win-link"><h2>修改链接</h2><div class="link clearfix"><span>链接地址：</span><input type="text" placeholder="输入需要跳转的网址" id="link-addr"/></div><div class="link clearfix"><span>链接描述：</span><input type="text" maxlength="50" placeholder="输入超链接文字描述" id="link-describe"/></div><div class="del"><a id="del-link" href="javascript:void(0);">删除链接</a></div><div class="box-btn clearfix"><button class="fr add">确定</button><button class="fl cancel">取消</button></div></div></div>');
        var $alert = $('#alert');
        if (json) {
            $alert.find('#link-addr').val(json.link);
            $alert.find('#link-describe').val(json.desc);
        }
        $alert.find('.del a').click(function() {
            $('.mp-item.sel').find('b.link').removeAttr('data-src').removeAttr('data-desc').text('');
            $this.parents('.win-edite').find('.linkshow').find('i').removeClass('icon-iconfontlink').removeAttr('data-src').siblings('span').text('');
            $(".linkshow").css("z-index", -1);
            $alert.remove();
            $(".icon-iconfontlink").removeClass("on");
        })
        $alert.find('button.add').click(function() {
            cb && cb($('#alert'));
        });
        $alert.find('button.cancel').click(function() {
            $alert.remove();
        });
    },
    setPrivacy: function(state, cb) {
        var keyWord = "设置密码：";
        if (state == 2) {
            keyWord = "修改密码：";
        };
        $("#alert").remove();
        var str = '';
        str += '<div id="alert" style="display: block;">'
        str += '<div class="win win-wholook">'
        str += '<h2>谁可以看</h2>'
        str += '<div class="box-wholook">'
        str += '<ul>'
        str += '<li data-state="1">'
        str += '<b>公开</b>'
        str += '<p>所有人可见,且录入个人专栏</p>'
        str += '</li>'
        str += '<li data-state="0">'
        str += '<b>不公开</b>'
        str += '<p>自行控制范围,仅被分享的人可见</p>'
        str += '</li>'
        str += '<li data-state="2">'
        str += '<b>加密</b>'
        str += '<p>设置一个密码,凭密码访问</p>'
        str += '<div style = "display:none" id = "pwd">'
        str += '<span id="keyWord">' + keyWord + '</span><input style = "border: 1px solid rgb(229,229,229)" type = "password"  class = "num1" maxlength="4" /><span id="tip" style="display:none;color:red;">请输入四位0~9之间数字</span>'
        str += '<div>'
        str += '</li>'
        str += '<li data-state="3">'
        str += '<b>私密</b>'
        str += '<p>仅自己可见</p>'
        str += '</li>'
        str += '</ul>'
        str += '</div>'
        str += '<div class="box-btn clearfix"><button class="fr add">确认</button><button class="fl cancel">取消</button></div>'
        str += '</div>'
        str += '</div>';
        var $meipian = $("body");
        $meipian.append(str);
        state && $("#alert").find("li[data-state = " + state + "]").addClass("sel");
        $("#alert ul li").click(function() {
            $(this).addClass("sel").siblings().removeClass('sel');
            if ($(this).attr("data-state") == 2) {
                $("#pwd").slideDown();
                $(".num1")[0].focus();
            } else {
                $("#pwd").slideUp();
            }
        });
        if (state == 2) {
            $("#alert ul li[data-state = 2]").trigger("click");
        }
        $(".num1").on("focus", function() {
            $("#tip").css("display", "none");
            $(this).val("")
        })
        $(".num1").on("keyup", function() {
            var num = $(this).val();
            num = num.split("");
            var flag = false;
            for (var i = 0; i < num.length; i++) {
                if (num[i].charCodeAt(0) < 48 || num[i].charCodeAt(0) > 57) {
                    flag = true;
                }
            }
            if (flag) {
                $("#tip").css("display", "inline-block");
            } else {
                $("#tip").css("display", "none");
            }
        })
        $("#alert").find("button.add").click(function() {
            var nowstate = $("#alert").find(".sel").attr("data-state");
            var pwd = $(".num1").val();
            if (nowstate == 2) {
                if (state == 2 && pwd == "") {
                    $("#alert").remove();
                    cb && cb(nowstate, pwd);
                    return;
                }
                var flag = false;
                var pw = pwd.split("");
                //      		console.log(pwd[0].charCodeAt(0));
                for (var i = 0; i < pw.length; i++) {
                    if (pw[i].charCodeAt(0) < 48 || pw[i].charCodeAt(0) > 57) {
                        flag = true;
//                      console.log(flag, pw[i].charCodeAt(0));
                    }
                }
                if (pw.length != 4) {
                    flag = true;
                }
                if (flag) {
//                  console.log($("#tip"));
                    $("#tip").css("display", "inline-block");
                    return;
                } else {
                    $("#tip").css("display", "none");
                    $("#alert").remove();
                    cb && cb(nowstate, pwd);
                }
            } else if (nowstate == 3) {
                $("#alert").remove();
                cb && cb(nowstate, pwd);
            } else {
                $("#alert").remove();
                cb && cb(nowstate);
            }

        }).siblings('.cancel').click(function() {
            $('#alert').remove();
        })
    },
    checkData: function(o, n) {
        return $.md5(o) == $.md5(n) ? true : false;
    },
    warning: function(num, cb) {
        $("#alert").remove();
        var str = "",
            about = "",
            explain = "";
        switch (num) {
            case 1:
                about = "请检查确认文章是否包含诱导分享内容。";
                explain = "根据规定，美篇不允许发布利诱用户分享（如集赞送礼），或胁迫、煽动用户分享（如不转不是中国人）的文章。";
                break;
            case 2:
                about = "请检查确认文章是否包含公开募捐内容。";
                explain = "根据《慈善法》，美篇不允许发布公开募捐的文章。";
                break;
            default:
                break;
        }

        str += '<div id="alert">'
        str += '<div class="win-warning">'
        str += '		<div class="win-message">'
        str += '			<h4>提示</h4>'
        str += '			<p class="about">' + about + '</p>'
        str += '			<p class="explain">' + explain + '</p>'
        str += '		</div>'
        str += '		<div class="win-btn clearfix">'
        str += '			<button id="cancel">返回检查</button>'
        str += '		<button id="sure">仍然发布</button>'
        str += '		</div>'
        str += '</div>'
        str += '</div>'
        $("body").append(str);
        var halfWidth = $(".win-warning").width() / 2;
        var halfHeight = $(".win-warning").height() / 2;
        $(".win-warning").css({
            marginTop: -halfHeight,
            marginLeft: -halfWidth
        });
        $("#sure").click(function() {
            $("#alert").remove();
            cb && cb();
        })
        $("#cancel").click(function() {
            $("#alert").remove();
        })
    },
    listHelpr: function() {
        $("#listHelper").css("display", "block");
        //添加文章
        var addMp = document.getElementById("add-mp");
        var addMp_left = Meipian.getElementViewLeft(addMp);
        var addMp_top = Meipian.getElementViewTop(addMp);
        $(".addImg_tips").css("left", addMp_left - 42);
        $(".addImg_tips").css("top", addMp_top - 60);
        //删除文章按钮
        var del = document.getElementById("del");
        var del_left = Meipian.getElementViewLeft(del);
        var del_top = Meipian.getElementViewTop(del);
        $(".delArt_tips").css("left", del_left - 53);
        $(".delArt_tips").css("top", del_top - 60);
        //谁可以看
        var look = document.getElementById("look");
        var look_left = Meipian.getElementViewLeft(look);
        var look_top = Meipian.getElementViewTop(look);
        $(".whoLook_tips").css("left", look_left - 2);
        $(".whoLook_tips").css("top", look_top - 60);

        //EDIT
        var edit = document.getElementById("edit");
        var edit_left = Meipian.getElementViewLeft(edit);
        var edit_top = Meipian.getElementViewTop(edit);
        $(".edit_tips").css("left", edit_left - 6);
        $(".edit_tips").css("top", edit_top - 60);
    },
    editorHelper: function() {
        $("#editorHelper").css("display", "block");
        //title
        var title = $(".edit-title")[0];
        var title_left = Meipian.getElementViewLeft(title);
        var title_top = Meipian.getElementViewTop(title);
        $(".title_tips").css("left", title_left + 222);
        $(".title_tips").css("top", title_top - 6);
        //music
        //  		var music = $("#addMusic")[0];
        //  		var music_left = Meipian.getElementViewLeft(music);
        //  		var music_top = Meipian.getElementViewTop(music);
        //  		$(".changeMusic_tips").css("left",music_left);
        //  		$(".changeMusic_tips").css("top",music_top);

        //cover
        //  		var cover = $(".cover")[0];
        //  		var cover_left = Meipian.getElementViewLeft(cover);
        //  		var cover_top = Meipian.getElementViewTop(cover);
        //  		$(".changeCover_tips").css("left",music_left);
        //  		$(".changeCover_tips").css("top",music_top);

        //item
        var item = $(".section-container")[0];
        var item_left = Meipian.getElementViewLeft(item);
        var item_top = Meipian.getElementViewTop(item);
        $(".item_tips").css("left", item_left + 27);
        $(".item_tips").css("top", item_top + 76);

        //prewview
        var preview = $("#mp-pvw")[0];
        var preview_left = Meipian.getElementViewLeft(preview);
        var preview_top = Meipian.getElementViewTop(preview);
        $(".preview_tips").css("left", preview_left - 48);
        $(".preview_tips").css("top", preview_top - 60);

        //share
        var nullShare = $("#share")[0];
        var nullShare_left = Meipian.getElementViewLeft(nullShare);
        var nullShare_top = Meipian.getElementViewTop(nullShare);
        $(".null_share").css("left", nullShare_left - 111);
        $(".null_share").css("top", nullShare_top - 60);

        //null_finish
        var null_finish = $("#article_finish")[0];
        var null_finish_left = Meipian.getElementViewLeft(null_finish);
        var null_finish_top = Meipian.getElementViewTop(null_finish);
        $(".null_finish").css("left", null_finish_left);
        $(".null_finish").css("top", null_finish_top - 60);

        //null_templates
        var null_templates = $("#master")[0];
        var null_templates_left = Meipian.getElementViewLeft(null_templates);
        var null_templates_top = Meipian.getElementViewTop(null_templates);
        $(".null_templates").css("left", null_templates_left - 47);
        $(".null_templates").css("top", null_templates_top - 60);

        //video_tools
        var video_tools = $("#work-video .tools")[0];
        var video_tools_left = Meipian.getElementViewLeft(video_tools);
        var video_tools_top = Meipian.getElementViewTop(video_tools);
        $(".video_tools").css("left", video_tools_left - 25);
        $(".video_tools").css("top", video_tools_top + 44);

        //video_link
        var video_link = $("#work-video .tools")[0];
        var video_link_left = Meipian.getElementViewLeft(video_link);
        var video_link_top = Meipian.getElementViewTop(video_link);
        $(".video_link").css("left", video_link_left + 330);
        $(".video_link").css("top", video_link_top + 44);

        //video_content
        var video_content = $("#work-video .textarea")[0];
        var video_content_left = Meipian.getElementViewLeft(video_content);
        var video_content_top = Meipian.getElementViewTop(video_content);
        $(".video_content").css("left", video_content_left + 195);
        $(".video_content").css("top", video_content_top + 300);

        //video_finish
        var video_finish = $("#work-video .finish")[0];
        var video_finish_left = Meipian.getElementViewLeft(video_finish);
        var video_finish_top = Meipian.getElementViewTop(video_finish);
        $(".video_finish").css("left", video_finish_left - 31);
        $(".video_finish").css("top", video_finish_top + 36);

        var img_change = $("#work-img .fl")[0];
        var img_change_left = Meipian.getElementViewLeft(img_change);
        var img_change_top = Meipian.getElementViewTop(img_change);
        $(".img_change").css("left", img_change_left - 25);
        $(".img_change").css("top", img_change_top + 36);

        var img_finish = $("#work-img .finish")[0];
        var img_finish_left = Meipian.getElementViewLeft(img_finish);
        var img_finish_top = Meipian.getElementViewTop(img_finish);
        $(".img_finish").css("left", img_finish_left - 31);
        $(".img_finish").css("top", img_finish_top + 36);

        var img_del = $("#del-pic")[0];
        var img_del_left = Meipian.getElementViewLeft(img_del);
        var img_del_top = Meipian.getElementViewTop(img_del);
        $(".img_del").css("left", img_del_left - 30);
        $(".img_del").css("top", img_del_top - 58);

        var img_tools = $("#work-img .mp-content .tools")[0];
        var img_tools_left = Meipian.getElementViewLeft(img_tools);
        var img_tools_top = Meipian.getElementViewTop(img_tools);
        $(".img_tools").css("left", img_tools_left - 25);
        $(".img_tools").css("top", img_tools_top + 44);

        var img_link = $("#work-img .mp-content .tools")[0];
        var img_link_left = Meipian.getElementViewLeft(img_link);
        var img_link_top = Meipian.getElementViewTop(img_link);
        $(".img_link").css("left", img_link_left + 330);
        $(".img_link").css("top", img_link_top + 44);

        var img_content = $("#work-img .textarea")[0];
        var img_content_left = Meipian.getElementViewLeft(img_content);
        var img_content_top = Meipian.getElementViewTop(img_content);
        $(".img_content").css("left", img_content_left + 195);
        $(".img_content").css("top", img_content_top + 300);

        var txt_tools = $("#work-text .mp-content .tools")[0];
        var txt_tools_left = Meipian.getElementViewLeft(txt_tools);
        var txt_tools_top = Meipian.getElementViewTop(txt_tools);
        $(".txt_tools").css("left", txt_tools_left - 25);
        $(".txt_tools").css("top", txt_tools_top + 44);

        var txt_link = $("#work-text .mp-content .tools")[0];
        var txt_link_left = Meipian.getElementViewLeft(txt_link);
        var txt_link_top = Meipian.getElementViewTop(txt_link);
        $(".txt_link").css("left", txt_link_left + 330);
        $(".txt_link").css("top", txt_link_top + 44);

        var txt_content = $("#work-text .textarea")[0];
        var txt_content_left = Meipian.getElementViewLeft(txt_content);
        var txt_content_top = Meipian.getElementViewTop(txt_content);
        $(".txt_content").css("left", txt_content_left + 195);
        $(".txt_content").css("top", txt_content_top + 300);

        var txt_finish = $("#work-text .finish")[0];
        var txt_finish_left = Meipian.getElementViewLeft(txt_finish);
        var txt_finish_top = Meipian.getElementViewTop(txt_finish);
        $(".txt_finish").css("left", txt_finish_left - 31);
        $(".txt_finish").css("top", txt_finish_top + 36);

        var txt_addImg = $("#work-text .header-l-btn")[0];
        var txt_addImg_left = Meipian.getElementViewLeft(txt_addImg);
        var txt_addImg_top = Meipian.getElementViewTop(txt_addImg);
        $(".txt_addImg").css("left", txt_addImg_left - 72);
        $(".txt_addImg").css("top", txt_addImg_top + 36);

        var local_music_search = $("#work-music .header-l-btn")[0];
        var local_music_search_left = Meipian.getElementViewLeft(local_music_search);
        var local_music_search_top = Meipian.getElementViewTop(local_music_search);
        $(".local_music_search").css("left", local_music_search_left + 100);
        $(".local_music_search").css("top", local_music_search_top - 5);

        var local_music_finish = $("#work-music .meipian-header .finish")[0];
        var local_music_finish_left = Meipian.getElementViewLeft(local_music_finish);
        var local_music_finish_top = Meipian.getElementViewTop(local_music_finish);
        $(".local_music_finish").css("left", local_music_finish_left - 31);
        $(".local_music_finish").css("top", local_music_finish_top + 36);

        var local_music_choose = $("#work-music .mp-content")[0];
        var local_music_choose_left = Meipian.getElementViewLeft(local_music_choose);
        var local_music_choose_top = Meipian.getElementViewTop(local_music_choose);
        $(".local_music_choose").css("left", local_music_choose_left + 174);
        $(".local_music_choose").css("top", local_music_choose_top + 176);

        var net_music_search = $("#work-music .mp-content .search")[0];
        var net_music_search_left = Meipian.getElementViewLeft(net_music_search);
        var net_music_search_top = Meipian.getElementViewTop(net_music_search);
        $(".net_music_search").css("left", net_music_search_left + 14);
        $(".net_music_search").css("top", net_music_search_top + 50);

        var net_music_back = $("#work-music .meipian-header #music-search")[0];
        var net_music_back_left = Meipian.getElementViewLeft(net_music_back);
        var net_music_back_top = Meipian.getElementViewTop(net_music_back);
        $(".net_music_back").css("left", net_music_back_left + 100);
        $(".net_music_back").css("top", net_music_back_top - 5);

        var net_music_finish = $("#work-music .meipian-header .finish")[0];
        var net_music_finish_left = Meipian.getElementViewLeft(net_music_finish);
        var net_music_finish_top = Meipian.getElementViewTop(net_music_finish);
        $(".net_music_finish").css("left", net_music_finish_left - 31);
        $(".net_music_finish").css("top", net_music_finish_top + 36);

        var cover_finish = $("#work-cover .finish")[0];
        var cover_finish_left = Meipian.getElementViewLeft(cover_finish);
        var cover_finish_top = Meipian.getElementViewTop(cover_finish);
        $(".cover_finish").css("left", cover_finish_left - 31);
        $(".cover_finish").css("top", cover_finish_top + 36);

        var cover_img = $("#work-cover #content-cover")[0];
        var cover_img_left = Meipian.getElementViewLeft(cover_img);
        var cover_img_top = Meipian.getElementViewTop(cover_img);
        $(".cover_img").css("left", cover_img_left + 188);
        $(".cover_img").css("top", cover_img_top + 182);

        var title_finish = $("#work-title .finish")[0];
        var title_finish_left = Meipian.getElementViewLeft(title_finish);
        var title_finish_top = Meipian.getElementViewTop(title_finish);
        $(".title_finish").css("left", title_finish_left - 31);
        $(".title_finish").css("top", title_finish_top + 36);

        var title_content = $("#work-title .mp-content textarea")[0];
        var title_content_left = Meipian.getElementViewLeft(title_content);
        var title_content_top = Meipian.getElementViewTop(title_content);
        $(".title_content").css("left", title_content_left + 195);
        $(".title_content").css("top", title_content_top + 300);
    },
    getElementViewLeft: function(element) {　　　　
        var actualLeft = element.offsetLeft;　　　　
        var current = element.offsetParent;　　　　
        while (current !== null) {　　　　　　
            actualLeft += current.offsetLeft;　　　　　　
            current = current.offsetParent;　　　　
        }　　　　
        if (document.compatMode == "BackCompat") {　　　　　　
            var elementScrollLeft = document.body.scrollLeft;　　　　
        } else {　　　　　　
            var elementScrollLeft = document.documentElement.scrollLeft;　　　　
        }　　　　
        return actualLeft - elementScrollLeft;　　
    },
    　　getElementViewTop: function(element) {　　　　
        var actualTop = element.offsetTop;　　　　
        var current = element.offsetParent;　　　　
        while (current !== null) {　　　　　　
            actualTop += current.offsetTop;　　　　　　
            current = current.offsetParent;　　　　
        }　　　　
        if (document.compatMode == "BackCompat") {　　　　　　
            var elementScrollTop = document.body.scrollTop;　　　　
        } else {　　　　　　
            var elementScrollTop = document.documentElement.scrollTop;　　　　
        }　　　　
        return actualTop - elementScrollTop;　　
    },
    searchParse: function() {
        var resultObj = {};
        var search = window.location.search;
        if (search && search.length > 1) {
            var search = search.substring(1);
            var items = search.split('&');
            for (var index = 0; index < items.length; index++) {
                if (!items[index]) {
                    continue;
                }
                var kv = items[index].split('=');
                resultObj[kv[0]] = typeof kv[1] === "undefined" ? "" : kv[1];
            }
        }
        return resultObj;
    },
    katong: function() {
        $("#alert").remove();
        var str = "";
        str += '<div id="alert">'
        str += '    <div class="katong">'
        str += '        <div class="step">'
        str += '            <h4>1 从添加图片开始</h4>'
        str += '            <img src="img/step01.png" alt="">'
        str += '        </div>'
        str += '        <div class="step ponit">'
        str += '            <h4></h4>'
        str += '            <img src="img/next.png" alt="">'
        str += '        </div>'
        str += '        <div class="step">'
        str += '            <h4>2 给图片配上文字</h4>'
        str += '            <img src="img/step02.png" alt="">'
        str += '        </div>'
        str += '        <div class="step ponit">'
        str += '            <h4></h4>'
        str += '            <img src="img/next.png" alt="">'
        str += '        </div>'
        str += '        <div class="step">'
        str += '            <h4>3 完成并分享</h4>'
        str += '            <img src="img/step03.png" alt="">'
        str += '        </div>'
        str += '    		<div class="close">'
        str += '        		<button>我知道了</button>'
        str += '    		</div>'
        str += '    </div>'
        str += '</div>'
        $(document.body).append(str);
        $(".close button").click(function() {
            $("#alert").remove();
        })
    },
    ajaxApi: function(data, success) {
        data = JSON.stringify(data) || data;
        $.ajax({
            type: "post",
            url: "api.php",
            data: data,
            dataType: 'json',
            //			timeout: 300, //超时时间设置，单位毫秒   300即30s
            success: function(res) {
                success && success(res);
            },
            error: function(xhr, status, error) {
                Meipian.alertMessage("网络请求失败，请稍后再试。");
            }
        });
    }
}