const RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const PreviousGuess = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')