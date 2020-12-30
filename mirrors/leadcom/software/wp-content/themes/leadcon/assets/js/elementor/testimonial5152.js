(function ($) {
    'use strict';

	/**
	 * @param $scope The widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */
	var WidgetTestimonialHandler = function ($scope, $) {
        var type   = $scope.find('.testimonial-wrapper').attr('data-type'),
            slide      = $scope.find('.js-testimonial'),
            $prevArrow , $nextArrow, $dot, $vertical,
            show = $scope.find('.testimonial-wrapper').attr('data-show') || 3,
            showtablet = $scope.find('.testimonial-wrapper').attr('data-show-tablet') || show,
            showmobile = $scope.find('.testimonial-wrapper').attr('data-show-mobile') || show;

		if ( type === 'arrow' ) {
			$prevArrow =  $scope.find('.testimonial-prev-arrow');
			$nextArrow =  $scope.find('.testimonial-next-arrow');
			$dot = false;

		}else {
			$prevArrow = $('');
			$nextArrow = $('');
			$dot = true;
		}
        if ( type === 'vertical' ) {
            $vertical = true;
        } else {
            $vertical = false;
        }

		$(slide).slick({
            centerMode: true,
            centerPadding: '0px',
            vertical: $vertical,
            verticalSwiping : $vertical,
			dots: $dot,
            slidesToShow: show,
			infinite: true,
            speed: 1000,
			adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
			prevArrow: $prevArrow,
			nextArrow: $nextArrow,
			appendDots: $scope.find(".testimonial-slider-dots"),
			customPaging: function (slider, i) {
				return '<span class="dots-bullet"></span>';
			},
            responsive: [
                {
                  breakpoint: 1622,
                  settings: {
                    slidesToShow: show,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: showtablet,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: showmobile,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                },
            ]
		});
	};

	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/leadcon-testimonial.default', WidgetTestimonialHandler);
	});
})(jQuery);
