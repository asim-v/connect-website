/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
'use strict';
// Function Mega menu.

var leadcon_mega_menu = function () {
    if (window.width < 1300) {
      return;
    }

    var mega = document.querySelectorAll('#primary-menu .menu-item-has-children'),
        mega1 = document.querySelectorAll('#sticky-navigation .menu-item-has-children');
    if (!mega.length) {
        return;
    }
    if (!mega1.length) {
        return;
    }


    var menu_layouts = document.querySelectorAll('#primary-menu .sub-menu .sub-menu'),
        menu_layouts1 = document.querySelectorAll('#sticky-navigation .sub-menu .sub-menu');
    if (!menu_layouts.length) {
      return;
    }
    if (!menu_layouts1.length) {
      return;
    }

    menu_layouts.forEach(function (element) {
        var _rect = element.getBoundingClientRect(),
            _ww = document.body.clientWidth,
            _right = _ww - _rect.right;

        if (_right < 0) {
          element.classList.add('menu-in-right');
        } else {
          element.classList.remove('menu-in-right');
        }

    });
    menu_layouts1.forEach(function (element) {
        var _rect = element.getBoundingClientRect(),
            _ww = document.body.clientWidth,
            _right = _ww - _rect.right;

        if (_right < 0) {
          element.classList.add('menu-in-right');
        } else {
          element.classList.remove('menu-in-right');
        }

    });
};


jQuery(function($) {
    $(window).load(function() {
        leadcon_mega_menu();
    });
    $( window ).resize(function() {
        leadcon_mega_menu();
    });
});

// Menu .arrow-icon
function nav() {
    var e = document.getElementsByClassName("toggle-sidebar-menu-btn");
    if (e)
    for (var n = 0, s = e.length; n < s; n++) e[n].addEventListener("click", function() {
        document.documentElement.classList.add("sidebar-menu-open"), closeAll()
    })
}

function sidebarMenu(e) {
    var n = 0 < arguments.length && void 0 !== e ? jQuery(e) : jQuery("#primary-menu, #sticky-menu-wrapper, #vetical-menu-wrapper"),
        s = n.find(".menu-item-has-children>a");
    s.length && s.append('<span class="arrow-icon"></span>');
    var a = n.find(".arrow-icon");

    jQuery(a).on("click", function(e) {
        e.preventDefault();
        var tn = jQuery(this),
            active = tn.find(".arrow-icon");

            (active).toggleClass('active');
    })
}
document.addEventListener("DOMContentLoaded", function() {
    nav(), sidebarMenu()
});

/**
 * Off-canvas menu
 */
(function ($) {
    var offCanvasToggle = $('.js-canvas-toggle');
    var offCanvas = $('.js-canvas');
    var closeOffCanvasBtn = $('.js-close-off-canvas');


    var toggleOffCanvas = function (e) {
        offCanvas.attr('tabindex', '0');
        e.preventDefault();

        var _this = $(e.currentTarget);

        offCanvas.toggleClass('is-opened');
        offCanvas.attr('aria-hidden', !offCanvas.hasClass('is-opened'));
        _this.attr('aria-expanded', offCanvas.hasClass('is-opened'));
    };

    var closeOffCanvas = function () {
        offCanvas.removeClass('is-opened');
        offCanvasToggle.attr('aria-expanded', 'false');
    };

    // Toggle off-canvas
    offCanvasToggle.on('click', toggleOffCanvas);

    $(closeOffCanvasBtn).on('click', closeOffCanvas);



    // Close off-canvas when hit `ESC` button
    $(document).on('keyup', function (e) {
        if (e.keyCode === 27) {
            closeOffCanvas();
        }
    });

    $('.sub-menu .menu-item-has-children').on('hover', function () {

        var width = $(this).offset().left,
            windowWidth = $(window).width(),
            range = windowWidth - width;

        if ( range < 400 ) {
            $(this).find('.sub-menu').css({ "left" : 'auto', "top": "100%", "right": "50%" });
        }
    });
})(jQuery);

( function( $ ) {
    var sub = $(".menu-item-has-children"),
        sub2 = sub.find(">a");

        sub2.on( 'click', function(e){
            var n = $(this);
            n.parent(".menu-item-has-children").find(">.arrow-icon").toggleClass("active");
        });

} (jQuery) );

/* Pull Menu toggle header 2 */
( function( $ ) {
    var pull   = $('#pull'),
        toggle = $( '#toggle' ),
        menu   = $('.menu-menu-1-container');

    pull.on('click', function( e ) {
        e.preventDefault();
        toggle.toggleClass( 'on' );
    });

})( jQuery );