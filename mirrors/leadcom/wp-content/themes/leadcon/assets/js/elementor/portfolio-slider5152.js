(function ($) {
    'use strict';

    /**
     * @param $scope The widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetPortfolioSliderHandler = function ($scope, $) {
        var slide      = $scope.find('.portfolio-slider_item'),
            $prevArrow =  $scope.find('.portfolio-prev'),
            $nextArrow =  $scope.find('.portfolio-next');

        $(slide).slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $prevArrow,
            nextArrow: $nextArrow,
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/leadcon-portfolio-slider.default', WidgetPortfolioSliderHandler);
    });
})(jQuery);
