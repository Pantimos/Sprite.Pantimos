/**
 * # manager/file
 *
 * Methods for loading files to the canvas and giving updates on their
 * progress
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","util/util"],function(e,t){"use strict";return{total:0,processed:0,queue:[],set:function(e){e=e||{},this.onload=e.onload||t.noop,this.onprogress=e.onprogress||t.noop,this.onerror=e.onerror||t.noop},processFiles:function(t){var n=this;this.total=t.length,this.processed=0,this.queue=[],e.map(t,function(e){/jpeg|png|gif/.test(e.type)&&n.processFile(e)}),this.onprogress(0,"info")},processFile:function(e){var t=this,n;try{n=new FileReader,n.onloadend=function(n){var r=e.name,i=n.target.result,s=++t.processed/t.total;t.onprogress(s),t.queue.push([r,i]),t.queue.length===t.total&&t.processQueue()},n.readAsDataURL(e)}catch(r){this.onerror(r)}},processQueue:function(){var t=this;e.map(this.queue,function(e){t.onload.apply(t,e)})}}});