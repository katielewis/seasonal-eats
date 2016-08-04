
//spring section
var springOffset = $('#spring').offset().top;

$(window).on('scroll', function () {
	console.log('distance scrolled ' + $(window).scrollTop());
	if ($(window).scrollTop() >= (springOffset - 20)) {
		$('#lemonSlice').addClass('lemonSliceAnimate');
		$('#orange').addClass('orangeAnimate');
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
	if ($(window).scrollTop() >= (summerOffset - 40)) {
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
	if ($(window).scrollTop() >= (fallOffset - 30)) {
		$('.squash').addClass('gordsMove');
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
	if ($(window).scrollTop() >= (winterOffset - 20)) {
		$('#kale').addClass('veggieFan');
	} 
});