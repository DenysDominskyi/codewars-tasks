// -----Double Char-----
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

const doubleChar = str => [...str].map(char => char.repeat(2)).join('')
// use spread operator [...str] to convert the string into an array of characters
// 'map' method is used to repeat each character twice
// join('') is used to concatenate the characters back into a string