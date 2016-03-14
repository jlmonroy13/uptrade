$(function(){
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
	