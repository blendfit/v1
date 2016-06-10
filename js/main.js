$(document).ready(function(){
  $(".items").slick({
    centerMode: true,
    centerPadding: '30px',
    dots: true,
    arrows: false
  });

  changeOrderHref();

  openTextBox();
  // Mixpanel Events
  pageView();
  textButtonClick();

  sizeButtonClick();
});

function hrefText() {
  var agent = navigator.userAgent.toLowerCase();
  if ( agent.search('iphone') > 0 ) {
    // if iPhone
    return "sms:1-347-583-1054&body="
  } else {
    // if Android
    return "sms:1-347-583-1054?body="
  }
}

function changeOrderHref() {
  $(".order-button").find("a").attr('href', hrefText() + encodeURI("Order Small Shredder") );
}

function changeOrderButton(button) {
  var text = $(button).data().optionText;
  var $button = $(".order-button").find("a");
  $button.attr('href', hrefText() + encodeURI(text) );
  $button.text(text.toUpperCase());

  // shake button
  animateButton($button.parent());
}

function animateButton($button) {
  $button.removeClass('animated shake');
  window.setTimeout(function() {
    $button.addClass('animated shake');
  }, 0);
}

function deselectButton(button) {
  $(button).parent().parent().children().find('.selected').removeClass("selected");
}

function selectButton(button) {
  $(button).addClass("selected");
}

function sizeButtonClick() {
  $(".price-button").on("click", function() {
    if ( $(this).attr("class") !== "price-button selected" ) {
      deselectButton(this);
      selectButton(this);
      changeOrderButton(this);
    }
  });
}

function openTextBox() {
  $(".order-button").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  });
}

// Mixpanel Events
function pageView() {
  mixpanel.track("Page Viewed");
}

function textButtonClick() {
  $(".order-button").on("click", function() {
    mixpanel.track("Clicked Text Button");
  });
}
