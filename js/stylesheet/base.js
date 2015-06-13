/**
 * # stylesheet/base
 *
 * Base constructor for the stylesheet managers
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define(["wrap/jquery"],function(e){"use strict";var t={filename:"spritesheet.png"},n=function(n){this.settings=e.extend({},t,n)};return n.prototype={constructor:n,template:null,get:function(e,t,n,r){},markup:function(e,t,n){return this.template({prefix:t,sprites:e,tooltip:n})}},n});