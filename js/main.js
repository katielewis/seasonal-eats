//intro section
var introOffset = $('header').offset().top;

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (introOffset -30)) {
		$('.basil').addClass('basilSpin');
		$('.apple').addClass('appleSpin');
		$('.peas').addClass('peasSpin');
	}
});


//spring section
var springOffset = $('#spring').offset().top;

$(window).on('scroll', function () {
	console.log('distance scrolled ' + $(window).scrollTop());
	if ($(window).scrollTop() >= (springOffset - 30)) {
		$('#lemonSlice ,#kumquatSlice').addClass('lemonSliceAnimate');
		$('#orange ,#orangeSlice').addClass('orangeAnimate');
	} 
	// none of the other animations so on scrolling up, so hiding
	// else {
	// 	$('#lemonSlice').removeClass('lemonSliceAnimate');
	// 	$('#orange').removeClass('orangeAnimate');
	// }
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (springOffset / 2)) {
		$('#spring-text-box').addClass('text-box-fade');
	}
});


//summer section
var summerOffset = $('#summer').offset().top;

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (summerOffset / 1.5)) {
		$('#summer-text-box').addClass('text-box-fade');
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (summerOffset - 55)) {
		$('#nectarine ,#plum ,#peach').addClass('fruitBounce');
		$('#strawberry').addClass('strawberryBounce');
		$('#cherries ,#figs').addClass('secondBounce');
	}
});


//fall section
var fallOffset = $('#fall').offset().top;

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (fallOffset / 1.2)) {
		$('#fall-text-box').addClass('text-box-fade');
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (fallOffset - 45)) {
		$('.squash').addClass('squashMove');
		$('.squash4').addClass('squash4Move');
		$('.eggplant').addClass('eggplantMove');
		$('.squash2').addClass('squash2Move');
		$('.corn').addClass('cornMove');
		$('.squash3').addClass('squash3Move');

	}
});



//winter section
var winterOffset = $('#winter').offset().top;

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (winterOffset / 1.2)) {
		$('#winter-text-box').addClass('text-box-fade');
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= (winterOffset - 40)) {
		$('.kale').addClass('kalePile');
		$('.kale2').addClass('kale2Pile');
		$('.broccoli').addClass('broccoliPile');
	} 
});

// KONAMI!
var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    $('.easterEgg').addClass('showEgg');
	}	
});
