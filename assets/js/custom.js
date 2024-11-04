jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
	
	jQuery(".menu_bar").click(function() { 
		jQuery('#menu_holder').toggleClass('mobile_menu_open'); 
		jQuery(this).toggleClass('active'); 
	});

	jQuery('.more-find').on("click", function(e) {
		if (!jQuery('.more-list').hasClass('more-list-open')) {
			jQuery('.more-list').addClass('more-list-open');
			jQuery('.more-list').slideDown(200);
			console.log('ais');
		} else {
			jQuery('.more-list').removeClass('more-list-open');
			jQuery('.more-list').slideUp(200);
		}
	});	
});