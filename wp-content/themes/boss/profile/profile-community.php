<!DOCTYPE html>

<html lang="zh-cmn-Hans" class="pixel-ratio-1"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <title>个人资料</title>
  
   <meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
  			
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
   <!-- Set render engine for 360 browser -->
   <meta name="renderer" content="webkit">
   
   <!-- No Baidu Siteapp-->
   <meta http-equiv="Cache-Control" content="no-siteapp">
   <meta name="format-detection" content="telephone=no">

    <link rel="stylesheet" href="./个人资料_files/app.css">
    <link rel="stylesheet" href="./个人资料_files/jquery-weui.min.css">
    <script src="./个人资料_files/jquery.js.download"></script>
    <script src="./个人资料_files/fastclick.js.download"></script>
	<script src="./个人资料_files/jquery-weui.min.js.download"></script>
	<script src="./个人资料_files/api.js"></script>
    <script>
      $(function() {
        FastClick.attach(document.body);
      });
    </script>
<script type="text/javascript">var ajaxurl = 'http://www.microlele.com/clone/wp-admin/admin-ajax.php';</script>	
	<script type="text/javascript"> window.BMap_loadScriptTime = (new Date).getTime();</script>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&amp;ak=BIalsTEjgPtbogULIaIj6mnD"></script>
	<!--script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&amp;ak=BIalsTEjgPtbogULIaIj6mnD&amp;services=&amp;t=20161130153924"></script-->
	<script type="text/javascript" src="http://developer.baidu.com/map/jsdemo/demo/convertor.js"></script>
</head>
<body class=" user" ontouchstart="">
<div class="container profile">
  <div class="weui_tab_bd">
    <header class="user-header">
      <figure class="header-img">
        <img src="./个人资料_files/headicon_128.png">
                
      </figure>
      <p class="user-name"></p>
    </header>
    <div class="user-page">
        <div class="user-page-box">
            <i class="iconfont icon-tel po-re f-left"><span class="pdl35">手机号</span></i>
            <p class="f-right center-phone" style="color: #4d5b65;"></p>
        </div>
        <div class="user-page-box">
            <i class="iconfont icon-sq po-re f-left"><span class="pdl35">社区</span></i>
            <!--p class="f-right"><a href="http://h5.lelianyanglao.com/index.php?g=Portal&amp;m=Topic&amp;a=add_field&amp;field=location_id&amp;fieldName=%E6%B4%BB%E5%8A%A8%E5%9C%B0%E7%82%B9&amp;topic_type=2&amp;jointype=0&amp;return_location_id=1&amp;url_referer=%2Findex.php%3Fg%3Duser%26m%3Dprofile%26a%3Dedit%26pid%3D59&amp;update_location_id=1&amp;pid=59" style="color: #4d5b65">您还没有选择小区,点击编辑</a></p-->
        </div> 
        <div class="user-page-box page-color">
            <i class="iconfont icon-juese po-re f-left"><span class="pdl35">当前角色</span></i>
            <p class="f-right">
            	普通用户            </p>
        </div> 
        <div class="user-page-box page-color po-re">
        	<i class="iconfont icons-juese po-re f-left"><span class="pdl35">申请角色</span></i>
            <select name="user_state" class="f-right">
            	<option>普通用户</option>
            	<option value="is_hxlr">活力老人</option>
            	<option value="is_sqgl">管理员</option>
            	<option value="is_sqzz">组织者</option>
            </select>
        </div>
        <div class="sq-tips">您申请的【管理员】，正在确认中</div>
        <!--弹出层-->
        <div class="tips-layer" id="js">
        	<i></i> 
        	<h3 class="tittle">角色说明</h3>
        	<div class="content">
        		<div class="content-box">
    				<h3><span>活力老人</span></h3>
    				<p>为老人们排忧解难，为老人服务事业尽一份自己的一份力量。</p>      			
        		</div>
        	</div>
        	<div class="content">
        		<div class="content-box">
    				<h3><span>管理员</span></h3>
    				<p>权限等级升高，可以维护人们发布的活动帖子</p>      			
        		</div>
        	</div>
        	<div class="content">
        		<div class="content-box">
    				<h3><span>组织者</span></h3>
    				<p>可以线上发起话题，线下组织老人一起活动，丰富老人的生活，让老人快乐每一天</p>      			
        		</div>
        	</div>
        </div>
    </div>
  </div>

	<div class="tips-layer" id="sq">
		<div class="weui_tab_bd">
			<div class="hd banner">
				<p style="padding: 15px;">为了让给您享受更好的服务，请您选择所在的社区</p>
			</div>

			<div style="width: 100%; height: 200px; display: none; overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0, 0, 0); text-align: left;" id="map">
			</div>

			<div class="weui_panel weui_panel_access">
				<div class="weui_panel_bd">
					<div class="weui_media_box weui_media_text attach">
						<figure>
							<figcaption>你可能在的小区：
								<div id="villages"></div>
								<p>如果没有你的社区请点击 <a href="javascript:;" data-target="#full" class="weui_btn weui_btn_mini weui_btn_default open-popup" style="float: right;">搜索</a></p>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>

			<div class="weui_cells weui_cells_checkbox">

			</div>
			
			
			<input name="location_id" id="location_id" value="" type="hidden">
			<div class="weui_panel weui_panel_access box-panel" style="background-color: #f1f1f1;">
				<div class="weui_panel_bd">
					<div class="weui_media_box weui_media_text">
						<a href="javascript:;" class="weui_btn weui_btn_primary" id="submit">完成</a>
					</div>
					<div class="weui_media_box weui_media_text">
						<a href="javascript:;" class="weui_btn weui_btn_primary" id="cancel">取消</a>
					</div>					
				</div>
			</div>
			<style>
				.weui_search_bar:after {
					border: 0;
				}

				.weui-popup-container, .weui-popup-overlay {
					height: 90%;
					bottom: 60px;
				}

				.weui_cells:before {
					border: 0;
				}

				.sch-box {
					padding: 10px 5px;
					padding-left: 9px;
					margin-bottom: 10px;
				}

				.sch-box .sch-input {
					height: 40px;
					padding: 0;
					width: 100%;
					padding-left: 29px;
					box-sizing: border-box;
					border: 0px;
					background-image: url("http://xs01.meituan.net/waimai_i/img/address/search.b3926f47.png");
					background-size: 14px 14px;
					background-repeat: no-repeat;
					background-position: 8px;
					font-size: 15px;
				}

				.sch-input-cont {
					margin-right: 59px;
				}

				.sch-box .sch-submit {
					height: 40px;
					width: 50px;
					background-color: #ffffff;
					color: #fa9700;
					text-align: center;
					font-size: 16px;
					border: 0;
					-webkit-appearance: none;
					cursor: pointer;
					line-height: 40px;
					padding: 0px;
					float: right;
				}
			</style>

			<div id="full" class="weui-popup-container" style="height: 100%;bottom: 0;">
				<div class="weui-popup-overlay"></div>
				<div class="weui-popup-modal pdb80">
					<div id="sch-box" class="sch-box">
						<input class="fr borderradius-3 sch-submit" onclick="searchAndLocate();" value="搜索" type="button">
						<div class="sch-input-cont">
							<input id="_search" class="borderradius-3 sch-input" placeholder="如：北京曙光里" type="text">

						</div>
					</div>
					<div class="serach-list">
						<ul id="location_result"></ul>
					</div>
				</div>
			</div>
		</div>
	</div>
 <script>
 $(function(){
 	$('select[name="user_state"]').on('change',function(){
 		if(!$(this).val()){
 			return false;
 		}
 		
		$.post("/index.php?g=user&m=profile&a=state&pid=59", 
			   {state: $(this).val()}, 
		       function (d) {
                  $.alert(d.info, function() {
                    window.location.reload();
                  });
		       });
 	});
 	
 	$('.icons-juese').click(function(){
 		$('#js').show();
 	});
	
 	$('.tips-layer i').click(function(){
 		$('.tips-layer').hide(400);
 	})
	
  	$('.icon-sq').click(function(){
 		$('#sq').show();
 	});
	
    $('#cancel').click(function(){
 		$('#sq').hide();
 	});
 });
 </script>
</body>
</html>