$(document).ready(function(){
    $(".js--about").waypoint(function(direction){
      if(direction=="down"){
      $('nav').addClass('sticky-nav');
    }
    else{
      $("nav").removeClass('sticky-nav');
    }
   });

    $(".js--scroll").click(function(){
      $('html','body').animate({scrollTop:$('.js-sing').offset().top},1000);
    })

});