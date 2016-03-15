$(function(){
	$(document).scroll(function () { 
		var y = $(this).scrollTop();
    	if (y > 102) {
    		$('header').addClass('fixed-header');
		}else if (y < 103) {
			$('header').removeClass('fixed-header');
		}
	});
	$('.navbar-toggle').on('click', function(){
		$('.navbar').toggleClass('navbar-collap');
	});
	$('.img-container').on('mouseenter', function(){
		$(this).children('.opacity-color').show();
		$(this).children('.product-more').show();
	});
	$('.img-container').on('mouseleave', function(){
		$(this).children('.opacity-color').hide();
		$(this).children('.product-more').hide();
	});

	$('.js-expand-nav').click(function(event){
		$('.js-nav-expanded').addClass('nav-list--expanded');
		$('.js-retract-nav').addClass('overlay--visible');
		event.preventDefault();
	}) 
	$('.js-retract-nav').click(function(){
		$('.js-nav-expanded').removeClass('nav-list--expanded');
		$('.js-retract-nav').removeClass('overlay--visible');
	})
});
	