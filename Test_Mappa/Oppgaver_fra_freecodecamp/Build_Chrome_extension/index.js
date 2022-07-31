const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const container = document.getElementById("container");
const ulEl = document.getElementById("ul-el")
let myLeads = [];

// SAVE TO LOCAL STORAGE FROM AN ARRAY.
myLeads = JSON.stringify(myLeads)
myLeads.push()
console.log(typeof myLeads);


// button save to myLeads array.
inputBtn.addEventListener("click", function() {
    if (inputEl.value == '') {
        alert('You need to type something !')
    }else {myLeads.push(inputEl.value)}
    inputEl.value = '';
    renderLeads()
})

  console.log(myLeads); 

// inputEl.addEventListener('click', function() {
//            myLeads.push(inputEl.innerHTML) 
//            console.log(myLeads);
// })






// clear input field.
// function clearInputField() {
//     inputEl
// }


// Thanks for buying message.
function buy(index) {
container.innerHTML += '<p>Thank You for buying !</p>'
}


// list all items.
function renderLeads() {
    let listItems = '';

for (i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>a
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
        // // listItems += '<button onclick="buy(i)" >Buy Me!</button>
        // container.innerHTML += '<button onclick="buy()" >Buy Me!</button>'

}
container.innerHTML = listItems;

}



