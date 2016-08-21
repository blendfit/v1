$( document ).ready(function() {
  emailFormSubmition();
});

function emailFormSubmition() {
  $('.email-subscribe').on('submit', function(e) {
    e.preventDefault();

    var url = 'http://blendfit.us14.list-manage.com/subscribe/post-json?u=f9f77b2e0d0d4f802c4e90209&id=549bf7f09e';

    $.ajax({
      type: "GET",
      url: url,
      data:  $('.email-subscribe').serialize(),
      cache: false,
      dataType: 'jsonp',
      jsonp: 'c',
      contentType: "application/json; charset=utf-8",
    }).done( function(stuff) {
      console.log(stuff.msg);
    });
  });
}
