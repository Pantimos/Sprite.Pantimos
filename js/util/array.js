/**
 * # util/array
 *
 * Utility methods for working with arrays
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery"],function(e){"use strict";return{remove:function(t,n){return e(t).filter(function(){return this!==n})}}});