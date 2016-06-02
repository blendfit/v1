$(function() {
  pageView();
  textButtonClick()
});

function pageView() {
  mixpanel.track("Page Viewed");
}

function textButtonClick() {
  $("number").on("click", function() {
    mixpanel.track("Clicked Text Button");
  });
}

