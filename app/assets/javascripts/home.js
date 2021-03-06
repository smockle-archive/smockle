// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/* Scroll
 * When included with a project, scrolling by section is automatically enabled.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/*jshint browser: true, devel: true, asi: true */
/*global $: true */
var SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, {
    home: {
        index: function () {
            "use strict";
          
            // De-linkify logo.
            // Last section id.
            var logo = $(".site-logo"),
                lid,
                sections
            logo.removeAttr("href")
            logo.children("h1").css("color", "white")
            
            // Collection of sections.
            sections = $("nav a").map(function () {
                var item = $($(this).attr("href"))
                if (item.length) { return item }
            })
  
            // Update section on scroll.
            function scroll() {
                var b = $("header")[0].scrollHeight,
                    t = $(window).scrollTop() + b,
                    c = sections.map(function () {
                        if ($(this).offset().top < t) {
                            return this;
                        }
                    }),
                    id
                
                c = c[c.length - 1]
                id = c && c.length ? c[0].id : ""
                
                if (id !== lid) {
                    lid = id
                    $("nav a").removeClass("active")
                    $("nav a[href=#" + id + "]").addClass("active")
                    
                    if (lid === "contact") {
                        $("#contact textarea").focus()
                    } else {
                        $("#contact textarea").blur()
                    }
                }
            }
            $(window).on("scroll", scroll)
            
            // Jump to section on click.
            function click(e) {
                $(window).off("scroll")
                if (!e) { e = window.event }
                e.preventDefault()
                
                var h = e.target.href,
                    r = h.substring(h.indexOf("#")),
                    a = $(r)[0].offsetTop,
                    b = $("header")[0].scrollHeight - 4,
                    c = a - b > 0 ? a - b : 0
                
                $("nav a").removeClass("active")
                $(e.target).addClass("active")
                
                if (~h.indexOf("#contact")) {
                    $("#contact textarea").focus()
                } else {
                    $("#contact textarea").blur()
                }
                
                $("html, body").stop().animate({ scrollTop: c }, 600, function () { $(window).on("scroll", scroll) })
            }
            $(document).on("click", "nav a", click)
          
            // Submit link.
            $("#contact .form-button").on("click", function () {
                var form = $("#contact form"),
                    values = form.serialize(),
                    button = $("#contact .form-button"),
                    loading = $("#contact .loading"),
                    contents = $("#contact h4, #contact form")
              
                button.attr("disabled", true)
                loading.removeClass("hidden")
                contents.toggle()
                
                $("#contact").css("min-height", "0")
              
                $.ajax({
                    url: form.attr("action"),
                    dataType: "json",
                    data: values,
                    type: "POST",
                    success: function (data) {
                        loading.addClass("hidden")
                        contents.hide()
                        $("#contact h4").text(data.message).css("text-align", "center").show()
                    },
                    error: function (data) {
                        button.attr("disabled", false)
                        loading.addClass("hidden")
                        contents.toggle()
                        var errors = $.parseJSON(data.responseText)
                        
                        if (errors.content !== undefined) {
                            $("#contact textarea").attr("placeholder", "Content " + errors.content + ".")
                        }
                        if (errors.name !== undefined) {
                            $("#contact label:nth-of-type(1) input").attr("placeholder", "Name " + errors.name + ".")
                        }
                        if (errors.email !== undefined) {
                            $("#contact label:nth-of-type(2) input").attr("placeholder", "Email " + errors.email + ".")
                        }
                    }
                });
            });
        },
    
        projects: function () {
            "use strict";
            
            // Error pages only have one section, so disable scrolling.
            $(document).off("click", "nav a")
      
            // Linkify navigation.
            $("nav a").each(function () {
                $(this).attr("href", "/" + $(this).attr("href"))
            });
        }
    }
});