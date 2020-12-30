(function ($) {
    'use strict';

    /**
     * @param $scope The widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetBlogSliderHandler = function ($scope, $) {
        var slide      = $scope.find('.js-blog-slider'),
            showdot = slide.attr('dot'),
            showarrows = slide.attr('arrow');

        if( slide.attr('dot')  === 'yes' ){
            showdot = true;
        }else {
            showdot = false;
        }

        if( slide.attr('arrow') === 'yes' ){
            showarrows = true;
        }else {
            showarrows = false;
        }

        $(slide).slick({
            dots: showdot,
            arrows: showarrows,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendDots: $scope.find(".blog-slider-dots"),
            customPaging: function (slider, i) {
                return '<span class="dots-bullet"></span>';
            },
            responsive: [{
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
              }, {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
            }]
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/leadcon-blog-slider.default', WidgetBlogSliderHandler);
    });
})(jQuery);
