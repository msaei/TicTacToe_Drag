var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];

$( init ); 

function init() {   

	cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];  

	$('.cel').droppable( {      accept: '#checker',     
								hoverClass: 'hovered'    } );

	$('#checker').draggable( {      containment: '#content',            
								cursor: 'move',      
								revert: true    } ); 

}