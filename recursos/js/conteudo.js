jQuery.noConflict();
jQuery(function(){
    jQuery('#slider').addClass('temp').show('normal');
    jQuery("#conteudo_links > a").click(function(){
        var box = jQuery(this).attr('href');
        jQuery(".temp").removeClass('temp').hide('slow', function(){
            jQuery(box).addClass('temp').show('normal', function(){
                if(box=='#slider') {
                    jQuery('#slider_link').hide();
                    jQuery('.pager').show();
                }
                else {
                    jQuery('.pager').hide();
                    jQuery('#slider_link').show();
                }
                jQuery('#info_fotos a').lightBox();
            });
        });
        return false;
    });
    
//    jQuery('.direita').click(function(){
//        jQuery('#mask-excerpt').css('left','580px'); 
//        return false; 
//    });
        
    jQuery('#info_fotos > ul > li').mouseenter(function(){
        jQuery(this).stop().animate({
            "opacity" : 1
        },500);
    });
        
    jQuery('#info_fotos > ul > li').mouseout(function(){
        jQuery(this).stop().animate({
            "opacity" : 0.7
        },500);
    });
});