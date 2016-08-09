$(document).ready(function(){
  setupOpenOverlay();
  setupCloseOverlay();
  setupScheduleLaterModule();
  setupBackButton();

  setupOrderNow();
  setupOrderLater();

  fillInDatePicker();

  setupTimePicker();
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

    $('.time-picker').mobiscroll('show');

    // $('.mbsc-fr-persp').height('500')
  });
}

function setupBackButton() {
  $('.overlay-back-button ').click(function() {
    hideElement( $('.schedule-later-module-container') );
    hideElement( $('.overlay-back-button ') );

    showElement( $('.overlay-close-button') );
    showElement( $('.overlay-order-options') );

    $('.time-picker').mobiscroll('hide');
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

function fillInDatePicker() {
  var minTime = new Date();
  minTime.setMinutes(Math.ceil(minTime.getMinutes()/5) * 5 + 15)
  // minTime.setMinutes(minTime.getMinutes() + 15);
  var formatedTime = minTime.toLocaleTimeString().replace(/:\d+ /, ' ');
  $('.time-picker').val( formatedTime );
}

function setupTimePicker() {
  var minTime = new Date();
  minTime.setMinutes(Math.ceil(minTime.getMinutes()/5) * 5 + 15)
  // minTime.setMinutes(minTime.getMinutes() + 15);
  var maxTime = new Date(new Date().setHours(23, 00, 0, 0));

  $('.time-picker').mobiscroll().time({
     theme: 'mobiscroll',
     display: 'bottom',
     headerText: false,
     maxWidth: 90,
     showOnFocus: true,
     min: minTime,
     max: maxTime,
     onSet: function (event, inst) {
       showElement( $('.schedule-later-module-button') );
     },
     buttons: ['set'],
     steps: {
       minute: 5
     },
     onSet: function(event, inst) {
       mixpanel.track('Set Time', {
         "Time Set" : event.valueText
       });
     }
 });
}
