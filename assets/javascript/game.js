//Global Variables
//===========================================
//Arrays and Variablse for holding data
var wordOptions = ["cheers", "wings", "friends", "i love lucy", "seinfeld", 
"taxi", "gilligans island", "how i met your mother", 'alley mcbeal', 
'single female lawyer'];
var selectWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
//===========================================
function startGame(){
	selectWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectWord.split("");
	numBlanks = lettersinWord.length;

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//Populate blanks and successes
	for(var i =0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}
	
	//Change HTML to reflect round condition
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	//Testing /Debugging
	console.log(selectWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter){
	//Check if letter exists in code at all

	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectWord[i] == letter){
			isLetterInWord = true;

		}
	}

	//check where in the word letter exists and populate array
	if(isLetterInWord){
		for (var i =0; i<numBlanks; i++){
			if(selectWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	//Letter wasn't found
	else{
		wrongLetters.push(letter);
		guessesLeft--
	}

	// Testing
	console.log(blanksAndSuccesses);

}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
	//
	// Update the HTMl to reflect the most recent count stats
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
	// Check if user won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		// Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML = winCount;
		startGame();
	}
	//Check if user lost
	else if(guessesLeft == 0) {
		lossCount++;
		alert("You lost!");
	// Update the HTML
	document.getElementById("lossCounter").innerHTML = lossCount;

	startGame();
	}
}
//Main Process
//===========================================

//Initiates the code
startGame();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	//testing / debuggign
	console.log(letterGuessed);

}	
