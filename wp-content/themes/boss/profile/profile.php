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
	<link rel="icon" href="http://h5.lelianyanglao.com/themes/wap/Public/images/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="http://h5.lelianyanglao.com/themes/wap/Public/images/favicon.ico" type="image/x-icon">
	
	<!--link rel="stylesheet" href="./个人资料_files/weui.min.css">
	<link rel="stylesheet" href="./个人资料_files/swiper-3.3.1.min.css">

	<link rel="stylesheet" href="./个人资料_files/jquery-weui.min.css"-->

    <link rel="stylesheet" href="./个人资料_files/app.css">
    
    <script type="text/javascript">

</script>
	
    <script src="./个人资料_files/jquery.js.download"></script>
    <!--<script src="./个人资料_files/wind.js.download"></script>
    <script src="/themes/wap/Public/simpleboot/bootstrap/js/bootstrap.min.js"></script>
    <script src="./个人资料_files/frontend.js.download"></script>
    <script type="text/javascript" src="./个人资料_files/common.js.download"></script>
    <script type="text/javascript" src="./个人资料_files/content_addtop.js.download"></script>
    <script src="./个人资料_files/jquery-weui.min.js.download"></script>
    <script src="./个人资料_files/index.js.download"></script>
    <script src="./个人资料_files/function.js.download"></script>-->
    <!--<script src="/themes/wap/Public/js/vconsole.min.js"></script>-->
    <script src="./个人资料_files/fastclick.js.download"></script>
    <script>
      $(function() {
        FastClick.attach(document.body);
      });
    </script>

<style>
	#think_page_trace_open{display:none;}
</style>
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
            <p class="f-right"><a href="http://h5.lelianyanglao.com/index.php?g=Portal&amp;m=Topic&amp;a=add_field&amp;field=location_id&amp;fieldName=%E6%B4%BB%E5%8A%A8%E5%9C%B0%E7%82%B9&amp;topic_type=2&amp;jointype=0&amp;return_location_id=1&amp;url_referer=%2Findex.php%3Fg%3Duser%26m%3Dprofile%26a%3Dedit%26pid%3D59&amp;update_location_id=1&amp;pid=59" style="color: #4d5b65">您还没有选择小区,点击编辑</a></p>
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
        <div class="tips-layer">
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
          <div class="menu">
            <div><a href="http://h5.lelianyanglao.com/">点这里 回首页</a></div>
        </div>
        <div class="menu-holder">&nbsp;</div>
    </div>
 


 <script>
 $(function(){
 	$('select[name="user_state"]').on('change',function(){
 		if(!$(this).val()){
 			return false;
 		}
 		
		 $.post("/index.php?g=user&m=profile&a=state&pid=59", {state: $(this).val()}, function (d) {
            $.alert(d.info, function() {
              window.location.reload();
            });
		 });
 	});
 	
 	$('.icons-juese').click(function(){
 		$('.tips-layer').show();
 	});
 	$('.tips-layer i').click(function(){
 		$('.tips-layer').hide(400);
 	})
 });
 </script>
</body></html>