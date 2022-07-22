


function showTools() {
clearAll();
document.getElementById('cardTools').innerHTML = /*html*/ `
<div class="innerCard">De to viktigste verktøyene vi skal bruke er disse:
<ul>
    <li>
        Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        <br />Vi skal bruke noen <i>extensions</i>:
        <ul>
            <li>JavaScript-booster</li>
            <li>es6-string-html</li>
            <li>live-server</li>
            <li>live-share</li>
        </ul>
    </li>
    <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
</ul>
</div>

`;
}

function showHtml() {
    clearAll();
    document.getElementById('cardHtml').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker HTML til å definere et dokument.
            <ul>
                <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                <li>Tagger for grunnleggende formatering av tekst</li>
                <li><tt>&lt;div&gt;</tt></li>
                <li><tt>&lt;input type="text"&gt;</tt></li>
                <li><tt>&lt;button&gt;</tt></li>
                <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                </li>
            </ul>
        </div>
        `;
}

function showCss() {
    clearAll();
    document.getElementById('cardCss').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li><tt>background-color</tt></li>
                <li><tt>color</tt></li>
                <li><tt>padding</tt></li>
                <li><tt>margin</tt></li>
                <li><tt>border</tt></li>
                <li><tt>text-align</tt></li>
                <li><tt>font-size</tt></li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                </li>
            </ul>
        </div>
        `;
}

function showJavaScript() {
    clearAll();
    document.getElementById('cardJavaScript').innerHTML = /*html*/`
        <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
            ved
            å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a></li>

            </ul>
        </div>
        `;

}

// let currentNumber = 1;

function showBodyGame() {
    //  clearAll();
    selectHead()
    // selectBody(4, 1, 2)
    // selectLegs(4, 1, 2)

    
}

// function selectHead(previousNumber, currentNumber, nextNumber) {
//     console.log(previousNumber, currentNumber, nextNumber);
//     document.getElementById('head').innerHTML = /*HTML*/`
//         <button onclick="selectHead${previousNumber}(4)">◀</button>
//         <img src="img/head${currentNumber}.png" />
//         <button onclick="selectHead${nextNumber}(currentNumber++)">▶</button>
//     `;
// }


function selectHead(ChoosenNumber) {
    console.log(ChoosenNumber);
    currentNumber = ChoosenNumber;
    document.getElementById('head').innerHTML = /*HTML*/`
    <button onclick="currentNumber--">◀</button>
    <img src="img/head${currentNumber}.png" />
    <button onclick="selectHead${currentNumber++}()">▶</button>
  
`;

    // currentNumber = 1; // funker.
    // <button onclick="selectHead${currentNumber += 1}()">▶</button> 
    // console.log(previousNumber, currentNumber, nextNumber);
    // document.getElementById('head').innerHTML = /*HTML*/`
    //     <button onclick="currentNumber--">◀</button>
    //     <img src="img/head${currentNumber}.png" />
    //     <button onclick="selectHead${currentNumber += 1}()">▶</button>
      
    // `;
}




function selectBody(previousNumber, currentNumber, nextNumber) {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody${previousNumber}(4)">◀</button>
        <img src="img/body${currentNumber}.png" />
        <button onclick="selectBody${nextNumber}(2)">▶</button>
    `;
}



function selectLegs(previousNumber, currentNumber, nextNumber) {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs${previousNumber}(4)">◀</button>
        <img src="img/legs${currentNumber}.png" />
        <button onclick="selectLegs${nextNumber}(2)">▶</button>
    `;
}

function clearAll() {
document.getElementById("cardTools").innerHTML = '';
document.getElementById("cardHtml").innerHTML = '';
document.getElementById("cardCss").innerHTML = '';
document.getElementById("cardJavaScript").innerHTML = '';
document.getElementById('cardGame').innerHTML = '';

}

// document.getElementById('cardGame').innerHTML = /*html*/`    
// selectHead();

// <div id="head" class="bodyPart"> <img src="img/head1.png" /></div>
//   <div id="body" class="bodyPart"> <img src="img/body1.png" /></div>
//   <div id="legs" class="bodyPart"> <img src="img/legs1.png" /></div> 
// `;