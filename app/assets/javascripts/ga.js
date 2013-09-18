/*jslint browser: true */
/*global $: true */

var SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    common: {
        init: function () {
            "use strict";
            
            var body = document.body,
                environment = body.getAttribute("data-env");
            
            if (environment === "production") {
                (function(G,o,O,g,l){G.GoogleAnalyticsObject=O;G[O]||(G[O]=function(){(G[O].q=G[O].q||[]).push(arguments)});G[O].l=+new Date;g=o.createElement('script'),l=o.scripts[0];g.src='//www.google-analytics.com/analytics.js';l.parentNode.insertBefore(g,l)}(this,document,'ga'));ga('create','UA-37140610-3');ga('send','pageview')
            }
        }
    }
});