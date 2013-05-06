/* Scroll
 * When included with a project, scrolling by section is automatically enabled.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

var lid;
var sections;

$(function () {
  sections = $("nav a").map(function() {
  	var item = $($(this).attr("href"));
  	if (item.length) { return item; }
  });
})

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
	$("html, body").stop().animate({ scrollTop: c }, 600, function () {$(window).on("scroll", scroll);});
}

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
    }
}

$(document).on("click", "nav a", click);
$(window).on("scroll", scroll);