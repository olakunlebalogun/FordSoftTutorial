console.log("Hello world")

// Redeclaration
let praise = "Black Praise";
praise.toUpperCase();
 praise = "Yellow pawpaw"

 // String
let str = "    Hello People    "
/**
 * 
 *  Hello People
 *  01234567891011
 *  
 * 
 *  String literals
 *  */

 const charAtThree = str.charAt(3);
 console.log("This is the character at three: " + charAtThree)

 const codeAtThree = str.charCodeAt(3);
 console.log(codeAtThree)

 const pointAtThree = str.codePointAt(3);
 console.log(pointAtThree)

 const concatValue = str.concat(' ',praise, " Visual Studio");
 console.log(concatValue)


 // str  = "Hello People"

 const endwith = str.endsWith("ole");
 console.log(endwith)

 const inc = str.includes("llo ");
 console.log(inc);

 const index = str.indexOf("l")
 console.log(index)

 const lastIndex = str.lastIndexOf("l")
 console.log(lastIndex)

const padStr = str.padEnd(4,"a");
console.log(padStr)

// str.repeat(5);
console.log(str.repeat(5))


const ide = "Visual Studio \n";
console.log(ide.repeat(3))

console.log(str.slice(0, 7))

console.log(str)
console.log(str.substring(5));

console.log(str.trim())

/**
 * Number
 * 
 * 
 */

const myAge = 67;
const myHeight = Number(44)

const name = "olakunle";
const bigName = String("azerbajan")

console.log(Number.EPSILON)
console.log(Number.MAX_VALUE)
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN)

// class conversion
// final constant
// String literals

/**
 * 
 * @Java
 * int final NO_OF_STATES = 36;
 */

// prompt("How many are we?   ")

const newAge = 56
 const strAge = newAge.toString()
 console.log(newAge, strAge);
