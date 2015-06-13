/**
 * # util/util
 *
 * This is the home for wayward methods who have lost their way.
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery"],function(e){"use strict";return{inherit:function(t,n,r){t.prototype=new n,t.prototype.constructor=n,e.each(r,function(e,n){t.prototype[e]=n}),t.prototype._super=function(e,t,r){var i=n.prototype[e];return i.apply(t,r)}},debounce:function(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){n||e.apply(i,s),r=null};r?window.clearTimeout(r):n&&e.apply(i,s),r=setTimeout(o,t||50)}},noop:function(e){e&&(e.preventDefault(),e.stopPropagation())},toPx:function(e){return e?e+"px":"0"}}});