//  The JS fil will have the game logic and interactivity 
//numberInput  buttonGuess  resetButton  hintButton

const guessInput = document.getElementById("numberInput");
const guessButton = document.getElementById("buttonGuess");
const resetButton = document.getElementById("resetButton");
const hintButton = document.getElementById("hintButton");

const h1 = document.querySelector("h1");

let winner = Math.floor(Math.random() * 100) + 1;
let attempts = 5 
guessButton.addEventListener("click", function(){
    let guessNumber = guessInput.value;
    console.log(guessNumber)
})

console.log(h1, guessButton, guessInput, resetButton, hintButton, winner)