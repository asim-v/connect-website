(function ($) {
    'use strict';
	/**
	 * @param $scope The widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */
	var WidgetFurnitureSlider = function ($scope, $) {
		var	furniture = $scope.find('.furniture-slider-js');

		$(furniture).slick({
			slidesToShow: 3,
			infinite: true,
			arrows: true,
			dots: true,
			centerMode: true,
            centerPadding: '0px',
            cssEase: 'linear',
            autoplay: true,
  			autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
              }, {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
            }]
		});
	};
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/leadcon-furniture-slider.default', WidgetFurnitureSlider);
	});
})(jQuery);