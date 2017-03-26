<?php   
    global $bp;

	// Need to change the user ID, so if we're not on a member page, $counts variable is still calculated
	$user_id = /*bp_is_user() ? bp_displayed_user_id() : */bp_loggedin_user_id();

	// BuddyBar compatibility
	$user_domain = /*bp_displayed_user_domain() ? bp_displayed_user_domain() :*/ bp_loggedin_user_domain();

	/** FOLLOWERS NAV ************************************************/
	$counts         = bp_follow_total_follow_counts( array( 'user_id' => $user_id ) );
	$slug           = bp_get_friends_slug();
	$friends_link   = trailingslashit( $user_domain . $slug );	
	$following_link = $friends_link.$bp->follow->following->slug;
	$follower_link  = $friends_link.$bp->follow->followers->slug;
		
	$post_count_query = new WP_Query(
		array(
			'author' => $user_id,
			'post_type' => 'post',
			'posts_per_page' => 1,
			'post_status' => 'publish'
		)
	);

	$sap_post_count = $post_count_query->found_posts;
	wp_reset_postdata();


	$blog_link = trailingslashit( $user_domain . __( 'blog', 'bp-user-blog' ) );
	
	// Add subnav items
	
	//if ( !is_user_logged_in() || bp_displayed_user_id() != get_current_user_id() ) {
	//	$blogname = __( 'Articles', 'bp-user-blog' );
	//} else {
		$blogname = __( 'Published', 'bp-user-blog' );
	//}	
	$bookmarks_link =trailingslashit( $blog_link . 'bookmarks' ); 
	
	$photos_cnt = bbm_total_photos_count();
	$buddyboss_media_link = trailingslashit( $user_domain . buddyboss_media_default_component_slug() ); 
	
	$slug         = bp_get_profile_slug();
	$profile_link = trailingslashit( $user_domain . $slug );
	$profile_name = _x( 'Profile', 'Profile header menu', 'buddypress' );
	
	
	$me_activity_link = trailingslashit( $user_domain . $bp->activity->slug ) . 'just-me/';
	
	$slug               = bp_get_notifications_slug();
	$notifications_link = trailingslashit( $user_domain . $slug );

	// Only grab count if we're on a user page and current user has access.
	if ( bp_is_user() && bp_user_has_access() ) {
		$count    = bp_notifications_get_unread_notification_count( bp_displayed_user_id() );
		//$class    = ( 0 === $count ) ? 'no-count' : 'count';
		$nav_name = sprintf(
			/* translators: %s: Unread notification count for the current user */
			_x( '通知 %s', 'Profile screen nav', 'buddypress' ),
			sprintf(
				'%s',
				bp_core_number_format( $count )
			)
		);
	} else {
		$nav_name = _x( '通知', 'Profile screen nav', 'buddypress' );
	}	
	
	$imgpath = XRUI_PLUGIN_URL . 'assets/img/';
?>
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
