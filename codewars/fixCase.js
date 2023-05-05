// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function fixCase(givenString) {
  const givenStringArray = givenString.split("");

  let upperCaseCount = givenStringArray.filter((upperCaseChar) => upperCaseChar.charCodeAt(0)>=65&& upperCaseChar.charCodeAt(0)<=90).length;
  let lowerCaseCount = givenStringArray.filter((lowerCaseChar) => lowerCaseChar.charCodeAt(0)>=97&& lowerCaseChar.charCodeAt(0)<=123).length;
  if (upperCaseCount > lowerCaseCount) {
    return givenString.toUpperCase();
  } else if (upperCaseCount < lowerCaseCount) {
    return givenString.toLowerCase();
  } else if (upperCaseCount == lowerCaseCount) {
    return givenString.toLowerCase();
  }
}
