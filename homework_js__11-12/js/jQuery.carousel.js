(function ($) {

  $.fn.carousel = function (options) {

    var leftArrow = $('.carousel_arrow_left');
    var rightArrow = $('.carousel_arrow_right');
    var carusel = $(this).parents('.carousel');

    rightArrow.on('click', function(){
	    rightCarousel(carusel);
	    return false;
    });

    leftArrow.on('click', function(){
	    leftCarousel(carusel);
	    return false;
    });

    function leftCarousel(carusel){
      var blockWidth = $(carusel).find('.carousel_item').outerWidth();
      $(carusel).find(".carousel_list .carousel_item").eq(-1).clone().prependTo($(carusel).find(".carousel_list"));
      $(carusel).find(".carousel_list").css({"left": "-" + blockWidth + "px"});
      $(carusel).find(".carousel_list .carousel_item").eq(-1).remove();
      $(carusel).find(".carousel_list").animate({left: "0px"}, 500);
    }

    function rightCarousel(carusel){
      var blockWidth = $(carusel).find('.carousel_item').outerWidth();
      $(carusel).find(".carousel_list").animate({left: "-" + blockWidth + "px"}, 500, function(){
	    $(carusel).find(".carousel_list .carousel_item").eq(0).clone().appendTo($(carusel).find(".carousel_list"));
      $(carusel).find(".carousel_list .carousel_item").eq(0).remove();
      $(carusel).find(".carousel_list").css({"left": "0px"});
    });
    }


    $(function() {
    	autoRight('.carousel:first');
    });

    function autoRight(carusel){
    	setInterval(function(){
    			rightCarousel(carusel);
    	}, 2000);
    }

  };

})(jQuery);
