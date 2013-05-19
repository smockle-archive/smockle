// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

/* Scroll
 * When included with a project, scrolling by section is automatically enabled.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, 
{
  home: {
    index: function() {
      // De-linkify logo.
      $("h1").html($("h1 a").text());
      
      // Last section id.
      var lid;
      
      // Collection of sections.
      var sections = $("nav a").map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });
      
      // Jump to section on click.
      function click(e) {
      	$(window).off("scroll");
      	if (!e) e = window.event;
      	e.preventDefault();
      	var h = e.target.href;
      	var r = h.substring(h.indexOf("#"));
      	var a = $(r)[0].offsetTop;
      	var b = $("header")[0].scrollHeight - 4;
      	var c = a - b > 0 ? a - b : 0;
		$("nav a").removeClass("active");
		$(e.target).addClass("active");
		if (~h.indexOf("#contact")) $("#contact textarea").focus();
		else $("#contact textarea").blur();
      	$("html, body").stop().animate({ scrollTop: c }, 600, function () {$(window).on("scroll", scroll);});
      }
      $(document).on("click", "nav a", click);
            
      // Update section on scroll.
      function scroll() {
          var b = $("header")[0].scrollHeight;
          var t = $(this).scrollTop() + b;
          var c = sections.map(function() {
            if ($(this).offset().top < t) return this;
          });
          c = c[c.length - 1];
          var id = c && c.length ? c[0].id : "";
          if (id !== lid) {
			lid = id;
			$("nav a").removeClass("active");
			$("nav a[href=#" + id + "]").addClass("active");
			if (lid == "contact") $("#contact textarea").focus();
			else $("#contact textarea").blur();
          }
      }
      $(window).on("scroll", scroll);
      
      // Project images.
      $(".image").each(function() {
        var i = $(this).data("id"),
            x = $(this).data("offset_x"),
            y = $(this).data("offset_y");
        $(this).css("background", "url(/assets/projects/" + i + ".png) no-repeat " + x + "% " + y + "%");
      });
	  
	  // Submit link.
	  $("#contact a[type=submit]").on("click", function() {
		  var form = $("#contact form");
		  var values = form.serialize();
      $.ajax({
        url: form.attr("action"),
        dataType: "json",
        data: values,
        success: function (data) {
          $("#contact h4").text(data.message).css("text-align", "center");
          $("#contact textarea").hide();
          $("#contact label").hide();
        },
        error: function (data) {
          var errors = jQuery.parseJSON(data.responseText);
          console.log(jQuery.parseJSON(data.responseText));
          if (errors.content != undefined)
            $("#contact textarea").attr("placeholder", "Content " + errors.content + ".");
          if (errors.name != undefined)
            $("#contact label:nth-of-type(1) input").attr("placeholder", "Name " + errors.name + ".");
          if (errors.email != undefined)
            $("#contact label:nth-of-type(2) input").attr("placeholder", "Email " + errors.email + ".");
        }
      });
	  });
    },
    
    projects: function() {
      // Error pages only have one section, so disable scrolling.
      $(document).off("click", "nav a");
      
      // Linkify navigation.
      $("nav a").each(function() {
        $(this).attr("href", "/" + $(this).attr("href"));
      });
      
      // Project image.
      $(".image").each(function() {
        var i = $(this).data("id");
        $(this).css("background", "url(/assets/projects/" + i + ".png) no-repeat 50% 0%");
      });
    }
  }
});