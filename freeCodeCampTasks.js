// ----------------------------------------------------------------------------------------------------------

// 1)----- Reverse a String -----
const reverseString = str => str.split('').reverse().join('');

// ----------------------------------------------------------------------------------------------------------

// 2)----- Factorialize a number -----
const factorialize = num => num <= 0 ? 1 : num * factorialize(num - 1)
// console.log(factorialize(5));

// ----------------------------------------------------------------------------------------------------------

// 3)----- Find the Longest Word in a String -----
function findLongestWordLength(str) {
  const words = str.split(' ');
  const longestWordLength = words.reduce((maxLength, word) => {
    return Math.max(maxLength, word.length);
  }, 0);
  return longestWordLength;
}
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// ----------------------------------------------------------------------------------------------------------

// 4)----- Return Largest Numbers in Arrays -----
const largestOfFour = arr => {
    let finalArr = []
    arr.map(e => finalArr.push(Math.max(...e)))
    return finalArr;
}
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// ----------------------------------------------------------------------------------------------------------

// 4)----- Confirm the Ending -----
const confirmEnding = (str, target) => str.substring(str.length - target.length) === target
// console.log(confirmEnding("Bastian", "n"))

// ----------------------------------------------------------------------------------------------------------

// 5)----- Repeat a String Repeat a String -----
const repeatStringNumTimes = (str, num) => num >= 0 ? str.repeat(num) : ''
// console.log(repeatStringNumTimes("abc", 3))

// ----------------------------------------------------------------------------------------------------------

// 6)----- Truncate a String -----
const truncateString = (str, num) => str.length > num ? str.slice(0, num) + '...' : str
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// ----------------------------------------------------------------------------------------------------------

// 7)----- Truncate a String -----
function booWho(bool) {
  return typeof(bool) === 'boolean' ? true : false;
}
// console.log(booWho(null))

// ----------------------------------------------------------------------------------------------------------

// 8)----- Title Case a Sentence -----
function titleCase(str) {
  return str
  .toLowerCase()
  .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
// console.log(titleCase("I'm a little tea pot"))

// ----------------------------------------------------------------------------------------------------------

// 9)----- Slice and Splice -----
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// ----------------------------------------------------------------------------------------------------------

// 10)----- Where do I Belong -----
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  
  return arr.length;
  // return arr.filter(val => num > val).length;
}
// console.log(getIndexToIns([40, 60], 50))

// ----------------------------------------------------------------------------------------------------------

// 11)----- Mutations -----
function mutation(arr) {
  return arr[1]
  .toLowerCase()
  .split("")
  .every(function(letter) {
    return arr[0].toLowerCase().indexOf(letter) !== -1;
  });
}
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))

// ----------------------------------------------------------------------------------------------------------

// 12)----- Chunky Monkey -----
function chunkArrayInGroups(arr, size) {
  let newArr = []
  for(let i = 0; i < arr.length; i += size){
    newArr.push(arr.slice(i, i + size))
  }
  return newArr;
}
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// ----------------------------------------------------------------------------------------------------------

const numbers = [ 8.8, 8.6, 9, 8.3 ];

const average = numbers.reduce((acc, num, index, arr) => {
  if(index === arr.length - 1) {
    return (acc + num) / arr.length
  } else {
    return acc + num
  }
})

// console.log(average)

// ----------------------------------------------------------------------------------------------------------

// 13)----- Search and Replace -----

function myReplace(str, before, after) {
  const newArr = str.split(' ')
  const [wordToChange] = newArr.filter(i => i === before)
  const replace = wordToChange[0] === wordToChange[0].toUpperCase() 
  ? after[0].toUpperCase() + after.slice(1)
  : after[0].toLowerCase() + after.slice(1)
  return newArr.map(i => i === before ? replace : i).join(' ');
}

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))

// ----------------------------------------------------------------------------------------------------------

// 14)----- Missing letters -----
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
   /* code of current character */
   const charCode = str.charCodeAt(i);
   
   /* if code of current character is not equal to first character + no of iteration
   then a letter was skipped */
   if (charCode !== str.charCodeAt(0) + i) {
     /* if current character skipped past a character find previous character and return */
     return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}
// console.log(fearNotLetter("abce"))

// ----------------------------------------------------------------------------------------------------------

// 15)----- Sorted Union -----
const uniteUnique = (...arr) => [...new Set(arr.flat())];

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// ----------------------------------------------------------------------------------------------------------

// 17)----- Sum All Primes -----
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
// console.log(sumPrimes(10))

// ----------------------------------------------------------------------------------------------------------

// 18)----- Smallest Common Multiple -----

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}
// console.log(smallestCommons([1, 5]))

// ----------------------------------------------------------------------------------------------------------

// 19)----- Steamroller -----

function steamrollArray(arr) {
  const flattenedArray = []
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i])
    }
  }
  return flattenedArray;
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]))

// ----------------------------------------------------------------------------------------------------------

// 20)----- Arguments Optional -----
function addTogether() {
  const [first, second] = arguments;

  function addSecond(second) {
    if (typeof (second) === "number") return first + second;
  }

  if (typeof (first) === "number") {
    if (arguments.length === 1) return addSecond;
    if (arguments.length === 2) return addSecond(second);
  }
}
// console.log(addTogether(2,5))

// ----------------------------------------------------------------------------------------------------------

// 21)----- Palindrome Checker -----
function palindrome(str) {
  let origin = str
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
  let reversed = origin
    .split('')
    .reverse()
    .join('')
  return origin === reversed
}
// console.log(palindrome("not a palindrome"))




// ----------------------------------------------------------------------------------------------------------

// 22)----- Telephone Number Validator -----
function telephoneCheck(str) {
  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}

console.log(telephoneCheck("1 555-555-5555"))
// telephoneCheck("555-555-5555")

// ----------------------------------------------------------------------------------------------------------

// 23)----- Cash Register -----
function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let change = [];
  let totalCid = 0;

  // Calculate the total cash in drawer
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = Number(totalCid.toFixed(2))

  // Check if there's insufficient funds
  if (changeDue > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  }

  // Check if exact change is possible
  if (changeDue === totalCid) {
    return { status: "CLOSED", change: cid }
  }

  // Calculate change
  for (let i = cid.length - 1; i >= 0; i--) {
    const denomination = currencyUnit[cid[i][0]]
    const availableAmount = cid[i][1]
    const maxPossibleCoins = Math.floor(availableAmount / denomination)
    let coinsToReturn = Math.min(maxPossibleCoins, Math.floor(changeDue / denomination))

    if (coinsToReturn > 0) {
      change.push([cid[i][0], coinsToReturn * denomination])
      changeDue = Number((changeDue - coinsToReturn * denomination).toFixed(2))
    }
  }

  // Check if changeDue is not completely paid
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  }

  return { status: "OPEN", change: change }
}
// console.log(checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01], 
//   ["NICKEL", 2.05], 
//   ["DIME", 3.1], 
//   ["QUARTER", 4.25], 
//   ["ONE", 90], 
//   ["FIVE", 55], 
//   ["TEN", 20], 
//   ["TWENTY", 60], 
//   ["ONE HUNDRED", 
//   100]]))