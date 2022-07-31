
// creating card Deck on startup
for(let i = 0; i < arrSuits.length; i++) {
        for(let y = 0; y < arrValues.length; y++) {
                let createCard = {Value: arrValues[y], Suit: arrSuits[i]};
                // console.log(createCard);
                arrFullDeck.push(createCard)
        }
}
console.log(arrFullDeck);


function play() {
    sum = 0;
    message = '';
    btnCardVisible = '';
    btnPlayVisible = 'none';
    arrUserCards.splice(0)
    isAlive = true;
    money = 100;
    renderGame()

    
  

}

function drawCard() {
    
    
    let randomIndex = Math.floor(Math.random() * arrFullDeck.length)
    console.log('New Card Picked ----------------------');
    console.log(`randomIndex: ${randomIndex}`);
    let randomCard = arrFullDeck[randomIndex]
    console.log(`random card from arrFullDeck ${randomCard['Value']}`);
    
    if(card1 == '') {
        card1 = arrFullDeck[randomIndex]
        arrUserCards.push(arrFullDeck[randomIndex])
        arrFullDeck.splice(randomIndex, 1)
        cardsLeft = 52 - arrUserCards.length
        if(card1['Value'] == 'J') {}
        if(card1['Value'] == 'K') {}
            if(card1['Value'] == 'Q') {}
            if(card1['Value'] == 'A') {}
        }else if (card2 == '') {
            card2 = arrFullDeck[randomIndex]
            arrUserCards.push(arrFullDeck[randomIndex])
            arrFullDeck.splice(randomIndex, 1)
            cardsLeft = 52 - arrUserCards.length
        } else if (card3 == ''){
            card3 = arrFullDeck[randomIndex]
            arrUserCards.push(arrFullDeck[randomIndex])
            arrFullDeck.splice(randomIndex, 1)
            cardsLeft = 52 - arrUserCards.length
        }else if (card4 == ''){
            card4 = arrFullDeck[randomIndex]
            arrUserCards.push(arrFullDeck[randomIndex])
            arrFullDeck.splice(randomIndex, 1)
            cardsLeft = 52 - arrUserCards.length
        }else if (card5 == ''){
            card5 = arrFullDeck[randomIndex]
            arrUserCards.push(arrFullDeck[randomIndex])
            arrFullDeck.splice(randomIndex, 1)
            cardsLeft = 52 - arrUserCards.length    
        }else {
            card6 = arrFullDeck[randomIndex]
            arrUserCards.push(arrFullDeck[randomIndex])
            arrFullDeck.splice(randomIndex, 1)
            cardsLeft = 52 - arrUserCards.length
        }    
        
        console.log('loop log from arrUserCards');
        for(let i = 0; i < arrUserCards.length; i++) {
            console.log(arrUserCards[i]);
        }

        sum = 0;
        for(let x = 0; x < arrUserCards.length; x++) {
            sum += arrUserCards[x]['Value']
        }


        if(sum == 21) 
        {
        message = 'BLACKJACK !'
        }else if(sum > 21) 
        {
        message = 'Game Over !'; 
        btnCardVisible = 'none';
        btnPlayVisible = '';
        renderGame() 
        }else {
        
        console.log(`User Picked Cards: 
        - ${card1['Value']} of ${card1['Suit']} 
        - ${card2['Value']} of ${card2['Suit']} 
        - ${card3['Value']} of ${card3['Suit']} 
        - ${card4['Value']} of ${card4['Suit']}
        - ${card5['Value']} of ${card5['Suit']}
        - ${card6['Value']} of ${card6['Suit']}`)
        
        renderGame()
    }
}

