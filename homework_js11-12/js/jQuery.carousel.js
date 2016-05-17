(function ($) {

  $.fn.carousel = function () {

    var leftArrow = $('.carousel_arrow_left');
    var rightArrow = $('.carousel_arrow_right');
    var elementsList = $('.carousel_list');

    var pixelsOffset = 159;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

    leftArrow.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 159;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });

    rightArrow.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 159;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });

    return this;
  };

})(jQuery);
