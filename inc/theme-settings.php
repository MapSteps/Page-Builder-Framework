<?php
/**
 * Setting up theme settings.
 *
 * @package Page Builder Framework
 */

defined( 'ABSPATH' ) || die( "Can't access directly" );

/**
 * Add theme settings.
 */
function wpbf_theme_settings_page() {

	// Stop here if Premium Add-On is active.
	if ( wpbf_is_premium() ) {
		return;
	}

	add_theme_page( __( 'Theme Settings', 'page-builder-framework' ), __( 'Theme Settings', 'page-builder-framework' ), 'manage_options', 'wpbf-premium', 'wpbf_theme_settings_callback' );

}
add_action( 'admin_menu', 'wpbf_theme_settings_page' );

/**
 * Theme settings callback.
 */
function wpbf_theme_settings_callback() {
	require __DIR__ . '/settings/settings-page.php';
}

/**
 * Save activation notice dismissal.
 */
function wpbf_activation_notice_dismissal() {

	$nonce   = isset( $_POST['nonce'] ) ? $_POST['nonce'] : 0;
	$dismiss = isset( $_POST['dismiss'] ) ? absint( $_POST['dismiss'] ) : 0;

	if ( empty( $dismiss ) ) {
		wp_send_json_error( __( 'Invalid Request', 'page-builder-framework' ) );
	}

	if ( ! wp_verify_nonce( $nonce, 'WPBF_Dismiss_Activation_Notice' ) ) {
		wp_send_json_error( __( 'Invalid Token', 'page-builder-framework' ) );
	}

	update_option( 'wpbf_activation_notice_dismissed', 1 );
	wp_send_json_success( __( 'Activation notice has been dismissed', 'page-builder-framework' ) );

}
add_action( 'wp_ajax_wpbf_activation_notice_dismissal', 'wpbf_activation_notice_dismissal' );

/**
 * Display activation notice.
 */
function wpbf_show_activation_notice() {

	// Stop here if Premium Add-On is active.
	if ( wpbf_is_premium() ) {
		return;
	}

	// Stop here if notice has been dismissed.
	if ( ! empty( get_option( 'wpbf_activation_notice_dismissed', 0 ) ) ) {
		return;
	}

	// Stop here if current user can't manage options.
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	require __DIR__ . '/settings/activation-notice.php';

}
add_action( 'admin_notices', 'wpbf_show_activation_notice' );
