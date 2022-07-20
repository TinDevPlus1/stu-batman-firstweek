$(document).ready(function (e) {
    //click
    $(".scrollUp").click(function (e) {
      //stop
      e.preventDefault();
      //get header href
      var url = $(this).attr("href");
      //offset
      var offset = $(url).offset();
      //scroll top
      $("html, body").animate({ scrollTop: offset.top });
    });
  });
  