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


  (function($) {

    /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */

    $.fn.visible = function(partial) {

      var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);


  $(window).scroll(function(event) {

    $("#competences div div, #projets div div").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      } else{
        el.removeClass("come-in");
      }
    });

  });

});
