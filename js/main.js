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
	});

	$('#nexthome1').click(function(event){
		event.preventDefault()
		var size = $('.home-slider').find('.img-slider').size();
		$('.home-slider').find('.img-slider').each(function(index, value) {
			if($(value).hasClass('img-slider-visible')) {
				$(value).fadeOut();
				$(value).removeClass('img-slider-visible');
				if(index+1<size) {
					$($('.home-slider').find('.img-slider').get(index+1)).fadeIn("slow","swing");
					$($('.home-slider').find('.img-slider').get(index+1)).addClass('img-slider-visible');
					return false;
				}else {
					$($('.home-slider').find('.img-slider').get(0)).fadeIn("slow","swing");
					$($('.home-slider').find('.img-slider').get(0)).addClass('img-slider-visible');
					return false;
				}
			}
		});
	});

	$('#prevhome1').click(function(event){
		event.preventDefault()
		var size = $('.home-slider').find('.img-slider').size();
		$('.home-slider').find('.img-slider').each(function(index, value) {
			if($(value).hasClass('img-slider-visible')) {
				$(value).fadeOut();
				$(value).removeClass('img-slider-visible');
				if(index==0) {
					$($('.home-slider').find('.img-slider').get(size-1)).fadeIn("slow","swing");
					$($('.home-slider').find('.img-slider').get(size-1)).addClass('img-slider-visible');
					return false;
				}else {
					$($('.home-slider').find('.img-slider').get(index-1)).fadeIn("slow","swing");
					$($('.home-slider').find('.img-slider').get(index-1)).addClass('img-slider-visible');
					return false;
				}
			}
		});
	});
});
	