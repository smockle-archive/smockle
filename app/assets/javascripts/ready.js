/* Ready
 * Execute code after loading DOM.
 * Copyright © 2013 John Resig (jeresig@gmail.com) and Clay Miller (clay@smockle.com)
 * MIT Licensed
 */

/*jslint browser: true */
/*global $: true */

if (window.$ === undefined) {
    window.$ = {};
}

if ($.ready === undefined) {
    $.ready = function (fn) {
        "use strict";
        
        var DOMContentLoaded;
        
        /* DOM loading in modern browsers. */
        if (document.addEventListener) {
            DOMContentLoaded = function () {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                fn();
            };
            document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
            window.addEventListener("load", fn, false);
        
        /* DOM loading in IE. */
        } else if (document.attachEvent) {
            DOMContentLoaded = function () {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", DOMContentLoaded);
                    fn();
                }
            };
            document.attachEvent("onreadystatechange", DOMContentLoaded);
            window.attachEvent("onload", fn);
        }
        
        /* DOM already loaded. */
        if (document.readyState === "complete") {
            setTimeout(fn, 1);
        }
    };
}