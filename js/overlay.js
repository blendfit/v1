$(document).ready(function(){
  setupOpenOverlay();
  setupCloseOverlay();
  setupScheduleLaterModule();
  setupBackButton();

  setupOrderNow();
  setupOrderLater();
});

function showElement($element) {
  $element.removeClass('hidden');
}

function hideElement($element) {
  $element.addClass('hidden');
}

function setupOpenOverlay() {
  $(".order-button").click(function(e) {
    e.preventDefault();

    showElement( $('.overlay-container') );
    showElement( $('.overlay-order-options') );
    showElement( $('.overlay-close-button') );
  });
}

function setupCloseOverlay() {
  $('.overlay-close-button').click(function() {
    hideElement( $('.overlay-container') );
  });
}

function setupScheduleLaterModule() {
  $('.order-later').click(function() {
    hideElement( $('.overlay-close-button') );
    hideElement( $('.overlay-order-options') );

    showElement( $('.schedule-later-module-container') );
    showElement( $('.overlay-back-button ') );

    window.setTimeout(function() {
      $('.time-picker').trigger( "focus" );
    }, 500);
  });
}

function setupBackButton() {
  $('.overlay-back-button ').click(function() {
    hideElement( $('.schedule-later-module-container') );
    hideElement( $('.overlay-back-button ') );

    showElement( $('.overlay-close-button') );
    showElement( $('.overlay-order-options') );
  });
}

function setupOrderNow() {
  $(".order-now").click(function(){
    window.location =$('.order-button').find("a").attr("href");
    return false;
  });
}

function setupOrderLater() {
  $(".schedule-later-module-button").click(function(){
    var time = $(".time-picker").val();
    var windowLocation = $('.order-button').find("a").attr("href") + encodeURI(" today at " + time);
    window.location = windowLocation;
    return false;
  });
}
