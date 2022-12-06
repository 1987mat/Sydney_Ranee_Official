<!DOCTYPE html>
<html lang="en">
<head>
  <?php wp_head(); ?>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>The Sultry Songstress</title>
</head>
<body>
  <header>
    <div class="header-wrapper">
      <div class="hamburger">
        <div></div>
      </div>
      <a class="logo-wrapper" href="<?php echo site_url(''); ?>">
        <img class="logo" src=<?php echo get_template_directory_uri() . '/images/logo.png'?>>
      </a>
      <nav>
        <ul class="main-navigation">
          <li><a <?php if(is_page('home')) echo 'class="home active"'?> href="<?php echo site_url('')."#home";?>">Home</a></li>
          <li><a class="music" href="<?php echo site_url('')."#music"; ?>">Music</a></li>
          <li><a class="live" href="<?php echo site_url('')."#live"; ?>">Live</a></li>
          <li><a class="videos" href="<?php echo site_url('')."#videos"; ?>">Visuals</a></li>
          <li><a class="connect" href="<?php echo site_url('')."#connect"; ?>">Connect</a></li>
          <li><a <?php if(is_page('about')) echo 'class="about active"'?> href="<?php echo site_url('/about');?>">About</a></li>
          <li><a href="#" target="_blank">Store</a></li>
        </ul>
      </nav>
    </div>
    <div class="sm-wrapper">
      <a href="https://www.youtube.com/user/SydRanee" target="_blank"><i class="fa fa-youtube-play"></i></a>
      <a href="https://music.apple.com/us/artist/sydney-rane%C3%A9/662846360" target="_blank"><i class="fa fa-apple"></i></a>
      <a href="https://www.amazon.com/s?k=Sydney+Ranee%27&i=digital-music&qid=1566324805&search-type=ss&ref=sr_pg_1" target="_blank"><i class="fa fa-amazon"></i></a>
      <a href="https://open.spotify.com/artist/1MvIqIr5okw4M1GO51nzdH" target="_blank"><i class="fa fa-spotify"></i></a>
      <a href="https://www.instagram.com/sydney.ranee" target="_blank"><i class="fa fa-instagram"></i></a>
      <a href="https://www.facebook.com/SydRanee" target="_blank"><i class="fa fa-facebook-official"></i></a>
      <a href="https://twitter.com/Sydranee" target="_blank"><i class="fa fa-twitter-square"></i></a>
      <a href="https://soundcloud.com/sydney-ranee" target="_blank"><i class="fa fa-soundcloud"></i></a>
      <a href="https://sydneyranee.bandcamp.com/" target="_blank"><i class="fa fa-bandcamp"></i></a>
    </div>
  </header>
  
