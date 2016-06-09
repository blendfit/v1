$(document).ready(function(){
  $(".center").slick({
    centerMode: true,
    centerPadding: '50px',
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
  $(".order-button").find("a").attr('href', hrefText() + "ORDER SMALL SHREDDER");
}

function changeCallButton(button) {
  var text = $(button).data().optionText;
  var $button = $(".order-button").find("a");
  $button.attr('href', hrefText() + text);
  $button.text(text.toUpperCase());
}

function deselectButton() {
  $(".price-button.selected").removeClass("selected");
}

function selectButton(button) {
  $(button).addClass("selected");
}

function sizeButtonClick() {
  $(".price-button").on("click", function() {
    if ( $(this).attr("class") !== "price-button selected" ) {
      deselectButton();
      selectButton(this);
      changeCallButton(this);
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
