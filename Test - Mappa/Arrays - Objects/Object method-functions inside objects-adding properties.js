// Objects Methods

const thomas = {
    firstname: 'Thomas',
    lastname: 'Bålsrød',
    birthYear: 1991,
    job: 'unimployed',
    friends: ['Fredrik', 'Kenneth', 'Morten'],
    hasDriverLicense: true,

calcAge: function(birthYear) {
    const today = new Date();
    let year = today.getFullYear();
    return year - birthYear;
}
};


thomas.calcAge(1979);


console.log(thomas.calcAge(1979) // 43
);
//-------------- Samme som over men byttes ut med this keyword. ------------------------------------

let andrea = {
    firstname: 'Andrea',
    lastname: 'Bravo Bålsrød',
    birthYear: 1989,
    job: 'Teacher',
    friends: ['Fredrik', 'Kenneth', 'Morten'],
    hasDriverLicense: true,

calcAge: function() {
    console.log(this);
    const today = new Date();
    let year = today.getFullYear();
    return year - this.birthYear;
}
};
console.log(andrea.calcAge());
// ---------------------- Add properties to objects ------------------------------------

let liam = {
    firstname: 'Liam',
    lastname: 'Bravo Bålsrød',
    birthYear: 2014,
    job: 'unimployed',
    friends: ['Fredrik', 'Kenneth', 'Morten'],
    hasDriverLicense: false,

calcAge: function() {
    const today = new Date();
    let year = today.getFullYear();
    this.age = year - this.birthYear; // adding properties to the object.(age)
    return year - this.birthYear;
}
};
liam.calcAge(); // invoking the object - function.
console.log(liam.age);
console.log(liam);




// Challenge ------------------------------------------------------
// check if Andrea got hasDriverLicense

console.log(andrea.hasDriverLicense);
console.log(liam.hasDriverLicense);

let checkIfGotDriverLicense = andrea.hasDriverLicense
console.log(checkIfGotDriverLicense);
// ------ Get summary of an object.
