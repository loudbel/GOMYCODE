
//creates a Stack using array
class Stack {
    constructor(){
        this.items =[];
        
    }

    // add element to the stack
    push (value){
        return this.items.push(value);
    }
// remove element from the stack
    pop(){
        if (this.items.length>0) return this.items.pop();
        return null;
        
    }
    // view the last element (top element without remove it)
    peek() {
        return this.items[this.items.length - 1];
    }
    // check if the stack is empty
    isEmpty(){
        return this.items.length == 0;
     }
    
     // the size of the stack
     size(){
         return this.items.length;
     }
     // empty the stack
    clear(){
        this.items = [];
    }

}

/*
1/ Print the operand as they arrive.
2/ If the stack is empty or contains a left parenthesis on top, push the incoming operator on to the stack.
3/ If the incoming symbol is '(', push it on to the stack.
4/ If the incoming symbol is ')', pop the stack and print the operators until the left parenthesis is found.
5/ If the incoming symbol has higher precedence than the top of the stack, push it on the stack.
6/ If the incoming symbol has lower precedence than the top of the stack, pop and print the top of the stack.
 Then test the incoming operator against the new top of the stack.
7/ If the incoming operator has the same precedence with the top of the stack then use 
the associativity rules. If the associativity is from left to right then pop and print the top of the stack then push the incoming operator. If the associativity is from right to left then push the incoming operator.
8/ At the end of the expression, pop and print all the operators of the stack.
*/
function FromInfixToPostfix(exp){
    // à implémenter 
}
