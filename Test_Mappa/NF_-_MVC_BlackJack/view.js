// Hjelpevariabel 





renderGame();
function renderGame() {
    html = '';
    html += `
<div class="grid-container img">
    <div class="grid-items grid-item-1">Current User: <br/>${user}</div>
    <img class="grid-items grid-item-2"src="blackjack-logo.png">
    <div class="grid-items grid-item-3"></div>
    <div class="grid-items grid-item-4"></div>
    <h1 class="grid-items grid-item-5">Cards: 
    ${arrUserCards[0] ? arrUserCards[0]['Value'] : ''} 
    ${arrUserCards[1] ? ' - ' + arrUserCards[1]['Value'] : ''} 
    ${arrUserCards[2] ? ' - ' + arrUserCards[2]['Value'] : ''} 
    ${arrUserCards[3] ? ' - ' + arrUserCards[3]['Value'] : ''} 
    ${arrUserCards[4] ? ' - ' + arrUserCards[4]['Value'] : ''} 
    ${arrUserCards[5] ? ' - ' + arrUserCards[5]['Value'] : ''} </h1>
    <h3 class="grid-items grid-item-8"></h3> 
    <button id="playBtn" onclick="play()" style="display: ${btnPlayVisible}"; class="grid-item-btnPlay" >Play</button>
    <button id="cardBtn" onclick="drawCard()" style="display: ${btnCardVisible}"; class="grid-item-btnCard" >Draw Card</button>
    <div class="grid-items grid-item-9" >Sum: ${sum ? sum : ''}</div>
    <div class="grid-items grid-item-6" >Cards-Left: ${cardsLeft}</div>
    <div class="grid-items grid-item-7" >Bank: $${money}</div>
    <div class="grid-items grid-item-10" >${message}</div>


</div>
`







document.getElementById("app").innerHTML = html;
}

// placeholder:
//     <h3 class="grid-items grid-item-8">${card1['Value'] ? card1['Value'] : ''}</h3>
