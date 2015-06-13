/**
 * # layout/base
 *
 * Base constructor for the canvas layout managers. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap)
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery"],function(e){"use strict";var t={maxPass:2},n=function(n){this.settings=e.extend({},t,n)};return n.prototype={constructor:n,getDimensions:function(e,t){},placeSprite:function(e,t,n){},intersection:function(t,n){var r,i,s,o,u=[],a;return e.map(n,function(e){r=e.x<t.x+t.width,s=e.y<t.y+t.height,i=e.x+e.width>t.x,o=e.y+e.height>t.y,r&&i&&s&&o&&u.push(e)}),u.length&&(a=u.pop()),a}},n});