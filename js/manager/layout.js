/**
 * # manager/layout
 *
 * Methods for setting the canvas layout and stitching the sprites together
 * (i.e. placing them on the canvas)
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","layout/compact","layout/vertical","layout/horizontal"],function(e,t,n,r){"use strict";var i={compact:t,vertical:n,horizontal:r};return{set:function(e){var t=i[e]||i.compact;this.manager=new t},getDimensions:function(e,t){return this.manager.getDimensions(e,t)},placeSprites:function(t,n,r,i){var s=this;i(0,"info"),e.map(t,function(e){e.placed||(e.placed=s.manager.placeSprite(e,n,r)),i(n.length/t.length)}),t=e.map(t,function(e){return e.placed?null:e})},trim:function(t,n){var r=0,i=0;e.map(t,function(e){r=r>e.x+e.width?r:e.x+e.width,i=i>e.y+e.height?i:e.y+e.height}),n.width=r||n.width,n.height=i||n.height},getSpritesheet:function(t){var n=t.sprites,r=t.dimensions,i,s,o;i=document.createElement("canvas"),i.width=r.width,i.height=r.height;try{s=i.getContext("2d"),e.map(n,function(e){var t=e.left(),n=e.top();s.drawImage(e.image,t,n)}),o=i.toDataURL("image/png")}catch(u){this.$element.trigger("error",[u])}return o}}});