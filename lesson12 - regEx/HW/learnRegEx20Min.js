// regexr.com

let text = `The fat cat ran down the street.
            It was searching for a mouse to eat.`

let regEx = /[abc]/gi; 

let outcome = text.match(regEx);

console.log(outcome);

let cellNum = '+359878123456';
let cellMatcherBelt = /\+3598[7-9][0-9][0-9]{6}/g; //beginning string, 2 digits 7 to 9, 6 digits 0 to 9;
let cellMatcher = /\+3598[7-9]{2}[0-9]{6}/g; //beginning string, 2 digits 7 to 9, 6 digits 0 to 9;
let cellMatcherAlt = /\+3598[7-9]\d{7}/g; //beginning string, one digit 7 to 9, 7 digits

let isItCell = cellNum.match(cellMatcherBelt);
console.log(isItCell);