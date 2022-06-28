
function show(){
    let html = '<h1>Hangman</h1> ';

    html += `antall gjettninger : ${wrongGuesses}<br>
    ${randomWordArray.join('')}<hr>
    <input type="text" oninput="guessedChar = this.value">
    <button onclick="checkChar()">sjekk bokstav</button> <hr>
    feil bokstaver: ${wrongGuessesArray.join('')}`
  

    appDiv.innerHTML = html;
}




//controller
function showChar(){
    for(let i = 0; i< randomWord.length; i++){
        randomWordArray.push(' _ ');
    }
}