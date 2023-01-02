<?php
  get_header();
?>
<main>
  <div class="about-hero">
    <h1 data-observe>ABOUT</h1>
  </div>
  <div class="about-wrapper">
    <!-- BIO -->
    <div class="bio-wrapper">
      <div data-observe class="bio-text">
        <?php the_content();?>
      </div>
    </div>
    <!-- PHOTOS -->
    <div class="photos">
      <?php 
        $path = get_template_directory_uri() . '/images';
        $photos = array('2.jpg', '14.jpg', '6.jpg','7.jpg','10.jpg');
        foreach($photos as $photo) {
          echo "<div data-observe>
                  <img src={$path}/{$photo} alt='artist-photo'>
                </div>";
        }
      ?>
    </div>
  </div>
</main>
<?php
  get_footer();
?>
