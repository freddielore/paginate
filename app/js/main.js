jQuery(document).ready(function($){
	$('a.paginate-me').click( function(){
		$(this).removeClass('paginate-me');
		$('.tt-alpha-pager').remove();
		$('ul.categories').paginate({ 
			disableEmpty: true,
			errorMessage: 'Sorry, no items found.' });
		return false;
	});

	$('a#demo').on('click', function(){
		$('#paginate-demo').scrollView();
		return false;
	});

	$.fn.scrollView = function () {
		return this.each(function () {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 500);
		});
	}

});