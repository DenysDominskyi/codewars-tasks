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

// 3)-----Playing with digits-----

// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, 
// if it exists, such that the sum of the digits of n raised to consecutive powers 
// starting from p is equal to k * n.

function digPow(n, p){
  let arrN = n.toString().split('').map(Number)
  let newArr = []
  for (let i = 0; i < arrN.length; i++) {
    let sumN = arrN[i] ** (p + i)
    newArr.push(sumN)
  }
  newArr = newArr.reduce((a, b) => a + b, 0)
  return Number.isInteger(newArr / n) ? newArr / n : -1
}

// ----------------------------------------------------------------------------------------------------------

// 4)-----Tribonacci Sequence-----

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) 
// numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), 
// we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically 
// shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given 
// a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return 
// an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)


function tribonacci(signature,n){

  // if (n === 0) return [];
  // for (let i = 3; i < n; i++) {
  //   signature.push(signature.slice(i - 3, i).reduce((sum, n) => sum + n, 0));
  // }
  // return signature.slice(0, n);
  
  // If n is 0, return an empty array
  if(n === 0) return []
  // If n is less than or equal to 3, return the first n elements of the signature
  if(n <= 3) return signature.slice(0, n)
  // Create a copy of the signature array
  const tribonacciSequence = [...signature]
  // Iterate starting from the fourth element up to the nth element
  for (let i = 3; i < n; i++) {
    // Calculate the next element in the sequence by summing the last three elements
    const nextElement = tribonacciSequence[i - 1] + 
      tribonacciSequence[i - 2] + tribonacciSequence[i - 3]
    // Push the next element to the tribonacciSequence array
      tribonacciSequence.push(nextElement)
  }
  // Return the resulting Tribonacci sequence
  return tribonacciSequence
}


// ----------------------------------------------------------------------------------------------------------

// 5)-----Last digit of a large number-----

// Define a function that takes in two non-negative integers a and b and returns 
// the last decimal digit of a^b. Note that a and b may be very large! For example, 
// the last decimal digit of 9^7  is 9, since 9^7 = 4782969. You may assume that the 
// input will always be valid.  The last decimal digit of (2^200)^2^300 , which has 
// over 10^92 decimal digits, is 6. Also, please take 0^0  to be 1. You may assume 
// that the input will always be valid. Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n  
// lastDigit(10n,10000000000n)  // returns 0n


// ----------------------------------------------------------------------------------------------------------


// 6)-----Last digit of a large number-----

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input 
// will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  debugger
  // Convert the number to a string to iterate through its digits
  while (n >= 10) {
    // Sum the digits using reduce
    n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return n;
}

// console.log(digitalRoot(493193));  // Output: 2


// ----------------------------------------------------------------------------------------------------------


// 7)----- Extract the domain name from a URL -----

// Write a function that when given a URL as a string, parses out just the domain 
// name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function getDomainName(url) {
  // Remove protocol (http:// or https://) and www.
  let domain = url.replace(/(https?:\/\/)?(www\.)?/, '');
  // // Extract domain name using regex
  const match = domain.match(/^([a-z0-9-]+)\./i);
  
  // // Return the matched domain name or an empty string if no match found
  return match ? match[1] : '';
}

const url1 = "http://github.com/carbonfive/raygun";
// console.log(getDomainName(url1));


// ----------------------------------------------------------------------------------------------------------


// 8)----- Roman Numerals Encoder -----

// Create a function taking a positive integer between 1 and 3999 (both included) as its 
// parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting 
// with the left most digit and skipping any digit with a value of zero. In Roman 
// numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is 
// written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000);  should return 'M'

function solution(number){
  if (number < 1 || number > 3999) {
    return "Number out of range (1-3999).";
  }
  
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let result = "";
  
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }
  
  return result;
}

// console.log(solution(1994))


// ----------------------------------------------------------------------------------------------------------


// 9)----- Break camelCase -----
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let newString = ''
  for(letter of string){
    if(letter == letter.toUpperCase()){
      newString += ' '
      newString += letter
    } else {
      newString += letter
    }
  }
  
  return newString
}

console.log(solution('whatIfIWriteThisText'))