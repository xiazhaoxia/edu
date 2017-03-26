<?php /* Template Name: contribute */ ?>
  <!DOCTYPE html>
  <html>
    
    <head>
      <title>微乐乐</title>
      <link rel="icon" href="http://static.ivwen.com/web/a/favicon.ico">
      <!-- 360浏览器开启webkit内核 -->
      <meta name="renderer" content="webkit">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="<?php bloginfo( 'charset' ); ?>" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <link rel="profile" href="http://gmpg.org/xfn/11" />
      <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
      <style type="text/css">body { -moz-user-select: none; }</style>
      <script type="text/javascript">
	    if (checkBrowser() == "IE") {
          window.location.href = "/updatebrowser.html";
        }

        function checkBrowser() {
          var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
          var isOpera = userAgent.indexOf("Opera") > -1;
          if (isOpera) {
            return "Opera"
          }; //判断是否Opera浏览器
          if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
          } //判断是否Firefox浏览器
          if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
          }
          if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
          } //判断是否Safari浏览器
          if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
          }; //判断是否IE浏览器
        };

        function detectmob() {
          if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
          } else {
            return false;
          }
        }
        //if (detectmob()) {
        //  window.location = '/mobile.html';
        //}
		</script>
      <!-- BuddyPress and bbPress Stylesheets are called in wp_head, if plugins are activated -->
      <?php wp_head(); ?>
      <?php $assets = XRUI_PLUGIN_URL. 'assets'; ?></head>
    
    <body class="window  pace-done">
      <div class="loading">
        <div class="pace  pace-inactive">
          <div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
            <div class="pace-progress-inner"></div>
          </div>
          <div class="pace-activity"></div>
        </div>
      </div>
      <div id="access_token" data-token="6724166|4ef57d97ebfc0459da4077f558395e04" data-categoryid="0" data-privacy="3" data-state="0"></div>
      <div class="mp-logo">
        <img src="<?php echo $assets.'/tougao/mp_logo.svg';?>"></div>
      <div class="advice">
        <a href="javascript:void(0);" id="showTips">使用帮助
          <i>帮助在这里可以打开</i>
        </a>
        <a href="http://e.meipian.cn/feedback.php" target="_blank">问题反馈入口</a></div>
      <div class="audio">
        <audio src="http://m2.music.126.net/vAVwJScrrrPBo5LDZs7KFg==/1045635558023798.mp3" id="audio"></audio>
      </div>
      <div id="meipian" class="clearfix">
        <div id="container">
          <a id="pickfiles" href="javascrpt:void(0);"></a>
        </div>
        <div class="meipian-left fl">
          <div class="user-name" data-userid="6724166"></div>
          <div class="mp-masterplate" id="mp-masterplate">
            <div class="scrollLeft">
              <div class="essay-header" style="background-image: url(&quot;http://static2.ivwen.com/user/6724166/c7530d521c7000015ca4dd00152c121c.jpg&quot;);" data-src="http://static2.ivwen.com/user/6724166/c7530d521c7000015ca4dd00152c121c.jpg">
                <h2 class="edit-title">点击设置标题</h2>
                <i id="addMusic" class="music iconfont icon-music">添加音乐</i>
                <i class="cover">
                  <em class="iconfont icon-change"></em>更换封面</i>
              </div>
              <div class="section-container" id="section-container">
                <div class="scrollBar" style="height: 473px; top: 0px;"></div>
                <div class="mp-section" id="mp-section" style="top: 0px; height: 280px;">
                  <div class="liner" style="position: absolute; height: 4px; width: 96%; background-color: rgb(102, 171, 254); display: none; box-sizing: border-box; border: 1px solid rgb(22, 126, 251); border-radius: 4px; margin: auto; left: 0px; right: 0px; top: 138px;"></div>
                  <div id="shadow" style="position: absolute; width: 325px; left: 15px; height: 110px; background-color: rgba(0, 0, 0, 0.247059); display: none; z-index: 0; border-radius: 11px; top: 20px;"></div>
                  <div class="mp-item demo" data-orderby="0" onmousedown="dragging(this,event)" style="z-index: 0;">
                    <div class="section">
                      <div class="content">
                        <div class="fl icon left"></div>
                        <div class="right-content">
                          <p>
                          </p>
                          <b class="link"></b>
                        </div>
                      </div>
                    </div>
                    <div class="dragLayer" style="position: absolute;width: 100%;height: 100%;z-index: 1;top: 0;left: 0;">
                      <a href="javascript:void(0);" onmouseup="del(event,this)" class="del iconfont icon-cyclodel"></a>
                    </div>
                  </div>
                  <div class="add-section" style="top: 270px;">
                    <ul class="clearfix">
                      <li>
                        <span href="javascript:void(0);" id="add-text" alt="添加文字段落">
                          <b>
                          </b>
                          <i>插入文字段落</i>
                        </span>
                      </li>
                      <li>
                        <span href="javascript:void(0);" id="add-img" alt="添加图片段落" style="z-index: 1;">
                          <b>
                          </b>
                          <i>插入图片段落</i>
                        </span>
                      </li>
                      <li>
                        <span href="javascript:void(0);" id="add-video" alt="添加视频段落">
                          <b>
                          </b>
                          <i>插入视频段落</i>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="mp-item c0 img" data-orderby="1" onmousedown="dragging(this,event)" style="z-index: 0; top: 20px; position: absolute; left: 15px;" color="c0">
                    <div class="section">
                      <div class="content">
                        <div class="fl icon left" data-src="http://static2.ivwen.com/user/6724166/c7530d521c7000015ca4dd00152c121c.jpg" style="background-image: url(&quot;http://static2.ivwen.com/user/6724166/c7530d521c7000015ca4dd00152c121c.jpg&quot;);"></div>
                        <div class="right-content">
                          <p>
                          </p>
                          <b class="link"></b>
                        </div>
                      </div>
                    </div>
                    <div class="dragLayer" style="position: absolute;width: 100%;height: 100%;z-index: 1;top: 0;left: 0;">
                      <a href="javascript:void(0);" onmouseup="del(event,this)" class="del iconfont icon-cyclodel"></a>
                    </div>
                  </div>
                  <div class="mp-item text sel" data-orderby="2" onmousedown="dragging(this,event)" style="z-index: 0; top: 150px; position: absolute; left: 15px;">
                    <div class="section">
                      <div class="content">
                        <div class="fl icon left"></div>
                        <div class="right-content">
                          <p>
                          </p>
                          <b class="link"></b>
                        </div>
                      </div>
                    </div>
                    <div class="dragLayer" style="position: absolute;width: 100%;height: 100%;z-index: 1;top: 0;left: 0;">
                      <a href="javascript:void(0);" onmouseup="del(event,this)" class="del iconfont icon-cyclodel"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mp-editover" id="editoer-tools">
            <a href="javascript:void(0)" class="mp-pvw" id="mp-pvw">
              <i class=" iconfont icon-play"></i>预览</a>
            <div id="html5_1b343a6841nru15sme8jkh1jv86_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 290px; left: 184px; width: 45px; height: 30px; overflow: hidden; z-index: 0;">
              <input id="html5_1b343a6841nru15sme8jkh1jv86" type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept="image/jpeg,.jpg,.jpeg,image/gif,.gif"></div>
          </div>
        </div>
        <div class="meipian-right fl">
          <div id="work-null" class="win-edite" style="display: none;">
            <div class="box-pvw">
              <div class="page-loading">
                <img src="<?php echo $assets.'/tougao/hourglass.svg';?>" width="30" height="30"></div>
              <iframe id="web-pvw" src="<?php echo $assets.'/tougao/9sh2qfd.html';?>" width="100%" height="100%" allowfullscreen="true"></iframe>
            </div>
            <div class="tools">
              <!--<a href="javascript:void(0)" id="del" class="left iconfont icon-iconfontdel"></a>
              <a href="javascript:void(0)" id="look" class="left iconfont icon-show"></a>-->
              <div class="cen-btn">
                <button id="share" class="fl btn-long-blue">
                  <i class=" iconfont icon-share"></i>分享</button>
                <a href="javascript:void(0)" id="article_finish" class="fr btn-long-blue ">
                  <i class="iconfont icon-sel"></i>完成</a>
              </div>
              <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" class="edit cen" id="edit"></a>
              <button class="right iconfont icon-theme" id="master"></button>
              <div class="masterplate" style="display: none;">
                <div style="height: 30px;">
                  <div class="label clearfix">
                    <!--<div class="item">经典</div>
                    <div class="item">现代</div>
                    <div class="item">几何</div>-->
                    <div class="item cur">假期</div>
                    <div class="item">可爱</div>
                    <div class="item">经典</div>
                    <div class="item">朦胧</div></div>
                </div>
                <a href="javascript:void(0);" id="leftScroll" class="left iconfont"></a>
                <a href="javascript:void(0);" id="rightScroll" class="right iconfont"></a>
                <div id="templateWrap">
                  <div class="templateContent clearfix item" style="left: 0px;">
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="000" class="sel">
                      <img width="65" src="<?php echo $assets.'./tougao/000-biaozhun.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="041">
                      <img width="65" src="<?php echo $assets.'/tougao/template_41.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="042">
                      <img width="65" src="<?php echo $assets.'/tougao/template_42.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="043">
                      <img width="65" src="<?php echo $assets.'/tougao/template_43.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="044">
                      <img width="65" src="<?php echo $assets.'/tougao/template_44.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="045">
                      <img width="65" src="<?php echo $assets.'/tougao/template_45.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="046">
                      <img width="65" src="<?php echo $assets.'/tougao/template_46.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="047">
                      <img width="65" src="<?php echo $assets.'/tougao/template_47.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="048">
                      <img width="65" src="<?php echo $assets.'/tougao/template_48.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="049">
                      <img width="65" src="<?php echo $assets.'/tougao/template_49.png';?>"></a>
                  </div>
                  <div class="templateContent clearfix item" style="left: 0px;display:none;">
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="000" class="sel">
                      <img width="65" src="<?php echo $assets.'/tougao/000-biaozhun.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="051">
                      <img width="65" src="<?php echo $assets.'/tougao/template_51.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="052">
                      <img width="65" src="<?php echo $assets.'/tougao/template_52.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="053">
                      <img width="65" src="<?php echo $assets.'/tougao/template_53.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="054">
                      <img width="65" src="<?php echo $assets.'/tougao/template_54.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="055">
                      <img width="65" src="<?php echo $assets.'/tougao/template_55.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="056">
                      <img width="65" src="<?php echo $assets.'/tougao/template_56.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="057">
                      <img width="65" src="<?php echo $assets.'/tougao/template_57.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="058">
                      <img width="65" src="<?php echo $assets.'/tougao/template_58.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="059">
                      <img width="65" src="<?php echo $assets.'/tougao/template_59.png';?>"></a>
                  </div>
                  <div class="templateContent clearfix item" style="left: 0px;display:none;">
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="000" class="sel">
                      <img width="65" src="<?php echo $assets.'/tougao/000-biaozhun.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="005">
                      <img width="65" src="<?php echo $assets.'/tougao/template_05.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="002">
                      <img width="65" src="<?php echo $assets.'/tougao/template_02.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="003">
                      <img width="65" src="<?php echo $assets.'/tougao/template_03.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="010">
                      <img width="65" src="<?php echo $assets.'/tougao/template_10.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="004">
                      <img width="65" src="<?php echo $assets.'/tougao/template_04.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="011">
                      <img width="65" src="<?php echo $assets.'/tougao/template_11.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="007">
                      <img width="65" src="<?php echo $assets.'/tougao/template_07.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="006">
                      <img width="65" src="<?php echo $assets.'/tougao/template_06.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="008">
                      <img width="65" src="<?php echo $assets.'/tougao/template_08.png';?>"></a>
                  </div>
                  <div class="templateContent clearfix item" style="left: 0px;display:none;">
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="000" class="sel">
                      <img width="65" src="<?php echo $assets.'/tougao/000-biaozhun.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="021">
                      <img width="65" src="<?php echo $assets.'/tougao/template_21.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="022">
                      <img width="65" src="<?php echo $assets.'/tougao/template_22.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="023">
                      <img width="65" src="<?php echo $assets.'/tougao/template_23.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="024">
                      <img width="65" src="<?php echo $assets.'/tougao/template_24.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="025">
                      <img width="65" src="<?php echo $assets.'/tougao/template_25.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="026">
                      <img width="65" src="<?php echo $assets.'/tougao/template_26.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="027">
                      <img width="65" src="<?php echo $assets.'/tougao/template_27.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="028">
                      <img width="65" src="<?php echo $assets.'/tougao/template_28.png';?>"></a>
                    <a href="http://editor.meipian.me/edit.php?id=9sh2qfd&amp;hasView=1#" data-num="029">
                      <img width="65" src="<?php echo $assets.'/tougao/template_29.png';?>"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="work-title" class="win-edite" style="display: none;" placeholder="请输入标题...">
            <div class="meipian-header">
              <h2>文章标题</h2>
              <a class="finish" href="javascript:void(0);">完成</a></div>
            <div class="mp-content" id="content-text" style="top:60px;">
              <textarea maxlength="50" style="top:0;bottom:0" placeholder="输入标题内容..." class="shen"></textarea>
            </div>
          </div>
          <div id="work-text" class="win-edite" orderby="2" style="">
            <div class="meipian-header">
              <a href="javascript:void(0)" class="header-l-btn" id="add-pic">添加照片</a>
              <h2>文章编辑</h2>
              <a class="finish" href="javascript:void(0);">完成</a></div>
            <div class="mp-content" id="content-text" style="top:60px;">
              <div class="linkshow" style="z-index: -1;">
                <i class="iconfont"></i>
                <span></span>
              </div>
              <div class="tools">
                <div class="unre_do">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="undo"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="redo"></a>
                    </li>
                  </ul>
                </div>
                <div class="cen text-edit clearfix">
                  <div class="fl bold">
                    <a href="javascript:void(0)" class="bold"></a>
                    <div class="blod-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-bold">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-italic">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-underline">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl size">
                    <a href="javascript:void(0)" class="size"></a>
                    <div class="size-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-sup">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-normal had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-big">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl center">
                    <a href="javascript:void(0)" class="center"></a>
                    <div class="center-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-left had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-center">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-right">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="color fl">
                    <a href="javascript:void(0)" class="icon"></a>
                    <div class="color-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="c0" data-color="rgb(1,1,1)">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c1" data-color="#808080">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c2" data-color="#ed2308">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c3" data-color="#ff8a00">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c4" data-color="#39b54a">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c5" data-color="#167efb">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c6" data-color="#b04fbb">
                          <a href="javascript:void(0)"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="javascript:void(0)" class="iconfont icon-iconfontlink fl"></a>
                </div>
              </div>
              <div class="textarea" contenteditable="true" maxlength="5000" placeholder="请输入内容(不超过5000字)..."></div>
            </div>
          </div>
          <div id="work-img" class="win-edite" style="display: none;">
            <div class="meipian-header">
              <a href="javascript:void(0)" class="fl header-l-btn" id="change" style="z-index: 1;">更换图片</a>
              <h2>图片配文</h2>
              <!--<a class="finish" href="javascript:void(0);" id="del-pic">移除照片</a>-->
              <a class="finish" href="javascript:void(0);">完成</a></div>
            <div id="content-img">
              <img class="pvw" src="<?php echo $assets.'/tougao/c7530d521c7000015ca4dd00152c121c.jpg';?>">
              <a href="javascript:void();" class="iconfont icon-delete" id="del-pic"></a>
            </div>
            <div class="mp-content" id="content-text">
              <div class="linkshow" style="z-index: -1;">
                <i class="iconfont"></i>
                <span></span>
              </div>
              <div class="tools">
                <div class="unre_do">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="undo"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="redo"></a>
                    </li>
                  </ul>
                </div>
                <div class="cen text-edit">
                  <div class="fl bold">
                    <a href="javascript:void(0)" class="bold"></a>
                    <div class="blod-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-bold">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-italic">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-underline">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl size">
                    <a href="javascript:void(0)" class="size"></a>
                    <div class="size-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-sup">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-normal had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-big">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl center">
                    <a href="javascript:void(0)" class="center"></a>
                    <div class="center-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-left had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-center">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-right">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--<a href="javascript:void(0)" class=" fl bold"></a>
                  <a href="javascript:void(0)" class=" fl size"></a>
                  <a href="javascript:void(0)" class=" fl center"></a>-->
                  <div class="color fl">
                    <a href="javascript:void(0)" class="icon"></a>
                    <div class="color-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="c0" data-color="rgb(1,1,1)">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c1" data-color="#808080">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c2" data-color="#ed2308">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c3" data-color="#ff8a00">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c4" data-color="#39b54a">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c5" data-color="#167efb">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c6" data-color="#b04fbb">
                          <a href="javascript:void(0)"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="javascript:void(0)" class="iconfont icon-iconfontlink fl"></a>
                </div>
              </div>
              <div class="textarea" contenteditable="true" maxlength="5000" placeholder="请输入内容(不超过5000字)..."></div>
            </div>
          </div>
          <div id="work-cover" class="win-edite" style="display: none;">
            <div class="meipian-header">
              <a id="bgImg-choose" class="header-l-btn" href="javascript:void(0);" style="z-index: 1;">选择图片</a>
              <h2>封面选择</h2>
              <a class="finish" href="javascript:void(0);" id="change">完成</a></div>
            <div class="mp-content" id="content-cover">
              <ul></ul>
              <div id="html5_1b343a688lu3p6vf9q1ijgjioa_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; overflow: hidden; z-index: 0;">
                <input id="html5_1b343a688lu3p6vf9q1ijgjioa" type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" accept="image/jpeg,.jpg,.jpeg,image/gif,.gif"></div>
            </div>
          </div>
          <div id="work-music" class="win-edite" style="display: none;">
            <div class="meipian-header">
              <h2>背景音乐</h2>
              <a id="music-search" class="header-l-btn" href="javascript:void(0);" data-state="1">在线搜索</a>
              <a class="finish" href="javascript:void(0);">完成</a></div>
            <div class="mp-content" id="content-cover">
              <div class="section search" style="display: none;">
                <div id="search-key">
                  <div class="iconfont"></div>
                  <form method="get">
                    <input type="text" name="search-key" id="music-name" value="" placeholder="请输入音乐名">
                    <input type="submit" id="btn-search" value="搜索"></form>
                </div>
                <div class="search-data"></div>
              </div>
              <div class="section default" style="display: block;">
                <div>
                  <h3>默认</h3>
                  <div class="list">
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="">无背景音乐</p></div>
                  <h3>欢快</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/TuErQiJinXingQu.m4a">土耳其进行曲</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/DouNiuShiJinXingQu.m4a">斗牛士进行曲</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/Summer.m4a">菊次郎的夏天</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ChunZhiShengYuanWuQu.m4a">春之声圆舞曲</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YuZhongManBu.m4a">雨中漫步</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/WaNiShaDeWeiXiao.m4a">瓦妮莎的微笑</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/SiXiaoTianEWuQu.m4a">四小天鹅舞曲</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/HuanXin.m4a">欢沁</p></div>
                  <h3>优美</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/RiverFlowsInYou.m4a">River Flows In You</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/KissTheRain.m4a">Kiss The Rain</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/LvXiuZi.m4a">绿袖子</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/QingChen.m4a">清晨</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ChuXue.m4a">初雪</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/Canon.m4a">卡农</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/TianKongZhiCheng.m4a">天空之城</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ShenMiYuan.m4a">神秘园</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/XueZhiMeng.m4a">雪之梦</p></div>
                  <h3>浪漫</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YueLiangDaiBiaoWoDeXin.m4a">月亮代表我的心</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/MengZhongDeHunLi.m4a">梦中的婚礼</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/AiDeXieZouQu.m4a">爱的协奏曲</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/AiDeLuoManShi.m4a">爱的罗曼史</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ZuiLangManDeShi.m4a">最浪漫的事</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YueDing.m4a">约定</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/IBelieve.m4a">I Believe</p></div>
                  <h3>激情</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/RockHouseJail.m4a">Rock House Jail</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ConquestOfParadise.m4a">Conquest Of Paradise</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/TheMass.m4a">The Mass</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/SheIsMySin.m4a">She Is My Sin</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/HesAPirate.m4a">He's A Pirate</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/KeLuoDiYaKuangXiangQu.m4a">克罗地亚狂想曲</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ChuAiJiJi.m4a">出埃及记</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/HaoYongQiJiaoLong.m4a">豪勇七蛟龙</p></div>
                  <h3>古韵</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/GaoShanLiuShui.m4a">高山流水</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/LiangZhu.m4a">梁祝</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/MoLiHua.m4a">茉莉花</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YiLianYouMeng.m4a">一帘幽梦</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YiGuRen.m4a">忆故人</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YunShuiChanXin.m4a">云水禅心</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ZhanMaBenTeng.m4a">战马奔腾</p></div>
                  <h3>情境</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ShengRiKuaiLe.m4a">生日快乐</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/LingErXiangDingDang.m4a">铃儿响叮当</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YaoLanQu.m4a">摇篮曲</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/HunLiJinXingQu.m4a">婚礼进行曲</p></div>
                  <h3>忧伤</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/ZaiJianJinCha.m4a">再见警察</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/AGenTingBieWeiWoKuQi.m4a">阿根廷别为我哭泣</p>
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/LiuDong.m4a">流动</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/YueLiangMen.m4a">月亮门</p></div>
                  <h3>年代</h3>
                  <div class="list">
                    <p class="iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/KaQiuSha.m4a">喀秋莎</p>
                    <p class="last iconfont" onclick="setDefaultMusic(this)" data-src="http://music.ivwen.com/music/MoSiKeJiaoWaiDeWanShang.m4a">莫斯科郊外的晚上</p></div>
                </div>
              </div>
            </div>
          </div>
          <div id="work-video" class="win-edite" style="display: none;">
            <div class="meipian-header">
              <h2>视频配文</h2>
              <a class="finish" href="javascript:void(0);" id="change">完成</a></div>
            <div class="mp-video">
              <iframe src="./tougao/saved_resource.html" width="400" height="225"></iframe>
            </div>
            <div class="mp-content" id="content-text" style="top:305px">
              <div class="linkshow">
                <i class="iconfont"></i>
                <span></span>
              </div>
              <div class="tools">
                <div class="unre_do">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="undo"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="redo"></a>
                    </li>
                  </ul>
                </div>
                <div class="cen text-edit">
                  <div class="fl bold">
                    <a href="javascript:void(0)" class="bold"></a>
                    <div class="blod-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-bold">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-italic">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-underline">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl size">
                    <a href="javascript:void(0)" class="size"></a>
                    <div class="size-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-sup">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-normal had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-big">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl center">
                    <a href="javascript:void(0)" class="center"></a>
                    <div class="center-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-left had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-center">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-right">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--<a href="javascript:void(0)" class=" fl bold"></a>
                  <a href="javascript:void(0)" class=" fl size"></a>
                  <a href="javascript:void(0)" class=" fl center"></a>-->
                  <div class="color fl">
                    <a href="javascript:void(0)" class="icon"></a>
                    <div class="color-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="c0" data-color="#010101">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c1" data-color="#808080">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c2" data-color="#ed2308">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c3" data-color="#ff8a00">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c4" data-color="#39b54a">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c5" data-color="#167efb">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c6" data-color="#b04fbb">
                          <a href="javascript:void(0)"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="javascript:void(0)" class="iconfont icon-iconfontlink fl"></a>
                </div>
              </div>
              <div class="textarea" contenteditable="true" maxlength="5000" placeholder="请输入内容(最多500个字符)..."></div>
            </div>
          </div>
          <div id="work-selfVideo" class="win-edite" style="display: none;">
            <div class="meipian-header">
              <h2>视频配文</h2>
              <a class="finish" href="javascript:void(0);" id="change">完成</a></div>
            <div class="mp-video">
              <video id="selfVideo" src="" width="400" height="225" preload="none" controls="controls"></video>
            </div>
            <div class="mp-content" id="content-text" style="top:305px">
              <div class="linkshow">
                <i class="iconfont"></i>
                <span></span>
              </div>
              <div class="tools">
                <div class="unre_do">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="undo"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="redo"></a>
                    </li>
                  </ul>
                </div>
                <div class="cen text-edit">
                  <div class="fl bold">
                    <a href="javascript:void(0)" class="bold"></a>
                    <div class="blod-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-bold">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-italic">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-underline">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl size">
                    <a href="javascript:void(0)" class="size"></a>
                    <div class="size-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-sup">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-normal had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-big">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="fl center">
                    <a href="javascript:void(0)" class="center"></a>
                    <div class="center-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="set-left had">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-center">
                          <a href="javascript:void(0);"></a>
                        </li>
                        <li class="set-right">
                          <a href="javascript:void(0);"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--<a href="javascript:void(0)" class=" fl bold"></a>
                  <a href="javascript:void(0)" class=" fl size"></a>
                  <a href="javascript:void(0)" class=" fl center"></a>-->
                  <div class="color fl">
                    <a href="javascript:void(0)" class="icon"></a>
                    <div class="color-list clearfix" style="display: none;">
                      <ul class="clearfix">
                        <li class="c0" data-color="RGB(1,1,1)">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c1" data-color="#808080">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c2" data-color="#ed2308">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c3" data-color="#ff8a00">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c4" data-color="#39b54a">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c5" data-color="#167efb">
                          <a href="javascript:void(0)"></a>
                        </li>
                        <li class="c6" data-color="#b04fbb">
                          <a href="javascript:void(0)"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="javascript:void(0)" class="iconfont icon-iconfontlink fl"></a>
                </div>
              </div>
              <div class="textarea" contenteditable="true" maxlength="5000" placeholder="请输入内容(最多500个字符)..."></div>
            </div>
          </div>
        </div>
      </div>
      <div id="editorHelper">
        <div class="title_tips">点击这里修改标题</div>
        <!--<div class="changeMusic_tips"></div>-->
        <div class="item_tips">
          <div class="shunxu">
            <img src="<?php echo $assets.'/tougao/shunxun_tips.png';?>">
            <div>拖动段落可以改变顺序</div></div>
          <div class="add_tip">
            <img src="<?php echo $assets.'/tougao/add_tips.png';?>">
            <p>点击段落，可在下方添加更多内容</p>
          </div>
        </div>
        <!--<div class="changeCover_tips">点击可在右侧更换背景图片</div>-->
        <div class="null_share">把文章的链接分享给您的朋友</div>
        <div class="null_finish">结束文章内容的编辑</div>
        <div class="null_templates">设置模板</div>
        <div class="video_tools">设置为粗体、设为大字体、居中对齐、设置文本颜色</div>
        <div class="video_link">添加超链接内容</div>
        <div class="video_content">在此输入文字内容</div>
        <div class="video_finish">完成内容编辑</div>
        <div class="img_change">更换选用图片</div>
        <div class="img_finish">完成内容编辑</div>
        <div class="img_del">删除图片</div>
        <div class="img_tools">设置为粗体、设为大字体、居中对齐、设置文本颜色</div>
        <div class="img_link">添加超链接内容</div>
        <div class="img_content">在此输入文字内容</div>
        <div class="txt_tools">设置为粗体、设为大字体、居中对齐、设置文本颜色</div>
        <div class="txt_link">添加超链接内容</div>
        <div class="txt_content">在此输入文字内容</div>
        <div class="txt_finish">完成内容编辑</div>
        <div class="txt_addImg">给段落添加图片，变为图文段落</div>
        <div class="local_music_search">使用音乐在线搜索内容</div>
        <div class="local_music_finish">完成内容编辑</div>
        <div class="local_music_choose">在此选择需要的音乐内容</div>
        <div class="net_music_search">输入关键字，搜索需要的音乐</div>
        <div class="net_music_back">使用美篇推荐的音乐内容</div>
        <div class="net_music_finish">完成内容编辑</div>
        <div class="cover_img">选择用作封面的图片</div>
        <div class="cover_finish">完成内容编辑</div>
        <div class="title_finish">完成内容编辑</div>
        <div class="title_content">在此输入标题内容</div>
        <div class="preview_tips">点击可在右侧预览文章结果</div></div>
      <?php wp_footer(); ?>
	</body>
  
  </html>