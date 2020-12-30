'use strict';

//Isotope Nav Filter
function leadcon_portfolio_isotopenav() {

    var $container = jQuery('#gallery-isotope');
    jQuery('.category-isotope a').on('click', function() {
        jQuery('.category-isotope .active').removeClass('active');
        jQuery(this).addClass('active');

        var selector = jQuery(this).attr('data-filter');
            $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
}

//Isotope

function leadcon_portfolio_isotope() {

    var $container = jQuery('#gallery-isotope'),
        $colum = jQuery('.leadcon-portfolio-widget').attr('data-colum');

        $container.isotope( {
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
                layoutMode: 'masonry',
            }
        } );

    jQuery(window).smartresize(function() {
        $container.isotope({
            itemSelector: '.isotope-item',
            columnWidth: '.col-sm-3'
        });
    });
}

jQuery( document ).ready(function() {
    // For frontend.

    jQuery( window ).on( 'load', function() {
        leadcon_portfolio_isotopenav();
        leadcon_portfolio_isotope();
    } );

    if ( undefined !== window.elementorFrontend && undefined !== window.elementorFrontend.hooks ) {

        window.elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function() {
            leadcon_portfolio_isotopenav();
            leadcon_portfolio_isotope();
        } );
    }
} );