// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/*jslint browser: true*/
/*global $:true */
var SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    errors: {
        init: function () {
            "use strict";
            
            // Error pages only have one section, so disable scrolling.
            $(document).off("click", "nav a");

            // Linkify navigation.
            $("nav a").each(function () {
                $(this).attr("href", "/" + $(this).attr("href"));
            });
        }
    }
});