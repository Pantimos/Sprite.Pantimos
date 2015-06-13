/**
 * # module/drop-box
 *
 * Constructor for the drag and drop element. Used to allow users to drag
 * files onto a DOM element to initiate processing
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util"],function(e,t){"use strict";var n={},r=function(t,r){this.$element=e(t),this.$overlay=this.$element.find(".stitches-overlay"),this.settings=e.extend({},n,r),this.init()};return r.classname=".stitches-drop-box",r.prototype={constructor:r,init:function(){this.bind()},bind:function(){var n=this.$element.get(0),r=this.$overlay.get(0);n.addEventListener("dragenter",e.proxy(this.dragStart,this),!1),r.addEventListener("dragleave",e.proxy(this.dragStop,this),!1),r.addEventListener("dragexit",e.proxy(this.dragStop,this),!1),r.addEventListener("dragover",t.noop,!1),r.addEventListener("drop",e.proxy(this.drop,this),!1)},dragStart:function(e){this.$element.trigger("close-palettes"),this.$element.trigger("show-overlay")},dragStop:function(t){e.contains(this.$element,t.target)&&this.$element.trigger("hide-overlay")},drop:function(e){var t=e.files||e.dataTransfer.files;e.stopPropagation(),e.preventDefault(),t.length?this.$element.trigger("process-files",[t]):this.$element.trigger("hide-overlay")}},r});