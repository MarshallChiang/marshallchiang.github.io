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
  }
})(jQuery); // End of use strict

function renderModalContext(e){
  $('#ModalLabel').text(e)
  // var project = $.getJSON('')[e]['paragraph']
  var project = projects[e];
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

projects = {
  "GroupSchedule" : {
    "Design Context" : "With the growth of business, the amount of manual setting in the system for marketing campaign has been significantly increased and became even more complicated. Therefore, high possibility of error might be made in the moment since the system yet to support schedule and automation.",
    "Pain Point" : "<ul><li>Since the campaign usually start at 00:00 and couldn't be scheduled, staff needs to stay up late to configure and implement the setting.</li><li>Even the first pain point has been completed, still need to revise the setting back when the campaign is over.</li><li>It's quite common for merchant to stack multiple campaigns, so it's really difficult to remember the context of each of them and activate on time.</li></ul>",
    "Flow/UI" : "<a class='fab fa-github mr-3'></a><a href='https://github.com/MarshallChiang/GroupSchedule' target='_blank'><u>API document of this repository</u></a><h6 class='m-3'>Structure Visualized</h6><img class='rounded img-responsive' style='width:100%' src='./assets/img/portfolio/fullsize/GroupSchedule_image_1.jpg'></img><h6 class='m-3'>Flow</h6><img class='rounded img-responsive' style='width:100%' src='./assets/img/portfolio/fullsize/GroupSchedule_image_2.png'><img>",
    "Result" : "<ul><li>Reduce time spending on setting on time manually by processing over 10k tasks in queue automatically.</li><li>Improve customer experience by giving precise data of each marketing campaign. </li><li>Partner start to conduct complicated campaign with ShopBack without concern of manpower and human-error.</li></ul>"
  },
  "ProxyGate" : {
    "Design Context" : "Since the e-commerce industry in Taiwan is quite advanced, many companies are building their own portal to work with partners, hence there's no standard to consolidate API requests from different spec. As a partner, we need a scalable and quick solution to handle this case.",
    "Pain Point" : "<ul><li>Current endpoint only support GET request with parameters, if the integration requirement is POST with JSON string body, we need to build a special logic or nothing we can do for it.</li><li>It's time consuming to build customized function, which might have negative impact on business side.</li></ul>",
    "Flow/UI" : "<a class='fab fa-github mr-3'></a><a href='https://github.com/MarshallChiang/GroupSchedule' target='_blank'><u>API document of this repository</u></a><h6 class='m-3'>Structure Visualized</h6><img class='img-responsive' style='width:100%' src='./assets/img/portfolio/fullsize/GroupSchedule_image_1.jpg'></img><h6 class='m-3'>Flow</h6><img class='img-responsive' style='width:100%' src='./assets/img/portfolio/fullsize/GroupSchedule_image_2.png'><img>",
    "Result" : "<ul><li>Reduce time spending on setting on time manually by processing over 10k tasks in queue automatically.</li><li>Improve customer experience by giving precise data of each marketing campaign. </li><li>Partner start to conduct complicated campaign with ShopBack without concern of manpower and human-error.</li></ul>"
  }
}