//--------------------------------------------------- EXO 2 ---------------------------------------------------

/*

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, 
you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will 
need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10

*/


function ToDollar(ammount){
    if(isNaN(ammount)){
      return "it need to be a number !";
    } else if (ammount) {
      if(ammount < 0){
        return "-$" + (Math.round(Math.abs(ammount) * 100) / 100).toFixed(2);
      } else {
        return "$" + (Math.round(ammount * 100) / 100).toFixed(2);
      }
    }
  }
  
  console.log("START EXO 2");
  console.log(ToDollar(3));
  console.log(ToDollar(30.1));
  console.log(ToDollar(-25));
  console.log("END EXO 2");