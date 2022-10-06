// TASK 1
// Word Boundaries

//g
/\b(?:word)\b/gi            // 16

// Task 3 
// With regex you can count the number of matches. 
// Can you make it return the number of uppercase consonants (B,C,D,F,..,X,Y,Z) in a given string? 
// E.g.: it should return 3 with the text ABcDeFO!. Note: Only ASCII. We consider Y to be a consonant!
// Example: the regex /./g will return 3 when run against the string abc.

/[BCDFGHJKLMNPQRSTVWXYZ]/g  // 26
/[B-DF-HJ-NP-TV-Z]/g        // 20
/(?![AeIOU])[A-Z]/g         // 19
/(?![EIOU])[B-Z]/g          // 18

// Task 4
// Retrieve numbers
// Count the number of integers in a given string. Integers are, for example: 1, 2, 65, 2579, etc.

/.*?\d{1,}.*?/g
/(?:\d{1,})/g
/(?:\d+)/g

// Task 5 - Whitespace
// Find all occurrences of 4 or more whitespace characters in a row throughout the string.

/[\s]{4,}/g                 // 11

// TASK 6 - BROKEN KEYBOARD
// Oh no! It seems my friends spilled beer all over my keyboard last night and my keys are super sticky now. 
// Some of the time whennn I press a key, I get two duplicates.

// Can you ppplease help me fix thhhis?

// Task 7 - Validate an IP
// Validate an IPv4 address. 
// The addresses are four numbered separated by three dots, 
// and can only have a maximum value of 255 in either octet. 
// Start by trying to validate 172.16.254.1.

/[1|2]?[0-9]{0,2}[.][1|2]?[0-9]{0,2}[.][1|2]?[0-9]{0,2}[.][1|2]?[0-9]{0,2}/g // goes through 99/146 tests

/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]?)\.
(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]?)$/ // 174

/^(?:25[0-5]|2[0-4]\d|[01]?\d?\d?)\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d?)\.
(?:25[0-5]|2[0-4]\d|[01]?\d?\d?)\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d?)$/ // 138

/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d?)$/