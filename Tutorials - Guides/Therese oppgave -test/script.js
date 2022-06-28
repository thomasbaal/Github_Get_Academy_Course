var div1 = document.getElementById("tekst1");
var div2 = document.getElementById("tekst2");
var div3 = document.getElementById("tekst3");

function valgtDiv(x) {
    tag = x
    x.classList.toggle('underline');
    console.log(x);
    console.log(tag);
}