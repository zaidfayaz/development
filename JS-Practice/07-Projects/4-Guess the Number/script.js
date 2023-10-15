let  RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const PreviousGuess = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
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
}

function validateGuess(guess){
    console.log(guess)
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
            endGame();
        }else{
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess){
    console.log(typeof guess)
    console.log(`the randno is ${RandomNumber}`)
    if (guess === RandomNumber){
        displayMessage('Guess Correct');
        endGame();
    }else if (guess < RandomNumber){
        displayMessage('Number is too Low');
    }else if (guess > RandomNumber){
        displayMessage('Number is too High')
    }
}
    //clean up method 
function displayGuess(guess){  
    userInput.value = '';
    PreviousGuess.innerHTML += `${guess} , `;
    numGuess ++;
    remainingGuess.innerHTML = `${11 - numGuess}`
    console.log(remainingGuess.innerHTML)
    if(remainingGuess.innerHTML<1){
        endGame();
    }
}


function displayMessage(message){
    console.log(lowOrHi.innerHTML);
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start New game </h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
 const newGame = document.querySelector('#newGame')
 newGame.addEventListener('click', (e) => {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess =[];
    numGuess =1;
    prevGuess.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild('p');
    playGame = true
 });
}
