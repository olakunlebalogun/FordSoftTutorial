console.log("Hello world")

// data type
// 
/**
 * jkvVk
 *  mjkkjkv
 */



/**
 * j K 
 */

// Data Types

// ES5, ES6, ES7, ES8, ES9, ES10, ES11
// String; "" 'Rotimi', "Taofeek"
// Number; 2, 5.9, 0.78
// Boolean; true or false // isBoy 
// Date; 
// undefined;  
// null;
// Object;
// Arrays;

// Variable Declaration;
// var const let;
//  ES5
var age = 5
var name = "kunle";


// ES6
const height = 100.90;
const job = "developer";

let width = 34.89;
let teacher = "Mr John"

// job = 25;
// console.log(job);
function printHello() {
    
    console.log("This is just function")
}
// declaration and initialization

var colour; // undefined
let myAge = null; // null

var paint = "green"
let mySonAge = 14;

var paint = "yellow"

// let mySonAge

// initialization | declaration | scope 

// Objects

const laptop = {
    color : "black",
    maker : "DELL",
    size : "small",
    width : 300,
}

// console.log(laptop['color'])



const names = ["rotimi", "taofeek", "olamide", 3, true]
names.length
const myMun = "ruth"


const newAge = 56
const strAge = newAge.toString()
// console.log(newAge, strAge);


const stringNumber = "3445s"
const integerNumber = Number(stringNumber);


// console.log(stringNumber, integerNumber);
// console.log(-5/0);

const ageA = "";
const ageB = 23;
const ageC = 18;


const ageABC = ageB + ageA + ageC;
// console.log(ageABC);


const anthem1 = "arise o' compatriot \n";
const anthem2 = "Nigeria's call obey \n";
const anthem3 = "To serve our fatherland \n"
const anthem = anthem1 + " " + anthem2 + " " + anthem3;
// console.log(anthem)

// const newAnthem = "Arise o' compatriot" + "Nigeria's call obey" + "To serve our fatherland"
// /n  === newline;
// /t 
// /

// there are 80 boyts and 34 girls in this class
const nBoys = 80;
const nGirls = 15;

const statementA = "there are " + nBoys + " boys and " + nGirls + " girls in this class";
// console.log(statementA);

const statementB = `there are ${nBoys} boys and ${nGirls} girls in this class`

// console.log(statementB);

const statementC = `${23 +99}`
// console.log(statementC);


// Operators Operands
// + - * / %
const addNum = nGirls + nBoys;
const subNum = nGirls - nBoys;
const multNum = nBoys * nGirls;
const divNum = nBoys / nGirls;
const remNum = nBoys % nGirls;
// console.log(addNum, subNum, multNum, divNum, remNum)

let size = 12;
// console.log(++size)

// size = size + 5
size %= 5;
// console.log(size)

/**
 * Arrays in JS
 */

const bibleNames = ["matthew", "mark", "luke", "john", 6, true];
// console.log(bibleNames.length)
// console.log(bibleNames.push("acts"))
// console.log(bibleNames.push(45))
// console.log(bibleNames.pop())
// console.log(bibleNames.shift())
// console.log(bibleNames.unshift("malachi"))

const joinedNames = bibleNames.join(",!")
console.log(joinedNames)

const myOnlyName = "Olakunle Balogun Olaoluwa";
console.log(myOnlyName.split("l"))
// ["O", "akun","e Ba", "ogun", "O", "ao" ,"uwa"]
// ["Ol", "kunle B", "logun Ol", "oluw", ""]

const realBibleNames = bibleNames.slice(0,4)
console.log(bibleNames.indexOf("mark"))

const mosesBooks = ["Genesis", "Exodus", "Leviticus", "Number", "Deuteronomy"]
const booksOfProphets = ["Judges", "Kings 1", "Kings 2", "Joshua"];

const oldTestaments = mosesBooks.concat(booksOfProphets)
console.log(mosesBooks)
console.log(oldTestaments)


console.log(realBibleNames)
console.log(bibleNames)


/***
 * 
 * 1. if and esle,
 * 2. loops
 * 3. conditions,
 * 4. falsy and truthy values
 * 5. ternary
 * 6. swicth statement
 * 7. operators
 * 8. Functions
 */