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
});
	