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