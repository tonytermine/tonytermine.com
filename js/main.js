//jQuery to collapse the navbar on scroll
//show and hide proper logo on scroll
$(window).scroll(function() {

	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
		$(".white-logo").addClass("scroll-logo");
		$(".black-logo").addClass("hide-logo");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
		$(".white-logo").removeClass("scroll-logo");
		$(".black-logo").removeClass("hide-logo");
	}
});
//name intro
$(document).ready(function() {
		$(".brand-heading1").fadeIn(4500);
//fadeout function
		$(".brand-heading1").fadeOut('4000', function() {
				$(".brand-heading2").fadeIn(2000);
				$(".intro-text").fadeIn(2000);
		});
});