
	function revealNoreveal() {
   		 if ($(window).width() < 814) {
			 $('.reveal').attr('class', 'noReveal');
			 console.log("mobile size");
		 } else {
			 $('.noReveal').attr('class', 'reveal');
			 console.log("deslktop size");
		 }
	
	}
		
	$(document).ready(function() {
//	console.log("i ran");
	$("body").removeClass("preload");
    var $animation_elements = $('.masthead, .og_sec, .owl-bios .mf, .owl-bios .owl-pics, .owl-bios .ac, .brand, .industry, .contact');
    var $mobile_elements = $('.masthead, .contact');
   
		
		// var $animation_elements = $('.sections, .illustration , .sections .design, .sections .fineart, .sections .sk8 .masthead, .owl-pics, .owl-bios .mf, .owl-bios .owl-pics, .owl-bios .ac, .brand, .industry, .contact');
    
	var $window = $(window);
    
		
	function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
		 if ($(window).width() > 814){
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
			console.log("desktop size - in view");
        });
		} else {
			$.each($mobile_elements, function() {
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
			console.log("mobile size - inview");
		}
		
		
    }
		
	$window.on('load', check_if_in_view);	
		
    //$window.on('scroll resize', check_if_in_view);
    //$window.trigger('scroll');
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
   
	function maily_in_view(){
		if ($('.contact').hasClass('in-view')){
			$('.l1').css('transform','none');
		}else {
			console.log('maily not in-view');
		}
	}	
		
		
	$(window).resize(function(){
			//ordbtnResize();
			revealNoreveal();
			maily_in_view();
			//hsbTextboxResize();
		
		});
	
	$(window).scroll(function(){
		maily_in_view();
	});
	
	maily_in_view()		
	revealNoreveal();
		
});