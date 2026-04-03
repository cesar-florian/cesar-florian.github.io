/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Equalize portfolio card caption heights so all cards are the same size
function equalizePortfolioItems() {
    var $captions = $('#portfolio .portfolio-caption');
    $captions.css('min-height', '');
    var maxHeight = 0;
    $captions.each(function() {
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    $captions.css('min-height', maxHeight + 'px');
}

$(document).ready(function() {
    equalizePortfolioItems();
});

$(window).resize(function() {
    equalizePortfolioItems();
});