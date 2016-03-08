/*
 * Stickier Headers is a jQuery plugin that provides
 * instagram style sticky list headers.
 *
 * In order to achieve maximum performance, it requires
 * some HTML and CSS specifics.
 *
 * Works on all modern desktop and mobile browsers.
 *
 * Copyright (c) 2016 Stratos Pavlakis
 * Licensed under the MIT license.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function(root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {

  // @include ./raf.js
  // @include ../tmp/stickierHeaders.js

}));
