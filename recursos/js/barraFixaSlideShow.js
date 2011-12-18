/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//<!--
jQuery.noConflict();

var minimizado = false
jQuery(function(){
       
    jQuery('#fotoPatrocinio').cycle({
        fx:    'scrollDown', 
        sync:   0, 
        delay: -2000 
    });
});
    
jQuery(function(){
    jQuery('#slogamApoio').cycle({
        fx:      'scrollDown', 
        sync:   0, 
        delay: -2000 
                    
    });
})



jQuery(function(){
    jQuery("#botaoFechar").click(function(){
        minimizaBarra()
        fotoEsquerda()
        minimizado = true
    })
})



jQuery(function(){
    jQuery("#fotoPatrocinio").click(function(){
        if(minimizado == true){
            maximizaBarra()
            fotoNaBarra()
            minimizado = false    
        }
        
    })
})
////////////////////////////////////////////////////////////////////efeito no botão fechar


jQuery(function(){
    jQuery("#botaoFechar a h1").mouseenter(function(){
        jQuery(this).stop().animate({
            "color": "#205606"
        },1000)
    })
})

jQuery(function(){
    jQuery("#botaoFechar a h1").mouseout(function(){
        jQuery(this).stop().animate({
            "color": "#701f19"
        },1000)
    })
})
/////////////////////////////////////////////////////////////////////


jQuery(function(){
    jQuery("#fotoPatrocinio").mouseenter(function(){
        if(minimizado == true){
            jQuery(this).css({
                "cursor":"pointer"    
            })
         
        }
    })
})
jQuery(function(){
    jQuery("#fotoPatrocinio").mouseenter(function(){
        if(minimizado == false){
            jQuery(this).css({
                "cursor":"default"    
            })
         
        }
    })
})
function maximizaBarra(){
    jQuery("#barra").animate({
        bottom : 0 
    },2000)
}


function minimizaBarra(){
    jQuery("#barra").animate({
        bottom: -100
    },2000)
}

function fotoNaBarra(){
    jQuery("#fotoPatrocinio").animate({
        bottom: 55,
        left: 0,
        opacity: 1
    },2000)        
    
}

function fotoEsquerda(){
    jQuery("#fotoPatrocinio").animate({
        bottom: 155,
        left : -240,
        opacity: 0.8
    },2000)
}



//-->
