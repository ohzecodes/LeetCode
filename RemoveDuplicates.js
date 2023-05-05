// https://leetcode.com/problems/remove-duplicates-from-sorted-array
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

const deepcopyBtoA = (source, destination) => {
    destination.splice(0,destination.length)
   source.forEach((e) => {
    destination.push(e)
   });
    return destination;
  };
  

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));