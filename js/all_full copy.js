$(document).ready(function() {
    "use strict";	// disable if not working added per best practices and DW error - 20180831 js
	$("body").removeClass("preload");
    //var $animation_elements = $('.masthead, .owl-pics, .owl-bios .mf, .owl-bios .owl-pics, .owl-bios .ac, .brand, .industry, .contact');
    var $animation_elements = $('.sections, .illustration , .sections .design, .sections .fineart, .sections .sk8 .masthead, .owl-pics, .owl-bios .mf, .owl-bios .owl-pics, .owl-bios .ac, .brand, .industry, .contact');
    
	var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    $(".maily").each(function() {
        var ats,
            dots,
            address,
            i;
        ats = [' at ', ' (at) ', ' [at] '];
        dots = [' dot ', ' (dot) ', ' [dot] '];
        address = $(this).html();
        for (i = 0; i < ats.length; i++) {
            address = address.replace(ats[i], '@');
        }
        for (i = 0; i < dots.length; i++) {
            address = address.replace(dots[i], '.');
        }
        $(this).html('<a href="mailto:' + address + '">' + address + '</a>');
    });
    $(window).scroll(function() {
        var $window = $(window),
            $body = $('body'),
            $panel = $('.bg-color');
        var scroll = $window.scrollTop() + ($window.height() / 5);
        $panel.each(function() {
            var $this = $(this);
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                $body.removeClass(function(index, css) {
                    return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
                });
                $body.addClass('color-' + $(this).data('color'));
            }
        });
    }).scroll();
});