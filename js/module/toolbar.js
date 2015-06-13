/**
 * # module/toolbar
 *
 * Constructor for UI toolbars
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery"],function(e){"use strict";var t={name:"",actions:{}},n=function(n,r){this.$element=e(n),this.settings=e.extend({},t,r),this.name=this.settings.name,this.actions=this.settings.actions,this.init()};return n.classname=".stitches-toolbar",n.prototype={constructor:n,init:function(){this.bind()},bind:function(){var t=this;e.each(this.actions,function(n,r){e.each(r,function(e,r){var i="[data-action="+n+"]",s=t.getHandler(t,r);n==="instance"?t.$element.on(e,t.getHandler(t,s)):t.$element.on(e,i,s)})})},getHandler:function(t,n){return function(r){var i=e(r.currentTarget);i.is(".disabled")?(r.stopPropagation(),r.preventDefault()):n.apply(t,arguments)}},toggleActions:function(t,n){var r=this;typeof t=="string"&&(t=t.split(" ")),e.map(t,function(e){var t=r.$element.find("[data-action="+e+"]");t.toggleClass("disabled",n)})},enable:function(e){this.toggleActions(e,!1)},disable:function(e){this.toggleActions(e,!0)}},n});