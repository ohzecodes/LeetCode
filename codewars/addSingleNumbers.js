const checkforPlus = (givenString) => {
  const lastIndex = givenString.length - 1;
  return givenString[lastIndex] === "+" ? 0 : parseInt(givenString[lastIndex]);
};
/**
 * The purpose of this function is to take a string with
 * multiple single digit number separated with a plus sign,
 * and return the sum of them.
 *
 * @param {string} givenString
 * @returns {Number}
 */
const addSingles = (givenString) => {
  if (givenString.length <= 1) {
    return parseInt(givenString);
  }
  // Small Problem Solution
  const lastCharacter = checkforPlus(givenString);
  // Big Problem solution
  const accumulator = addSingles(
    givenString.substring(0, givenString.length - 1)
  );
  return lastCharacter + accumulator;
};

console.log("Sol", addSingles("5+6+9"));
