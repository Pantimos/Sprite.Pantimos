/**
 * # stylesheet/less
 *
 * Base constructor for the LESS stylesheet manager
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util","util/templates","stylesheet/base"],function(e,t,n,r){"use strict";var i={filename:"spritesheet.png"},s=function(t){this.settings=e.extend({},i,t)};return t.inherit(s,r,{template:n.lessMarkup,get:function(e,t,r,i){var s=i?t:this.settings.filename;return n.less({prefix:r,backgroundImage:s,sprites:e})}}),s});