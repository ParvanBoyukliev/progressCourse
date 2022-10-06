// TASK:
// From a given string find and print all words. For us, a word must follow next specification:
// 	1. Word is a string with at least 3 <word symbol> in it.
// 	2. <word symbol> can be any of: Latin letters, dash, underscore and numbers.
// 	3. A Word must start with a Latin letter.

// Examples:
// 	"this" is a word ('this' has more than 3 <word symbol>).
// 	"know-how" is one word (by spec, the dash is a <word symbol>).
// 	"1st" is NOT a word, because it doesn't start with letter!
// 	"R2-D2" is a word, because it starts with letter!

// TEST CASE:
const testStr = `this is not meaningful.R2-D2 is a robot, first_second,1st of July`;

// YOUR CODE HERE
let regExAlpha = /[A-Za-z][\w-]{2,}/g;
let regExBeta;

testStr.match(regExAlpha).forEach(str => console.log(str));



// EXPECTED OUTPUT:
// this
// not
// meaningful
// R2-D2
// robot
// first_second
// July