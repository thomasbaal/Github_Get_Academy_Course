function view(){
    let html = '';

    // html += `<div>${personList.join('<br>')}</div>`

    for(let i = 0; i < personList.length; i++ ){
        html += `<div onclick="changePersonsName(${i})">${personList[i]}</div> 
        <button onclick="deletePerson(${i})">X</button>
        <hr>`;
    }
    html += `<input type="text" oninput="newName = this.value"> 
    <button onclick="addNewPerson()">legg til</button>`

    document.getElementById('app').innerHTML = html;

}