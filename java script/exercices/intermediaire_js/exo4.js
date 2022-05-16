//--------------------------------------------------- EXO 4 ---------------------------------------------------

/*

Write a function to convert a name into initials. The name will be two words with one space in between them.

The output should be two capital letters with a dot separating them.

Exemple :

initials("Moussaoui","Akram") // => M.A

Sam Harris => S.H

Patrick Feeney => P.F

*/

function initials(nom,prenom){
    var initials = nom.substring(0, 1)+"."+prenom.substring(0, 1);
    return initials;
}

console.log(initials("Moussaoui","Akram"));