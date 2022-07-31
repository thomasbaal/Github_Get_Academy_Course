let wordArray = ['ost', 'ape', 'bæsj', 'bacon', 'svor', 'ribbe', 'pinnekjøtt', 'zebra'];
let random = Math.floor(Math.random()* wordArray.length);
let randomWord = wordArray[random];
let guessedChar = '';
let randomWordArray = [];
let wrongGuesses = 0;
let wrongGuessesArray =[];
let randomWordLengt = randomWord.length;