(function ($) {

  $.fn.carousel = function (options) {

    var defaults = {
      slideSpeed: 500,
      widthElementParam: 100
    };

    var settings = $.extend(defaults, options);

    var leftArrow = $('.carousel_arrow_left');
    var rightArrow = $('.carousel_arrow_right');
    var elementsList = $('.carousel_list');
    var carouselCount = $('.carousel_list').find('li').length;


    var slide = 0;
    var widthElement = defaults.widthElementParam;
    var maxPosition = - ((1 + carouselCount - 4) * widthElement);
    var minPosition = 0;
    var maxPositionLeft = - ((carouselCount - 4) * widthElement);

    rightArrow.on('click', function(){
      slide -= widthElement * defaults.slideCount;
      if (slide <= maxPosition) {
        slide = 0;
      }
      elementsList.animate({ left : slide + "px"}, settings.slideSpeed);
    });

    leftArrow.on('click', function(){
      slide += widthElement * defaults.slideCount;
      if (slide > minPosition) {
        slide = maxPositionLeft;
      }
      elementsList.animate({ left : slide + "px"}, settings.slideSpeed);
    });

    return this;

  };

})(jQuery);
