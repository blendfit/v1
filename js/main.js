$(document).ready(function(){
  $(".items").slick({
    centerMode: true,
    centerPadding: '30px',
    dots: true,
    arrows: false
  });

  changeOrderHref();
  tempDisplayEvent();

  // Mixpanel Events
  pageView();
  trackOrderButton();
  aboutProduct();
  todaysMenuProduct();;
  trackOrderButton();
  trackOrderNow();
  trackOrderScheduled();
  trackCloseButton();
  trackBackButton();
  timePicker();
  scheduleOrder();

  sizeButtonClick();
  resetCurrentSelectedSize();
});


function timeNow() {
  var timeNow = new Date(Date.now());
  timeNow = timeNow.toLocaleTimeString();
  return timeNow
}
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
  var text = $(".price-button.initial").data().optionText;
  $(".order-button").find("a").attr('href', hrefText() + encodeURI(text) );
}

function changeOrderButton(button) {
  var text = $(button).data().optionText;
  var $button = $(".order-button").find("a");
  $button.attr('href', hrefText() + encodeURI(text) );
  $button.text(text.toUpperCase());
  // shake button
  animateButton($button.parent());
  // scroll to order button
  scrollToOrderButton();
}

function tempDisplayEvent() {
  $(".temp-display").on("click", function() {
    scrollToOrderButton();
    mixpanel.track("New Feature Banner", {
      'Time': timeNow()
    });
  });
}

function scrollToOrderButton() {
  $(window).scrollTo('.item-title', {duration: 500});
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

var orderProps = { size: 'small', price: '7.50', name: 'slimmer'};

function sizeButtonClick() {
  $(".price-button").on("click", function() {
    orderProps = orderPropsMixpanel($(this));
    if ( $(this).attr("class") !== "price-button selected" ) {
      deselectButton(this);
      selectButton(this);
      changeOrderButton(this);
    }
  });
}

function orderPropsMixpanel(props) {
  var name = props.closest(".item").find(".item-title").text();
  name = name.slice(3).toLowerCase();
  var size = props.find(".price-button-size").text();
  var price = props.find(".price-button-amount").text();
  var props = {
    size: size,
    price: price,
    name: name
  };
  return props;
}

function resetCurrentSelectedSize() {
  $('.items').on('swipe', function(event, slick, direction) {
    $button = $(this).find('.slick-current').find('.selected')
    changeOrderButton($button);
  });
}

function aboutProduct() {
  $(".about-product-btn").on("click", function() {
    mixpanel.track("About Product");
  });
}

function todaysMenuProduct() {
  $(".todays-menu-product-page").on("click", function() {
    mixpanel.track("Today's Menu Product");
  });
}

// Mixpanel Events
function pageView() {
  mixpanel.track("Page View")
  mixpanel.time_event("Order Shake");
}

function trackOrderButton() {
  $(".order-button").on("click", function() {
    mixpanel.track(
      "Order Button",
      {
        "Size" : orderProps.size,
        "Price" : orderProps.price,
        "Name" : orderProps.name,
        "Time" : timeNow()
      }
    );
  });
}

function trackOrderNow() {
  $('.order-now').on('click', function() {
    mixpanel.track('Instant Order', {
      "Time" : timeNow()
    });
  });
}

function trackOrderScheduled() {
  $('.order-later').on('click', function() {
    mixpanel.track('Setup Scheduled Order', {
      "Time" : timeNow()
    });
  });
}

function scheduleOrder() {
  $('.schedule-later-module-button').on('click', function() {
    mixpanel.track('Schedule Order', {
      "Time" : timeNow()
    });
  });
}

function trackCloseButton() {
  $('.close-button').on('click', function() {
    mixpanel.track('Close Options Overlay', {
      "Time" : timeNow()
    });
  });
}

function trackBackButton() {
  $('.overlay-back-button').on('click', function() {
    mixpanel.track('Back To Options Overlay', {
      "Time" : timeNow()
    });
  })
}

function timePicker() {
  $('.time-picker').on('click', function() {
    mixpanel.track('Time Picker', {
      "Time" : timeNow()
    });
  });
}
