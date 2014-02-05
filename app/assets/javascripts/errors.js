// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, asi: true */
/*global _: true */

var SMOCKLE = _.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    errors: {
        init: function () {
            "use strict";
            
            // Error pages only have one section, so disable scrolling.
          
            // Linkify navigation.
            document.querySelectorAll("nav a").forEach(function (link) {
                link.attr("href", link.attr("href"))
            })
        }
    }
})