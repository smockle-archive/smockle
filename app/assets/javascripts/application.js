// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require i18n
//= require i18n/translations
//= require utility-refresh
//= require nav
//= require intro
//= require projects
//= require contact

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-37140610-1']);
_gaq.push(['_setDomainName', 'smockle.com']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Scroll
function scroll(event, elem) {
	/* Prevent default anchor-click behaviour. */
	if (event != null) event.preventDefault();
	
	var offset = elem.offset().top + ~(elem.is("body > section:first")) + 2;
	
	$('html, body').stop().animate(
	{ scrollTop: offset },
	1000,
	function () {
		/* When scrolling is complete: */
		$('html, body').stop();
	});
}

$(document).on("click", ".icon-chevron-down", function(e) {
	if (!e) e = window.event;
	scroll(e, $(this).closest("body > section").nextAll("body > section:first"));
});

$(document).on("click", ".icon-chevron-up", function(e) {
	if (!e) e = window.event;
	scroll(e, $("body > section:first"));
});

$(document).on("click", "[href=intro]", function(e) {
	if (!e) e = window.event;
	scroll(e, $("body > section.intro"));
});

$(document).on("click", "[href=projects]", function(e) {
	if (!e) e = window.event;
	scroll(e, $("body > section.projects"));
});

$(document).on("click", "[href=contact]", function(e) {
	if (!e) e = window.event;
	scroll(e, $("body > section.contact"));
});

$(document).on("click", "[href=blog]", function(e) {
	if (!e) e = window.event;
	scroll(e, $("body > section.blog"));
});