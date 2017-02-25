var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var player = 'X';

$( init ); 

function init() {   

	cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];  

	$('.cel').droppable( {      accept: '.checker',     
								hoverClass: 'hovered',
								drop: droped    } );

	$('.checker').draggable( {  containment: '#content',            
								cursor: 'move',      
								revert: true    } ); 

}

function droped(event, ui) {
    
	ui.draggable.draggable( 'disable' );    
	$(this).droppable( 'disable' );        
	ui.draggable.draggable( 'option', 'revert', false ); 
	ui.draggable.hide();
	$(this).html(ui.draggable.html());
	//alert($(this).attr('id'));
	if(check_board($(this).attr('id'))) {

	if (player == 'X') {
		player = 'O';
		$('<div class="checker"><img src="images/o.png"></div>')
			.appendTo( '#gameBoard' )
			.draggable( {      containment: '#content',            
								cursor: 'move',      
								revert: true    } );
	} else {
		player = 'X';
		$('<div class="checker"><img src="images/x.png"></div>')
			.appendTo( '#gameBoard' )
			.draggable( {      containment: '#content',            
								cursor: 'move',      
								revert: true    } );
		}}
}
	


function room_clicked(room) {

	
	
	check_board();


}


// this function checks the games status and display winer or tie situation
function check_board(room) {
	cells[room] = ((player == "X") ? 1 : -1);
	// wining combination array
	var combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	// check for wining game
	for (i = 0; i < combs.length; i++) {
		if (Math.abs(cells[combs[i][0]] +  cells[combs[i][1]] + cells[combs[i][2]]) == 3) {	
			alert("You won !");
			game_countinue = false ;
			return false;
		} 
	}
	
	// check for tie situation
	var check = 1;
	for (i = 0; i < 9; i++) {
		check = cells[i] * check
	}
	if (check != 0) {
		// tie happened
		alert("Tie!");
		game_countinue = false ;
		return false;
	}
		
	return true;
}