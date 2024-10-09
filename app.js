let numberList = [];
let limitNumber = 10;
let secretNumber = numberRandomizer();
let tries = 1

function showText(tag, texto){
    let camp = document.querySelector(tag);
    camp.innerHTML = texto;
}

function showWelcomeMessage() {
    showText('h1', 'Guess Game');
    showText('p', 'Choose a number between 1 and 10');
}

showWelcomeMessage();

function checkGuess() {
    let guess = document.querySelector('input').value;

    if(guess == secretNumber) {
        showText('h1', 'Congrats!');
        let wordTry = tries > 1 ? 'tries' : 'try';
        let tryMessage = `You guessed it right. It taked ${tries} ${wordTry}.`;
        showText('p', tryMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(guess > secretNumber) {
            showText('p',`The secret number is lower!`);
        } else {
            showText('p',`The secret number is higher!`);
        } 
        tries++;
        cleanSpace();
    }
}
           

function numberRandomizer(){
    let choosedNumber = parseInt(Math.random() * limitNumber + 1);
    let quantityOfNumbers = numberList.length;

    if(quantityOfNumbers == limitNumber) {
        numberList = [];
    }
    if(numberList.includes(choosedNumber)) {
        return numberRandomizer();
    } else {
        numberList.push(choosedNumber);
        return choosedNumber;
    }
}

function cleanSpace() {
    guess = document.querySelector('input');
    guess.value = '';
}

function resetGame() {
    secretNumber = numberRandomizer();
    cleanSpace();
    tries = 1;
    showWelcomeMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}