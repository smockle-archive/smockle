function page(event, _id) {
	/* Prevent default anchor-click behaviour. */
	if (event != null) event.preventDefault();

	$.ajax({
	   url: '/home/project',
	   dataType: "json",
	   data: {
  	   id: _id
	   },
	   success: function (data) {
  	   $(".project-client").html(data.client);
  	   $(".project-name").html(I18n.currentLocale() == "es" ? data.name_es : data.name);
  	   $(".project-quote").html(I18n.currentLocale() == "es" ? data.quote_es : data.quote);
  	   $(".project-message").html(I18n.currentLocale() == "es" ? data.message_es : data.message);
  	   $(".project-image").hide();
  	   $(".project-image[data-id=\"" + _id + "\"]").show();
  	   $(".project-page").removeClass("active");
  	   $(".project-page[data-id=\"" + _id + "\"]").addClass("active");
	   }
	 });
}

$(document).on("click", ".intro a[href=projects].thumbnail", function(e) {
  if (!e) e = window.event;
  page(e, $(this).attr("data-id"));
});

$(document).on("click", ".projects .pagination a", function(e) {
	if (!e) e = window.event;
	page(e, $(this).text());
});
