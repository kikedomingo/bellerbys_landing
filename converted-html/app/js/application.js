$(document).ready(function() {

    $("#togglenav").click(function () {
        $('#nav').toggleClass('appear');
    });


    var header = $("header");

    
    $(window).scroll(function() { KikeParallax() });
    

    $('a').smoothScroll({speed: 850, offset: -75});


    function KikeParallax() {
        if ($("#togglenav").is(":hidden")) {
            scrollPos = $(this).scrollTop();
            $('#cover .hero').css({
                'opacity': 1-(scrollPos/340)
            });
        };

        
        var scroll = $(window).scrollTop();
            if (scroll >= 420) {
                header.addClass("addbg");
            } else {
                header.removeClass("addbg");
            }

    };
});


// PARALLAX
(function($) {

    $.parallax = function(element, options) {

        var defaults = {
            speed: 10
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element,
             $win = $(window);

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
                                   
            $element.css({
                'background-position-y': -$win.scrollTop() / plugin.settings.speed
            });

            $win.scroll(function() {
                $element.css({
                    'background-position-y': -$win.scrollTop() / plugin.settings.speed
                });
            })
        }

        plugin.init();

    }

    $.fn.parallax = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('parallax')) {
                var plugin = new $.parallax(this, options);
                $(this).data('parallax', plugin);
            }
        });

    }

})(jQuery);

// ACTIVATING PARALLAX

$(function () {
    if ($("#togglenav").is(":hidden")) {
        $("#cover").parallax({speed:2});
    };
});
