/**
 * # util/templates
 *
 * Utility methods for referencing js templates
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["tpl!../../templates/stitches.tpl","tpl!../../templates/downloads.tpl","tpl!../../templates/sprite.tpl","tpl!../../templates/css.tpl","tpl!../../templates/css-markup.tpl","tpl!../../templates/less.tpl","tpl!../../templates/less-markup.tpl"],function(e,t,n,r,i,s,o){"use strict";return{stitches:function(){return e.apply(this,arguments)},downloads:function(){return t.apply(this,arguments)},sprite:function(){return n.apply(this,arguments)},css:function(){return r.apply(this,arguments)},cssMarkup:function(){return i.apply(this,arguments)},less:function(){return s.apply(this,arguments)},lessMarkup:function(){return o.apply(this,arguments)}}});