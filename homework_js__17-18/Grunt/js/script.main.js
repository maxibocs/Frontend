(function ($) {

  $.fn.carousel = function (options) {

    var leftArrow = $('.carousel_arrow_left');
    var rightArrow = $('.carousel_arrow_right');


    rightArrow.on('click', function(){
	    var carusel = $(this).parents('.carousel');
	    rightCarousel(carusel);
	    return false;
    });

    leftArrow.on('click', function(){
	    var carusel = $(this).parents('.carousel');
	    leftCarousel(carusel);
	    return false;
    });

    function leftCarousel(carusel){
      var block_width = $(carusel).find('.carousel_item').outerWidth();
      $(carusel).find(".carousel_list .carousel_item").eq(-1).clone().prependTo($(carusel).find(".carousel_list"));
      $(carusel).find(".carousel_list").css({"left": "-" + block_width + "px"});
      $(carusel).find(".carousel_list .carousel_item").eq(-1).remove();
      $(carusel).find(".carousel_list").animate({left: "0px"}, 500);

    }
    function rightCarousel(carusel){
      var block_width = $(carusel).find('.carousel_item').outerWidth();
      $(carusel).find(".carousel_list").animate({left: "-" + block_width + "px"}, 500, function(){
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
    		if (!$(carusel).is('.hover'))
    			rightCarousel(carusel);
    	}, 2000);
    }

    $(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
    $(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})
  };

})(jQuery);
;$(function () {

  $('.carousel').carousel();

});
