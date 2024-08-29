<?php
/**
 * Plugin Name:         Enable Decorative Images
 * Plugin URI:          https://www.nickdiego.com/
 * Description:         Easily make Image blocks decorative.
 * Version:             0.1.0
 * Requires at least:   6.5
 * Requires PHP:        7.4
 * Author:              Nick Diego
 * Author URI:          https://www.nickdiego.com
 * License:             GPLv2
 * License URI:         https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain:         enable-decorative-images
 * Domain Path:         /languages
 *
 * @package enable-decorative-images
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue Editor scripts and styles.
 */
function edi_enqueue_block_editor_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'enable-decorative-images-editor-scripts',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_set_script_translations(
		'enable-decorative-images-editor-scripts',
		'enable-decorative-images'
	);
}
add_action( 'enqueue_block_editor_assets', 'edi_enqueue_block_editor_assets' );

/**
 * Adds a role attribute and remove alt text on decorative Image blocks.
 *
 * @param string $block_content The original HTML content of the block.
 * @param array  $block         The block details, including attributes.
 * @return string               The modified block content with the decorative role applied, or the original content if not decorative.
 */
function edi_add_decorative_role_to_image_block( $block_content, $block ) {

    $is_decorative = $block['attrs']['isDecorative'] ?? false;

    // Only apply the modifications if the image is decorative.
    if ( $is_decorative ) {

        // Modify the img attributes using the HTML API.
        $processor = new WP_HTML_Tag_Processor( $block_content );

        if ( $processor->next_tag( 'img' ) ) {
            $processor->set_attribute( 'alt', '' );
            $processor->set_attribute( 'role', 'presentation' );
        }

        return $processor->get_updated_html();
    }

    return $block_content;
}
add_filter( 'render_block_core/image', 'edi_add_decorative_role_to_image_block', 10, 2 );

/**
 * NOTE: Not required, for demonstration purposes only.
 * 
 * Adds a custom 'isDecorative' attribute to all Image blocks.
 *
 * This attribute indicates whether an image is decorative,
 * allowing developers to specify if an image should be ignored by
 * assistive technologies. The attribute is a boolean with a default value of `false`.
 *
 * @param array  $args       The original block type arguments.
 * @param string $block_type The name of the block type being registered.
 * @return array             Modified block type arguments.
 */
function edi_add_is_decorative_attribute( $args, $block_type ) {

    // Only add the attribute to the Image block.
    if ( $block_type === 'core/image' ) {
        if ( ! isset( $args['attributes'] ) ) {
            $args['attributes'] = array();
        }

        $args['attributes']['isDecorative'] = array(
            'type'    => 'boolean',
            'default' => false,
        );
    }

    return $args;
}
//add_filter( 'register_block_type_args', 'edi_add_is_decorative_attribute', 10, 2 );