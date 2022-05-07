/*

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough 
money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" 

Exemple : 
salaryWithBonus(100, true) //=> 1000£
salaryWithBonus(30, false) //=> 30£
*/
/*Exemple : 
salaryWithBonus(100, true) //=> 1000£
salaryWithBonus(30, false) //=> 30£
*/

function salaryWithBonus(salary, bonus){
    let devise = "£";
    let res = 0
    if(Number.isInteger(salary) && bonus == true){
        res = salary * 10  + devise;
    } else if(!Number.isInteger(salary)) {
      res = "Salary need to be integer number !";
    } else { 
      res = salary  + devise;
    }
  return res;
}
console.log("START EXO 1");
console.log("integer 100, true : " + salaryWithBonus(100, true));
console.log("integer 100, false : " + salaryWithBonus(100, 0));
console.log("not integer 100,10 , true : " + salaryWithBonus(100.1 , 1));
console.log("integer 100, true : " + salaryWithBonus(100.5, false));
console.log("END EXO 1");
