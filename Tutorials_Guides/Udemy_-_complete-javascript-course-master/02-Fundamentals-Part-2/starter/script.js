'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`);

// const interface = `Audio`; // Reserved word

//--------------------------------------
// *** Functions ***

//---------------
// function functName(Parameter1, parameter2) {}
//-----------------

//-------------------------------------------
// function logger() {
//     console.log('My name is Thomas');
// }

// // calling / Running / Invoking the function
// logger();
// logger();
// logger();
//--------------------------------------------

// function fruitProcessor(apples, oranges) {
// console.log(apples, oranges);
// const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
// return juice; //Result
// }
// // -------------------------------------------
// fruitProcessor(5, 0); // invokes the function.
// (5, 0) This is arguements.
//--------------------------------------------
// fruitProcessor(10, 3);

//  const appleJuice = fruitProcessor(5, 0);
//  console.log(appleJuice);

//  const appleOrangeJuice = fruitProcessor(2, 4);
//  console.log(appleOrangeJuice);
// //-------------------------------------------

// -- Function Declaration -- -- Function Declaration -- -- Function Declaration --
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991); // her lages det variabel "age1 som peker til function ved navn calcAge1 - når age1 blir called sendes **** tallet 1991 opp i parameter boksen i første function linjen over der det står birthYear"
// ----------------------------------------------------------

// -- Function expression -- -- Function expression -- -- Function expression --
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);
// --------------------------------------------------------------

// -- Arrow function -- -- Arrow function -- -- Arrow function -- -- Arrow function --

// const calcAge3 = birthYear => 2037 - birthYear; // Simple one line calculation.
// const age3 = calcAge3(1991);
// console.log(age3);
// console.log(test)

// *************************** Not Complete
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
//     console.log(yearsUntilRetirement(1991));

//-------------------------------------------------------------
// --Functions calling other functions - Nr.36 ---------------------
// notes:
// This is not an example of "dont repeat yourself-dry" setup.
//showing functions calling functions.
// if we decided to increase the number of pieces the fruit neede to be cut= change only //1.value.
// function cutFruitPieces(fruit) {
//     return fruit * 6;
// };

// function fruitProcessor(apples, oranges, banana) {
//     const applePieces = cutFruitPieces(apples); // ny const,kaller cutFruitPieces,value=2
//     const orangePieces = cutFruitPieces(oranges); // Same but value 3
//     const bananaPieces = cutFruitPieces(banana); // Same but value 12.

//     const juice = `Juice with ${applePieces} pieces of 🍎apple and
//     ${orangePieces} pieces of 🍊orange and
//     ${bananaPieces} pieces of 🍌banana - nam nam.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3, 12)); //calling function and sending values (2, 3)
//-----------------------------------------------------------------------

//--37- Reviewing functions--------------------------------------------------------
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         alert(`${firstName} retires in ${retirement} years`);
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;    //"return" exits and lines below return, wil not execute.
//     }else {
//         alert(`${firstName} has alread retired🥳`);
//         console.log(`${firstName} has alread retired🥳`);
//         return -1;              // A often used number,no need for further calculation.
//     }                           //-1 can late be used for "standard" calculations.
//     return retirement;
// }

//  console.log(yearsUntilRetirement(1991, 'Jonas'));
//  console.log(yearsUntilRetirement(1950, 'Mike'));

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

//----------------------------------------------------------------------------
//-----Introduction to Arrays -Data Structures--------------------------------------
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years2 = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); // extracts element "0" from the Array "Michael"
// console.log(friends[2]); // extracts element "2" from the Array "Peter"

// console.log(friends.length);  // extracts the number of elements in the Array
// console.log(friends[friends.length - 1]); //

// friends[2] = 'Jay';   // Replacing element "2" which is peter with a new string "Jay"
// console.log(friends);
//---------------------------------------------------

//Below - adding to Array,a const, string, calculation, string, then a full array made earlier "friends"
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// //Exercise-
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// // VIKTIG! -kan kalle opp funksjon når den sender med "Expressions" = "Values".
// // !!Huske forskjellen på Statements og Expressions!!
// const age1 = calcAge(years[0]); // kaller opp funksjonen calcAge å sender med VALUE (years[0]) som er plassering 0 i ARRAY som heter "years"-Atså tallet 1990.
// const age2 = calcAge(years[1]); // kaller funksjonen calcAge med value fra plassering 1
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

//--- 40 - Basic Array Operations ---------------------------------------------------

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(newLength, 'Is the length of the Array');
// console.log(friends);
//Explained: friends.push er en funksjon. legger til elementet Jay i slutten av Array som heter friends.
//friends.push er lagretunder en variabel kalt "newLength".

// Starter igjen fra nr.33----------------------
//-----------------------------------------------------------

// function fruitProcessor(apples, oranges) {
//   //parameter
//   const juice = 'Juice with ${apples} apples and ${oranges}';
//   return juice;
// }

// fruitProcessor(5, 0); // calling function, sending with arguements (5, 0).

// // lagre verdiene
// const appleJuice = fruitProcessor(5, 0); // capturing the values.
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleAndOrangeJuice = fruitProcessor(2, 0); // kaller samme funksjon, men med nye verdier
// console.log(appleAndOrangeJuice);

// -----------------------------------------------------
// Basic array opperations -------------------
// const friends = ['Michael', 'Steven', 'Peter'];

// friends.push('Jay'); // legger til element islutten av Array
// friends.push('thomas', 'Andrea'); // kan legge til flere av gangen
// friends.unshift('Liam'); // legge til i starten av et array
// const arrayLength = friends.length;
// console.log(friends);
// console.log(friends.length); // antall i array
// console.log(arrayLength); // anntall i array fra variable.

// // remove elements
// friends.pop(); // fjerner siste elemente i Array
// const popped = friends.pop(); // fjerner siste i Array, lagrer HVEM! som ble fjernet.
// console.log(popped); // shows thomas - siste som ble fjernet.
// console.log(friends);

// console.log(friends);
// // true or false
// console.log(friends.includes('Liam')); // sjkker om er i Array
// console.log(friends.includes('Labbetus'));

// if (friends.includes('Andrea')) {
//   console.log(`you have a friend called Andrea`);
// } else if (friends.includes('Liam')) {
//   console.log('you have a friend called Liam');
// }
// -----------------------------------------------------------
// -----------------------------------------------------------

// Coding challenge #2.
// test data 15% 50 -> 300 hvis ikke 20%

// var totalPay;
// const prices = [125, 555, 44];
// console.log(prices);
// console.log(prices.length);
// console.log(prices[1]);

// let calcToPay = function (toCalc) {
//   if (toCalc >= 50 && toCalc <= 300) {
//     toCalc *= 1.15;
//     console.log(`Prisen er nå ${toCalc}`);
//   } else {
//     toCalc *= 1.2;
//     console.log(`Prisen er nå ${toCalc}`);
//   }
//   totalPay = toCalc;
// };

// // console.log(calcToPay(price));
// calcToPay(prices[2]);
// console.log(totalPay);
// ----------------------------------------------------------
// ------------------------- --------------------------------

//under. if setning kortet ned til turnary operator og arrow function.

// const calcTip = function (bill) {
//   //under: return bill,men sammenlign først-- ?er turnary operator.
//   //
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // under-IKKE AKTIVERT- arrow funtion. const variabel "calctip"-- parameter er "bill"
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// // under: variabel - tips -> sender til calcTip innholdet av arrayet bills,plassering 0
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // under: logger på skjermen samt invokes internt.
// console.log(bills, tips, totals);
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

// coding cahallenge.3. ------------------------------------------------------

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// let mark = {
//   firstname: 'Mark',
//   lastname: 'Miller',
//   weight: 110,
//   height: 1.69,
//   calcBmi: function () {
//     this.bmi = this.weight / (this.height ** 2)
//     return this.bmi

//   }
// };


// mark.calcBmi();
// console.log(mark.bmi);


// let john = {
//   firstname: 'John',
//   lastname: 'Smith',
//   weight: 95,
//   height: 1.88,
//   calcBmi: function () {
//     this.bmi = this.weight / (this.height ** 2)
//     return this.bmi
//   }
// };

// john.calcBmi();
// console.log(john.bmi);

// if(mark.bmi > john.bmi) {
//   console.log(`Marks Bmi of ${mark.bmi} is higher then Johns Bmi`);
// } else {
//   console.log(`johns Bmi of ${john.bmi} is higher then marks bmi`);
// }

// ------------------------------------------------------------------------------
// test litt under ---------------------------------------------------------------
// let thomasArray = [];

// let thomas = {
//   firstname: 'Thomas',
//   lastname: 'Bålsrød',
//   job: 'unemployed',

// addHeight: function ()  {
//   this.height = 1.68;
//   },

// addWeight: function () {
//   this.weight = 84
// },
// addNickname: function (nick) {
//   this.nickname = nick
// }


// }
// thomas.addNickname('Warishellish');
// thomas.addWeight();
// thomas.addHeight();










// let andrea = {
//     firstname: 'Andrea',
//     lastname: 'Bålsrød',
//     job: 'Health-Inspector',
//     weight: 96,
//     height: 1.70,
//   }


//  indexLength: function () {
//     let i = 0;
//     for (i = 0; i <= thomas.length; i++) {
//     console.log(thomas[i]);
    
//     }

//   }
// a test ----------------------------------------------------------------------------------
// for (let i = 0; i <= 5; i++) {
//   console.log(`--------------- Lift weights Series ${i} ---------------`);
//       for ( let i2 = 0;i2 <= 10; i2++)
//         console.log(`Lift weights repetion ${i2}`);
// }
// ------------------------------------------------------------------------------------------


// ---------------------Coding Challenge-4 ---------------------------------------------------------------------

// test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
// test data 15% 50 -> 300 hvis ikke 20%

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = [];
// let total = [];

// // // // function calctip(bill) {
// // // //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // // // }
    
// // // // for (let i = 0; i < bills.length; i++ ) {
// // // //   let tip = calctip(bills[i]);
// // // // // console.log(tip);
// // // // tips.push(tip);
// // // // total.push(tip + bills[i]);
// // // // }

// function calctip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
 
// for( let i = 0; i < bills.length; i++) {
    
//     tips.push(calctip(bills[i]))
//     total.push(tips[i] + bills[i])
// }
// console.log(bills, tips, total);

// samme som over i en ny test -------------------------------------
// 15 tips tall fra 0 -> 50, 25% tips taff fra 51 ->

let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips2 = [];
let total2 = [];

function calctips2(bill) {
  return bill <= 50 ? bill * 0.15 : bill * 0.2;
   
}

for (let i = 0; i < bills2.length; i++) {
      // let tip =  calctips2(bills2[i]) // kan lagres i variabel

      // console.log(tip);
      tips2.push(calctips2(bills2[i]))

      // console.log(tips2);
      total2.push(tips2[i] + bills2[i])

  }
 console.log(bills2, tips2, total2);










// calcTest();
// function calcTest(bill) {
//   calcTips(20)
//   console.log(bill);
// }
