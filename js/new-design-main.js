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

  // $(".new-design-landing-page").css("height", $(window).height() + "px");

  var $stickyButton = $(".spark-learn-more-sticky-button"),
      $button = $(".spark-learn-more-button"),
      $page = $(".new-design-landing-page"),
      lastScrollTop = 0;

  $(window).on("scroll", function(e) {
    var st = $(this).scrollTop();
     if ( st > lastScrollTop ){
         // downscroll code

         if( $page.height() < (lastScrollTop + 100) ) {
           $button.addClass('hidden');
           $stickyButton.removeClass('hidden');
         }
     } else {
        // upscroll code
        if( $page.height() > (lastScrollTop + 100) ) {
          $button.removeClass('hidden');
          $stickyButton.addClass('hidden');
        }
     }

     lastScrollTop = st;
  });


});
