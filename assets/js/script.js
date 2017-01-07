$(document).ready( function() {

    if( $(window).width() < 768) {
     $('footer ul li a').addClass('btn btn-default');
     $('.post-header h3').addClass('h4');
    }


     $(window).resize(function() {

        if($(window).width() < 768) {
         $('footer ul li a').addClass('btn btn-default');
         $('.post-header h3').addClass('h4');
        }
        else{
          $('footer ul li a').removeClass('btn btn-default');
          $('.post-header h3').removeClass('h4');
        }
     });

     /*$('header li a').click(function(){
       if($(window).width() < 768){

         var callbacks = $.Callbacks();
         callbacks.add($('.collapse').collapse('hide'));

         callbacks.add(

           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html, body').animate({
                 scrollTop: target.offset().top
               }, 700);
               return false;
             }
           }

         );

         callbacks.fire();



       }
     });*/


     // Smooth Scroll
     $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }


      });


 });
