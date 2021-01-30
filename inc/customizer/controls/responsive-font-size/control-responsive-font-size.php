<?php
/**
 * Custom font size control.
 *
 * @package Page Builder Framework
 * @subpackage Customizer
 */

defined( 'ABSPATH' ) || die( "Can't access directly" );

class WPBF_Customize_Font_Size_Control extends WP_Customize_Control {

	public $type = 'wpbf-responsive-font-size';

	public function enqueue()
    {
        wp_enqueue_script( 'responsive-font-size', WPBF_THEME_URI . '/inc/customizer/controls/responsive-font-size/js/responsive-font-size.js', array( 'jquery' ), WPBF_VERSION, true );
    }

    public function render_content() {

		$devices = array( 'desktop', 'tablet', 'mobile' );

        $value_bucket = empty( $this->value() ) ? [] : json_decode( $this->value(), true );

        echo '<div class="wpbf-responsive-font-size-wrap">';
		?>

		<span class="customize-control-title"><?php echo esc_attr( $this->label ); ?></span>

		<ul class="wpbf-responsive-options">
			<li class="desktop">
				<button type="button" class="preview-desktop active" data-device="desktop">
					<i class="dashicons dashicons-desktop"></i>
				</button>
			</li>
			<li class="tablet">
				<button type="button" class="preview-tablet" data-device="tablet">
					<i class="dashicons dashicons-tablet"></i>
				</button>
			</li>
			<li class="mobile">
				<button type="button" class="preview-mobile" data-device="mobile">
					<i class="dashicons dashicons-smartphone"></i>
				</button>
			</li>
		</ul>

		<?php foreach ( $devices as $device ) { ?>

            <?php $saved_value = isset( $value_bucket[$device] ) ? $value_bucket[$device] : ''; ?>

		<div class="wpbf-control-device wpbf-control-<?php echo esc_attr( $device ); ?>">

			<label>
                <input type="text" name="<?php echo esc_attr( $this->id ); ?>" value="<?php echo esc_attr( $saved_value ); ?>" class="customize-control-slider-value" data-device-type="<?php echo $device; ?>" />
            </label>

		</div>

			<?php

		}

        printf(
            '<input type="hidden" class="wpbf-responsive-font-size-db" name="%s" value="%s" %s/>',
            esc_attr( $this->id ), esc_attr($this->value()), $this->get_link()
        );

        echo '</div>';

	}

}

/**
 * Register input slider control with Kirki.
 *
 * @param array $controls The controls.
 *
 * @return array The updated controls.
 */
add_filter(
    'kirki_control_types',
    function ( $controls ) {

        $controls['responsive_font_size'] = 'WPBF_Customize_Font_Size_Control';

        return $controls;

    }
);
