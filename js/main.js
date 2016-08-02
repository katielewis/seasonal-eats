
//Set up for the first screen
var textBoxOffset = $('.header-box').offset().top;
	console.log('h1 distance ' + textBoxOffset);

$(window).on('scroll', function () {
	console.log('distance scrolled ' + $(window).scrollTop());
	if ($(window).scrollTop() >= (textBoxOffset - 30)) {
		$('.header-box').addClass('text-box'); 
		$('h1').remove();
	} else {
		$('.header-box').removeClass('text-box');
		//$('.header-box').append('<h1>Seasonal Eats</h1>');
		//only once!!
	}

});