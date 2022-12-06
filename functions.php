<?php

  function CSS_JS() {
    wp_register_style('style', get_template_directory_uri() . '/css/style.css');
    wp_enqueue_style('style');
    wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
  }

  add_action('wp_enqueue_scripts', 'CSS_JS');

  function site_features() {
    // Create title for each page
    add_theme_support('title-tag');
    // Enable feature images
    add_theme_support('post-thumbnails');
    // Handle image sizes
    add_image_size('landscape', '400', '260', true);
    add_image_size('portrait', '480', '650', true);
  }

  add_action('after_setup_theme', 'site_features');


