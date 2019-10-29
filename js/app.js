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

  $("#playVideo").click(function() {
    var myVideo = $("#video")[0];
    myVideo.play();
    setTimeout(function(){ 
      myVideo.pause();
    }, 10000);
  })

  $(".nav-tabs a").click(function() {
    $(this).tab("show")
  })

  $("#showModal").click(function(){
    $("#modal").modal()
  })

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })
  
  var progressBar = $("#progressBar");

  setInterval(function() {
    var value = progressBar.css("width")
    var value = progressBar[0].style.width

    value = parseInt(value)

    if (value >= 100) {
      progressBar.css("width" , "0%")
     }
     else {
      progressBar.css("width" , "100%")
     }
  }, 1000)

var isPlayed = true

setInterval(function() {
  if (isPlayed){
    $("#spinner").css("animation-play-state", "paused");
    isPlayed = false;
    } else {
      $("#spinner").css("animation-play-state", "running");
      isPlayed = true;
    }
}, 5000);


});
