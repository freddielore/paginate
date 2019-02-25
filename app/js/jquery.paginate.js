/*
Paginate.js v1.0
by Freddie Lore - http://www.techtalkshq.com

For more information, visit:
http://techtalkshq.com/projects/paginate-js/

Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
- free for use in both personal and commercial projects
- attribution requires leaving author name, author link, and the license info intact
	
*/


(function( $ ) {
	$.fn.paginate = function () {
		return this.each(function () {

			$(this).addClass('tt-paginate');
			
			var pager = '';
				pages = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			
			for (var i=0; i<pages.length; i++) {
			    pager += '<a href="#" rel="nofollow" id="link-id' + pages[i].toLowerCase() + '">' + pages[i] + '</a>';
			}

			$(this).before( '<h4 class="tt-alpha-pager">' + pager + '</h4>' );			
			$(this).after( '<div class="tt-empty-message hide">No items that start with "<span>C</span>".</div>' );			
			
			var clicked;
			$('.tt-alpha-pager a').on('click', function(){
				clicked = $(this).text();
				$('.tt-paginate').children().removeClass('show');
				$('div.tt-empty-message').removeClass('show');
				$('.tt-paginate .' + $(this).attr('id') ).addClass('show');
				$('.tt-alpha-pager a').removeClass('active');
				$(this).addClass('active');
				
				/* show default empty message */
				if ( $('.tt-paginate .show').size() < 1 ){
					$('div.tt-empty-message').addClass('show');
					$('div.tt-empty-message span').text( clicked.charAt(0) );
				}
				return false; 
			});

			var str;
			$(this).children().each(function(){	
				var item = $(this),
				    str = item.text();
				item.addClass('hide link-id' + str.charAt(0).toLowerCase() );
			});

			$('.tt-alpha-pager a#link-ida').trigger('click');
	        return this;

		});
	}
}(jQuery));