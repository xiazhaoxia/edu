<?php   
    global $bp;
	function get_grouplink_for_usercommunity($location_id)
	{
		global $wpdb;
		$table_name   = $wpdb->prefix .'community';   
		$new_group_id = 0;

		$communityres = $wpdb->get_results( 
							$wpdb->prepare("SELECT * FROM {$wpdb->prefix}community WHERE id=%s", $location_id) );
		$community_link = '';					
		if($communityres)
		{	
			$new_group_id    = groups_get_id(sanitize_title( esc_attr($communityres[0]->name )));
			$current_group   = groups_get_group( array( 'group_id' => $new_group_id ) );
			$community_link  = bp_get_group_permalink($current_group);
		}	
		return $community_link;
	}
	// Need to change the user ID, so if we're not on a member page, $counts variable is still calculated
	$user_id = /*bp_is_user() ? bp_displayed_user_id() : */bp_loggedin_user_id();

	// BuddyBar compatibility
	$user_domain = /*bp_displayed_user_domain() ? bp_displayed_user_domain() :*/ bp_loggedin_user_domain();

	//1.Activity Wall
    $wall_link = trailingslashit( $user_domain . $bp->activity->slug ).'following';	
	
	
	$slug       = bp_get_groups_slug();
	$group_link = trailingslashit( $user_domain . $slug );	
	
	//2.Community  
	$current_user = wp_get_current_user();
	$community    = get_user_meta($current_user->ID, 'community' ,true);
	$community_link = '';
	if(! empty($community)  )
	{			
		$community_link = get_grouplink_for_usercommunity($community);
	}
	
	if(empty($community_link))
	{
		$community_link =  home_url('/communitysel'); 
	}

	//3.groups
	
	$imgpath = XRUI_PLUGIN_URL . 'assets/img/';
	
	$bp_pages = bp_get_option( 'bp-pages' );

	$searchgroupPageId = !empty( $bp_pages ) && isset( $bp_pages[ 'groups' ] ) ? $bp_pages[ 'groups' ] : null;


	$searchgroupPageLink= get_permalink($searchgroupPageId);	
	
	$friends_link         = trailingslashit( $user_domain . bp_get_friends_slug() );
	$find_link            = trailingslashit( $friends_link . 'membersearch');	
	$hotclassroom_link    = trailingslashit( $user_domain . __( 'hotclassroom', 'weilele' ) );	
	$hottearcher_link     = trailingslashit( $user_domain . __( 'hottearcher', 'weilele' ) );	
	$hotcourse_link       = trailingslashit( $user_domain . __( 'hotcourse', 'weilele' ) );	
	 
	//$hottearcher_link     = trailingslashit( $friends_link . 'membersearch');	
?>
<div data-node="profileWrap wll-profileWrap" class="container" style="display: block;"> 
   <div class="dataCont">
      <div class="card11 card-combine wll-box02" data-node="group" id="boxId_1478094959183_40">
         <div data-node="cardList" class="card-list">
            <div class="card card4" id="boxId_1478094959183_41">
               <a href="<?php echo $hotclassroom_link;?>" class="layout-box" data-act-type="hover">
                  <i class="iconimg iconimg-s">
                     <img width="23" height="23" src="<?php echo $imgpath.'remenjiaoshi.jpg';?>" alt="">
                  </i>
                  <div class="box-col txt-cut">
                  <span class="mct-a ">
                     <?php echo __( '热门教室', 'weilele' ); ?>
				  </span>
                  </div>
                  <span data-node="arrow" class="plus plus-s">
                     <i class="icon-font icon-font-arrow-right ">
                     </i>
                  </span>
               </a>
            </div>
				
         </div>
      </div>  
	  <div class="card11 card-combine wll-box03" data-node="group" id="boxId_1478094959183_36">
         <div data-node="cardList" class="card-list">
            <div class="card card4" id="boxId_1478094959183_37">
               <a href="<?php echo $hottearcher_link; ?>" class="layout-box" data-act-type="hover">
                  <i class="iconimg iconimg-s">
                     <img width="23" height="23" src="<?php echo $imgpath.'remenlaoshi.jpg';?>" alt="">
                  </i>
                  <div class="box-col txt-cut">
                     <span class="mct-a ">
                       <?php echo __( '热门老师', 'weilele' ); ?>
					 </span>
 
                  </div>
                  <span data-node="arrow" class="plus plus-s">
                     <i class="icon-font icon-font-arrow-right ">
                     </i>
                  </span>
               </a>
            </div>
         </div>
      </div>
	  
	  
	  <div class="card11 card-combine wll-box03" data-node="group" id="boxId_1478094959183_36">
         <div data-node="cardList" class="card-list">
            <div class="card card4" id="boxId_1478094959183_37">
               <a href="<?php echo $hotcourse_link; ?>" class="layout-box" data-act-type="hover">
                  <i class="iconimg iconimg-s">
                     <img width="23" height="23" src="<?php echo $imgpath.'remenkecheng.jpg';?>" alt="">
                  </i>
                  <div class="box-col txt-cut">
                     <span class="mct-a ">
                       <?php echo __( '热门课程', 'weilele' ); ?>
					 </span>
 
                  </div>
                  <span data-node="arrow" class="plus plus-s">
                     <i class="icon-font icon-font-arrow-right ">
                     </i>
                  </span>
               </a>
            </div>
         </div>
      </div>	  

	  <div class="card11 card-combine wll-box04" data-node="group" id="boxId_1478094959183_37">
         <div data-node="cardList" class="card-list">
            <div class="card card4" id="boxId_1478094959183_37">
               <a href="<?php echo $find_link; ?>" class="layout-box" data-act-type="hover">
                  <i class="iconimg iconimg-s">
                     <img width="23" height="23" src="<?php echo $imgpath.'zhaopengyou.png';?>" alt="">
                  </i>
                  <div class="box-col txt-cut">
                     <span class="mct-a ">
                       <?php echo __( '找朋友', 'weilele' ); ?>
					 </span>
 
                  </div>
                  <span data-node="arrow" class="plus plus-s">
                     <i class="icon-font icon-font-arrow-right ">
                     </i>
                  </span>
               </a>
            </div>
         </div>
      </div>
   </div>
</div>

