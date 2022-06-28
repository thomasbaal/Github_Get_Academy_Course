
// Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

////////////////////////////////////
// Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // Decrease the value by one

// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);



// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// // console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);





































/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'year old ' + job + '!';
console.log(jonas)
// Template Literals below - with backticks.
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...   `);





console.log(`String
multiple
lines`);
*/


// const age = 19;
// const isOldEnough = age >= 18; // if 10 or greater, only then are the variable created.

// if(isOldEnough) { // true or false from code above.
// console.log('Sarah can start driving license 🚗')
// }
// samme som over, men forenklet ved kalkulerer rett i if parameter boksen.
// const age = 15;
// if 10 or greater, only then are the variable created.

// if(age >= 18) { // true or false from code above.
// console.log('Sarah can start the driving license 🚗')
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is to young, wait another ${yearsLeft} years 😜`);
// }

// ---------------------------------------------------------------------------------






// Viktig - en variabel kan ikke bli deklarert på innsiden av en block, se under.
// const birthYear = 1998; // BirtYear før 2000
// // const birthYear = 2012; // BirthYear etter 2000

// let century;    // <- Denne er ennå ikke definert.
// if(birthYear <= 2000) {century = 20;} else {century = 21;}

// console.log(century);






















// --------------------------------------------------------------------------
// Converting Data Types

// const inputYear = '1991'; // with '' becomes a string.
// console.log(Number(inputYear), inputYear); // <- 1st is number, 2nd a string.
// console.log(Number(inputYear) + 18); // <- This is a number (2009)

// console.log(Number('Jonas')); // <- This will get ERROR.(NAN) = "NOT A NUMBER".
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(1, 2, 3, 4 );

// Under alt har blitt sammenslått til å være en string.
// type coercion - Skjer helt automatisk i Visual studio code.                                         
// console.log('I am ' + 23 + ' years old'); // 23 vil automatisk bli konvertert til en STRING
// console.log('I am ' + '23' + ' years old'); // Dette er annen måte å skrive setning over på.
// console.log('I am ' + String(23) + ' years old'); // Enda en metode å skrive samme setning.
// // Under - 1 eksempel på at Vsk setter datatypes på egenhånd:
// console.log('23' - '10' - 3); // her har vsk selv funnet ut at man ønsker Datatype Number.
// console.log('23' + '10' + '3'); // vsk har "contaginated" slått sammmen alle tallene til (23103)
// console.log('23' * '2');
// console.log('23' / '2');

// //test: Hva vil skje med resultat under:
// let n = '1' + 1; // her blir den 11
// n = n - 1; // 11 - 1 = 10
// console.log(n);

// // en Test til:
// console.log(2+3+4+'5'); // svaret: 95. 2+3+4 blir 9,+ string 9,type coercion til 95,pga det blir konvertert til en string = stringene 9 + 5 blir strengen 95.

// console.log(boolean(0));
// console.log(boolean(undefined));
// console.log(boolean('Jonas'));
// console.log(boolean({}));

// Truthy or Falsy value

// const money = 0; falsy value - boolean
// //

// let height = 0; // 0 is treated as a falsy value. (VSK Bug !)
// let height = 123; // Falsy value, will get converted to boolean.
// let height; // Falsy value, will get converted to boolean.
// if(height) { // height is not defined so will be stored as false, then execute "else"
//     console.log('Yay! height is defined');
// }else {
//     console.log('Height is UNDEFINED');
// }

// ----------------------------------

// Strict equality (===)
// == loose equality
// === Strict equality

// const age = '18';
// if(age === 18) console.log('You just became an adult (Strict)') // both sides need to be exactly the same

// Adde singlequotes ->
// if(age == 18) console.log('You just became an adult (Loose)') // Dont have to be exactly the same.
// ----------------------------------

// const favourite = prompt("what's your favorite number?");
// console.log(favourite);
// console.log(typeof favourite);

// setningene under vil bli konvertert til string, altså ikke et tall.
//if (favourite === 23) { //'23' === 23  This is a string
// if (favourite == 23) { //'23' == 23  This is a string - loos equality
//   console.log('Cool ,23 is an amazing number')
//}

// ---------------------------------------------------
// Fikser dette under-----------
// const favourite = Number(prompt("What's your favourite number")); // setter datatype til Number.
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 23 === 23
//     console.log('Cool! You Picked the right number!');
// }

//-----------------------------------------------------
// >- Adding else if.
// const favourite = Number(prompt("What's your favourite number")); // setter datatype til Number.
// console.log(typeof favourite);

// if (favourite === 23) { // 23 === 23
//     console.log('Cool! You Picked the right number!')
// } else if (favourite === 7) {
// console.log('7 is also a good number')
// } else if (favourite === 9) {
//     console.log('Yay!')
// }
// else {
//     console.log('Number is not even remotely close!')
// }
// // under In-equality, (ikke lik Operator)
// if(favourite !== 23) console.log('Why not try 23?');
//-------------------------------------------------------------

// const hasDriversLicense = true; // A
// // const hasDriversLicense = true; // A
// // // const hasDriversLicense = true; // A
// const hasGoodVision = true // B

// console.log(hasDriversLicense && hasGoodVision); // && "And" operator. A and B needs to be true
// console.log(hasDriversLicense || hasGoodVision); // || "Or" operator. A or B needs to be true
// console.log(!hasDriversLicense); // ! "Not" operator. inverts a value

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!')
// }else {
//     console.log('Someone else should drive!...')
// }

// const isTired = false; // C
// // console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired ) {
//     console.log('Sarah is able to drive!')
// }else {
//     console.log('Someone else should drive!...')
// }

// const day = 'wednesday';

// switch (day) {
//     case 'monday': // day === monday
//         console.log('plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }
// if (day === 'monday') {
//     console.log('plan course structure');
//     console.log('Go to coding meetup');

// } else if (day === 'tuesday') {
//     console.log('prepare theory videos');

// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('write code examples');

// } else if (day === 'friday') {
//     console.log('Record videos');

// } else if (day === 'saturday' || 'sunday') {
//     console.log('Enjoy the weekend :D');

// } else {
//     console.log('Not a valid day!');
// }













//---------------------------------------------------------------------
// Expression vs Statements.

// 3 + 4 // This is an expression.
// true && false && !false // also an expression

// if (23 > 10) {
//     const str = '23 is bigger'; // the sentence in on itself is an statements , as it doesnt produce a value.
// }

// console.log(`I'm ${2037 - 1990} years old.`)

// ------------------------------------------------------------------
// The conditional Operator.(Ternary) (?)

const age = 17;
age >= 18 ? console.log('I like to drink wine🍷') : 
console.log('I like to drink water 💧'); 

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {drink2 = 'wine🍷';
}else {drink2 = 'water💧';
}

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);

