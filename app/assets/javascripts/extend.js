/*jslint browser: true, devel: true, plusplus: true */
/*global $: true */

if (window.$ === undefined) {
    window.$ = {};
}

if ($.extend === undefined) {
    $.extend = function (base, add) {
        "use strict";
        
        if (base === undefined && add === undefined) {
            return null;
            
        } else if (add === undefined) {
            return base;
            
        } else {
            var output = {},
                key;
            
            for (key in base) {
                if (base.hasOwnProperty(key)) {
                    output[key] = base[key];
                }
            }
            
            for (key in add) {
                if (add.hasOwnProperty(key)) {
                    output[key] = add[key];
                }
            }
            
            return output;
        }
    };
}