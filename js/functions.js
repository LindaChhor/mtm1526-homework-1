// JavaScript Document
/*
Javascript multi-line comment
*/

alert('Get ready to choose a letter');

var letter;
while (!letter) {
	letter = prompt('What is your favourite letter?');
}

function theletter() {
		
	if (letter == 'a') {
		document.write('The letter Linda should get on this assignment...')
	} else {
	document.write("not a good letter.");
	}
}

theletter();

var writeLetterMultipleTimes = function() {
	for (var i = 0; i < 11 ; i++ ) {
		document.write();
		for (var j = 1; j < i; j++) {
			document.write(letter);
		}
		document.write('<br>');
	}
};

writeLetterMultipleTimes();



























