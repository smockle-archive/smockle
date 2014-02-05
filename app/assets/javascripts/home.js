// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/* Scroll
 * When included with a project, scrolling by section is automatically enabled.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, devel: true, asi: true */
/*global _: true */

var SMOCKLE = _.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    home: {
        index: function () {
            "use strict";
          
            // De-linkify logo.
            var logo = document.querySelector(".site-logo")
            logo.removeAttribute("href")
            document.querySelector(".site-logo h1").css({"color": "white"})
                   
            // Submit link.
            function submit() {
                var form = document.querySelector("#contact form"),
                    values = form.serialize(),
                    button = document.querySelector("#contact .form-button"),
                    loading = document.querySelector("#contact .loading"),
                    contents = document.querySelector("#contact h4, #contact form")
              
                button.attr("disabled", true)
                loading.removeClass("hidden")
                contents.toggle()
                
                document.querySelector("#contact").css("min-height", "0")
              
                _.ajax({
                    url: form.attr("action"),
                    dataType: "json",
                    data: values,
                    type: "POST",
                    success: function (data) {
                        loading.addClass("hidden")
                        contents.hide()
                        document.querySelector("#contact h4").text(data.message).css("text-align", "center").show()
                    },
                    error: function (data) {
                        button.attr("disabled", false)
                        loading.addClass("hidden")
                        contents.toggle()
                        var errors = JSON.parse(data.responseText)
                        
                        if (errors.content !== undefined) {
                            document.querySelector("#contact textarea").attr("placeholder", "Content " + errors.content + ".")
                        }
                        if (errors.name !== undefined) {
                            document.querySelector("#contact label:nth-of-type(1) input").attr("placeholder", "Name " + errors.name + ".")
                        }
                        if (errors.email !== undefined) {
                            document.querySelector("#contact label:nth-of-type(2) input").attr("placeholder", "Email " + errors.email + ".")
                        }
                    }
                })
            }
            document.querySelector("#contact .form-button").addEventListener("click", submit)
        },
    
        projects: function () {
            "use strict";
            
            // Error pages only have one section, so disable scrolling.
      
            // Linkify navigation.
            document.querySelectorAll("nav a").forEach(function (link) {
                link.setAttribute("href", link.getAttribute("href"))
            })
        }
    }
})