// https://leetcode.com/problems/length-of-last-word/
const lengthOfLastWord = (givenString) =>{
    givenString=givenString.trim();
    const  lastSpaceIndex =givenString.lastIndexOf(" "); 
    const lastWord=givenString.substring(lastSpaceIndex+1);
     /* we added +1 because there is a the lastIndexOf returns the " " charecter as well 
      another option will be to get the substing and trim it*/
    return lastWord.length;
};
/*2nd Implementation */
const  lengthOfLastWord2=(givenString)=>{
    const givenStringArray=givenString.trim().split(" ");
    
    const lastWord =givenStringArray[givenStringArray.length-1];
    return lastWord.length;
}
