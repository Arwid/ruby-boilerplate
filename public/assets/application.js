/*!
 * jQuery.Page - Very simple jQuery plugin to set javascript to run per page
 *
 * Copyright 2011 Arwid Bancewicz
 * Licensed under the MIT lice
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * @date 23 Feb 2011
 * @author Arwid Bancewicz http://arwid.ca
 * @version 0.1
 */
(function(b){var a={selector:"body",attr:"id",handlers:{}};a.init=function(c){if(!this.handlers){this.handlers={}}b.extend(this.handlers,c)};a.addHandler=function(c){b.extend(this.handlers,c)};a.start=function(c){if(!c){c=b(a.selector).attr(a.attr)}if(this.handlers[c]){this.handlers[c]()}};b.Page=a})(jQuery);
/*!
 * JS per page
 *----------------------------------*/
(function(a){a.Page.init({page_home:function(){},page_about:function(){},page_contact:function(){}});a.Page.start()})(jQuery);