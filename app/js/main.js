$(document).ready(function(){


  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );


  $(function(){
     $('.stepper').activateStepper({
        linearStepsNavigation: true, // permitir la navegación haciendo clic en los pasos siguiente y anterior en steppers lineales
        autoFocusInput: true, //desde 2.1.1, el stepper puede enfocarse automáticamente en la primera entrada de cada paso
        autoFormCreation: true, //control the auto generation of a form around the stepper (in case you want to disable it)
        showFeedbackLoader: true, //controlar la generación automática de un formulario alrededor del paso a paso (en caso de que quiera deshabilitarlo)
        parallel: false // Por defecto no asumimos que el stepper es paralelo, esto se establece en true cuando stepper tiene la clase .parallel
     });
  });


  $('.collapsible').collapsible();

  $('select').material_select();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });


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
    

    $(".buscador__general, .buscador__form").click(function(){

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



