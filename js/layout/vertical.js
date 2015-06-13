/**
 * # layout/vertical
 *
 * Constructor for the vertical canvas layout manager. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap).
 * Places sprites in a vertical column
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util","layout/base"],function(e,t,n){"use strict";var r={maxPass:2},i=function(t){this.settings=e.extend({},r,t)};return t.inherit(i,n,{getDimensions:function(t,n){var r=0,i=0;return e.map(t,function(e){r=e.width>r?e.width:r,i+=e.height}),{width:r||n.width,height:i||n.height}},placeSprite:function(e,t,n){var r,i=0,s=0,o=0;while(i++<this.settings.maxPass){for(o=0;o<=n.height-e.height;o++){e.x=s,e.y=o,r=this.intersection(e,t);if(!r)return t.push(e),e.show(),!0;o=r.y+r.height-1}n.width+=e.width,n.height+=e.height}return!1}}),i});