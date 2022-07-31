//this is practically the exact code that Brian Holt wrote on the Front End Masters course

let currentTotal = 0; 
let buffer = "0"; //what's on display

let previousOperator = null;

const calcScreen = document.querySelector(".calc-numbers");

document.querySelector('.calculator-buttons').addEventListener("click",function(event){

    //call function buttonClick
    buttonClick(event.target.innerHTML);
});

//separates de value of the button clicks into NotANumber and Numbers
function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerenderScreen();
}

function handleSymbol(value){
    switch (value){
        case "C":
            buffer = "0";
            currentTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if(previousOperator === null){ //this would mean that there is nothing to be calculated yet
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOperator = null;
            currentTotal = 0;
            break;
        case "←":
            if(buffer.length === 1){ //if the screen is any single number, always turn it to 0 when deleting
                buffer = "0";
            }
            else{
                buffer = buffer.substring(0,buffer.length-1); //delete the numbers one by one
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
}

function handleMath(value){
    const internalBuffer = parseInt(buffer);
    
    if (currentTotal === 0){
        currentTotal = internalBuffer;
    }else{
        flushOperation(internalBuffer);
    }

    previousOperator = value;

    buffer = "0";
}

function flushOperation(internalBuffer){
    if(previousOperator === "+"){
        currentTotal += internalBuffer;
    }else if(previousOperator === "-"){
        currentTotal -= internalBuffer;
    }else if(previousOperator === "x"){
        currentTotal *= internalBuffer;
    }else{
        currentTotal /= internalBuffer;
    }
}

function rerenderScreen(){
    calcScreen.value = buffer;
}