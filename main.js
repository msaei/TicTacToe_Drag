var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var player = 'X';
var gameResult;

$( init ); 

function init() {   

	cells = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 
	player = 'X';

	$('#messageBoard').hide();

	// load empty cells to gameboard div
	var boardContent = '<div id="0" class="cel"></div>' +
					'<div id="1" class="cel"></div>' +
					'<div id="2" class="cel"></div>' +
					'<div class="row"></div>' +
					'<div id="3" class="cel"></div>' +
					'<div id="4" class="cel"></div>' +
					'<div id="5" class="cel"></div>' +
					'<div class="row"></div>' +
					'<div id="6" class="cel"></div>' +
					'<div id="7" class="cel"></div>' +
					'<div id="8" class="cel"></div>' +
					'<div class="row"></div>' +
					'<div class="checker"><img src="images/x.png"></div>' ;

	$('#gameBoard').html(boardContent);

	// activate draggable and droppable for checker and cells
	$('.cel').droppable( {      accept: '.checker',     
								hoverClass: 'hovered',
								drop: droped    } );

	$('.checker').draggable( {  containment: '#gameBoard',            
								cursor: 'move',      
								revert: true    } ); 

}



function droped(event, ui) {
    // deactive dropable and dragable for checker and cell that dropped to it
	ui.draggable.draggable( 'disable' );    
	$(this).droppable( 'disable' );         
	ui.draggable.draggable( 'option', 'revert', false ); 
	ui.draggable.hide();

	//give the image of checker to dropped cell
	$(this).html(ui.draggable.html());
	
	//if game continue flip the players and provide new checker for play next turn
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
		}
		// if game over show proper message in message board
	} else {
		var  msgContent = '<h2>' + gameResult + '</h2> ' +   
				'<button onclick="init()">Play Again</button>';
		$("#messageBoard").html(msgContent).show();

	}
}
	


// this function checks the games status if it is over or not
function check_board(room) {
	cells[room] = ((player == "X") ? 1 : -1);
	// wining combination array
	var combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	// check for wining game
	for (i = 0; i < combs.length; i++) {
		if (Math.abs(cells[combs[i][0]] +  cells[combs[i][1]] + cells[combs[i][2]]) == 3) {	
			//current player wins
			gameResult = 'player ' + player + ' wins!!!';
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
		gameResult = "This is a Tie !!!";
		game_countinue = false ;
		return false;
	}
		
	return true;
}