function changePersonsName(index){
    // let random = Math.floor(Math.random()* seconsPersonList.length);
    // personList[index] = seconsPersonList[random];
    personList[index] = newName;
    view();
}

function addNewPerson(){
    personList.push(newName);
    view();
}

function deletePerson(index){
    personList.splice(index, 1)
    view();
}