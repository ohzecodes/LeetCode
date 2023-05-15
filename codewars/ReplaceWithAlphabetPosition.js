// https://www.codewars.com/kata/546f922b54af40e1e90001da

const replaceNonAlphabets = (givenText) =>
  givenText.toLowerCase().replace(/([^a-z])/g, "");

const letterToNumber = (letter) => letter.charCodeAt(0) - 96;

function alphabetPosition(givenText) {
  givenText = replaceNonAlphabets(givenText);

  const textCharArray = givenText.split("");
  /* for (let i = 0; i < textCharArray.length; i++) {
    textCharArray[i] = letterToNumber(textCharArray[i]);
  }*/
  return textCharArray.map((e) => letterToNumber(e)).join(" ");
}

/**
 *
 * param {String} letter

function letterToNumber(letter) {
  return letter.charCodeAt(0) - 96;
   const mappingALetterToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return mappingALetterToNumber[letter];
}*/
