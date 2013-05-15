SMOCKLE = $.extend(typeof SMOCKLE === "undefined" ? {} : SMOCKLE, 
{
  home: {
    work: function() {
      // Error pages only have one section, so disable scrolling.
      $(document).off("click", "nav a");
      
      // Linkify navigation.
      $("nav a").each(function() {
        $(this).attr("href", "/" + $(this).attr("href"));
      });
    }
  }
});