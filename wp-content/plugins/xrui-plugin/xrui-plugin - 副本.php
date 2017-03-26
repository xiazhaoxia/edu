<?php  
/*
Plugin Name: Weilele Customization plugin
Plugin URI: http://www.xxxx.com/plugins/
Description:微乐乐定制功能
Version: 1.0.0
Author: xiongjian
Author URI: http://www.xxxx.com/
License: GPL
*/

  
register_activation_hook( __FILE__, 'xrui_plugin_install');   
register_deactivation_hook( __FILE__, 'xrui_plugin_remove' );  

function xrui_plugin_install() {  
	// global $wpdb;
	// $table_name = $wpdb->prefix .'bp_xprofile_fields';   
	// $query      = "SELECT * FROM ". $table_name . " WHERE name ='电话' and group_id = 1";
	// //$telfield   = $wpdb->get_row($query);  
	// $results    = $wpdb->get_results($query);
	// if($results)
		// return;
    
	// $data_array = array(  
		// 'group_id' =>1,
		// 'parent_id' =>0,
		// 'type'=>'mobiletel',
		// 'name'=>'电话',
		// 'description'=>'',
		// 'is_required'=>1,
		// 'is_default_option' =>0,
		// 'field_order' =>1,
		// 'option_order'=>0,
		// 'order_by'=>'',
		// 'can_delete'=>0
	// ); 
	
    // $format = array(  
		// '%d',
		// '%d',
		// '%s',
		// '%s',
		// '%s',
		// '%d',
		// '%d',
		// '%d',
		// '%d',
		// '%s',
		// '%d'
	// ); 	
	
    // $result = $wpdb->insert($table_name,$data_array,$format); 
	// if($result)
	// {
		// $id = $wpdb->insert_id;
		// $table_name = $wpdb->prefix .'bp_xprofile_meta';   
		// $data_array = array(  
			// 'object_id' =>$id,
			// 'object_type' =>'field',
			// 'meta_key'=>'default_visibility',
			// 'meta_value'=>'adminsonly'
		// );  
		// $format = array( '%d','%s','%s','%s');
		// $wpdb->insert($table_name,$data_array,$format);
		
	    
		// $data_array = array(  
			// 'object_id' =>$id,
			// 'object_type' =>'field',
			// 'meta_key'=>'allow_custom_visibility',
			// 'meta_value'=>'disabled'
		// );  
	 
		// $wpdb->insert($table_name,$data_array,$format);			
	// }
    global $wpdb;
    $table_name = $wpdb->prefix .'signups'; 	
	$addTel = "alter table ' . $table_name .' add tel varchar(100) ";
	
	$result     = $wpdb->query($sql);
	if($result == 1)
	{
		
	}
	
    $table_name = $wpdb->prefix .'users'; 	
	$addTel = "alter table ' . $table_name .' add tel varchar(100) ";
	
	$result     = $wpdb->query($sql);
	if($result == 1)
	{
		
	}	
}

function xrui_plugin_remove() 
{ 
	// global $wpdb;
    // $table_name = $wpdb->prefix .'bp_xprofile_fields';   
	// $query      = "SELECT * FROM ". $table_name . " WHERE name ='电话' and group_id = 1";
	// $telfield   = $wpdb->get_row($query);  
	 
	// $query      = "SELECT * FROM ". $table_name . " WHERE name ='电话' and group_id = 1";
	// $table_name = $wpdb->prefix .'bp_xprofile_meta'; 
	// $query      = "DELETE FROM " . $table_name . " WHERE object_id = " . $telfield->id ;
	// $wpdb->query($query);
	// //echo $mylink->link_id; // prints "10" 
}

add_filter( 'auto_update_plugin', '__return_false' );
add_filter( 'auto_update_theme', '__return_false' );


// Directory
if ( ! defined( 'XRUI_PLUGIN_DIR' ) ) {
  define( 'XRUI_PLUGIN_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
}

// Url
if ( ! defined( 'XRUI_PLUGIN_URL' ) ) {
  $plugin_url = plugin_dir_url( __FILE__ );

  // If we're using https, update the protocol. Workaround for WP13941, WP15928, WP19037.
  if ( is_ssl() )
    $plugin_url = str_replace( 'http://', 'https://', $plugin_url );

  define( 'XRUI_PLUGIN_URL', $plugin_url );
}

 
function weixin_js() {
 
    echo '<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>';
 
}

function xrui_plugin_css()
{
   // add custom.css
   $assets			 = XRUI_PLUGIN_URL. 'assets';
   wp_enqueue_style ( 'weilelecustom',  $assets . '/css/custom.css', array(), '1.0', 'all' ); 	
   wp_enqueue_script( 'weilelepostjs',  $assets . '/js/posts.js', array( 'jquery' ), '1.0', true );
   //wp_enqueue_script( 'weixinJSJDK',  $assets . '/js/posts.js', array( 'jquery' ), '1.0', true );
   add_action('wp_head','weixin_js');
   
}
add_action( 'wp_enqueue_scripts', 'xrui_plugin_css' );

/*******************************************************************
                 navigation bar
********************************************************************/
function navigation_init()
{
   // Setup WP Toolbar menus.
   add_action( 'bp_setup_admin_bar',  'bookmark_setup_admin_bar', 60 );	
   add_action( 'bp_setup_nav', 'bookmark_setup_bookmark_nav', 100 );
   add_action( 'bp_setup_nav', 'member_setup_search_nav', 100 );
   add_action( 'bp_setup_nav', 'xrui_setup_me_nav', 100 );
   add_action( 'bp_setup_nav', 'xrui_setup_quanzi_nav', 100 );
}
add_action('plugins_loaded','navigation_init');	


function bookmark_setup_admin_bar()
{
	// Menus for logged in user.
	if ( is_user_logged_in() && bp_displayed_user_id() == get_current_user_id() )  
    {
		// global $wp_admin_bar;
		// $bookmarks_slug = bp_loggedin_user_domain().'bookmarks';				
		// $wp_admin_bar->add_menu( array(
			// 'parent' => 'my-account-buddypress',
			// 'id'     => 'my-bookmarks-blog',
			// 'title'  => _x( '我的收藏' , 'buddypress' ),
			// 'href'   => trailingslashit( $bookmarks_slug ),
			// 'meta'      => array(
						// 'class'     => 'menupop',
					// )
		// ) ); 
		global $wp_admin_bar;
		$blog_slug = bp_loggedin_user_domain().'blog/';	

		// $wp_admin_bar->add_menu( array(
			// 'parent' => 'my-account-blog',
			// 'id'     => 'my-account-blog-'.'createpost',
			// 'title'  => __( 'Add New Post', 'bp-user-blog' ),
			// 'href'   => trailingslashit( $blog_slug.'createpost' )
		// ) );
		
		// $wp_admin_bar->add_menu( array(
			// 'parent' => 'my-account-blog',
			// 'id'     => 'my-account-blog-'.'bookmarks',
			// 'title'  => __( '我的收藏', 'bp-user-blog' ),
			// 'href'   => trailingslashit( $blog_slug.'bookmarks' )
		// ) );		
		
		
	}
}

function bookmark_setup_bookmark_nav()
{
	$displayed_user_id = bp_displayed_user_id();
	$user_domain = ( ! empty( $displayed_user_id ) ) ? bp_displayed_user_domain() : bp_loggedin_user_domain();

	$blog_link = trailingslashit( $user_domain . __( 'blog', 'bp-user-blog' ) ) ;	
	if ( is_user_logged_in() && bp_displayed_user_id() == get_current_user_id() ) {	
		bp_core_new_subnav_item( 
		array(
			'name'            => __( '我的收藏', 'bp-user-blog' ),
			'slug'            => 'bookmarks',
			'parent_url'      => $blog_link,
			'parent_slug'     =>   __( 'blog', 'bp-user-blog' ),
			'screen_function' => 'sap_user_bookmark_page',
			'position' => 50,
		   )
		);
		
		// bp_core_new_subnav_item( 
			// array(
		 	 // 'name' => __( 'Add New Post', 'bp-user-blog' ),
			  // 'slug' => 'createpost',
			 // 'parent_url' => $blog_link,
			 // 'parent_slug' =>   __( 'blog', 'bp-user-blog' ),
			 // 'screen_function' => 'sap_user_postcreate_page',
			 // 'position' => 40,
		   // )
		// );		
	}
}

function sap_user_bookmark_page() {
	add_action( 'bp_template_content', 'sap_template_bookmark' );
    bp_core_load_template( apply_filters( 'sap_user_bookmark_page', 'members/single/plugins' ) );
}

function sap_template_bookmark() {
   sap_load_template( 'sap-bookmarks' );
}

function sap_user_postcreate_page() {
	add_action( 'bp_template_content', 'sap_template_postcreate' );
    bp_core_load_template( apply_filters( 'sap_user_postcreate_page', 'members/single/plugins' ) );
}

function sap_template_postcreate() {
   sap_load_template( 'sap-post-create' );
}

function member_setup_admin_bar()
{
	// Menus for logged in user.
	if ( is_user_logged_in() )
    {
		global $wp_admin_bar;
		$friends_link = bp_loggedin_user_domain().'membersearch';
		$slug         = bp_get_friends_slug();		
		$wp_admin_bar->add_menu( array(
			'parent' => 'my-account-buddypress',
			'id'     => 'membersearch',
			'title'  => _x( '添加朋友' , 'buddypress' ),
			'href'   => trailingslashit( $friends_link ) 
 
		) ); 
	}
}

function member_setup_search_nav()
{
	if ( is_user_logged_in() ) {
		global $bp;
		
		// Determine user to use.
		$user_domain = bp_loggedin_user_domain();
 
		 
		$slug         = bp_get_friends_slug();//bp_get_activity_slug();
		$friends_link = trailingslashit( $user_domain . $slug );	
		bp_core_new_subnav_item( array( 
			'name' => __( '添加朋友', 'buddypress' ), 
			'slug' => 'membersearch',
			'parent_url' => $friends_link,
			'parent_slug' => $slug,
			'position' => 30,
			'screen_function' => 'member_search_page2',
			'show_for_displayed_user' => true,
			'item_css_id' => 'membersearch'
		) );
 
		// bp_core_new_subnav_item( array( 
			// 'name' => __( '关注', 'buddypress' ), 
			// 'slug' => 'members-following',
			// 'parent_url' => $friends_link,
			// 'parent_slug' => $slug,
			// 'position' => 40,
			// 'screen_function' => 'bp_follow_screen_following',
			// 'show_for_displayed_user' => true,
			// 'item_css_id' => 'members-following'
		// ) );
	}
}



function group_writecourse_nav()
{
	if ( is_user_logged_in() ) {
		global $bp;
		
		// Determine user to use.
		$user_domain = bp_loggedin_user_domain();
 
 
		$slug         = bp_get_groups_slug();
		$groups_link = trailingslashit( $user_domain . $slug );	
		bp_core_new_subnav_item( 
			array(
		 	 'name' => __( 'Add New Post', 'bp-user-blog' ),
			  'slug' => 'createpost',
			 'parent_url' => $groups_link,
			 'parent_slug' =>   __( 'blog', 'bp-user-blog' ),
			 'screen_function' => 'sap_user_postcreate_page',
			 'position' => 40,
		   )
		);
	}
}

// function member_following_screen() {
	// add_action( 'bp_template_content', 'member_template_following' );
	// if ( apply_filters( 'bp_follow_allow_ajax_on_follow_pages', true ) ) {
		// // add the "Order by" dropdown filter
		// add_action( 'bp_member_plugin_options_nav',    'bp_follow_add_members_dropdown_filter' );

		// // add ability to use AJAX
		// add_action( 'bp_after_member_plugin_template', 'bp_follow_add_ajax_to_members_loop' );
	// }	
    // bp_core_load_template( apply_filters( 'member_following_screen', 'members/single/plugins' ) );
	 
// }
 

// function member_template_following() {
   // bp_get_template_part( 'members/single/follow' );
// }

function member_search_page2() {

 bp_core_load_template( apply_filters( 'friends_template_requests', 'members/single/home' ) );
}

function membersearch_template_bookmark() {
    bp_get_template_part( 'members/membersearch' ); 
}

////quanzhi
// function xrui_buddypress_quanzhi() {
	// global $bp;
	// bp_core_new_subnav_item( array( 
		// 'name' => __( 'My Own Setting', 'buddypress_login' ), 
		// 'slug' => 'email-pwd',
		// 'parent_url' => $bp->loggedin_user->domain . $bp->bp_nav['settings']['slug'] . '/',
		// 'parent_slug' => $bp->bp_nav['settings']['slug'],
		// 'position' => 100,
		// 'screen_function' => 'brain1981_budypress_recent_posts',
		// 'show_for_displayed_user' => true,
		// 'item_css_id' => 'brain1981_budypress_recent_posts'
	// ) );
// }
// add_action( 'bp_setup_nav', 'brain1981_buddypress_tab', 1000 );
 
// function xrui_budypress_recent_posts () {
	// add_action( 'bp_template_title', 'brain1981_buddypress_recent_posts_title' );
	// add_action( 'bp_template_content', 'brain1981_buddypress_recent_posts_content' );
	// bp_core_load_template(  get_template_directory_uri().'/buddypress/members/single/settings.php'  );
// }
// function xrui_buddypress_recent_posts_title() {
	// _e( 'My Own Setting', 'buddypress_login' );
// }
// function xrui_buddypress_recent_posts_content() {
	// //do something on the sub page
// } 

class CoursePostType
{
    function init()
    {
        add_action( 'init', array($this,'create_coursePT') );
        //add_filter('post_type_link', array($this, 'get_permalink') ,1 ,3 );
    }
    
    function create_coursePT()
    {
        $labels = array(
            'name'          => 'course',   
            'singular_name' => 'course',   
            'add_new'       => 'AddCourse',   
            'add_new_item'  => 'AddACourse',   
            'edit_item'     => 'EditCourse',   
            'new_item'     => 'NewCourse',   
            'view_item' => '查看',   
            'search_items' => '搜索',   
            'not_found' =>  'NoCourse',   
            'not_found_in_trash' => 'NoCourse',    
            'parent_item_colon' => '',  
            'menu_name' => '课程',
            'menu_position' => 5
        );   
        $args = array(   
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'query_var' => true,
            'capability_type' => 'post',
            'has_archive' => true,
            'hierarchical' => false,
            'supports' => array('title','editor','thumbnail','comments','custom-fields'),
        );
        
        //自定义一个hc_post_type_zsjh的文章类型
        register_post_type( 'course', $args);
        //自定义固定链接规则
        //add_action('generate_rewrite_rules',array($this, 'course_rewrite_rules') );
    }
    
    function course_rewrite_rules( $wp_rewrite )
    {
        global $wp_rewrite;
        $wp_rewrite->add_permastruct('course', '/course/%course_id%', false);
        $new_rules = array('course/([0-9]+)?$' => 'index.php?post_type=course&p=$matches[1]' );
        $wp_rewrite->rules = $new_rules + $wp_rewrite->rules; 
    }

    function get_permalink( $permalink, $post, $leavename )
    {
        //替换%jihua_id%为当前文章ID
        $permalink = str_replace("%course_id%", $post->ID, $permalink);
        return $permalink;
    }
}

$CoursePT = new CoursePostType();
$CoursePT->init();


// /* 访问计数 */
// function record_visitors()
// {
	// if (is_singular())
	// {
	  // global $post;
	  // $post_ID = $post->ID;
	  // if($post_ID)
	  // {
		  // $post_views = (int)get_post_meta($post_ID, 'views', true);
		  // if(!update_post_meta($post_ID, 'views', ($post_views+1)))
		  // {
			// add_post_meta($post_ID, 'views', 1, true);
		  // }
	  // }
	// }
// }
// add_action('wp_head', 'record_visitors');
 
/// 函数名称：post_views
/// 函数作用：取得文章的阅读次数
// function post_views($before = '(点击 ', $after = ' 次)', $echo = 1)
// {
  // global $post;
  // $post_ID = $post->ID;
  // $views = (int)get_post_meta($post_ID, 'views', true);
  // if ($echo) echo $before, number_format($views), $after;
  // else return $views;
// }
/*******************************************************************
                 Login Redirect  based on role
********************************************************************/
function redirect_after_login_per_role()
{
	//retrieve current user info 
	global $wp_roles, $user;
	    
	$roles = $wp_roles->roles;

	
	 //is there a user to check?
	foreach($roles as $role_slug => $role_options){
		if( isset( $user->roles ) && is_array( $user->roles ) ) {
			//check for admins
			if( in_array( $role_slug, $user->roles ) ) {
				
			}
		}
    }
}

function bp_xrui_redirect_to_profile( $redirect_to_calculated, $redirect_url_specified, $user ){
	if( empty( $redirect_to_calculated ) )
		$redirect_to_calculated = $redirect_url_specified;
	
	$term_obj     = get_term_by('slug','original','category');
	$originallink = get_term_link($term_obj, $term_obj->slug);
	
	if( !is_wp_error($user) 
		
	    &&  empty( $redirect_to_calculated )
	)
	{
		if( !is_weixin() && !is_super_admin( $user->ID ) )
		{
			$user_domain       = bp_core_get_user_domain( $user->ID );
			$wall_profile_link = trailingslashit( $user_domain . buddypress()->activity->slug ).'following' ;
			return $wall_profile_link;//bp默认的用户中心首页
		}
		else
		{
			return $originallink; 
		}
	}
	else
	{
		//return $originallink; 
		return $redirect_to_calculated;  
	}
}

add_filter("login_redirect","bp_xrui_redirect_to_profile",100,3);


/*******************************************************************
                 logout redirect
********************************************************************/
//add_filter('logout_url', 'bp_xrui_logout_redirect', 10, 2);

function bp_xrui_logout_redirect($logouturl, $redir) {
  $term_obj     = get_term_by('slug','original','category');
  $originallink = get_term_link($term_obj, $term_obj->slug);
  $redir = $originallink;//home_url(); // 这里改成你要跳转的网址
  return $logouturl . '&amp;redirect_to=' . urlencode($redir);
}

//function bp_xrui_remove_admin_bar() {
	//if( !is_super_admin() ) 
	//	add_filter( 'show_admin_bar', '__return_false' );
//}
//add_action('wp', 'bp_xrui_remove_admin_bar');


/*******************************************************************
    telephone number in registry form and in edit page.
********************************************************************/
//add telephone field in buddypress register form
function bp_xrui_add_tel()
{
    $strLabel =	 '<label for="signup_tel">'.  _e( '电话号码', 'buddypress' ) . _e( '(required)', 'buddypress' ). '</label>';
 
    echo $strLabel;
	
	/**
	 * Fires and displays any member registration email errors.
	 *
	 * @since 1.1.0
	 */
	do_action( 'bp_signup_tel_errors' ); 
	$strInput = '<input type="tel" name="signup_tel" id="signup_tel" value="';
	$strInput = $strInput.bp_get_signup_tel_value().'" ';
    $strInput = $strInput.bp_form_field_attributes( 'tel' );
	$strInput = $strInput.' />';
	echo $strInput;

}
//add_action('bp_account_details_fields', 'bp_xrui_add_tel');


function bp_tel_format_check($fieldname,$mobilenumber)
{
	global $bp;
	if (!is_numeric($mobilenumber)) {
		$bp->signup->errors[$fieldname] =  __( '手机号格式不对！', 'buddypress' );
	}
	else
	{
		$isMobilePhoneNumber =  preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $mobilenumber) ? true : false;

		if(!$isMobilePhoneNumber)
			$bp->signup->errors[$fieldname] =  __( '手机号格式不对！', 'buddypress' );
	}
	
}
function bp_tel_exists_check($fieldname,$mobilenumber)
{  
	global $bp;
    // Check into signups.
	$signups = BP_Signup::get( array(
		'usersearch'     => $mobilenumber,
		'active'         => 1
	) );

	$signup = isset( $signups['signups'] ) && ! empty( $signups['signups'][0] ) ? $signups['signups'][0] : false;
	
    if( ! empty( $signup ))
	{
		$bp->signup->errors[$fieldname] =  __( '手机号已经被使用！', 'buddypress' );
	}	
}

function bp_tel_signup_tel_check()
{
	global $bp;
	$mobile =  $_POST['signup_tel'];
	bp_tel_format_check('signup_tel',$mobile);
	bp_tel_exists_check('signup_tel',$mobile);
}
//add_action( 'bp_signup_validate', 'bp_tel_signup_tel_check' );	

function bp_tel_check()
{	
	global $wpdb;
	$table_name = $wpdb->prefix .'bp_xprofile_fields';   
	$query      = "SELECT * FROM ". $table_name . " WHERE type='mobiletel' and group_id = 1" ;	
	$results    = $wpdb->get_results($query);
	if(!$results)
		return;
	foreach ($results as $telfield) 
	{
		$fieldname = 'field_'.$telfield->id;
		$mobile =  $_POST[$fieldname];
		bp_tel_format_check($fieldname,$mobile);
		bp_tel_exists_check($fieldname,$mobile);
	}
}

add_action( 'bp_signup_validate', 'bp_tel_check' );	
add_action( 'bp_profile_validate', 'bp_tel_check' );	

function bp_save_tel($user_id, $user_login, $user_password, $user_email, $usermeta )
{
	global $wpdb;
    $table_name = $wpdb->prefix .'signups'; 	
	$tel =  $_POST['signup_tel'];
	$updatesql  = "UPDATE ".$table_name ." SET tel = %s	WHERE user_login = %s";
	$sql        = $wpdb->prepare($updatesql , $tel,$user_login ); 	
	$result     = $wpdb->query($sql);
	if($result == 1)
	{
		
	}

	$sql        = $wpdb->prepare( "UPDATE $wpdb->users SET tel = %s	WHERE id = %d", $tel,$user_id ); 	
	$result     = $wpdb->query($sql);
	if($result == 1)
	{
		
	}	
}
//add_action( 'bp_core_signup_user', 'bp_save_tel',10,6 );
 

function bp_xrui_set_tel($usermeta)
{
    $usermeta['signup_tel'] = $_POST['signup_tel'] ;
	return  $usermeta;
}
//add_filter('bp_signup_usermeta', 'bp_xrui_set_tel');
	
	
function bp_xrui_assign_email()
{
    $_POST['signup_email'] = $_POST['signup_username'].'@microlele.com';
}
//add_action('bp_signup_pre_validate', 'bp_xrui_assign_email');	

function bp_xrui_update_signup_meta($userId,$posted_field_ids, $errors, $old_values, $new_values)
{
	global $bp;
	global $wpdb;
	$user_login = bp_core_get_core_userdata($userId)->user_login;	
	$signups_table = buddypress()->members->table_name_signups;
	$signup        = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$signups_table} WHERE user_login = %s AND active = 1", $user_login) );
	$meta           = maybe_unserialize( $signup->meta );
	foreach ( $new_values as $field_id=>$values ) {
		$meta['field_'.$field_id] = $values['value'];
	}
 
	$args['signup_id'] = $signup->signup_id;
	$args['meta']      = $meta;
	
	BP_Signup::update($args);
}

add_action('xprofile_updated_profile','bp_xrui_update_signup_meta',10,5);


function bp_xrui_filtering_activity( $retval ) {
    if ( !bp_is_user_activity() ) {//只在首页过滤，在用户中心不过滤
    	$retval['action'] = 'activity_update';
		//$retval['action'] = 'activity_update';//activity_update,profile_updated/new_forum_post/new_blog_post
		//$retval['sort'] = 'ASC'; //default DESC
		//$retval['display_comments'] = false;
		//$retval['per_page'] = 5;//change the number of activity
	}
	return $retval;
}	
//add_filter( 'bp_after_has_activities_parse_args', 'bp_xrui_filtering_activity' );



/*******************************************************************
    Remove many unwanted  things 
********************************************************************/
remove_action( 'wp_head', 'wp_generator');					//删除 head 中的 WP 版本号
remove_action( 'wp_head', 'rsd_link' );						//删除 head 中的 RSD LINK
remove_action( 'wp_head', 'wlwmanifest_link' );				//删除 head 中的 Windows Live Writer 的适配器？ 

remove_action( 'wp_head', 'feed_links_extra', 3 );		  	//删除 head 中的 Feed 相关的link
//remove_action( 'wp_head', 'feed_links', 2 );	

remove_action( 'wp_head', 'index_rel_link' );				//删除 head 中首页，上级，开始，相连的日志链接
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); 
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); 
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );	//删除 head 中的 shortlink

remove_action( 'template_redirect','wp_shortlink_header', 11, 0 );	//删除短链接通知，不知道这个是干啥的。

remove_action( 'wp_head','print_emoji_detection_script',7);



/*******************************************************************
   heartbeat
********************************************************************/
//add_action( 'init', 'stop_heartbeat', 1 );
function stop_heartbeat() {
   wp_deregister_script('heartbeat');
}

// add_filter( 'get_avatar_url' , 'my_custom_url' , 1 , 3 );
// function my_custom_url( $url, $id_or_email, $args) {
    
	// $tempurl = get_user_meta($id_or_email, 'open_img' );
	// if(!empty($templurl))
		// return $tempurl;
    // return $url;
// }


/*******************************************************************
    avatar 
********************************************************************/
add_filter( 'bp_core_fetch_avatar_no_grav' , 'bp_use_useravatar' , 1 , 2 );
function bp_use_useravatar($no_grav, $params) 
{
 
	$tempurl = get_user_meta(get_current_user_id(),'open_img',true );
	if(!empty($tempurl))
		return true;
 	
    return false ;
}
add_filter( 'bp_core_default_avatar_user' , 'bp_custom_url' , 1 , 2 );
function bp_custom_url($default, $params) 
{
	if( isset($params['item_id']))
	{
		$tempurl = get_user_meta($params['item_id'],'open_img',true );
		if(!empty($tempurl))
			return $tempurl;
	}		
    return $default ;
}


/*******************************************************************
    community search 
********************************************************************/
/**
 * 重置非管理员用户到首页
 * https://www.wpdaxue.com/only-allow-administrators-to-access-wordpress-admin-area.html
 */
// function redirect_non_admin_users() {
	// if ( ! current_user_can( 'manage_options' ) && '/wp-admin/admin-ajax.php' != $_SERVER['PHP_SELF'] ) {
		// wp_redirect( home_url() );
		// exit;
	// }
// }
// add_action( 'admin_init', 'redirect_non_admin_users' );

function cmp_name($a, $b)
{
	$al = strtolower($a->name);
	$bl = strtolower($b->name);
	if ($al == $bl) {
		return 0;
	}
	return ($al > $bl) ? +1 : -1;
}
/*select community*/

/**
 * 文档： http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi
 * 获取坐标附近
 * @return array|boolean
 */
function sp_get_current_nearby(){
    //http://api.map.baidu.com/place/v2/search?query=%E5%B0%8F%E5%8C%BA&page_size=10&page_num=0&scope=1&location=39.95922002157291,116.46405141273048&radius=2000&output=json&ak=NwTbTCZqZ9nmu5diqC44unLGvfGP3Rmh
	
	$query='别墅$小区';
	$page_size=20;
	
	$lng='39.95922002157291';
	$lat= $_POST[ 'lat' ];
	$lng = $_POST[ 'lng' ];
 
    $url = 'http://api.map.baidu.com/place/v2/search';
    $querydata=['query'=>$query,
	            'detail'=>1,
				'page_size'=>$page_size,
				'page_num'=>0,
				'scope'=>2,
				'location'=>$lat.','.$lng,
				'radius'=>3000,
				'output'=>'json',
				'ak'=> 'BIalsTEjgPtbogULIaIj6mnD' ];
    $geturl = $url.'?'.http_build_query($querydata);
    
    //mylog($geturl,'location_api2.log');
    
    //$filemd5 = md5($geturl);
   
    $filemd5 = file_get_contents($url.'?'.http_build_query($querydata));
 
    //mylog(F($filemd5),'location_api2.log');
    //echo objectToArray(json_decode($filemd5));
	$retObj = json_decode($filemd5);
	if($retObj->status == 0 )
	{
		usort($retObj->results,cmp_name);
		
		$filemd5 = json_encode($retObj);
	}
	echo $filemd5;
    exit;
}



/**
 * 文档: http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding#.E9.80.86.E5.9C.B0.E7.90.86.E7.BC.96.E7.A0.81.E6.9C.8D.E5.8A.A1
 * 根据lat lng 取出地图信息
 * @param $location_str   38.76623,116.43213 lat<纬度>,lng<经度>
 */
function sp_get_address(){
    $lat= $_POST[ 'lat' ];
	$lng = $_POST[ 'lng' ];
	
    $location_str = $lat.','.$lng;
    $url = 'http://api.map.baidu.com/geocoder/v2/'; 
    $querydata=['location'=>$location_str,'ak'=> 'BIalsTEjgPtbogULIaIj6mnD','pois'=>'0','output'=>'json'];
    //$geturl = $url.'?'.http_build_query($querydata);
    //$filemd5 = md5($geturl);
    //if(!F($filemd5)){
    //    F($filemd5,file_get_contents($url.'?'.http_build_query($querydata)));
    //}
    $filemd5 = file_get_contents($url.'?'.http_build_query($querydata));
    //echo objectToArray(json_decode($filemd5));
	
	$retObj = json_decode($filemd5);
	if($retObj->status == 0 )
	{
		session_start();
		$_SESSION['city'] =  $retObj->result->addressComponent->city;
	}
	
	echo $filemd5;
	
	
  exit;
}

/**
 * 文档:
 * 根据 取出小区信息
 * @param $location_str   38.76623,116.43213 lat<纬度>,lng<经度>
 */
function sp_get_community_info($guid){
	$querydata=['uid'=>$guid,'ak'=> 'BIalsTEjgPtbogULIaIj6mnD','output'=>'json','scope'=>'1'];
    $url = 'http://api.map.baidu.com/place/v2/detail';
    //$querydata=['location'=>$location_str,'ak'=> 'BIalsTEjgPtbogULIaIj6mnD','output'=>'json'];
    //$geturl = $url.'?'.http_build_query($querydata);
    //$filemd5 = md5($geturl);
    //if(!F($filemd5)){
    //    F($filemd5,file_get_contents($url.'?'.http_build_query($querydata)));
    //}
    $communityinfo = file_get_contents($url.'?'.http_build_query($querydata));
     //json_decode($filemd5));
	
	
	
    return $communityinfo;
}



function save_community( ){
	
	$current_user          = wp_get_current_user();
	$location_id           = $_POST[ 'location_id' ];
	$resp['status_code']   = 0;
	$user_domain           = bp_core_get_user_domain( $current_user->ID );
	$wall_profile_link     = trailingslashit( $user_domain . buddypress()->activity->slug ).'following' ;
	$resp['redirect_url']  = $wall_profile_link;  
	//save to wp_community
	global $wpdb;
    $table_name = $wpdb->prefix .'community';   
	$new_group_id = 0;

	$communityres = $wpdb->get_results( 
						$wpdb->prepare("SELECT * FROM {$wpdb->prefix}community WHERE uid=%s", $location_id) );
	if($communityres)
	{	
	    update_user_meta($current_user->ID, 'community',$communityres[0]->id );
	    //join the group
		//function bp_core_get_userid( $username = '' ) 
		//$groups     = groups_get_groups( 
		//				   array(
		//					'per_page'           => 1,
		//					'page'               => 1,
		//					'user_id'            => bp_loggedin_user_id()
		//				   ) 
		//			  );
		//if ($groups['total'] > 0)
		//{
		//	$groupslist  =  $groups['groups'];
 
			//left the previous community
		//	groups_leave_group($groupslist[0]->id,$current_user->ID);
		//}
		$new_group_id = groups_get_id(sanitize_title( esc_attr($communityres[0]->name )));
		groups_join_group( $new_group_id, $current_user->ID );
	}
	else
	{
		$communityinfo = sp_get_community_info($location_id);
		$communityinfojson = json_decode($communityinfo,true);
		if($communityinfojson['status'] == 0)
		{
			$cinfo = $communityinfojson['result'];
			$data_array = array(  
				'uid'          =>$location_id,
				'date_created' =>bp_core_current_time(),
				'name'         =>$cinfo['name'],
				'description'  =>'',
				'address'      =>$cinfo['address']
			); 
			
			$format = array(  
				'%s',
				'%s',
				'%s',
				'%s',
				'%s'
			); 	
			
			$result = $wpdb->insert($table_name,$data_array,$format);
			if($result)
			{
				$current_user = wp_get_current_user();
				update_user_meta($current_user->ID, 'community',$wpdb->insert_id );	
                //create a group for the community
				//join the group
				

				if (  $new_group_id = groups_create_group( 
				                                         array( 'group_id'     => $new_group_id, 
				                                                'name'         => $cinfo['name'], 
															    'description'  => $cinfo['address'], 
															    'slug'         => sanitize_title( esc_attr($cinfo['name']) ) , 
															    'date_created' => bp_core_current_time(), 
															    'status'       => 'public' ,
																'creator_id'   => bp_core_get_userid("Admin")
															  ) 
													    ) 
				) 
				{
					
					$groups     = groups_get_groups( 
									   array(
										'per_page'           => 1,
										'page'               => 1,
										'user_id'            => bp_loggedin_user_id()
									   ) 
								  );
					if ($groups['total'] > 0)
					{
						$groupslist  =  $groups['groups'];
						//$groupslist[0]
						//left the previous community
						groups_leave_group($groupslist[0]->id,$current_user->ID);
					}
					
					groups_join_group( $new_group_id, $current_user->ID );
				}				
				
			}	
			else
			{
				$resp['status_code'] = 1;
				$resp['redirect_url'] = '';
			}
		}
		else
		{
			$resp['status_code'] = 1;
			$resp['redirect_url'] = '';
		}
	}
	echo wp_json_encode( $resp );
	exit;
}


add_action( 'wp_ajax_sp_get_current_nearby',  'sp_get_current_nearby'   );
add_action( 'wp_ajax_sp_get_address',         'sp_get_address'   );
add_action( 'wp_ajax_nopriv_sp_get_address',  'sp_get_address'   );
add_action( 'wp_ajax_save_community',         'save_community'   );


 
function baidumap_js() {
	echo '<script type="text/javascript"> window.BMap_loadScriptTime = (new Date).getTime();</script>';
    echo '<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=BIalsTEjgPtbogULIaIj6mnD"></script>';
    echo '<script type="text/javascript" src="http://developer.baidu.com/map/jsdemo/demo/convertor.js"></script>';
}

 
/*******************************************************************
    community page
    me page
    profile page
	
********************************************************************/
function customizePages() {
	//$basename = basename($_SERVER['REQUEST_URI'], '?' . $_SERVER['QUERY_STRING']);
	//loadCustomTemplate(TEMPLATEPATH.'/custom/'."/$basename.php");
    global $wp;
	//check if user logined in and doesn't has community property_exists
	add_action( 'wp_head',   'baidumap_js' );
	
	$assets			 = XRUI_PLUGIN_URL. 'assets';
	// if($wp->request != 'communitysel')
	// {
		// wp_enqueue_script( 'jquery-location', $assets . '/js/geo.js', array('jquery' ), '1.0', true );
	// }
	
	if(is_user_logged_in()  )
	{
		//$urlarr =   array(home_url( 'communitysel', 'https' ), home_url( 'communitysel', 'https' ));
		//$currenturl =  home_url(add_query_arg(array(),$wp->request));
		//if (in_array($currenturl, $urlarr))
			
		$current_user = wp_get_current_user();
		$community = get_user_meta($current_user->ID, 'community' );
	    // if(empty($community) && $wp->request != 'communitysel')
	    // {	
		    // $url = home_url('/communitysel');
			// wp_redirect($url);
			// exit;	
		// }	
	    if($wp->request == 'communitysel')
		{
			
			
			wp_enqueue_style( 'weui1',        $assets . '/vendor/jquery-weui/dist/lib/weui.min.css', array(), '1.1', 'all' );
			wp_enqueue_style( 'jquery-weui',  $assets . '/vendor/jquery-weui/dist/css/jquery-weui.min.css', array(), '1.1', 'all' );
			wp_enqueue_style( 'jquery-weui4', $assets . '/css/app.css', array(), '1.1', 'all' );
			
			wp_enqueue_script( 'jquery-weui2', $assets . '/vendor/jquery-weui/dist/js/jquery-weui.min.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'jquery-weui1', $assets . '/vendor/jquery-weui/dist/js/swiper.min.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'jquery-weui3', $assets . '/vendor/jquery-weui/dist/lib/fastclick.js', array( 'jquery' ), '1.0', true );
			
			
			
			//wp_enqueue_script( 'jquery-weui5', $assets . '/js/convertor.js', array('jquery'), '1.0', false );
			wp_enqueue_script( 'jquery-weui6', $assets . '/js/api.js', array('jquery' ), '1.0', true );

			// exit;
			//loadCustomTemplate(TEMPLATEPATH.'/community.php');
		 
		} 
		else if($wp->request == 'me')
		{
	        $assets			 = XRUI_PLUGIN_URL. 'assets';
			wp_enqueue_style( 'person', $assets . '/css/person.css', array(), '1.0', 'all' );
		}
	    else if($wp->request == 'profile')
		{
			$assets			 = XRUI_PLUGIN_URL. 'assets';
			
		    wp_enqueue_style( 'jquery-weui',  $assets . '/vendor/jquery-weui/dist/css/jquery-weui.min.css', array(), '1.1', 'all' );
			wp_enqueue_style( 'jquery-weui_p4',  $assets . '/css/profileapp.css',                              array(), '1.1', 'all' );
			
			wp_enqueue_script( 'jquery-weui2', $assets . '/vendor/jquery-weui/dist/js/jquery-weui.min.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'jquery-weui1', $assets . '/vendor/jquery-weui/dist/js/swiper.min.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'jquery-weui3', $assets . '/vendor/jquery-weui/dist/lib/fastclick.js', array( 'jquery' ), '1.0', true );
 
			
			wp_enqueue_script( 'pjs', $assets . '/js/papi.js', array('jquery' ), '1.0', true );
			add_action( 'wp_head','baidumap_js'  );
		}
		else if($wp->request == 'contribute')
		{
			$assets			 = XRUI_PLUGIN_URL. 'assets';
			
			wp_enqueue_style( 'tougao-loading',  $assets . '/tougao/loading.css', array(), '1.1', 'all' );
			wp_enqueue_style( 'tougao-common',   $assets . '/tougao/common.css', array(), '1.1', 'all' );
			wp_enqueue_style( 'tougao-iconfont', $assets . '/tougao/confirm.css', array(), '1.1', 'all' );
			
 
			wp_enqueue_script( 'tougao-pace', $assets . '/tougao/pace.js', array(), '1.0', false ); 
			wp_enqueue_script( 'tougao-jqmd5', $assets . '/tougao/jQuery.md5.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-contribute', $assets . '/tougao/contribute.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-mousewheel', $assets . '/tougao/jquery.mousewheel.min.js', array( 'jquery' ), '1.0', true );
			//wp_enqueue_script( 'tougao-qiniu', $assets . '/tougao/qiniu.js', array( 'jquery','plupload','plupload-all' ), '1.0', true );
			wp_enqueue_script( 'tougao-meipian', $assets . '/tougao/meipian.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-confirm', $assets . '/tougao/confirm.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-itools', $assets . '/tougao/itools.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-uuid', $assets . '/tougao/uuid.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-qrcode', $assets . '/tougao/qrcode.min.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-zeroclipboard', $assets . '/tougao/ZeroClipboard.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-upload', $assets . '/tougao/upload.js', array( 'jquery' ), '1.0', true );
			wp_enqueue_script( 'tougao-main', $assets . '/tougao/main.js', array( 'jquery' ), '1.0', true );		
		}
	}
}

 add_action( 'template_redirect', 'customizePages' ,1);
//add_action('init', 'templateRedirect');


function xrui_load_template_multiple_times( $template ) {
	$template .= '.php';
	if ( file_exists( STYLESHEETPATH . '//xrui-plugin/' . $template ) )
		include(STYLESHEETPATH . '/xrui-plugin/' . $template);
	else if ( file_exists( TEMPLATEPATH . '/xrui-plugin/' . $template ) )
		include (TEMPLATEPATH . '/xrui-plugin/' . $template);
	else {
		$template_dir = apply_filters( 'xrui_templates_dir_filter', XRUI_PLUGIN_DIR.'/template/' );
		include trailingslashit( $template_dir ) . $template;
	}
}

function xrui_bp_follower_display()
{
	global $bp;

	// Need to change the user ID, so if we're not on a member page, $counts variable is still calculated
	$user_id = bp_is_user() ? bp_displayed_user_id() : bp_loggedin_user_id();
	$counts  = bp_follow_total_follow_counts( array( 'user_id' => $user_id ) );

	// BuddyBar compatibility
	$domain = bp_displayed_user_domain() ? bp_displayed_user_domain() : bp_loggedin_user_domain();

	/** FOLLOWERS NAV ************************************************/
	$slug         = bp_get_friends_slug();
	$friends_link = trailingslashit( $domain . $slug );	
	$following_link = $friends_link.$bp->follow->following->slug;
	$follower_link = $friends_link.$bp->follow->followers->slug;
?>
	  <a class="box-col line-separate" href=<?php echo $following_link; ?> >
		 <div class="mct-a txt-s">
		 <?php echo $counts['following']; ?>
		 </div>
		 <div class="mct-a txt-s txt-bottom">
		 关注</div>
	  </a>
	  
	  <a class="box-col line-separate" href=<?php echo $follower_link; ?>  >
		 <div class="mct-a txt-s">
		 <?php echo $counts['followers']; ?></div>
		 <div class="mct-a txt-s txt-bottom">
		 粉丝</div>
	  </a>
<?php		  
}


function xrui_setup_me_nav()
{
	$displayed_user_id = bp_displayed_user_id();
	$user_domain = ( ! empty( $displayed_user_id ) ) ? bp_displayed_user_domain() : bp_loggedin_user_domain();

	$me_link = trailingslashit( $user_domain . __( 'me', 'weilele' ) );	
	if ( is_user_logged_in() && bp_displayed_user_id() == get_current_user_id() ) {	
		bp_core_new_nav_item( array(
			'name'					 => __( '我的', 'weilele' )  ,
			'slug'					 => "me",
			'position'				 => 80,
			'screen_function'		 => 'xrui_me_page',
			'default_subnav_slug'	 => 'me'
		) );
	}
}


function xrui_me_page() {
	$assets			 = XRUI_PLUGIN_URL. 'assets';
	wp_enqueue_style( 'person', $assets . '/css/person.css', array(), '1.0', 'all' );
	add_action( 'bp_template_content', 'xrui_template_me' );
    bp_core_load_template( apply_filters( 'xrui_me_page', 'members/single/plugins' ) );
}

function xrui_template_me() {
   xrui_load_template( 'xrui-me' );
}

function xrui_load_template( $template ) {
	$template .= '.php';
	if ( file_exists( STYLESHEETPATH . '//xrui-plugin/' . $template ) )
		include_once(STYLESHEETPATH . '/xrui-plugin/' . $template);
	else if ( file_exists( TEMPLATEPATH . '/xrui-plugin/' . $template ) )
		include_once (TEMPLATEPATH . '/xrui-plugin/' . $template);
	else {
		$template_dir = apply_filters( 'xrui_templates_dir_filter', XRUI_PLUGIN_DIR.'/template/' );
		include_once trailingslashit( $template_dir ) . $template;
	}
}


function xrui_setup_quanzi_nav()
{
	$displayed_user_id = bp_displayed_user_id();
	$user_domain = ( ! empty( $displayed_user_id ) ) ? bp_displayed_user_domain() : bp_loggedin_user_domain();

	$quanzi_link = trailingslashit( $user_domain . __( 'quanzi', 'weilele' ) );	
	if ( is_user_logged_in() && bp_displayed_user_id() == get_current_user_id() ) {	
		bp_core_new_nav_item( array(
			'name'					 => __( 'quanzi', 'weilele' )  ,
			'slug'					 => "quanzi",
			'position'				 => 90,
			'screen_function'		 => 'xrui_quanzi_page',
			'default_subnav_slug'	 => 'quanzi'
		) );
		
		bp_core_new_nav_item( array(
			'name'					 => __( '热门教室', 'weilele' )  ,
			'slug'					 => "hotclassroom",
			'position'				 => 91,
			'screen_function'		 => 'groups_screen_hotclassroom',
			'default_subnav_slug'	 => 'hotclassroom'
		) );	

		bp_core_new_nav_item( array(
			'name'					 => __( '热门老师', 'weilele' )  ,
			'slug'					 => "hottearcher",
			'position'				 => 92,
			'screen_function'		 => 'groups_screen_hottearcher',
			'default_subnav_slug'	 => 'hottearcher'
		) );

		bp_core_new_nav_item( array(
			'name'					 => __( '热门课程', 'weilele' )  ,
			'slug'					 => "hotcourse",
			'position'				 => 93,
			'screen_function'		 => 'groups_screen_hotcourse',
			'default_subnav_slug'	 => 'hotcourse'
		) );		
		
		// // Add the Group Invites nav item.
		// $sub_nav[] = array(
			// 'name'            => __( '热门教室', 'buddypress' ),
			// 'slug'            => 'hotclassroom',
			// 'parent_url'      => $homegroupurl,
			// 'parent_slug'     => $slug,
			// 'screen_function' => 'groups_screen_hotclassroom',
			// 'user_has_access' => $access,
			// 'position'        => 40
		// );			

		// // Add the Group Invites nav item.
		// $sub_nav[] = array(
			// 'name'            => __( '热门老师', 'buddypress' ),
			// 'slug'            => 'hottearcher',
			// 'parent_url'      => $homegroupurl,
			// 'parent_slug'     => $slug,
			// 'screen_function' => 'groups_screen_hotteachers',
			// 'user_has_access' => $access,
			// 'position'        => 40
		// );			

		// // Add the Group Invites nav item.
		// $sub_nav[] = array(
			// 'name'            => __( '热门课程', 'buddypress' ),
			// 'slug'            => 'hotcourse',
			// 'parent_url'      => $homegroupurl,
			// 'parent_slug'     => $slug,
			// 'screen_function' => 'groups_screen_hotcourse',
			// 'user_has_access' => $access,
			// 'position'        => 40
		// );			
	}
}


function xrui_quanzi_page() {
	$assets			 = XRUI_PLUGIN_URL. 'assets';
	wp_enqueue_style( 'person', $assets . '/css/person.css', array(), '1.0', 'all' );
	add_action( 'bp_template_content', 'xrui_template_quanzi' );
    bp_core_load_template( apply_filters( 'xrui_quanzi_page', 'members/single/plugins' ) );
}

function xrui_template_quanzi() {
   xrui_load_template( 'xrui-quanzi' );
}

function groups_screen_hotclassroom() {
	add_action( 'bp_template_content', 'xrui_template_hostclassroom' );
    bp_core_load_template( apply_filters( 'groups_screen_hotclassroom', 'members/single/plugins' ) );
}

function xrui_template_hostclassroom() {
   xrui_load_template( 'listhotclassrooms' );
}

function groups_screen_hottearcher() {
	add_action( 'bp_template_content', 'xrui_template_hottearcher' );
    bp_core_load_template( apply_filters( 'groups_screen_hottearcher', 'members/single/plugins' ) );
}

function xrui_template_hottearcher() {
   xrui_load_template( 'listhottearchers' );
}

function groups_screen_hotcourse() {
	add_action( 'bp_template_content', 'xrui_template_hotcourse' );
    bp_core_load_template( apply_filters( 'groups_screen_hotcourse', 'members/single/plugins' ) );
}

function xrui_template_hotcourse() {
   xrui_load_template( 'listhotcourses' );
}

// community short code
if ( !function_exists( 'xrui_community_sel' ) ) {

	function xrui_community_sel() {
		xrui_load_template_multiple_times( 'xrui-commmunity-shortcode' );
	}

	add_shortcode( 'communitysel', 'xrui_community_sel' );
}

/*******************************************************************
   user activity include me in all followings's activity	
********************************************************************/
if(!function_exists( 'xrui_include_me' ))
{
	
	function xrui_include_me($ids, $userid) {
		$ids = empty( $ids ) ? 0 : $ids; 
		if($ids == 0)
		{
			$ids = $userid;
		}
		else
		{
			$ids = $userid.','. $ids;
		}
		return $ids;
	}	
	add_filter( 'bp_get_following_ids','xrui_include_me', 10, 2 );
}



/*******************************************************************
     mobile header bar and bottom bar	
********************************************************************/
if(!function_exists( 'get_term_category_list' ))
{
	function get_original_category()
	{
		$term_obj = get_term_by('slug',$term,'original');
		echo $term_obj->term_id;		
	}
	
	function get_term_category_list() {	
?>
		<!--li>
			<a href="<?php //echo home_url('/'); ?>" title="综合">
			   <span> 
				  <img />   
			   </span> 
			    综合 
			</a>
		</li-->
		
 		
<?php
		 // 获取分类
		$args=array(
			 'orderby' => 'name',
			 'order' => 'ASC',
			 'hide_empty' => 0,
			 'taxonomy' =>"category",
			 'parent'=>0
			 );
		$terms = get_terms($args);

		// 获取到的分类数量
		$count = count($terms);
		if($count > 0)
		{
			// 循环输出所有分类信息
			
			foreach ($terms as $term) {
				$imageId = get_term_meta( $term->term_id, "image", true );
?>
                 <li>
				    <a href="<?php  echo get_term_link($term, $term->slug);?>" 
					   title="<?php echo $term->name; ?>">
					   <span> 
					      <img src=" <?php echo   esc_url( wp_get_attachment_image_url( $imageId, 'full' ) );?>  "  />   
					   </span> 
					   <?php echo $term->name; ?>
                    </a>
			     </li>
<?php
			}
		}
	}	
	 
}

function xrui_displayfooter_nav()
{
?>  
    <div class="bottom-bar" id="mobile-bottom-bar">
	   <div class="func-wrap wll-footer">
		    <ul class="m-bar">
<?php

	//$term_obj     = get_term_by('slug','original','category');
	//$originallink = get_term_link($term_obj, $term_obj->slug);
	$originallink   = home_url();
	if( is_user_logged_in()) 
	{  
		global $bp;
	    global $wp;
	 
		if (( bp_loggedin_user_id() && !bp_displayed_user_id())  || bp_is_my_profile())
		{
			// BuddyBar compatibility
			$user_domain  = /*bp_displayed_user_domain() ? bp_displayed_user_domain() :*/ bp_loggedin_user_domain();	
			$me_link      = trailingslashit( $user_domain . 'me' );	
			 
	
			$blog_link    = trailingslashit( $user_domain . __( 'blog', 'bp-user-blog' ) );
			$blogname     = __( 'Published', 'bp-user-blog' );
			
			$create_new_post_page = buddyboss_sap()->option('create-new-post');
			$create_post_link     = trailingslashit(get_permalink( $create_new_post_page ));
			
			//Keeping addnew post same if network activated
			if (is_multisite()) {
				if (!function_exists('is_plugin_active_for_network'))
					require_once( ABSPATH . '/wp-admin/includes/plugin.php' );
				if (is_plugin_active_for_network(basename(constant('BP_PLUGIN_DIR')) . '/bp-loader.php') 
					&& is_plugin_active_for_network(basename(constant('BUDDYBOSS_SAP_PLUGIN_DIR')) . '/bp-user-blog.php') ) {
					$create_post_link = trailingslashit(get_blog_permalink( 1,$create_new_post_page ));
				}
			}	
			$current_user = wp_get_current_user();
			//$community    = get_user_meta($current_user->ID, 'community' );
 
			//if(! empty($community)  )
			//{			
				$slug       = bp_get_groups_slug();
				
				$group_link = trailingslashit( $user_domain . $slug );	
				// $groups     = groups_get_groups( 
								   // array(
									// 'per_page'           => 1,
									// 'page'               => 1,
									// 'user_id'            => bp_loggedin_user_id()
								   // ) 
							  // );
				// if ($groups['total'] > 0)
				// {
					// $groupslist  =  $groups['groups'];
					// $group_link  =  bp_get_group_permalink($groupslist[0]);
				// }
			//}	
			//else
			//{
			//	$group_link =  home_url('/communitysel');
			//}
			
			$wall_profile_link = trailingslashit( $user_domain . $bp->activity->slug ).'following';	
			
			$quanzi_link = trailingslashit( $user_domain . __( 'quanzi', 'weilele' ) );	
	
			$homeclass        = "";
			$communityclass   = "";
			$activityclass    = "";
			$blogclass        = "";
			$selfclass        = "";
			$component        = bp_current_component();
			
		    // if(
				// ||(bp_is_user() && bp_is_current_action('blog'))
			// )
			// {
				// $blogclass        = "selected" ;
			// }
			// else 
			if(is_home()
   				    || is_page('channels') 
				    || is_single()
					|| is_category())
			{
				$homeclass        =  "selected" ;
			}
			else if( bp_is_groups_component()
					||is_page($create_new_post_page)				
			)
			{
				$classroomclass = "selected";
			}
					 
     		else if ((bp_is_friends_component()  && (bp_is_current_action('membersearch')
													 || bp_is_current_action('requests')
													 || bp_is_current_action('my-friends'))
					 )
			         ||	(bp_is_user() && (bp_is_current_action('quanzi')
										  || bp_is_current_action('hotclassroom')
										  || bp_is_current_action('hottearcher')
										  || bp_is_current_action('hotcourse')
										  )
		             )
			)				   
			{
				$quanziclass    = "selected";
			}

			else
			{
				$selfclass      = "selected";
			}
			
		?>			
			<li>
				<a id='homeinfo' href="<?php echo $originallink; ?>" class="<?php echo $homeclass;?>">首页</a>
			</li>
			

			
			<li>
				<a id='quanzi' href="<?php echo $group_link; ?>" class="<?php echo $classroomclass;?>" >教室</a>
			</li>
			

			<li>
				<a id='quanzi' href="<?php echo $quanzi_link; ?>" class="<?php echo $quanziclass;?>">发现</a>
			</li>
			
			<li>
				<a id='selfinfo' href="<?php echo $me_link; ?>" class="<?php echo $selfclass;?>">我的</a>
			</li>            
<?php
		}
		else if(bp_displayed_user_id() 
				&& (bp_displayed_user_id() != get_current_user_id())
			)
		{
				
			$me_link      = trailingslashit( bp_loggedin_user_domain() . 'me' );	
			$disuser_link = bp_displayed_user_domain();
?>
			<li>
				 <?php echo bp_core_get_user_displayname( bp_displayed_user_id() );?>主页 
			</li>
			<li>
				<a id='selfinfo' href="<?php echo $me_link  ; ?>">我的主页</a>
			</li>			
    <?php
		}
	}
	else
	{
?>
			<li>
				<a id='homeinfo' href="<?php echo  $originallink; ?>">资讯</a>
			</li>
			
				<?php if (is_weixin()):?>
			<li>
					<a href="<?php echo  'javascript:void(0)'; ?>" onclick="login_button_click('wechat','<?php echo home_url();?>')" class="login-link screen-reader-shortcut"><?php _e( 'Login', 'boss' ); ?></a>
			</li>
				<?php else: ?>
				
				  <?php if ( buddyboss_is_bp_active() && bp_get_signup_allowed() ) : ?>
			<li>
					<a href="<?php echo bp_get_signup_page(); ?>" class="register-link screen-reader-shortcut"><?php _e( 'Register', 'boss' ); ?>
					</a>
			</li>
				  <?php endif; ?>	
			<li>						  
					<a href="<?php echo wp_login_url();  ?>"   class="login-link screen-reader-shortcut"><?php _e( 'Login', 'boss' ); ?></a>
			</li>
				<?php endif?>	
<?php 
	}
?>		   
            </ul>	
	    </div>
    </div>	
<?php
}

function xrui_display_headernav()
{
    $bDispaly = false;
    if( (is_single()  || is_author() ) || is_home() || is_category())
	{
		$bDispaly = true;
		if(/*!is_weixin()*/ false ){
?>
			<li>
			   <a href="javascript:history.go(-1)" class="icon-back">返回</a>
			</li>
	
<?php 
		}
 ?>
		<li class='home'>
			乐莲老年教室
		</li>	
<?php
	}
	
	if( is_user_logged_in()) {  

		$user_id = /*bp_is_user() ? bp_displayed_user_id() :*/ bp_loggedin_user_id();

		// BuddyBar compatibility
		$user_domain          = /*bp_displayed_user_domain() ? bp_displayed_user_domain() :*/ bp_loggedin_user_domain();	
		$me_link              = trailingslashit( $user_domain . 'me' );	
		
		$friends_link         = trailingslashit( $user_domain . bp_get_friends_slug() );
		$find_link            = trailingslashit( $friends_link . 'membersearch');	
		$friendslst_link      = trailingslashit( $friends_link . 'my-friends');
		$newFriendlst_link    = trailingslashit( $friends_link . 'requests');
		
		if(bp_is_groups_component()  )
		{
			$bDispaly = true;
?>
			<?php bp_get_options_nav(); ?>

			<?php do_action( 'bp_group_options_nav' ); ?>
		    <?php 			
				if (! bp_is_single_item() && bp_user_can_create_groups() ) {
					$NewGroup      = trailingslashit( bp_get_groups_directory_permalink() . 'create' );
					$NewGroupClass = '';
					if(bp_is_current_action( 'create' ))
						$NewGroupClass = "selected";

			?>					
				<li>
					<a id='createGroup' href="<?php echo $NewGroup ; ?>" class="<?php echo $NewGroupClass;?>">创建教室</a>
				</li>
<?php						
		        }
		}
		
		$create_new_post_page = buddyboss_sap()->option('create-new-post');
		$create_post_link     = trailingslashit(get_permalink( $create_new_post_page ));
	    $component            = bp_current_component();
	    $current_action       = bp_current_action();		
		if(//bp_is_groups_component()||
		    is_page($create_new_post_page)
		  )
		{
			$blog_link  = trailingslashit( $user_domain . __( 'blog', 'bp-user-blog' ) );
			$draftlink = $blog_link.'drafts';	

			if(bp_is_current_component('blog'))
			{
				if( bp_is_current_action('blog') )
					$myArtcileClass = "selected";
				else if( bp_is_current_action('drafts'))
					$myDraftsClass = "selected";
			}
		    if(is_page($create_new_post_page))
				$newPostClass  = "selected";
?>
		   <li>
			   <a id='myblogs' href="<?php echo $blog_link  ; ?>" class="<?php echo $myArtcileClass;?>">我的文章</a>
		   </li>
		   <li>
			   <a id='mydrafts' href="<?php echo $draftlink  ; ?>" class="<?php echo $myDraftsClass;?>">草稿</a>
		   </li>	
		   <li>
			   <a id='newPost' href="<?php echo $create_post_link  ; ?>" class="<?php echo $newPostClass;?>">写随笔</a>
		   </li>	
<?php	
		}
		
		if((bp_is_friends_component() && (bp_is_current_action('membersearch')
										  || bp_is_current_action('requests')
										  || bp_is_current_action('my-friends')
										 )
		   ) 
		)
		{
			$bDispaly = true;
			$findclass = "";
			if(bp_is_friends_component())
			{
				if(bp_is_current_action('membersearch'))
					$findclass = "selected";
				else if( bp_is_current_action('requests'))
					$newFriendclass = "selected";
				else if(bp_is_current_action('my-friends') )
					$myFriendclass  = "selected";
			}
?>	
			<li>
				<a id='findfriends' href="<?php echo $find_link ; ?>" class="<?php echo $findclass;?>">找好友</a>
			</li>
			<li>
				<a id='myfriends' href="<?php echo $friendslst_link ; ?>" class="<?php echo $myFriendclass;?>">我的好友</a>
			</li>
			<li>
				<a id='newfriends' href="<?php echo $newFriendlst_link ; ?>" class="<?php echo $newFriendclass;?>">新好友</a>
			</li>			
<?php						
		}	
	}
?>
<?php	
}
?>