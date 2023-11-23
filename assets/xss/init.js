$(document).ready(function() {
  //SVG
  svg4everybody();


  //SIDENAV
  $('.header__nav').click(function() {
    $('body').addClass('sidenav-on');
  });
  $('.sidenav__close').click(function() {
    $('body').removeClass('sidenav-on');
  });


  //COLLAPSE
  $('.collapse-trigger').click(function() {
    $(this).toggleClass('on');
    $(this).siblings('.collapse').slideToggle().toggleClass('on');
  });

  //COLLAPSE ID
  $('.collapse-id').click(function() {
    var target = $(this).data('id');
    var gotoID = $(this).data('goto');

    $(this).toggleClass('on');
    $(target).slideToggle().toggleClass('on');

    if ($(this).hasClass('on')) {
    } else {
      $('html, body').animate({
          scrollTop: $( gotoID ).offset().top - 60
      }, 1000);
      return false;
    }
  });

  //CHANGE TEXT ON CLICK
  $(".more-less").click(function () {
    $(this).text(function(i, text){
      return text === "SEE MORE" ? "SEE LESS" : "SEE MORE";
    })
  });


  //HEADER SCROLL
  headerScroll = function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      $('body').addClass('body-scroll');
    } else {
      $('body').removeClass("body-scroll");
    }
  }
  
  $(document).ready(function() {
    headerScroll()

    $(window).scroll(function() {
      headerScroll()
    });
  });


  //CAROUSEL
  $('.carousel').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    fade: true,
    draggable: false,
    infinite: true,
    pauseOnHover: false
  });


  //STEPS
  $('.process__link').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    return false;
  });


  //SCROLL TO ID
  $(".scroll-trigger").click(function() {
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60
    }, 500);
    return false;
  });


  //BACK TO TOP
  $(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
    return false;
  });


  //PROCESS BUBBLE
  $(document).mouseup(function(e) {
      var container = $('.process__link');

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
        $('.process__link').removeClass('active');
      }
  });

  
});
