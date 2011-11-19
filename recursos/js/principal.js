jQuery.noConflict();

var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;
var ddmenuitem2 = 0;

function jsddm_open()
{
    jsddm_canceltimer();
    jsddm_close();
    ddmenuitem = jQuery(this).find('.sub_menu').css('visibility', 'visible');
}
function jsddm_open_sub()
{
    jsddm_canceltimer();
    jsddm_close();
    ddmenuitem2 = jQuery(this).find('.sub_sub_menu').css('visibility', 'visible');
}

function jsddm_close()
{
    if(ddmenuitem) {
        ddmenuitem.css('visibility', 'hidden');
    }
}

function jsddm_timer()
{
    closetimer = window.setTimeout(jsddm_close, timeout);
}

function jsddm_canceltimer()
{
    if(closetimer)

    {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

document.onclick = jsddm_close;

jQuery(document).ready(function() {
    jQuery("#conteudo").load('home.html');
    jQuery('#galeria').cycle({
        fx:     'zoom', 
        easing: 'easeInBounce', 
        delay:  -4000
    });
    
    jQuery('#menu_corpo > li').bind('mouseover', jsddm_open);
    jQuery('.sub_menu > li').bind('mouseover', jsddm_open_sub);
    jQuery('#menu_corpo > li').bind('mouseout',  jsddm_timer);
    jQuery('.sub_menu > li').bind('mouseout',  function(){
        ddmenuitem2.css('visibility', 'hidden');
    });
   
    
    jQuery('ul#menu_corpo a').click(function(){
        var pagina = jQuery(this).attr('href');
        if(pagina.toString()=='#')return false;
        
        jQuery("#conteudo").hide('fast', function(){
            jQuery("#conteudo").load(pagina, function(){
                jQuery("#conteudo").show('normal');
            });
        });
        return false;
    });
});







