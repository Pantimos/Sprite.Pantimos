/**
 * # module/palette
 *
 * Constructor for UI palettes (i.e. dialogs). Inherits from `Toolbar`
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util","module/toolbar"],function(e,t,n){"use strict";var r={name:"",visible:!1,actions:{},fields:{}},i=function(t,n){this.$element=e(t),this.settings=e.extend({},r,n),this.name=this.settings.name,this.visible=this.settings.visible,this.actions=this.settings.actions,this.fields=this.settings.fields,this.source=null,this.init()};return i.classname=".stitches-palette",t.inherit(i,n,{init:function(){this._super("init",this,arguments),this.$element.toggleClass("in",this.visible)},bind:function(){var t=this;this._super("bind",this,arguments),e.each(this.fields,function(n,r){e.each(r,function(e,r){var i="[name="+n+"]",s=t.getHandler(t,r);t.$element.on(e,i,s)})})},open:function(){this.$element.addClass("in"),this.visible=!0},close:function(){this.$element.removeClass("in"),this.visible=!1},configure:function(t){var n=this;this.source=t.source,e.each(t.inputs,function(e,t){var r="[name="+e+"]",i=n.$element.find(r),s=i.attr("type");switch(s){case"radio":case"checkbox":i=i.removeAttr("checked").filter("[value="+t+"]"),i.attr("checked","checked");break;default:i.val(t)}})}}),i});