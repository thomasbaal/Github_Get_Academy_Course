function checkChar(){
    if(guessedChar.length != 1){
        alert('for mange bokstaver')
        return;
    }
    
    if(randomWord.includes(guessedChar)){
        wrongGuesses++;
            for( let i = 0; i <randomWord.length; i++){
                console.log(randomWord[i], 'utenfor if')
            if(randomWord[i] == guessedChar){
                randomWordArray[i] = ' ' +guessedChar+ ' ';
                randomWordLengt --;
              
                if(randomWordLengt == 0){
                    alert('Du gjettet riktig');
                }
            }
        }
        
    }
    else {
       wrongGuesses++;
       wrongGuessesArray.push(guessedChar);
    }

    show()
}