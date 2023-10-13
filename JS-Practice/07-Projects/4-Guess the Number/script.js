const RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const PreviousGuess = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)

    });

function validateGuess(){

}

function checkGuess(guess){

}

function displayGuess(guess){

}


function displayMessage(message){

}

function endgGame(){

}

function newGame(){

}