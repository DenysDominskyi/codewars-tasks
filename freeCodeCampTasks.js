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