const  plusOne = (digits) =>{
    const lastDigit=digits[digits.length-1];
    if(lastDigit!==9){
        digits[digits.length-1]= lastDigit+1;
        return digits; 
    }

        // get last index of not 9 and then splice the array 
        const borderIndex=lastIndexOfNotNine(digits); 
        
        const  after= digits.slice(borderIndex+1).map(e=>0);
        const  initial=digits.slice(0,borderIndex);
        const  borderDigit= digits[borderIndex];
        digits=[...initial,borderDigit+1,...after];
        if(borderIndex==-1){
            digits=[1,...after]
        }
        
     return digits  
    
};

const lastIndexOfNotNine=(array)=>{
    
 for (let i = array.length-1; i >= 0; i--) {
    if (array[i]!==9){
        return i;
    }
 }
 return -1;
};





console.log(plusOne([8,9,9]))
console.log(plusOne([5,4,3,9,9]))
