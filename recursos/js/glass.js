jQuery.noConflict();

window.onload = function(){
//        alert('NADADADAD')
    path_to_root_dir = "../recursos/glassbox.2.0.0/";
    var myBox = new GlassBox();
    myBox.init( 'conteudo', '700px', '200px', 'hidden' );
    myBox.ipos();
//	myBox.apos( '170px', '150px' );
};