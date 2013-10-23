// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, asi: true */
/*global $: true */
var SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    errors: {
        init: function () {
            "use strict";
            
            // Error pages only have one section, so disable scrolling.
            $(document).off("click", "nav a")

            // Linkify navigation.
            $("nav a").each(function () {
                $(this).attr("href", "/" + $(this).attr("href"))
            })
        }
    }
})