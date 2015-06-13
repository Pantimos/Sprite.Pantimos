/**
 * # module/sprite
 *
 * Constructor for the sprite element, which holds sprite dimensions,
 * position, and display info. Used for manipulation of a single
 * sprite on the canvas
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util","util/templates"],function(e,t,n){"use strict";var r={name:"",src:"",padding:0},i=function(n,i){this.settings=e.extend({},r,n),this.$element=null,this.name=this.cleanName(this.settings.name),this.src=this.settings.src,this.padding=parseInt(this.settings.padding,10),this.active=!1,this.placed=!1,this.onload=i.onload||t.noop,this.init()};return i.classname=".stitches-sprite",i.prototype={constructor:i,init:function(){this.load()},load:function(){var e=this;this.image=new Image,this.image.onload=function(){e.x=0,e.y=0,e.width=e.image.width+e.padding*2,e.height=e.image.height+e.padding*2,e.area=e.width*e.height,e.render(),e.bind(),e.toDataURL(),e.onload(e)},this.image.src=this.src},render:function(){var t=n.sprite(this);this.$element=e(t),this.$element.data("sprite",this)},bind:function(){this.$element.on("click",e.proxy(this.click,this))},toDataURL:function(){var e,t,n;e=document.createElement("canvas"),e.width=this.image.width,e.height=this.image.height;try{t=e.getContext("2d"),t.drawImage(this.image,0,0),n=e.toDataURL("image/png")}catch(r){this.$element.trigger("error",[r])}this.src=n},reset:function(){this.x=0,this.y=0,this.placed=!1,this.$element.removeClass("placed")},show:function(){this.$element.css({left:this.x+"px",top:this.y+"px",padding:this.padding+"px"}).addClass("placed")},click:function(e){var t=!this.active;t?(this.$element.trigger("clear-active",[this]),this.$element.trigger("open-properties",[this])):this.$element.trigger("close-properties"),this.active=t,this.$element.toggleClass("active",t)},configure:function(e){e.padding&&(this.padding=parseInt(e.padding,10),this.width=this.image.width+this.padding*2,this.height=this.image.height+this.padding*2,this.area=this.width*this.height)},cleanName:function(e){return e=e.replace(/\.\w+$/i,""),e=e.replace(/[\s.]+/gi,"-"),e=e.replace(/[^a-z0-9\-]/gi,"_"),e},left:function(e){var n=this.x+this.padding;return e?t.toPx(-n):n},top:function(e){var n=this.y+this.padding;return e?t.toPx(-n):n},toJSON:function(){return{name:this.name,src:this.src}}},i});