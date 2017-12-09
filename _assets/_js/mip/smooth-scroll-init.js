window.mip = window.mip || {};
var mip = window.mip;
var SmoothScroll = require('smooth-scroll');

(function($) {
  // Remove html root's 'no-js' class
  var html = document.querySelector('html');
  $.removeClass(html, 'no-js');
  
  // Initialize smooth scrolling
  new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)

    // Speed & Easing
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutCubic', // Easing pattern to use
    customEasing: function (time) {}, // Function. Custom easing pattern

    // Callback API
    before: function () {}, // Callback to run before scroll
    after: function () {} // Callback to run after scroll
  });
})(mip);

