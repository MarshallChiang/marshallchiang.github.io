/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  // Magnific popup calls
  $('.magnific-popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    // tLoading: 'Loading image #%curr%...',
    // mainClass: 'mfp-img-mobile',
    // gallery: {
    //   enabled: true,
    //   navigateByImgClick: true,
    //   preload: [0, 1]
    // },
    // image: {
    //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    // }
  });
  // Detect device
  if (navigator.maxTouchPoints > 1) { 
    $('.portfolio-box-caption').css('opacity', 1)
    $('.portfolio-box-caption').css('background-color', 'rgba(244, 98, 58, 0.7)')
    $('')
  }
})(jQuery); // End of use strict

function renderModalContext(e){
  $('#ModalLabel').text(e)
  // var project = $.getJSON('')[e]['paragraph']
  var project = paragraph.responseJSON[e];
  $('#scroll-side-list').empty();
  $('#scroll-body').empty();
  var index = 1;
  for (const [k, v] of  Object.entries(project)) {
    $('<a class="list-group-item list-group-item-action border-0" href="#list-item-'+ index +'">' + k + '</a>').appendTo('#scroll-side-list');
    $('<h5 id="list-item-'+ index + '">' + k + '</h5>').appendTo('#scroll-body');
    $('<p class="magnific-popup">'+ v + '</p>').appendTo('#scroll-body');
    index += 1
  }
}
$(".modal-body").on("swipe",function(){
  $(".close").click()
});

var paragraph = jQuery.getJSON('https://static-github.s3-ap-northeast-1.amazonaws.com/paragraph.json')