<?php
/**
 * Plugin Name: WP Link To Playlist Item
 * Version: 0.2.9
 * Plugin URI: https://github.com/soderlind/wp-link-to-playlist-item
 * Description: The plugin makes it possible to link to a playlist item using the #p<item number> hash, eg: /link-to-page-with-playlist/#p2
 * Author: Per Soderlind
 * Author URI: https://soderlind.no
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

define( 'WPLTPI_VERSION', '0.2.9' );

add_action( 'wp_enqueue_scripts', 'wp_link_to_playlist_item_enqueue_script' );

function wp_link_to_playlist_item_enqueue_script() {
	wp_enqueue_script( 'wp-link-to-playlist-item',
		plugins_url( '/js/wp-link-to-playlist-item.js' , __FILE__ ),
		array( 'wp-playlist' ),
		WPLTPI_VERSION,
		true
	);
}
