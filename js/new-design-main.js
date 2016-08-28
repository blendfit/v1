$( document ).ready( function(){
  // $( '.spark-learn-more-button' ).sticky({
  //   topSpacing: 0,
  //   widthFromWrapper: true
  // });

  // $(".spark-learn-more-button").stick_in_parent(
  //   {
  //     parent: $('body')
  //   }
  // );

  $(".new-design-landing-page").css("height", $(window).height() + "px");

  var $nav = $(".sticky-nav"),
      $stickyText = $(".sticky-text"),
      $page = $(".new-design-landing-page"),
      lastScrollTop = 0;

  $(window).on("scroll", function(e) {
    var st = $(this).scrollTop();
     if ( st > lastScrollTop ){
         // downscroll code

         if( $page.height() < (lastScrollTop) ) {
           $nav.addClass('filled-in');
           $stickyText.removeClass('hidden');
           $stickyText.addClass('animated slideInDown')
         }
     } else {
        // upscroll code
        if( $page.height() > (lastScrollTop) ) {
          $nav.removeClass('filled-in');
          $stickyText.addClass('hidden');
        }
     }

     lastScrollTop = st;
  });


});
