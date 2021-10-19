$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 650) {
          $(".menu-container").css("background" , "#173949");
        } else {
          $(".menu-container").css("background" , "rgba(139, 139, 139, 0.401)");
        }
    })
  })