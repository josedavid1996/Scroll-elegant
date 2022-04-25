<?php  get_header();?>
  <?php
$args = array(
  'pagename' => 'columnas'
);
$query = new WP_Query( $args );

if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
        $query->the_post();
      ?>
      <?php the_content(); ?>
    <?php  }
}
?>
<?php  get_footer();?>