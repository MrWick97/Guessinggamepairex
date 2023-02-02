//  The JS fil will have the game logic and interactivity 
//numberInput  buttonGuess  resetButton  hintButton

const guessInput = document.getElementById("numberInput");
const guessButton = document.getElementById("buttonGuess");
const resetButton = document.getElementById("resetButton");
const hintButton = document.getElementById("hintButton");
const resultMessage = document.getElementById("results");

let winner = Math.floor(Math.random() * 100) + 1;
let attempts = 5 
guessButton.addEventListener("click", function(){
    let guessNumber = guessInput.value;
    attempts = attempts -1;
    
    if(guessNumber < 1 || guessNumber > 100) {
        resultMessage.textContent = "You must choose between 1-100!"
    } 
    if (guessNumber == winner){
        resultMessage.textContent = "you win"
    }  else if(guessNumber < winner) {
        resultMessage.textContent = `The number is Higher. ${attempts} tries remain`
    } else if (guessNumber > winner) {
        resultMessage.textContent = `The number is Lower. ${attempts} tries remain`
    }
    if (attempts <= 0){
        resultMessage.textContent = "You are out of Attempts Reset and try again"
    } 
    
})
resetButton.addEventListener("click", function(){
    attempts = 5;
    resultMessage.textContent = "You have 5 guesses";
    let winner = Math.floor(Math.random() * 100) + 1;
    console.log(winner)

})
hintButton.addEventListener("click", function(){
    
    resultMessage.textContent = "it's between 1 and 100 come on its not that complex";
    

})
console.log(winner)