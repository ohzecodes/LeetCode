// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 *
 * @param {number[]} numberArray
 * @returns numberArray
const removeDuplicates = (numberArray) => {
    let results=[]
    for(let i =1;i<= numberArray.length;i++){
        let currentNumber =numberArray[i];
        let previousNumber=numberArray[i-1];
        if(currentNumber!==previousNumber){
            results.push(previousNumber)
        }
    }
    deepcopyBtoA(results,numberArray);
    return numberArray;
};
 * @param {any[]} source 
 * @param {any[]} destination 
 * @returns  destination[]
const deepcopyBtoA = (source, destination) => {
    destination.splice(0,destination.length)
   source.forEach((e) => {
    destination.push(e)
   });
    return destination;
  };
  
*/
/**
 *
 * @param {number[]} numberArray
 * @returns numberArray
 */
const removeDuplicatesInPlace = (numberArray) => {
  let deleteCount = 0;

  for (let i = 0; i <= numberArray.length; i++) {
    let curentNumber = numberArray[i];
    let nextNumber = numberArray[i + 1];
    if (curentNumber === nextNumber) {
      deleteCount++;
    } else {
      let borderIndex = i - deleteCount;
      if (deleteCount > 0) {
        numberArray.splice(borderIndex, deleteCount);
      }

      i = borderIndex;
      deleteCount = 0;
    }
  }
  return numberArray;
};
console.log(removeDuplicatesInPlace([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicatesInPlace([1, 1, 2]));