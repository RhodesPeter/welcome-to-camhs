(function ($) {
  "use strict";

  window.updateOutput = function (figure) {
    var max = $(".slider__range").attr("max");
    var vertical;

    $(".slider__banana").html(figure);
    vertical = figure / max * ($(".eating__slider").height() - $(".slider__reel").height()) + "px";
    $(".slider__banana, .slider__reel").css({ bottom: vertical });
  }

  updateOutput($(".slider__range").val());
})(jQuery);

// http://thecodeplayer.com/walkthrough/spicing-up-the-html5-range-slider-input
