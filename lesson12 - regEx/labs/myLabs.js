//simple example;

let userMail = 'pdb@mail.com';

let regEx = /@/;

if( regEx.test(userMail) ){
    console.log('There is a match.');
} else {
    console.log('There\'s no match.');
}

//array of strings

let strings = [
    'alabala',
    ' alabala',
    'Astronomy',
    'the apple'
];
let regEx = /^a/;

strings.forEach((str) =>
    regEx.test(str) ?
    console.log(`"${str}" is a match!`) :
    console.log(`This is not a match: ${str}`)
);

// Modifiers/Flags example

let str = `alAbAla`;
let matched; 

matched = str.match(/a/); // no flags
console.log(`Matches: ${matched}`);
// matched: a (only one -> the first one)

matched = str.match(/a/g); // global flag
console.log(`Matches: [${matched}]`);
// matched: a, a (all lowercase a's)

matched = str.match(/a/gi); // global and case insensitive flags
console.log(`Matches: [${matched}]`);
// matched: a,A,A,a -> all occurences of 'a' and 'A'


// Character Sets Example
sample = 'buoyant'.match(/[aeiouy]/g);
console.log(`Matched: ${sample}`); // u, o y, a

sample = 'sequoia'.match(/[aouiey]+/g)
console.log(`Matched: ${sample}`); // e, uoia

sample = '+359887594720'.match(/\+3598[7-9][0-9]{7}/g);
console.log(`Matched: ${sample}`);

sample = '+35988759472&'.match(/\+3598[7-9][\W\S]{7}/g); // Non-word & non-space
console.log(`Matched: ${sample}`);

// Character Classes

let key = /[a-z]\w+/g
let strings = [
    'petrov42',
    '42petrov',
    'ivan_pterov',
];

strings.forEach((str) => 
    console.log(`'${str.match(key)}' matched in ${str}`));

// Greedy Quantifiers

let str = 'ala bala';

// matched = str.match(/a.*a/);
// console.log(`* matched: ${matched}`);

// matched = str.match(/a.+a/);
// console.log(`+ matched: ${matched}`);

// matched = str.match(/a.?a/);
// console.log(`? matched: ${matched}`);

matched = str.match(/a.{4}a/);
console.log(`{} matched: ${matched}`);
console.log(matched);

// Non-Greedy Quantifiers

let str = 'ala bala portokala';
matched = str.match(/a.{1, 10}?a/);
console.log(`${matched}`);

// Quantifiers Example

let matched = 'ala aa bala portokala'.match(/a.?a/g);
console.log(`${matched}`);

let matched = 'ala aa bala portokala'.match(/a.{3,100}a/g);
console.log(`${matched}`);

let matched = 'ala aa bala portokala'.match(/a.{3,}a/g);
console.log(`${matched}`);

let matched = 'ala aa bala portokala'.match(/a.{2,}?a/g)
console.log(`${matched}`)

// Anchors and Boundaries

// ^ beginning of string/line
// $ end of string/line
// \b matches word boundaries between \w and \W

let regEx = /\b/g;
let strings = [
    '',
    'a',
    '@',
    'aa',
    'a!',
    'a,a',
];

strings.forEach(element => {
    let result = element.match(regEx);
    result && console.log(`${result.length} in '${element}'`);
});

// Anchors and Boundaries Examples

let regEx = /^a\w+\a$/g;
var strings = [
    'ana',
    'ana bel',
    'anabella'
];

strings.forEach(str =>
    {
        let result = str.match(regEx);
        result && console.log(result.toString().length);
    });

// another example

let regEx = /\b[\w-]+\b/gi;
let stringArr = [
    'one two three four, five, six. Seven!',
    'one-two,three!'
];

stringArr.forEach(str => {
    let result = str.match(regEx);
    result && console.log(`${result.length} matches in '${str}'`)
});

// Alternation example

// TASK: match stings containing 'strawberries' or 'raspberries' words:
// NB: this is not example of good practice for grouping regex. Why? => check next slides

const regEx = /\b(straw|rasp)?berries/; // It matches 'berries' as well -> straw|rasp is optional
const strings = [
    'Icecream with strawberries? Yes!',
    'Icecream with blueberries? No!',
    'Icecream with raspberries? Yes!',
    'Icecream with berries? Yes!'
];

strings.forEach(str => 
    str.match(regEx) ?
    console.log(`YES YES ${str} YES YES`) :
    console.log(`NO NO ${str} NO NO`)
);

// Lookahead / Lookbehind

// TASK: match strings that are at least 4 symbols long with at least one digit in it:

const tests = [
    "abcd", 		// not (missing digit)
    "ab1d", 		// ok
    "1bcd", 		// ok
    "abcd123", 		// ok
    "123" 		    // not (length)
];

const regEx = /^(?=.*\d).{4,}/gi;

tests.filter(str => str.match(regEx))
    .forEach(str => console.log({str}));


// TASK: filter only valid passwords:
// a valid password is
// 	1. at least 6 symbols long
// 	2. must contain at least one letter and number

const tests = [
    "a@# cdfasas!", 	// not (missing digit)
    "a@#9cdfas", 		// ok
    "1a@#sda", 		// ok
    "1@@@1344", 		// not (missong letter)
    "123ab", 		// not (length)
];

const regExKey = /^(?=.*\d)(?=.*[A-Za-z]).{6,}/g

tests.filter(str => str.match(regExKey))
    .forEach(str => console.log(`The match: '${str}'`))