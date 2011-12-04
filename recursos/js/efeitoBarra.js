jQuery.noConflict();
jQuery(document).ready(function(){
    
    jQuery("#menu_corpo a").mouseenter(function(){
        jQuery(this).stop().animate({
           "color":"#fff",
            "background-color":"#205606"
//                backgroundColor: "yellow"
            
        },700)
    })
    
    jQuery("#menu_corpo a").mouseout(function(){
        jQuery(this).stop().animate({
            "color":"#701f19",
            "background-color":"#fefefe"
        },700)
    })
});
