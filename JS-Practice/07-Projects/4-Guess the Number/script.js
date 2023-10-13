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
       //  console.log(guess);
        validateGuess(guess)
    });

function validateGuess(){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if (guess < 1 ){
        alert('Please enter number greater than 1')
    }else if (guess > 100){
        alert( 'Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${RandomNumber}`);
            endgGame();
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === RandomNumber){
        displayMessage('Guess Correct');
        endgGame();
    }else if (guess < RandomNumber){
        displayMessage('Number is too Low');
    }else if (guess > RandomNumber){
        displayMessage('Number is too High')
    }
}
    //clean up method 
function displayGuess(guess){  
    userInput.value = '';
    PreviousGuess.innerHTML += `${guess}`;
    numGuess ++;
    remainingGuess.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message}</h2>`

}

function endgGame(){

}

function newGame(){

}
}