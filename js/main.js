$(document).ready(function(){
  $(".items").slick({
    centerMode: true,
    centerPadding: '30px',
    dots: true,
    arrows: false
  });

  changeOrderHref();
  todaysMenuHomePage();

  // Mixpanel Events
  pageView();
  // trackOrderButton();
  aboutProduct();
  todaysMenuProduct();

  sizeButtonClick();
  resetCurrentSelectedSize();
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

function todaysMenuHomePage() {
  $(".todays-menu-homepage").on("click", function() {
    scrollToOrderButton();
  });
}

function scrollToOrderButton() {
  $(window).scrollTo('.items', {duration: 500});
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

var orderProps;

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
      "Order Shake",
      {
        "Size" : orderProps.size,
        "Price" : orderProps.price,
        "Name" : orderProps.name
      }
    );
  });
}
