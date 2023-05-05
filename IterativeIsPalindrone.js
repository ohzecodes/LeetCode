function isPalindrome(givenString) {
  for (
    let i = 0, lastIndex = givenString.length - 1;
    i <= lastIndex;
    i++, lastIndex--
  ) {
    if (givenString[i] !== givenString[lastIndex]) {
      return false;
    }
  }
  return true;
}

function reverseString(givenString) {
  const CharecterArray = givenString.split("");
  for (
    let i = 0, lastIndex = givenString.length - 1;
    i <= lastIndex;
    i++, lastIndex--
  ) {
    //switching Algorithm
    let charAtIndex = CharecterArray[i];
    CharecterArray[i] = CharecterArray[lastIndex];
    CharecterArray[lastIndex] = charAtIndex;
    // console.log(charArrayofString[i], charArrayofString[lastIndex]);
  }
  return CharecterArray.join("");
}

console.log(reverseString("aloo"));
