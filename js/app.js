$(function() {

  $("#navbarDropdown").click(function() {
    $("#dropdown").toggle("display");
  })

  $(".nav-link").removeClass("disabled")

  $("#search").keyup(function () {
    var value = $("#search").val();
    $("#searchResult").html(value);  
  })

  $("#changetitle").click(function () {
    var num = Math.floor((Math.random() * 10) + 1);
    $("#title").html("Web Developer" + num)
  })

  $(".list-group-item").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
    })

});
