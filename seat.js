
var seats = [[true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true],
	    [true,true,true,true,true,true]];

function initSeats(){
	var position;
	var seat_id;
	for(var i = 0; i < seats.length; i++){
		var column = seats[i].length;
		for(var j = 0; j < column; j++){
			if(seats[i][j]){
				position = i * column + j;
				seat_id = "seat" + position;
				document.getElementById(seat_id).src = "seatWhite.gif";
				document.getElementById(seat_id).alt = "Availabe seat";
			}
			else{
				document.getElementById(seat_id).src = "seatGrey.gif";
				document.getElementById(seat_id).alt = "Unavailabe seat";
			}
		}
	}



}

function selectSeats(selectI){
	if(document.getElementById(selectI).alt == "Availabe seat"){
		document.getElementById(selectI).src = "seatOrange.png";
		document.getElementById(selectI).alt = "Your seat";
	}
	else if(document.getElementById(selectI).alt == "Your seat"){
		document.getElementById(selectI).src = "seatWhite.gif";
		document.getElementById(selectI).alt = "Availabe seat";
	}
}