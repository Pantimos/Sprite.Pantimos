/**
 * # manager/stylesheet
 *
 * Methods for setting the canvas stylesheet type and making the stylesheets
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery","stylesheet/css","stylesheet/less"],function(e,t,n){"use strict";var r={css:t,less:n};return{set:function(e){var t;this.type=e||"css",t=r[this.type],this.manager=new t},getStylesheet:function(e){var t=e.sprites,n=e.spritesheet,r=e.prefix,i=e.uri,s=this.manager.get(t,n,r,i);return s=s.replace(/\\n/g,"\n"),s},getMarkup:function(e){var t=e.sprites,n=e.prefix,r=e.tooltip||!1,i=this.manager.markup(t,n,r);return i=i.replace(/\\n/g,"\n"),i}}});