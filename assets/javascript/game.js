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
	document.getElementById("winCounter").innerHTML = winCounter;
	document.getElementById("lossCounter").innerHTML = lossCounter;
	//Testing /Debugging
	console.log(selectWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
	//Check if letter exists in code at all

	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
			if (selectedWord[i] == letter) {
				isLetterInWord = true
				alert("Letter found");
			}
		}
	}


			
		

//Main Process
//===========================================

//Initiates the code
startGame();

//Register Keyclicks

document.onkeyup = fucntion(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	//Testing and Debugging
	console.log(letterGuessed);
}