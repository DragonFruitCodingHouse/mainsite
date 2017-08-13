$(document).ready(function() {
	
	// HEIGHT FOR CONTAINER DIV
	var $docHeight = $(document).height();
	$(".container").css("height", $docHeight + "px");
	
	// HEIGHT FOR MAIN DIV
	var $mainHeight = $(".container").height()-$(".navbar").height()-$(".banner").height();
	$(".main").css("height", $mainHeight + "px");
	
	// DRAGONFRUIT COLOUR CHANGE
	var colours = ["#EA1858", "#FF9D1A", "#19E15A", "#16B7EE"];	
	$("#fruit").css("color", colours[Math.floor(Math.random()*colours.length)]);
	var currentColour = $("#fruit").css("color");
	$("a").hover(
	function() {
		$(this).css("color", currentColour);
	},
	function() {
		$(this).css("color", "black");
	});
	
	// SMOOTH SCROLLING
	$(function() {
		$(".navbar ul li a, .services a").bind("click", function(event){
			var $anchor = $(this);
	
			$("html, body").stop().animate({
				scrollTop: $($anchor.attr("href")).offset().top
			}, 1000);
			
			event.preventDefault();
		});
	});
	
	// CREW PICS
	$("#prit").hover(
	function() {
		$("#prit p, #prit").fadeIn("slow");
		$("#prit p").css("display", "table-cell");
		$("#prit").css("background", "url(../revamp/images/pritpal-transparent.jpeg) no-repeat center center");
		$("#prit").css("background-size", "auto 530px");
		$("#prit p").stop(true, true).show();
	},
	function() {
		$("#prit .hover").css("display", "none");
		$("#prit").css("background", "url(../revamp/images/me%209_clipped_rev_2.jpeg) no-repeat center center");
 		$("#prit").css("background-size", "auto 530px");
 		$("#prit p").stop(true, true).hide();
	});
	
	$("#ben").hover(
	function() {
		$("#ben p, #ben").fadeIn("slow");
		$("#ben p").css("display", "table-cell");
		$("#ben").css("background", "url(../revamp/images/ben-transparent.png) no-repeat center center");
		$("#ben p").stop(true, true).show();
	},
	function() {
		$("#ben .hover").css("display", "none");
		$("#ben").css("background", "url(../revamp/images/ben@2x.png) no-repeat center center");
		$("#ben p").stop(true, true).hide();
	});
	
	$("#jacy").hover(
	function() {
		$("#jacy p, #jacy").fadeIn("slow");
		$("#jacy p").css("display", "table-cell");
		$("#jacy").css("background", "url(../revamp/images/jacy-transparent.png) no-repeat center center");
		$("#jacy p").stop(true, true).show();
	},
	function() {
		$("#jacy .hover").css("display", "none");
		$("#jacy").css("background", "url(../revamp/images/jacy@2x.png) no-repeat center center");
		$("#jacy p").stop(true, true).hide();
	});
	
	$("#viniel").hover(
	function() {
		$("#viniel p, #viniel").fadeIn("slow");
		$("#viniel p").css("display", "table-cell");
		$("#viniel").css("background", "url(../revamp/images/viniel-transparent.png) no-repeat center center");
		$("#viniel p").stop(true, true).show();
	},
	function() {
		$("#viniel .hover").css("display", "none");
		$("#viniel").css("background", "url(../revamp/images/viniel@2x.png) no-repeat center center");
		$("#viniel p").stop(true, true).hide();
	});
	
	// CONTACT FORM FOCUS
	$("input, #msg").on("focus", function() {
		$("input").css("outline-color", currentColour);
		$("#msg").css("outline-color", currentColour);
	});
	
	// CONTACT FORM SUBMIT
	document.getElementById("form").onsubmit = function() {
		$("#thankyou").show(function() {
			document.getElementById("form").reset();
		});
		$("#thankyou").fadeOut(30000);
		$("#thankyou").hide(1000);
		return window.submitGoogleForm(this);
	};
	
	// PROJECTS SLIDESHOW
	$(".slideshow").hover(
	function() {
		$("#rebelsoup").fadeOut("5000");
		$("#rebelsoup").hide();
		$("#rstestimonial").show();
		$("#rstestimonial, .testimonial").stop(true, true).show();
	},
	function() {
		$("#rstestimonial").hide();
		$("#rebelsoup").stop(true, true).show();
	});
	
	// UPDATE FOOTER DATE
	var date = new Date();
	var year = date.getFullYear();
	$(".copyright").html("<p> Copyright &copy " + year + " DragonFruit CodingHouse. All Rights Reserved.");
});