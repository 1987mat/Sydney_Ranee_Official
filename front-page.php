<?php
  get_header();
?>

<main>
  <section id="home">
    <div class=hero>
      <h2 class="quote" data-observe><i>"...a powerhouse singer, songwriter and producer with a stage presence you won’t forget.."</i></h2>
    </div>
    <!-- NEW EP -->
    <div class="new-ep">
      <h1 data-observe>Wake Up & Get It</h1>
      <h2 data-observe>OUT NOW</h2>
      <div data-observe class="ep-container">
        <div class="music-icons-wrapper">
          <a href="https://music.apple.com/us/album/wake-up-and-get-it-ep/1614484128?i=1614484129" target="_blank"><i class="fa fa-apple"></i></a>
          <a href="https://www.amazon.com/music/player/albums/B09VMJG7SQ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&trackAsin=B09VMGM2N6&ref=sr_1_20&s=dmusic&keywords=Sydney+Ranee%27&search-type=ss&qid=1666658464&sr=1-20" target="_blank"><i class="fa fa-amazon"></i></a>
          <a href="https://open.spotify.com/album/4VDEeEktiRUqtd3XDVaBqy" target="_blank"><i class="fa fa-spotify"></i></a>
          <a href="https://soundcloud.com/sydney-ranee/sets/wake-up-and-get-it" target="_blank"><i class="fa fa-soundcloud"></i></a>
          <a href="https://sydneyranee.bandcamp.com/album/wake-up-and-get-it" target="_blank"><i class="fa fa-bandcamp"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- MUSIC -->
  <section id="music">
    <h1 data-observe>MUSIC</H1>
    <div data-observe class="music-content-wrapper">
      <div class="slider-wrapper">
        <button class="prev-btn" data-music-btn="prev"><i class='fa fa-angle-left'></i></button>
        <button class="next-btn" data-music-btn="next"><i class='fa fa-angle-right'></i></button>
        <?php 
          $img_src1 = get_template_directory_uri() . '/images/artwork/home.jpg';
          $img_src2 = get_template_directory_uri() . '/images/artwork/wuagi.webp';
          $img_src3 = get_template_directory_uri() . '/images/artwork/go-back.jpg';
          $img_src4 = get_template_directory_uri() . '/images/artwork/complicated.jpg';
          $img_src5 = get_template_directory_uri() . '/images/artwork/drop-my-guard.jpg';
          $img_src6 = get_template_directory_uri() . '/images/artwork/dangerous-woman.jpg';
          $img_src7 = get_template_directory_uri() . '/images/artwork/you-could.jpg';

        ?>
        <div class="music-slider-container">
          <div class="slide" id="1" data-active>
            <img src=<?php echo $img_src1;?> loading="lazy">
          </div>
          <div class="slide" id="2">
            <img src=<?php echo $img_src2;?> loading="lazy">
          </div>
          <div class="slide" id="3">
            <img src=<?php echo $img_src3;?> loading="lazy">
          </div>
          <div class="slide" id="4">
            <img src=<?php echo $img_src4;?> loading="lazy">
          </div>
          <div class="slide" id="5">
            <img src=<?php echo $img_src5;?> loading="lazy">
          </div>
          <div class="slide" id="6">
            <img src=<?php echo $img_src6;?> loading="lazy">
          </div>
          <div class="slide" id="7">
            <img src=<?php echo $img_src7;?> loading="lazy">
          </div>
        </div>
      </div>
      <div class="ep-data">
        <h3 class="ep-title"></h3>
        <a class="spotify-btn" href="#/" target="_blank">
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
    <h1 data-observe>LIVE</h1>
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
    <h1 data-observe>VISUALS</h1>
    <div class="video-modal">
      <div class="modal-wrapper">
        <i class="fa fa-times" aria-hidden="true"></i>
        <iframe title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div data-observe class="video-slider-wrapper">
      <button class="prev" data-carousel-btn="prev"><i class='fa fa-angle-left'></i></button>
      <button class="next" data-carousel-btn="next"><i class='fa fa-angle-right'></i></button>
      <div class="slider-container">
        <div class="video-slide" data-active>
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/reconnect.webp'; ?>>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/wake-up.png'; ?>>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/one-night.webp'; ?>>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/complicated.webp'; ?>>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/go-back.png'; ?>>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/drink.webp'; ?>>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-slide-wrapper">
            <i class="fa fa-play-circle"></i>
            <img class="video-img" src=<?php echo get_template_directory_uri() . '/images/video-thumbnails/la-boys.webp'; ?>>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section id="connect">
    <h1 data-observe>SUBSCRIBE</h1>
    <div data-observe class="contact-wrapper">
      <?php echo the_content(); ?>
    </div> 
  </section> 
</main>

<?php 
  get_footer();


