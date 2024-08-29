/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink,
} from '@wordpress/components';
import { Children, cloneElement, isValidElement } from '@wordpress/element';

/**
 * Adds a custom 'isDecorative' attribute to all Image blocks.
 *
 * This attribute is used to indicate whether an image is decorative,
 * allowing developers to specify if an image should be ignored by
 * assistive technologies. The attribute is a boolean with a default value of 'false'.
 *
 * @param {Object} settings The block settings for the registered block type.
 * @return {Object}         The modified block settings with the added attribute.
 */
function addIsDecorativeAttribute( settings ) {

	// Only add attribute to Image blocks.
	if ( settings.name === 'core/image' ) {
		settings.attributes = {
			...settings.attributes,
			isDecorative: {
				type: 'boolean',
				default: false,
			},
		};
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'enable-decorative-images/add-is-decorative-attribute',
	addIsDecorativeAttribute
);

/**
 * Render the help text for the accessibility toggle.
 */
const helpText = (
	<>
		{ __(
			"Decorative images don't add information to the content of a page. Enabling removes alternative text and sets the image's role to presentation. ",
			'enable-decorative-images'
		) }
		<ExternalLink
			href={
				'https://www.w3.org/WAI/tutorials/images/decorative/'
			}
		>
			{ __(
				'Learn more.',
				'enable-decorative-images'
			) }
		</ExternalLink>
	</>
);

/**
 * Filter the BlockEdit object and add the "Is Decorative" toggle to Image blocks.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addImageInspectorControls( BlockEdit ) {
	return ( props ) => {
		const { name, attributes, setAttributes } = props;

		// Early return if the block is not the Image block.
		if ( name !== 'core/image' ) {
			return <BlockEdit { ...props } />;
		}

		const { alt, isDecorative } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __(
							'Accessibility',
							'enable-decorative-images'
						) }
					>
						<PanelRow>
							<ToggleControl
								label={ __(
									'Image is decorative',
									'enable-decorative-images'
								) }
								checked={ isDecorative }
								onChange={ () => {
									setAttributes( {
										isDecorative: ! isDecorative,
										alt: ! isDecorative ? '' : alt,
									} );
								} }
								help={ helpText }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}

addFilter(
	'editor.BlockEdit',
	'enable-decorative-images/add-image-inspector-controls',
	addImageInspectorControls
);

/**
 * Adds the role attribute to img elements in the block's Save function for
 * accessibility purposes.
 *
 * This function iterates over the children of a given element and adds the
 * role="presentation" attribute to img elements if they are marked as decorative.
 *
 * @param {Object} element    The React element to be modified.
 * @param {Object} blockType  The type of the block.
 * @param {Object} attributes The block attributes.
 * @return {Object} The modified React element with updated img roles.
 */
function addAccessibilityRoleToImages( element, blockType, attributes ) {
	const { name } = blockType;
	const { isDecorative } = attributes;
	const elementChildren = element?.props?.children;

	const updateChildrenWithRole = ( children ) => {
		return Children.map( children, ( child ) => {
			if ( ! isValidElement( child ) ) {
				return child;
			}

			// Check if the child is of type 'img'. The Image block only has one img child.
			if ( child.type === 'img' ) {
				return cloneElement( child, { role: 'presentation' } );
			}

			// If the current child has children of its own, recurse over them.
			if ( child.props.children ) {
				return cloneElement( child, {
					children: updateChildrenWithRole( child.props.children ),
				} );
			}

			return child;
		} );
	};

	// Apply the correct role to child 'img' elements if the block is a decorative Image block.
	if ( 'core/image' === name && isDecorative &&  elementChildren ) {
		return cloneElement( element, {
			children: updateChildrenWithRole( elementChildren ),
		} );
	}

	return element;
}

addFilter(
	'blocks.getSaveElement',
	'enable-decorative-images/add-accessibility-role-to-images',
	addAccessibilityRoleToImages
);

/**
 * Note: Note required, for demonstration purposes only.
 * 
 * Adds the role="presentation" attribute to Image blocks marked as decorative.
 *
 * @param {Object} props       The current properties of the block's root element.
 * @param {Object} blockType   The block type definition object.
 * @param {Object} attributes  The block's attributes.
 * @return {Object}            The modified properties with the `role` attribute added, or the original properties if conditions are not met.
 */
function addAccessibilityRoleToImageBlocks( props, blockType, attributes ) {
	const { name } = blockType;
	const { isDecorative } = attributes;

	if ( 'core/image' === name && isDecorative ) {
		return {
			...props,
			role: 'presentation',
		};
	}

	return props;
}

// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'example/add-accessibility-role-to-image-blocks',
// 	addAccessibilityRoleToImageBlocks
// );