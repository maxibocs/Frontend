(function($){
	$.fn.carousel = function(options) {

		var carouselWrap = $('.carousel_hider');
		var rightArrow = $('.carousel_arrow_right');
		var leftArrow = $('.carousel_arrow_left');
		var blockWidth = $('.carousel_item').outerWidth();
		var newLeftPos = carouselWrap.position().left - blockWidth;

		rightArrow.click(function(){
			if(!carouselWrap.is(':animated')) {

				carouselWrap.animate({left: newLeftPos}, 500, function(){
					carouselWrap
						.find('.carousel_item:first')
						.appendTo(carouselWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		leftArrow.click(function(){
			if(!carouselWrap.is(':animated')) {

				carouselWrap
					.css({'left': newLeftPos})
					.find('.carousel_item:last')
					.prependTo(carouselWrap)
					.parent()
					.animate({left: 0}, 500);
			}
		});

		setInterval(function(){
			if(!carouselWrap.is(':animated')){
				carouselWrap.animate({left: newLeftPos}, 500, function(){
					carouselWrap
						.find('.carousel_item:first')
						.appendTo(carouselWrap)
						.parent()
						.css({'left': 0});
				});
			}
			}, 2000);


	};
})(jQuery);
;$(function () {

  $('.carousel').carousel();

});
