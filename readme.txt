=== WP Link To Playlist Item ===
Contributors: PerS, dssweb
Donate link: https://soderlind.no/donate/
Tags: playlist, video, audio
Requires at least: 4.4
Tested up to: 4.7
Stable tag: 0.2.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The plugin makes it possible to link to a playlist item.

== Description ==

The plugin makes it possible to link to a playlist item using the `#p<item number>` hash.

* Plays the `<item number>`
* Update the history hash when next item plays or an item is selected (clicked on).
* Scrolls to top of the media element (video or audio)

**Usage**

Add `#p<item number>` to the URL to a page with a playlist.

**Demo**

This will play item number 2: [https://soderlind.no/playlist-demo/#p2](https://soderlind.no/playlist-demo/#p2)

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/wp-link-to-playlist-item` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= Can I have more than one playlist on a page? =

The plugin only supports one playlist per page.

= Does plugin support video or audio playlists? =

The plugin supports video and audio playlists.

== Changelog ==
= 0.2.9 =
* Tested & found compatible with WP 4.7.
= 0.2.8 =
* Tested & found compatible with WP 4.6.
= 0.2.x =
* Removed history.popstate event
* [Tested code with Code Climate](https://codeclimate.com/github/soderlind/wp-link-to-playlist-item)
* Fixed cyclomatic complexity in JavaScript code
* Replaced onload event with custom event `scroll:top`
= 0.1 =
* Initial release
