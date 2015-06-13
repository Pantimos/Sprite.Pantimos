/**
 * # layout/compact
 *
 * Constructor for the compact canvas layout manager. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap).
 * Places sprites in the most compact rectangle possible
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util","layout/base"],function(e,t,n){"use strict";var r={maxPass:2},i=function(t){this.settings=e.extend({},r,t)};return t.inherit(i,n,{getDimensions:function(t,n){var r=0,i=0,s=0,o=0;return e.map(t,function(e){r=e.width>r?e.width:r,i=e.height>i?e.height:i,s+=e.area}),o=Math.ceil(Math.sqrt(s)),r=r>o?r:o,i=i>o?i:o,{width:r||n.width,height:i||n.height}},placeSprite:function(e,t,n){var r,i=0,s=0,o=0;while(i++<this.settings.maxPass){for(o=0;o<=n.height-e.height;o++){for(s=0;s<=n.width-e.width;s++){e.x=s,e.y=o,r=this.intersection(e,t);if(!r)return t.push(e),e.show(),!0;s=r.x+r.width-1}o=r.y+r.height-1}n.width+=e.width,n.height+=e.height}}}),i});