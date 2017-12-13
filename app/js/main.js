$(document).ready(function(){

  $('.collapsible').collapsible();


   var wow = new WOW(
     {
       boxClass:     'wow',      // animated element css class (default is wow)
       animateClass: 'animated', // animation css class (default is animated)
       offset:       0,          // distance to the element when triggering the animation (default is 0)
       mobile:       true,       // trigger animations on mobile devices (default is true)
       live:         true,       // act on asynchronously loaded content (default is true)
       callback:     function(box) {
         // the callback is fired every time an animation is started
         // the argument that is passed in is the DOM node being animated
       },
       scrollContainer: null,    // optional scroll container selector, otherwise use window,
       resetAnimation: true,     // reset animation on end (default is true)
     }
   );

   wow.init();




    // $(".buscador").click(function(){

    //   $("#search").trigger("select");

    // });
    

    $(".buscador__general").click(function(){

      $("#search").focus();

    });



    $(".question--collapsible li").click(function(){

      if ($(".question--collapsible--icon").hasClass('icon-up')){
            $(".question--collapsible--icon").removeClass('icon-up');
            $(".question--collapsible--icon", this).addClass('icon-dow');
      } else {
          $(".question--collapsible--icon", this).addClass('icon-up');
          $(".question--collapsible--icon", this).removeClass('icon-dow');
      }

    });



});




$(document).on("scroll", function(){

    var movimientoMouse = $(document).scrollTop();

    if (movimientoMouse > 300) {
      $('.mouse-scroll').css("opacity", "0");
    } else {
      $('.mouse-scroll').css("opacity", "1");
    }
    
});



