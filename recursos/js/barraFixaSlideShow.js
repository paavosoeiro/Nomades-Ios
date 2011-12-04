/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//<!--
jQuery(document).ready(function(){
    
    jQuery(function(){
       
        jQuery('#fotoPatrocinio').cycle({
            fx:      'fade', 
            speedIn:  2000, 
            speedOut: 4000
        });
    });
    
    jQuery(function(){
        jQuery('#slogamApoio').cycle({
            fx:      'scrollDown', 
            speedIn:  2000, 
            speedOut: 4000
                    
            });
    })
})
//-->