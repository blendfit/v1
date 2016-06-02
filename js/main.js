$(document).ready(function(){
  $(".slider").slick({
    dots: true,
    arrows: true
  });
  openTextBox();
  // Mixpanel Events
  pageView();
  textButtonClick()
});

function openTextBox() {
  $(".number").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  });
}

// Mixpanel Events
function pageView() {
  mixpanel.track("Page Viewed");
}

function textButtonClick() {
  $("number").on("click", function() {
    mixpanel.track("Clicked Text Button");
  });
}