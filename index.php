<?php
/**
 * Index
 *
 * @package Page Builder Framework
 */
 
// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

$grid_gap = get_theme_mod( 'sidebar_gap', 'medium' );

get_header(); ?>

		<div id="content">

			<?php do_action( 'wpbf_content_open' ); ?>

			<div id="inner-content" class="wpbf-container wpbf-container-center wpbf-padding-medium">

				<?php do_action( 'wpbf_inner_content_open' ); ?>

				<div class="wpbf-grid wpbf-main-grid wpbf-grid-<?php echo esc_attr( $grid_gap ); ?>">

					<?php do_action( 'wpbf_sidebar_left' ); ?>

					<main id="main" class="wpbf-main wpbf-medium-2-3 wpbf-index-content" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
					
						<?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'inc/template-parts/article' ); ?>

						<?php endwhile; else : ?>

						<?php get_template_part( 'inc/template-parts/article-none' ); ?>

						<?php endif; ?>

						<?php the_posts_pagination( array(
							'mid_size'  => 2,
							'prev_text' => __( '&larr; Previous', 'page-builder-framework' ),
							'next_text' => __( 'Next &rarr;', 'page-builder-framework' ),
						) ); ?>

					</main>

					<?php do_action( 'wpbf_sidebar_right' ); ?>

				</div>

				<?php do_action( 'wpbf_inner_content_close' ); ?>

			</div>

			<?php do_action( 'wpbf_content_close' ); ?>
			
		</div>

<?php get_footer(); ?>