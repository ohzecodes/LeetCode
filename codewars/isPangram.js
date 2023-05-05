// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

const removeSpaces = (string) => string.replace(/\s{1,}/g, "");

const removeNonWords = (string) => string.replace(/\W+/g, "");

const removeNumbers = (string) => string.replace(/[0-9]/g, "");

const sanitizeString = (givenString) =>
  removeSpaces(removeNumbers(removeNonWords(givenString)));

function isPangram(givenString) {
  // rid of Punctuations and numbers
  const finalStringArr = sanitizeString(givenString).toUpperCase().split("");
  // this is not neccassary
  finalStringArr.map((e) => e.charCodeAt(0));

  const uniqueCodes = [...new Set(finalStringArr)].sort();
  return uniqueCodes.length === 26;
}
console.log(isPangram("When zombies arrive quickly fax judge pat")); //true
console.log(isPangram("A quick brown fox jumps over the lazy dog")); //true
