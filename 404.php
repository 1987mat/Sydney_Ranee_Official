<?php 
  get_header();
?>

<main>
  <div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<div class="page-wrapper">
				<div class="page-content">
					<h1><?php _e( "Sorry! We can't find the page.", "sydneyranee" ); ?></h1>
          <h2>Go back to <a href="<?php echo site_url('');?>" aria-label="homepage">homepage</a>.</h2>
				</div>
			</div>
      <img src=<?php echo get_template_directory_uri() . '/images/404.jpg';?>>
		</div>
	</div>
</main>
<?php

get_footer();