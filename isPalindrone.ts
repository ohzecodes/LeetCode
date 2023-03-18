/** capitalize the given string, and then replace the non-alpha numeric characters with empty string */
const replaceNonAlphaNumeric=(givenString: string)=>{
  const NonAlphaNumberic=/[^(A-Z)(0-9)][\(\)]*/g
return givenString.toUpperCase().replace(NonAlphaNumberic,"");
}




/*
DRY RUN
String= Computer
Step 1: r + reverseString('Compute');
Step 2: r + e + reverseString('Comput');
Step 3: r + e + t + reverseString('Compu');
Step 4: r + e + t + u+ reverseString('Comp');
Step 5: r + e + t + u+ p + reverseString('Comp');
Step 6: r + e + t + u+ p + m + reverseString('Co');
Step 7: r + e + t + u+ p + m +o+ reverseString('C');
Step 8: r + e + t + u+ p + m + o + C
result: retupmoC
*/

function getFirstChar(givenString:string){
return givenString.charAt(0);
}

function isEmpty(givenString:string){
return (givenString.length == 0)
}
/** recursively reversed the given string */
function reverseString(givenString:string):string {
  // end case
if (isEmpty(givenString)) {
  return getFirstChar(givenString);
}
  // small problem solution
      let lastCharecter:string= givenString.charAt(givenString.length - 1)
  // big problem solution
  // get big problem Solution by adding small problem solution
  let reversal:string=lastCharecter + reverseString(givenString.substring(0, givenString.length - 1));
  return reversal
}


/** Uses  replaceNonAlphaNumeric function with the given string, 
 * and then compares it to its Reversal
*/
function isPalindrome(givenString: string): boolean {
  const OrginalString = replaceNonAlphaNumeric(givenString)
  console.log(OrginalString)
  const OrignalStringReversed=reverseString(OrginalString);
return OrginalString===OrignalStringReversed;
};
