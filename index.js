let home = document.getElementById("home-el");
let guess = document.getElementById("guess-el");
let homeCount = 0;
let guessCount = 0;

function addOne() {
	homeCount += 1;
	home.textContent = homeCount;
}

function addTwo() {
	homeCount += 2;
	home.textContent = homeCount;
}

function addThree() {
	homeCount += 3;
	home.textContent = homeCount;
}

function addOneGuess() {
	guessCount += 1;
	guess.textContent = guessCount;
}

function addTwoGuess() {
	guessCount += 2;
	guess.textContent = guessCount;
}

function addThreeGuess() {
	guessCount += 3;
	guess.textContent = guessCount;
}

function newGame() {
	guessCount = 0;
	homeCount = 0;
	home.textContent = 0;
	guess.textContent = 0;
}
