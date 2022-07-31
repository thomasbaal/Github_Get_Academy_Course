let cards = []
let hasBlackJack = false;
let isAlive = false;
let sum = 0 ;
let message = '';
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let sentence = []
let greetingEl = document.getElementById("greeting-el")
let playerEl = document.getElementById("player-el")
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


let player = {
    name: 'Thomas',
    chips: 200,
    sayHello: function() {
        console.log('Heisann Grabben!');
    }
}
//--------------------------------------------------------------------


playerEl.textContent = player.name + ': ' + '$ ' +player.chips
console.log(playerEl);

// ----------------------------------------------------------------

// -----------------------------------------------------------
let randomCard = getRandomCard()
function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if(randomNumber > 10) {
        return 10
    }else if (getRandomCard === 1) {
        return 1
    }else {
        return randomNumber
    }
}
console.log('randomCard:' + randomCard);
// -----------------------------------------------------------



for(let i = 0; i < sentence.length; i++) {
    
    greetingEl.textContent += ' ' + sentence[i] 
    
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {
   
    cardsEl.textContent = `Cards: `
    // add 2 card to array / deck..

    // render all available cards
    for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
    }
    sumEl.textContent = "Sum: " + sum   
    if(sum <= 20){
        message = 'Do you want to draw a new card?'
    }else if (sum === 21) {
        hasBlackJack = true
        message = "You've got Blackjack !"
    }else {
        message = "You're out of the game!"
        isAlive = false;
    }
messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card;
    cards.push(card)
    // console.log(cards);
    // console.log(sum, card);
    console.log('Drawing a new card from the deck!');
    renderGame();
}else {
    greetingEl.textContent = 'GAME OVER !'
}
}






