var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];

$( init ); 

function init() {   
	// Hide the success message  
	$('#successMessage').hide();  
	//$('#successMessage').css( {    left: '580px',    top: '250px',    width: 0,    height: 0  } );
	
	// Reset the game
	cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];  
	$('#gameBoard').html( '' );
	$('#checker').html( '' );  
	
	// Create the pile of shuffled cards  
	var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	numbers.sort( function() { return Math.random() - .5 } );
	for ( var i=0; i<10; i++ ) {    
		$('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] )
			.attr( 'id', 'card'+numbers[i] )
			.appendTo( '#cardPile' )
			.draggable( {      containment: '#content',      
								stack: '#cardPile div',      
								cursor: 'move',      
								revert: true    } );  
	}   