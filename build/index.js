/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






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

function addIsDecorativeAttribute(settings) {
  // Only add attribute to Image blocks.
  if (settings.name === 'core/image') {
    settings.attributes = {
      ...settings.attributes,
      isDecorative: {
        type: 'boolean',
        default: false
      }
    };
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'enable-decorative-images/add-is-decorative-attribute', addIsDecorativeAttribute);

/**
 * Filter the BlockEdit object and add the "Is Decorative" toggle to Image blocks.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addImageInspectorControls(BlockEdit) {
  return props => {
    const {
      name,
      attributes,
      setAttributes
    } = props;

    // Early return if the block is not the Image block.
    if (name !== 'core/image') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
        ...props
      });
    }
    const {
      alt,
      isDecorative
    } = attributes;
    const helpText = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Decorative images don't add information to the content of a page. Enabling removes alternative text and sets the image's role to presentation. ", 'enable-decorative-images'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
        href: 'https://www.w3.org/WAI/tutorials/images/decorative/',
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Learn more.', 'enable-decorative-images')
      })]
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accessibility', 'enable-decorative-images'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image is decorative', 'enable-decorative-images'),
              checked: isDecorative,
              onChange: () => {
                setAttributes({
                  isDecorative: !isDecorative,
                  alt: !isDecorative ? '' : alt
                });
              },
              help: helpText
            })
          })
        })
      })]
    });
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'enable-decorative-images/add-image-inspector-controls', addImageInspectorControls);

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
function addAccessibilityRoleToImages(element, blockType, attributes) {
  const {
    name
  } = blockType;
  const {
    isDecorative
  } = attributes;
  const elementChildren = element?.props?.children;
  const updateChildrenWithRole = children => {
    return _wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Children.map(children, child => {
      if (!(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.isValidElement)(child)) {
        return child;
      }

      // Check if the child is of type 'img'. The Image block only has one img child.
      if (child.type === 'img') {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(child, {
          role: 'presentation'
        });
      }

      // If the current child has children of its own, recurse over them.
      if (child.props.children) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(child, {
          children: updateChildrenWithRole(child.props.children)
        });
      }
      return child;
    });
  };

  // Apply the correct role to child 'img' elements if the block is a decorative Image block.
  if ('core/image' === name && isDecorative && elementChildren) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(element, {
      children: updateChildrenWithRole(elementChildren)
    });
  }
  return element;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.getSaveElement', 'enable-decorative-images/add-accessibility-role-to-images', addAccessibilityRoleToImages);

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
function addAccessibilityRoleToImageBlocks(props, blockType, attributes) {
  const {
    name
  } = blockType;
  const {
    isDecorative
  } = attributes;
  if ('core/image' === name && isDecorative) {
    return {
      ...props,
      role: 'presentation'
    };
  }
  return props;
}

// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'example/add-accessibility-role-to-image-blocks',
// 	addAccessibilityRoleToImageBlocks
// );
/******/ })()
;
//# sourceMappingURL=index.js.map