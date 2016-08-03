//spring section
var springOffset = $('#spring').offset().top;

$(window).on('scroll', function () {
	console.log('distance scrolled ' + $(window).scrollTop());
	if ($(window).scrollTop() >= (springOffset - 20)) {
		$('#lemonSlice').addClass('lemonSliceAnimate');
		$('#orange').addClass('orangeAnimate');
	} else {
		$('#lemonSlice').removeClass('lemonSliceAnimate');
		$('#orange').removeClass('orangeAnimate');
	}
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