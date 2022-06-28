function checkChar(){
    if(guessedChar.length != 1){
        alert('for mange bokstaver')
        return;
    }
    
    if(randomWord.includes(guessedChar)){
        checkIfIncludes();
        
    }
    else {
       wrongGuess();
    }

    show()
}

function wrongGuess() {
    wrongGuesses++;
    wrongGuessesArray.push(guessedChar);
}

function checkIfIncludes() {
    wrongGuesses++;
    for (let i = 0; i < randomWord.length; i++) {
        PutCorrectCharInCorrectPlace(i);
    }
}

function PutCorrectCharInCorrectPlace(i) {
    console.log(randomWord[i], 'utenfor if');
    if (randomWord[i] == guessedChar) {
        putCorrectChar(i);

        checkIfCorrect();
    }
}
function putCorrectChar(i) {
    randomWordArray[i] = ' ' + guessedChar + ' ';
    randomWordLengt--;
}

function checkIfCorrect() {
    if (randomWordLengt == 0) {
        alert('Du gjettet riktig');
    }
}

