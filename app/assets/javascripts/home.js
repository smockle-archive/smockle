// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/* Scroll
 * When included with a project, scrolling by section is automatically enabled.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/*jslint browser: true, devel: true, bitwise: true */
/*global $: true */
var SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    home: {
        index: function () {
            "use strict";
            
            // Load feeds.
//            var xmlhttp;
//            
//            if (window.XMLHttpRequest) {
//                xmlhttp = new XMLHttpRequest();
//            }
//          
//            xmlhttp.onreadystatechange = function () {
//                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//                    document.getElementById("feeds").innerHTML = xmlhttp.responseText;
//                }
//            };
//            
//            xmlhttp.open("GET", "/home/feeds", true);
//            xmlhttp.send();
            
//            $.ajax({
//                url: "/home/feeds",
//                success: function (data) {
//                    $("section#feeds").html(data);
//                }
//            });
          
            // De-linkify logo.
            // Last section id.
            var logo = document.getElementsByClassName("site-logo")[0],
                lid,
                sections;
            logo.removeAttribute("href");
            logo.getElementsByTagName("h1")[0].css({"color": "white"});
	  
            // Submit link.
//            $("#contact a[type=submit]").on("click", function () {
//                var form = $("#contact form"),
//                    values = form.serialize();
//                
//                $.ajax({
//                    url: form.attr("action"),
//                    dataType: "json",
//                    data: values,
//                    type: "POST",
//                    success: function (data) {
//                        $("#contact h4").text(data.message).css("text-align", "center");
//                        $("#contact textarea").hide();
//                        $("#contact label").hide();
//                    },
//                    error: function (data) {
//                        var errors = $.parseJSON(data.responseText);
//                        console.log($.parseJSON(data.responseText));
//                        
//                        if (errors.content !== undefined) {
//                            $("#contact textarea").attr("placeholder", "Content " + errors.content + ".");
//                        }
//                        if (errors.name !== undefined) {
//                            $("#contact label:nth-of-type(1) input").attr("placeholder", "Name " + errors.name + ".");
//                        }
//                        if (errors.email !== undefined) {
//                            $("#contact label:nth-of-type(2) input").attr("placeholder", "Email " + errors.email + ".");
//                        }
//                    }
//                });
//            });
    
            // Safari Hack
            // Safari rounds in a very special way, so we must compensate.
//            if (/Constructor/.test(window.HTMLElement)) {
//                $("#contact a[type=submit]").css("margin", "-2.34rem 0");
//            }
        },
    
        projects: function () {
            "use strict";
            
            // Error pages only have one section, so disable scrolling.
//            $(document).off("click", "nav a");
      
            // Linkify navigation.
//            $("nav a").each(function () {
//                $(this).attr("href", "/" + $(this).attr("href"));
//            });
        }
    }
});