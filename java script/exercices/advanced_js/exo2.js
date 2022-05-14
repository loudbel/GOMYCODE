/*---------------------------------- Exo 2 -----------------------------------

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in
*/

let str = 0;
for (let i = 1; i < 10; i++) {
  if(i % 3 === 0 || i % 5 === 0  ){
    str = str + i;
  }
}
console.log(str);