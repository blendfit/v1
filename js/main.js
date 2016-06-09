$(document).ready(function(){
  $(".center").slick({
    centerMode: true,
    centerPadding: '50px',
    dots: true,
    arrows: false
  });
  openTextBox();
  // Mixpanel Events
  pageView();
  textButtonClick();

  sizeButtonClick();
});

function changeCallButton(button) {
  var text = $(button).data().optionText;
  var $button = $(".order-button").children();
  $button.attr('href', "sms:1-347-583-1054?body=" + text);
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
