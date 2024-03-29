

// _______________________________________________________________________________________________________________

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

// _______________________________________________________________________________________________________________

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

// _______________________________________________________________________________________________________________

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

// _______________________________________________________________________________________________________________

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

// _______________________________________________________________________________________________________________

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

function lastDigit(a, b) {
  const base = Number(a % 10n);

  if (base === 0n || base === 1n) {
    return base;
  }

  let result = 1n;
  a = a % 10n; // Reduce 'a' to its last decimal digit

  while (b > 0n) {
    if (b % 2n === 1n) {
      result = (result * a) % 10n;
    }
    a = (a * a) % 10n;
    b = b / 2n;
  }

  return result;
}

// console.log(lastDigit(9n, 7n))

// _______________________________________________________________________________________________________________

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
  // Convert the number to a string to iterate through its digits
  while (n >= 10) {
    // Sum the digits using reduce
    n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return n;
}

// console.log(digitalRoot(493193));  // Output: 2

// _______________________________________________________________________________________________________________

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

// _______________________________________________________________________________________________________________

// 8)----- Roman Numerals Encoder -----

// Create a function taking a positive integer between 1 and 3999 (both included) as its 
// parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting 
// with the left most digit and skipping any digit with a value of zero. In Roman 
// numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is 
// written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000);  should return 'M'

function toRoman(number){
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
// ------------------------------
function toArabic(roman) {
  const romanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentSymbolValue = romanNumerals[roman[i]];
    const nextSymbolValue = romanNumerals[roman[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++; // Skip the next symbol since it's already considered
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}
// console.log(toRoman(1994))
// console.log(toArabic("MDCLXVI"))

// _______________________________________________________________________________________________________________

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

// console.log(solution('whatIfIWriteThisText'))

// _______________________________________________________________________________________________________________

// 10)----- WeIrD StRiNg CaSe -----

// Write a function that accepts a string, and returns the same string with all 
// even indexed characters in each word upper cased, and all odd indexed characters 
// in each word lower cased. The indexing just explained is zero based, so the 
// zero-ith index is even, therefore that character should be upper cased and you 
// need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words. Words will be separated 
// by a single space(' ').

function capitalizeEvenIndices(str) {
  return str.split(' ').map(word =>
    word.split('').map((char, index) =>
    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('')
    ).join(' ')
}
  
// console.log(capitalizeEvenIndices('If i write something, how it will looks like?'))
  
// _______________________________________________________________________________________________________________
  
// 11)----- Maximum subarray sum -----

// The maximum sum subarray problem consists in finding the maximum sum 
// of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum 
// sum is the sum of the whole array. If the list is made up of only negative 
// numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list 
// or array is also a valid sublist/subarray.

function maxSequence(arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let maxSum = 0;
  let currentSum = 0;
  
  for (const num of arr) {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, 5, -4]))

// _______________________________________________________________________________________________________________
  
// 12)----- Next bigger number with the same digits -----

// Create a function that takes a positive integer and returns the next bigger number that 
// can be formed by rearranging its digits. For example:
//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, 
// None in Rust):
//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBiggerNumber(num) {
  // Convert the number to an array of digits
  const digits = num.toString().split('')
  
  // Find the first pair of digits from the right that is in decreasing order
  let i = digits.length - 1;
  while (i > 0 && digits[i] <= digits[i - 1]) {
    i--
  }
  
  // If no such pair is found, the number is already the largest possible.
  // Return -1 to indicate no greater number is possible
  if (i === 0) return -1
  
  // Find the smallest digit to the right of the pair and larger than the digit at the pair
  let j = digits.length - 1
  while (digits[j] <= digits[i - 1]) {
    j--;
  }
  
  // Swap the digits at positions i-1 and j
  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]]
  
  // Reverse the digits to the right of position i-1
  digits.splice(i, digits.length - i, ...digits.slice(i).reverse())
  
  // Convert the array back to a number
  const result = parseInt(digits.join(''), 10)
  
  return result
}

// console.log(nextBiggerNumber(2017))

// _______________________________________________________________________________________________________________
  
// 13)----- Pete, the baker -----

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately 
// he is not good in maths. Can you help him to find out, how many cakes he could bake 
// considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available 
// ingredients (also an object) and returns the maximum number of cakes Pete can 
// bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of 
//   flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present 
//   in the objects, can be considered as 0.

function cakes(recipe, available) {
  // Use Object.keys to iterate over recipe ingredients
  return Object.keys(recipe).reduce((minCakes, ingredient) => {
    // Check if the ingredient is present in the available ingredients
    if (available.hasOwnProperty(ingredient)) {
      // Calculate the ratio of available ingredient to recipe ingredient
      const ratio = Math.floor(available[ingredient] / recipe[ingredient]);
      // Update minCakes to the minimum of current minCakes and ratio
      return Math.min(minCakes, ratio);
    } else {
      // If the ingredient is not present, Pete can't bake any cakes
      return 0
    }
  }, Infinity) // Initialize minCakes to Infinity for the first comparison
}

// Example usage:
const recipe = {flour: 500, sugar: 200, eggs: 1}
const available = {flour: 18000, sugar: 25000, eggs: 400, milk: 1000}

// console.log(cakes(recipe, available))

// _______________________________________________________________________________________________________________
  
// 14)----- RGB To Hex Conversion -----

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will 
// result in a hexadecimal representation being returned. Valid decimal values for RGB 
// are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

function rgb(r, g, b) {
  // Ensure values are in the valid range (0 - 255)
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));
  
  // Convert decimal values to hexadecimal and pad with zeros if needed
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  
  // Concatenate the hexadecimal values
  let color = hexR + hexG + hexB
  
  return color.toUpperCase()
}

// console.log(rgb(148, 0, 211))

// _______________________________________________________________________________________________________________
  
// 15)----- Tic-Tac-Toe Checker -----

function isSolved(board) {
  // board = board.join('-').replace(/,/g,'');
  //  if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  //  if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  //  if(/0/.test(board)) return -1;
  //  return 0;
  
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === board[i][1] && board[i][1] === board[i][2]) ||
      (board[0][i] === board[1][i] && board[1][i] === board[2][i])
      ) {
        if (board[i][i] !== 0) {
          return board[i][i]; // Return the winner (1 for "X", 2 for "O")
        }
      }
    }
    
    // Check diagonals
    if (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) {
      if (board[1][1] !== 0) {
        return board[1][1]; // Return the winner (1 for "X", 2 for "O")
      }
    }
    
    // Check for empty spots
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          return -1; // Board is not finished, and no one has won yet
        }
      }
    }
    
    return 0
  }
  
  // console.log(isSolved([[1,2,2],
  // [0,2,2],
  // [2,1,0]]))

  // _______________________________________________________________________________________________________________
    
  // 16)----- Roman Numerals Helper -----
  
  class RomanNumerals {
    
    static toRoman(number) {
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

  static fromRoman(roman) {
    const romanNumerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < roman.length; i++) {
      const currentSymbolValue = romanNumerals[roman[i]];
      const nextSymbolValue = romanNumerals[roman[i + 1]];
      
      if (nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++; // Skip the next symbol since it's already considered
      } else {
        result += currentSymbolValue;
      }
    }
    
    return result;
  }
}

// _______________________________________________________________________________________________________________
  
// 17)----- Moving Zeros To The End -----

// Write an algorithm that takes an array and moves all of the zeros to the 
// end, preserving the order of the other elements.

function moveZeros(arr) {
  const zeroArr = arr.filter(e => e === 0)
  return arr.filter(e => e !== 0).concat(zeroArr)
  // return arr.sort((a, b) => b === 0 ? -1 : 0);
}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

// _______________________________________________________________________________________________________________
  
// 18)----- Directions Reduction -----

function dirReduc(arr){
  const oppositeDirections = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  };

  const simplifiedDirections = [];

  for (const direction of arr) {
    const lastDirection = simplifiedDirections[simplifiedDirections.length - 1];

    if (lastDirection === oppositeDirections[direction]) {
      // If the current direction is opposite to the last direction, remove the last direction
      simplifiedDirections.pop();
    } else {
      // Otherwise, add the current direction to the simplified directions
      simplifiedDirections.push(direction);
    }
  }

  return simplifiedDirections;
}

// console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]))


// _______________________________________________________________________________________________________________
  
// 19)----- Calculating with Functions -----
const zero = (operation) => (operation ? operation(0) : 0);
const one = (operation) => (operation ? operation(1) : 1);
const two = (operation) => (operation ? operation(2) : 2);
const three = (operation) => (operation ? operation(3) : 3);
const four = (operation) => (operation ? operation(4) : 4);
const five = (operation) => (operation ? operation(5) : 5);
const six = (operation) => (operation ? operation(6) : 6);
const seven = (operation) => (operation ? operation(7) : 7);
const eight = (operation) => (operation ? operation(8) : 8);
const nine = (operation) => (operation ? operation(9) : 9);

const plus = (x) => (y) => y + x;
const minus = (x) => (y) => y - x;
const times = (x) => (y) => y * x;
const dividedBy = (x) => (y) => Math.floor(y / x);
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// _______________________________________________________________________________________________________________
  
// 20)----- Simple Pig Latin -----
function pigIt(str){
  return str.split(' ').map(word => /\W/.test(word) ? word : word.replace(/^(.)(.*)$/, '$2$1') + 'ay').join(' ')
}
// console.log(pigIt('Pig latin is cool ?'))


// _______________________________________________________________________________________________________________
  
// 21)----- Human Readable Time -----
function humanReadable (seconds) {
  if (seconds < 0 || seconds > 359999) {
    return "Invalid input";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
// console.log(humanReadable(9999))

// _______________________________________________________________________________________________________________
  
// 22)----- The Hashtag Generator -----
function generateHashtag(str) {
  // Check if the input string is empty or falsy
  if (!str || str.trim() === "") {
    return false;
  }

  // Capitalize the first letter of each word and join them
  const capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  // Create the hashtag by adding '#' at the beginning
  const hashtag = `#${capitalizedStr}`;

  // Check if the length is within the limit
  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
// console.log(generateHashtag("Codewars"))

// _______________________________________________________________________________________________________________




// 23)----- Product of consecutive Fib numbers -----
function productFib(prod) {
  let [prev, current] = [0, 1];

  while (prev * current < prod) {
    [prev, current] = [current, prev + current];
  }

  return [prev, current, prev * current === prod];
}
// console.log(productFib(714)); // should return [21, 34, true]


// _______________________________________________________________________________________________________________

// 24)----- First non-repeating character -----
function firstNonRepeatingLetter(str) {
  // Convert the string to lowercase to handle case insensitivity
  const lowerCaseStr = str.toLowerCase();

  // Loop through each character in the string
  for (let i = 0; i < lowerCaseStr.length; i++) {
    // Get the current character
    const currentChar = lowerCaseStr[i];

    // Check if the current character is repeated anywhere in the string
    if (lowerCaseStr.indexOf(currentChar) === lowerCaseStr.lastIndexOf(currentChar)) {
      // If not repeated, return the original character from the input string
      return str[i];
    }
  }

  // If all characters are repeated, return an empty string
  return "";
}
// console.log(firstNonRepeatingLetter('stress'))

// _______________________________________________________________________________________________________________

// 25)----- Weight for weight -----
function orderWeight(strng) {
  const sum = str => str.split('').reduce((sum, num) => sum + parseInt(num), 0)
  const sortedArr = strng
    .split(' ')
    .sort((a, b) => {
      const sumA = sum(a)
      const sumB = sum(b)
      return sumA === sumB ? a.localeCompare(b) : sumA - sumB
    })
  return sortedArr.join(' ')
}
// console.log(orderWeight("103 123 4444 99 2000"))

// _______________________________________________________________________________________________________________

// 26)----- Greed is Good -----
function score(dice) {
  const rules = {
    1: { threeOfAKind: 1000, single: 100, singleWithFive: 150 },
    2: { threeOfAKind: 200 },
    3: { threeOfAKind: 300 },
    4: { threeOfAKind: 400 },
    5: { threeOfAKind: 500, single: 50, singleWithOne: 150 },
    6: { threeOfAKind: 600 }
  };

  const counts = {}
  dice.forEach(num => counts[num] ? counts[num]++ : counts[num] = 1)

  let score = 0;

  for (let num in counts) {
    if (counts[num] >= 3) {
      score += rules[num].threeOfAKind;
      if (num === "1") {
        score += (counts[num] - 3) * rules[num].single;
      } else if (num === "5") {
        score += (counts[num] - 3) * rules[num].single;
        if (counts["1"]) {
          score += (counts[num] - 3) * rules[num].singleWithOne;
        }
      }
    } else if (num === "1") {
      score += (counts[num]) * rules[num].single;
    } else if (num === "5") {
      score += (counts[num]) * rules[num].single;
    }
  }

  return score;
}
// console.log(score( [1, 5, 1, 4, 3] ))

// _______________________________________________________________________________________________________________



// 26)-----  -----

// _______________________________________________________________________________________________________________
  