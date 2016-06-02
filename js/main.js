$(document).ready(function(){
  $(".slider").slick({
    dots: true,
    arrows: true
  });
  openTextBox();
  mixpanel.track("Video play");
});

function openTextBox() {
  $(".number").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  });
}