// Global Javascript Initialization
var Global = function() {
  'use strict';

  // Bootstra Components
  var handleBootstrapComponents = function() {
    // Bootstrap Carousel
    $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
    });
  };

    // handle group element heights
  // var handleEqualHeight = function() {
  //  $('[data-auto-height]').each(function() {
  //     var parent = $(this);
  //     var items = $('[data-height]', parent);
  //     var height = 0;
  //     var mode = parent.attr('data-mode');
  //     var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);
  //
  //     items.each(function() {
  //       if ($(this).attr('data-height') == "height") {
  //         $(this).css('height', '');
  //       } else {
  //         $(this).css('min-height', '');
  //       }
  //
  //       var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
  //       if (height_ > height) {
  //         height = height_;
  //       }
  //     });
  //
  //     height = height + offset;
  //
  //     items.each(function() {
  //       if ($(this).attr('data-height') == "height") {
  //         $(this).css('height', height);
  //       } else {
  //         $(this).css('min-height', height);
  //       }
  //     });
  //
  //     if(parent.attr('data-related')) {
  //       $(parent.attr('data-related')).css('height', parent.height());
  //     }
  //  });
  // }

  var popup = function () {
      $('button').magnificPopup({
        items: {
            src: '#popup',
            type: 'inline'
        }
      });
  };

  return {
    init: function() {
      handleBootstrapComponents(); // initial setup for Bootstrap Components
      handleEqualHeight(); // initial setup for Equal Height
      popup();
    }
  }
}();

$(document).ready(function() {
  Global.init();
});
