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
      scrollingInterval = setInterval(scrollingStuff, 1),
      lastScrollTop = 0;

  function scrollingStuff() {
    var st = $(this).scrollTop();

     if ( st > lastScrollTop ){
         // downscroll code

         if( $page.height() < (lastScrollTop + 100) ) {
           $button.addClass('new-design-sticky');
         }
     } else {
        // upscroll code
        if( $page.height() > (lastScrollTop + 100) ) {
          $button.removeClass('new-design-sticky');
        }
     }

     lastScrollTop = st;
  }

  window.onbeforeunload = function(e) {
    clearInterval(scrollingInterval);
  };
});
