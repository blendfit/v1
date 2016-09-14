$(document).ready(function(){
  findOutMoreScroll();
  $(".new-design-landing-page").css("height", $(window).height() + "px");
  
  var lastScrollTop = 0,
      $nav = $(".sticky-nav"),
      $page = $(".new-design-landing-page"),
      $stickyNavContainer = $(".sticky-nav-container");
      
  $(window).on("scroll", function(e) {
    
    var st = $(this).scrollTop();
     if (st > lastScrollTop){
         // downscroll code
         if( $page.height() < (lastScrollTop) ) {
           $nav.addClass('filled-in');
           $stickyNavContainer.removeClass('hidden');
          //  $stickyNavContainer.addClass('animated slideInDown');
         }
     } else {
        // upscroll code
        if( $page.height() > (lastScrollTop) ) {
          $nav.removeClass('filled-in');
          $stickyNavContainer.addClass('hidden');
        }
     }
     lastScrollTop = st;
  });
  
});

function findOutMoreScroll(){
  $('.new-design-landing-page-footer').on('click', function(){
    $('html, body').animate({
      scrollTop: $('.mission-statement').offset().top
    }, 2000)
  });
}