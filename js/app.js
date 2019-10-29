$(function() {

  $("#navbarDropdown").click(function() {
    $("#dropdown").toggle("display");
  })

  $(".nav-link").removeClass("disabled")

  $("#search").keyup(function () {
    var value = $("#search").val();
    $("#searchResult").html(value);
    
  })

});
