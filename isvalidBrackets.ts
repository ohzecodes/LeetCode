// explaination based solution
// not really woried about memory/time for this solution

class Stack<Type>{
  private stack:Type[]=[];
  pop(){
     return this.stack.pop();
  }
  isEmpty():boolean{
      return this.stack.length==0
  }
  push(Char:Type):void{
      this.stack.push(Char)
  }
  top():Type{
      return this.stack[this.stack.length-1]
  }
  bottom():Type{
      return this.stack[0]
  }
}



const mapCloseBracketsToOpenBracket: { [key: string]: string }= {   
  ")":"(",
  "]":"[",
  "}":"{"
};

const closingBraketsArray:string[]=
  Object.keys(mapCloseBracketsToOpenBracket);

const openingBraketArray:string[]=
  Object.values(mapCloseBracketsToOpenBracket);

const isStartingWithClosingBraket=(InputString: string):boolean =>(closingBraketsArray.indexOf(InputString.charAt(0)) > -1)

const containsOpenBracket=(char:string):boolean =>
(openingBraketArray.indexOf(char) > -1);


function isValidBrackets(InputString: string): boolean {
  if ( isStartingWithClosingBraket(InputString) ) {
    return false;
  }
  const parenthesisStack= new Stack();

  for (let i = 0; i<InputString.length;i++){

    let currentCharecter = InputString.charAt(i);
    if (containsOpenBracket(currentCharecter)) {
        parenthesisStack.push(InputString.charAt(i))
      }

    const openingBracket:string=mapCloseBracketsToOpenBracket[InputString.charAt(i)];
    if(openingBracket===parenthesisStack.top()){
      parenthesisStack.pop();
        continue; 
    }

    const isNotSameAsTop:boolean= <boolean>(openingBracket && openingBracket!==parenthesisStack.top());

     if(isNotSameAsTop){
         return false
     } 
  }

  return parenthesisStack.isEmpty()
};

console.log(isValidBrackets("<({[]})>"))
console.log(isValidBrackets("()"))
console.log(isValidBrackets("(]"))
