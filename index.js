// ----------------------------------------------------------------------------------------------------------
// 1)-----Double Char-----
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

// ----------------------------------------------------------------------------------------------------------

// 2)-----Find the divisors!-----

// Create a function named divisors/Divisors that takes an integer n > 1 and returns
// an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime' 
// (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, 
// String> in Rust).

function divisors(integer) {
    if(integer <= 1) {
      return 'Please provide an integer greater than 1.'
    }
    const divisorsArr = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) divisorsArr.push(i);
    return divisorsArr.length ? divisorsArr : integer + ' is prime'
  };
//  1. Check if n is less than or equal to 1.
//  2. Initialize an empty array divisorsArray to store divisors.
//  3. Iterate through potential divisors using a for loop
//  4. Check if there are divisors:
//      * If the length of divisorsArray is 0, it means there are no divisors, and the 
//      function returns a string indicating that n is prime.
//  5. Sort and return the array of divisors.

// ----------------------------------------------------------------------------------------------------------
