jQuery.noConflict();
var run;
jQuery(document).ready(function() {
    //Speed of the slideshow
    var speed = 5000;
	
        
//    jQuery('.conteudo_informativos a:first').toggleClass('current');  
    jQuery('.pager a:first').toggleClass('current');  
    //You have to specify width and height in #slider CSS properties
    //After that, the following script will set the width and height accordingly
    jQuery('#mask-gallery, #gallery li').width(jQuery('#slider').width());	
    jQuery('#gallery').width(jQuery('#slider').width() * jQuery('#gallery li').length);
    jQuery('#mask-gallery, #gallery li, #mask-excerpt, #excerpt li').height(jQuery('#slider').height());
    jQuery('#gallery li:first, #excerpt li:first').addClass('selected');
    
    clearInterval(run);
    
    jQuery('#btn-pause').click(function () {
        clearInterval(run);
        return false;
    });

    //Continue the slideshow with setInterval
    jQuery('#btn-play').click(function () {
        run = setInterval('newsscoller(0)', speed);	
        return false;
    });
	
    //Next Slide by calling the function
    jQuery('#btn-next').stop().click(function () {
        newsscoller(0);	
        return false;
    });	

    //Previous slide by passing prev=1
    jQuery('#btn-prev').click(function () {
        newsscoller(1);	
        return false;
    });	
     
//    jQuery('.conteudo_informativos a').click(function () {
//        jQuery('.conteudo_informativos a:not(jQuery(this))').removeClass('current');
//            
//        jQuery(this).toggleClass('current');
//        
//        //stop the slide show
//        clearInterval(run);
//        //go to the item
//        paginate('.' + jQuery(this).attr('rel'));
//        return false;
//    });
    
    jQuery('.pager a').click(function () {
        jQuery('.pager a:not(jQuery(this))').removeClass('current');
            
        jQuery(this).toggleClass('current');
        
        //stop the slide show
        clearInterval(run);
        //go to the item
        paginate('.' + jQuery(this).attr('rel'));
        return false;
    });
    
    function paginate(item) {
        jQuery('#mask-gallery').scrollTo(item, 800);     
        jQuery('#mask-excerpt').scrollTo(item, 800); 
        jQuery(item).addClass('selected');                   
    }
	
//Mouse over, pause it, on mouse out, resume the slider show
//    jQuery('#slider').hover(
//	
//        function() {
//            clearInterval(run);
//        }, 
//        function() {
//            run = setInterval('newsscoller(0)', speed);	
//        }); 
});

function newsscoller(prev) {
    var next_image;
    var next_excerpt;
    //Get the current selected item (with selected class), if none was found, get the first item
    var current_image = jQuery('#gallery li.selected').length ? jQuery('#gallery li.selected') : jQuery('#gallery li:first');
    var current_excerpt = jQuery('#excerpt li.selected').length ? jQuery('#excerpt li.selected') : jQuery('#excerpt li:first');

    //if prev is set to 1 (previous item)
    if (prev) {
		
        //Get previous sibling
        next_image = (current_image.prev().length) ? current_image.prev() : jQuery('#gallery li:last');
        next_excerpt = (current_excerpt.prev().length) ? current_excerpt.prev() : jQuery('#excerpt li:last');
	
    //if prev is set to 0 (next item)
    } else {
		
        //Get next sibling
        next_image = (current_image.next().length) ? current_image.next() : jQuery('#gallery li:first');
        next_excerpt = (current_excerpt.next().length) ? current_excerpt.next() : jQuery('#excerpt li:first');
    }

    //clear the selected class
    jQuery('#excerpt li, #gallery li').removeClass('selected');
	
    //reassign the selected class to current items
    next_image.addClass('selected');
    next_excerpt.addClass('selected');

    //Scroll the items
    jQuery('#mask-gallery').scrollTo(next_image, 800);		
    jQuery('#mask-excerpt').scrollTo(next_excerpt, 800);					
	
}

