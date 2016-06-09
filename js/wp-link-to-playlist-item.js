/**
 * wp-link-to-playlist-item.js
 *
 * Features, using the hash #p<item number>:
 * - Plays the <item number>
 * - Update the history hash when next item plays or an item is selected (clicked on).
 * - Scrolls to top of media element (video or audio)
 *
 * @author Per Soderlind - https://soderlind.no
 * @version 0.1
 * @license: GPL2 (https://www.gnu.org/licenses/gpl-2.0.html)
 */

function wp_link_to_playlist_update_history_hash(newhash) {
	if (newhash.length) {
		var url = window.location.href.substr(0,window.location.href.indexOf('#'));
		if (window.location.href) {
			window.history.replaceState({}, '', url + '#' + newhash);
		} else {
			window.history.pushState({page: url + '#' + newhash}, '', url + '#' + newhash);
		}
	}
}

jQuery(function ($) {
	if (typeof MediaElementPlayer !== 'undefined' && typeof _wpmejsSettings !== 'undefined') {
		var wp_link_to_playlist_identifier = window.location.hash;
		var wp_link_to_playlist_scrollto = 0;
		if ( $('.mejs-mediaelement video').length) {
			wp_link_to_playlist_scrollto = $('.mejs-mediaelement video').offset().top - 20;
		} else if ($('.wp-playlist').length) {
			wp_link_to_playlist_scrollto = $('.wp-playlist').offset().top - 20;
		}

		if (wp_link_to_playlist_identifier && $('.wp-playlist-item').get().length && wp_link_to_playlist_identifier.slice(2) - 1 <= $('.wp-playlist-item').get().length) {
			var wp_link_to_playlist_num = (wp_link_to_playlist_identifier.slice(2) - 1 < 0) ? 0 : wp_link_to_playlist_identifier.slice(2) - 1;
			if ($('.wp-playlist-item').get(wp_link_to_playlist_num)) {
				//when page is loaded or reloaded, scroll to top of wp_link_to_playlist_scrollto
				$(window).on('load', function() {
				    $(window).scrollTop(wp_link_to_playlist_scrollto);
				});
				$(window).on('beforeunload', function() {
				    $(window).scrollTop(wp_link_to_playlist_scrollto);
				});
				//play media
				$('.wp-playlist-item').get(wp_link_to_playlist_num).click();
			}
		}

		//update history when next media element plays
		$('.mejs-mediaelement video,.mejs-mediaelement audio').on('ended', function (e) {
			e.preventDefault();
			//for next item in list, when jumped to, update history with new hash
			var src = $(this).attr('src');
			var $item = $('.wp-playlist-caption').filter("[href='"+src+"']").closest('div');
			var n = $(".wp-playlist-item").index($item) + 1;
			var newhash = 'p' + n;
			wp_link_to_playlist_update_history_hash(newhash);
		});

		//update history when media elment is selected (clicked on)
		$(document).on('click', '.wp-playlist-caption', function(e){
			e.preventDefault();
			//for new item,when clicked on, update history with new hash
			var $item = $(this).closest('div');
			var n = $(".wp-playlist-item").index($item) + 1;
			var newhash = 'p' + n;
			wp_link_to_playlist_update_history_hash(newhash);

			//scroll to top of wp_link_to_playlist_scrollto
			$(window).scrollTop(wp_link_to_playlist_scrollto);
		});

		$(window).on('popstate', function(e){
			window.location.href = window.history.href;
		});
	}
});
