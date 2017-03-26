<?php do_action( 'bp_before_directory_groups_page' ); ?>

<div id="buddypress">

	<?php do_action( 'bp_before_directory_groups' ); ?>

    <div class="filters">
        <div class="row">
 
            <div class="col-6">
                <div id="group-dir-search" class="dir-search" role="search">
                    <?php bp_directory_groups_search_form(); ?>
                </div><!-- #group-dir-search -->
            </div>
        </div>
    </div>

	<form action="" method="post" id="groups-directory-form" class="dir-form">

		<?php do_action( 'template_notices' ); ?>

        <?php 
		function hot_classroom($filter)
		{
			$filter1 =  'type=popular&orderby=total_member_count'; 
			 
			return $filter1;
		}
		add_filter('bp_ajax_querystring',hot_classroom);?>

        <!-- needed for group list scroll -->
        <div id="subnav"></div>

		<div id="groups-dir-list" class="groups dir-list">
			<?php bp_get_template_part( 'groups/groups-loop' ); ?>
		</div><!-- #groups-dir-list -->

		<?php do_action( 'bp_directory_groups_content' ); ?>

		<?php wp_nonce_field( 'directory_groups', '_wpnonce-groups-filter' ); ?>

		<?php do_action( 'bp_after_directory_groups_content' ); ?>

	</form><!-- #groups-directory-form -->

	<?php do_action( 'bp_after_directory_groups' ); ?>

</div><!-- #buddypress -->

<?php do_action( 'bp_after_directory_groups_page' ); ?>
