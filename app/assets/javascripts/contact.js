function pinch() {
  $($(window).width() < 768 ? ".holdable-small" : ".holdable-large").after($(".movable"));
}

$(document).ready(function() { pinch(); });
$(window).resize(function() { pinch(); });

function push(event) {
 	if (event != null) event.preventDefault();
 	$(".contact .contact-success").remove();
 	
  var form = $("section.contact form#new_message");
  var values = form.serialize();
  $.ajax({
    url: form.attr('action'),
    dataType: "json",
    data: values,
    success: function (data) {
      fall(data);
    },
    error: function (data) {
      wobble(data);
    }
  });  
}

function fall(_data) {
  $.ajax({
    url: "/home/contact/",
    dataType: "html",
    data: _data,
    success: function (data) {
      $("#message_first").attr("placeholder", $("#message_first").attr("data-placeholder"));
      $("#message_last").attr("placeholder", $("#message_last").attr("data-placeholder"));
      $("#message_email").attr("placeholder", $("#message_email").attr("data-placeholder"));
      $("#message_phone").attr("placeholder", $("#message_phone").attr("data-placeholder"));
      $(".contact form input").attr("value", "");
      $(".contact form select").attr("value", 1);
      $(".contact form textarea").attr("value", "");
      $(".contact .row.movable:last").after(data);
    }
  }); 
}

function wobble(data) {
  x = jQuery.parseJSON(data.responseText).first;
  if (x != undefined) $("#message_first").attr("value", "").attr("placeholder", x.toString().split(',')[0] + ".");
  else $("#message_first").attr("placeholder", $("#message_first").attr("data-placeholder"));
  
  x = jQuery.parseJSON(data.responseText).last;
  if (x != undefined) $("#message_last").attr("value", "").attr("placeholder", x.toString().split(',')[0] + ".");
  else $("#message_last").attr("placeholder", $("#message_last").attr("data-placeholder"));
    
  x = jQuery.parseJSON(data.responseText).email;
  if (x != undefined) $("#message_email").attr("value", "").attr("placeholder", x.toString().split(',')[0] + ".");
  else $("#message_email").attr("placeholder", $("#message_email").attr("data-placeholder"));
    
  x = jQuery.parseJSON(data.responseText).phone;
  if (x != undefined) $("#message_phone").attr("value", "").attr("placeholder", x.toString().split(',')[0] + ".");
  else $("#message_phone").attr("placeholder", $("#message_phone").attr("data-placeholder"));
}

$(document).on("click", "section.contact button[type=submit]", function (e) {
	if (!e) e = window.event;
	push(e);
});
