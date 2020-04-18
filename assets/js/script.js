$(document).ready(function() {

  $('.insights_cards, .events_cards').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('.header__tagline').click(function() {
    if (!$(this).hasClass('play')) {
      $('.header__branding picture source').attr('srcset', '/assets/images/logo-mobile.png');
      $(this).addClass('play');

      var transparentBackground = "<div class='transparent-background'></div>";
      $("body").append(transparentBackground);
      
    } else  {
      $('.header__branding picture source').attr('srcset', '/assets/images/invesco-logo.jpg');
      $(this).removeClass('play');
      $('.transparent-background').remove();
    }

    $('body').toggleClass('active-menu');
    $('.header__nav').slideToggle(100);
  });
});