//
let r = 10;
let g = 20;
let b = 30;

let classArray = ['red', 'blue', 'green'];
let random =  Math.floor(Math.random()* classArray.length);

show();
function show(){

let html = '';
// html += `<div onclick="changeColor()" style="background-color: rgb(${r},${g},${b});"> clickMe </div>`
html += `<div onclick="changeColor()" class="${classArray[random]}"> clickMe </div>`
document.getElementById('app').innerHTML = html;
}

function changeColor(){
random =  Math.floor(Math.random()* classArray.length);
show();
}



