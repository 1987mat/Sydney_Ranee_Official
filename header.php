<!DOCTYPE html>
<html lang="en">
<head>
  <?php wp_head(); ?>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sydney Raneé Official Artist Website">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>The Sultry Songstress</title>
</head>
<body <?php body_class();?>>
  <header>
    <div class="header-wrapper">
      <div class="hamburger">
        <div></div>
      </div>
      <a class="logo-wrapper" href="<?php echo site_url(''); ?>" aria-label="logo">
        <img class="logo" src="<?php echo wp_get_attachment_image_url(126, 'medium');?>">
      </a>
      <nav>
        <ul class="main-navigation">
          <li><a <?php if(is_page('home')) echo 'class="home active"'?> href="<?php echo site_url('')."#home";?>" aria-label="home">Home</a></li>
          <li><a class="music" href="<?php echo site_url('')."#music"; ?>" aria-label="music">Music</a></li>
          <li><a class="live" href="<?php echo site_url('')."#live"; ?>" aria-label="live">Live</a></li>
          <li><a class="videos" href="<?php echo site_url('')."#videos"; ?>" aria-label="visuals">Visuals</a></li>
          <li><a class="connect" href="<?php echo site_url('')."#connect"; ?>" aria-label="connect">Connect</a></li>
          <li><a <?php if(is_page('about')) echo 'class="about active"'?> href="<?php echo site_url('/about');?>" aria-label="about">About</a></li>
          <li><a href="https://sydneyraneeshop.com" target="_blank" aria-label="store">Store</a></li>
        </ul>
      </nav>
    </div>
    <div class="sm-wrapper">
      <a href="https://www.instagram.com/sydney.ranee" target="_blank" aria-label="instagram"><i class="fa fa-instagram"></i></a>
      <a href="https://sydneyranee.bandcamp.com/" target="_blank" aria-label="bandcamp"><i class="fa fa-bandcamp"></i></a>
      <a href="https://www.youtube.com/user/SydRanee" target="_blank" aria-label="youtube"><i class="fa fa-youtube-play"></i></a>
      <a href="https://open.spotify.com/artist/1MvIqIr5okw4M1GO51nzdH" target="_blank" aria-label="spotify"><i class="fa fa-spotify"></i></a>
      <a href="https://music.apple.com/us/artist/sydney-rane%C3%A9/662846360" target="_blank" aria-label="apple"><i class="fa fa-apple"></i></a>
    </div>
  </header>

  
