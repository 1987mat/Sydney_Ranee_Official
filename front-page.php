<?php
  get_header();
?>
<main>
  <section id="home">
    <div class=hero>
      <h1 class="quote" data-observe><i>"...a powerhouse singer, songwriter and producer with a stage presence you won’t forget.."</i></h1>
    </div>
    <!-- NEW EP -->
    <div class="new-ep">
      <h2 data-observe>Wake Up & Get It</h2>
      <h3 data-observe>OUT NOW</h3>
      <div data-observe class="ep-container">
        <div class="music-icons-wrapper">
          <a href="https://music.apple.com/us/album/wake-up-and-get-it-ep/1614484128?i=1614484129" target="_blank" aria-label="apple"><i class="fa fa-apple"></i></a>
          <a href="https://www.amazon.com/music/player/albums/B09VMJG7SQ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&trackAsin=B09VMGM2N6&ref=sr_1_20&s=dmusic&keywords=Sydney+Ranee%27&search-type=ss&qid=1666658464&sr=1-20" target="_blank" aria-label="amazon"><i class="fa fa-amazon"></i></a>
          <a href="https://open.spotify.com/album/4VDEeEktiRUqtd3XDVaBqy" target="_blank" aria-label="spotify"><i class="fa fa-spotify"></i></a>
          <a href="https://soundcloud.com/sydney-ranee/sets/wake-up-and-get-it" target="_blank" aria-label="soundcloud"><i class="fa fa-soundcloud"></i></a>
          <a href="https://sydneyranee.bandcamp.com/album/wake-up-and-get-it" target="_blank" aria-label="bandcamp"><i class="fa fa-bandcamp"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- MUSIC -->
  <section id="music">
    <h2 data-observe>MUSIC</h2>
    <div data-observe class="music-content-wrapper">
      <div class="slider-wrapper">
        <button aria-label="previous button" class="prev-btn" data-music-btn="prev"><i class='fa fa-angle-left'></i></button>
        <button aria-label="next button" class="next-btn" data-music-btn="next"><i class='fa fa-angle-right'></i></button>
        <?php 
        // Get images from media library
          $img_src1 = wp_get_attachment_image_url(121, 'large');
          $img_src2 = wp_get_attachment_image_url(125, 'large');
          $img_src3 = wp_get_attachment_image_url(120, 'large');
          $img_src4 = wp_get_attachment_image_url(126, 'large');
          $img_src5 = wp_get_attachment_image_url(122, 'large');
          $img_src6 = wp_get_attachment_image_url(123, 'large');
          $img_src7 = wp_get_attachment_image_url(124, 'large');
        ?>
        <div class="music-slider-container">
          <div class="slide" id="1" data-active>
            <img src=<?php echo $img_src1;?> loading="lazy" alt="slide-1">
          </div>
          <div class="slide" id="2">
            <img src=<?php echo $img_src2;?> loading="lazy" alt="slide-2">
          </div>
          <div class="slide" id="3">
            <img src=<?php echo $img_src3;?> loading="lazy" alt="slide-3">
          </div>
          <div class="slide" id="4">
            <img src=<?php echo $img_src4;?> loading="lazy" alt="slide-4">
          </div>
          <div class="slide" id="5">
            <img src=<?php echo $img_src5;?> loading="lazy" alt="slide-5">
          </div>
          <div class="slide" id="6">
            <img src=<?php echo $img_src6;?> loading="lazy" alt="slide-6">
          </div>
          <div class="slide" id="7">
            <img src=<?php echo $img_src7;?> loading="lazy" alt="slide-7">
          </div>
        </div>
      </div>
      <div class="ep-data">
        <h3 class="ep-title"></h3>
        <a class="spotify-btn" href="#/" target="_blank" aria-label="spotify-button">
          <i class="fa fa-spotify"></i>
          <span>LISTEN</span>
        </a>
      </div>  
    </div>
    <div class="spotify-wrapper">
      <?php 
        $spotify_query = new WP_Query("p=53");
        while($spotify_query->have_posts()) {
          $spotify_query->the_post();
          the_content();
        }
        wp_reset_postdata();
      ?>
    </div>
  </section>

  <!-- LIVE -->
  <section id="live">
    <h2 data-observe>LIVE</h2>
    <div data-observe class="live-wrapper">
      <?php  
        // Get Bandsintown widget from post
        $my_query = new WP_Query('p=43');
        while($my_query->have_posts()){
          $my_query->the_post(); ?>
          <div class="dates-wrapper">
            <?php the_content(); ?>
          </div> 
        <?php
        }
        wp_reset_postdata();
      ?>
    </div>
  </section>

  <!-- VIDEOS -->
  <section id="videos">
    <h2 data-observe>VISUALS</h2>
    <div class="video-modal">
      <div class="modal-wrapper">
        <i class="fa fa-times" aria-hidden="true"></i>
        <iframe title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div data-observe class="video-slider-wrapper">
      <button aria-label="previous button" class="prev" data-carousel-btn="prev"><i class='fa fa-angle-left'></i></button>
      <button aria-label="next button" class="next" data-carousel-btn="next"><i class='fa fa-angle-right'></i></button>
      <?php 
      // Get video preview images
        $video_preview_src1 = wp_get_attachment_image_url(115, 'large');
        $video_preview_src2 = wp_get_attachment_image_url(114, 'large');
        $video_preview_src3 = wp_get_attachment_image_url(116, 'large');
        $video_preview_src4 = wp_get_attachment_image_url(113, 'large');
        $video_preview_src5 = wp_get_attachment_image_url(119, 'large');
        $video_preview_src6 = wp_get_attachment_image_url(118, 'large');
        $video_preview_src7 = wp_get_attachment_image_url(117, 'large');
      ?>
      <div class="slider-container">
        <div class="video-slide" data-active>
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src1;?> alt="video-preview">
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src2;?> alt="video-preview">
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src3; ?> alt="video-preview">
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src4; ?> alt="video-preview">
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src5; ?> alt="video-preview">
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src6; ?> alt="video-preview">
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo $video_preview_src7; ?> alt="video-preview">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section id="connect">
    <h2 data-observe>SUBSCRIBE</h2>
    <div data-observe class="contact-wrapper">
      <?php echo the_content(); ?>
    </div> 
  </section> 
</main>

<?php 
  get_footer();


