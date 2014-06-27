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

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

//name intro
$(document).ready(function() {
		$(".brand-heading1").fadeIn(1500);
//fadeout function
		$(".brand-heading1").fadeOut('4000', function() {
				$(".brand-heading2").fadeIn(2000);
				$(".intro-text").fadeIn(2000);
				$(".main-scroll").fadeIn(2000);
		});
});

/*
	Jquery Validation using jqBootstrapValidation
*/
$(function() {

$("input,textarea").jqBootstrapValidation({
	preventSubmit: true,
	submitError: function($form, event, errors) {
	// something to have when submit produces an error ?
	// Not decided if I need it yet
},
	submitSuccess: function($form, event) {
	event.preventDefault(); // prevent default submit behaviour
	// get values from FORM
	var name = $("input#name").val();
	var email = $("input#email").val();
	var message = $("textarea#message").val();
	var firstName = name; // For Success/Failure Message
	// Check for white space in name for Success/Fail message
		if (firstName.indexOf(' ') >= 0) {
			firstName = name.split(' ').slice(0, -1).join(' ');
		} $.ajax({
				url: "./bin/contact_me.php",
				type: "POST",
				data: {name: name, email: email, message: message},
				cache: false,
		success: function() {
		// Success message
			$('#success').html("<div class='alert alert-success'>");
			$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
			$('#success > .alert-success').append("<strong> Thank You! Your message has been sent. </strong>");
			$('#success > .alert-success').append('</div>');
				//clear all fields
			$('#contactForm').trigger("reset");
		},

		error: function() {
		// Fail message
			$('#success').html("<div class='alert alert-danger'>");
			$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
			$('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that the mail server is not responding...</strong> Could you please email me directly to <a href='mailto:tony@tonytermine.com?Subject=Message from tonytermine.com;>tony@tonytermine.com</a> ? Sorry for the inconvenience!");
			$('#success > .alert-danger').append('</div>');
			//clear all fields
			$('#contactForm').trigger("reset");
		},
	});
	},
		filter: function() {
			return $(this).is(":visible");
		},
	});

	$("a[data-toggle=\"tab\"]").click(function(e) {
		e.preventDefault();
		$(this).tab("show");
	});
	});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
	$('#success').html('');
});