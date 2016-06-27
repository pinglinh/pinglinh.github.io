(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "350",
			width : "500",
			title: "About Me",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sunt porro debitis corporis, officia explicabo veniam aspernatur! Dicta, atque dolor, pariatur a iste quae explicabo quibusdam magnam ratione numquam tenetur.",
			top: "20%",
			left: "30%",
		},prop);
				
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.paulund_modal_box').fadeIn();
		});
		
		 function add_styles(){			
			$('.paulund_modal_box').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'border-radius':'0px',
				'background': '#f2f2f2', 
				'z-index':'50',
			});

			$('.paulund_modal_close').css({
				'position':'absolute',
				'top':'5px',
				'left':'480px',
				'display':'block',
				
				
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			
		}
		
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 		
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"><i class="fa fa-times"></i></a><h2 class="modal-title">' + options.title + '</h2><p class="modal-p">' + options.description + '</p></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);