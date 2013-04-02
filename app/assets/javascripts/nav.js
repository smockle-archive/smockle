(function ($) {
	$.fn.rtext = function (small, big) {
  	var self = $(this).selector;
		var small = arguments.length < 1 ? "" : small;
		var big = arguments.length < 2 ? "" : big;

		$(document).ready(function() {
  		$(self).text($(window).width() <= 768 ? I18n.t(small) : I18n.t(big));
		});
		
		$(window).resize(function() {
  		$(self).text($(window).width() <= 768 ? I18n.t(small) : I18n.t(big));
		});
		
		return $(this);
	}
}) (jQuery);

$(".social").rtext("social_small", "social_big");
$(".coffee").rtext("coffee_small", "coffee_big");

$(document).on("click", ".lang", function() {
  var url = window.location.href;
  if (I18n.currentLocale() == "es") url = url.replace("/es/", "/en/");
  else if (url.indexOf("en") > -1) url = url.replace("/en/", "/es/");
  else url = url.replace(window.location.host, window.location.host + "/es");
  window.location = url;
});

$(document).on("click", "a.paypal-form", function() { $("form.paypal-form").submit(); });