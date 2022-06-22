//rearanger
//calculer 2 par 2

var array = [1, 4 , -5, 3, -2, 10 ,-6, 20];

console.log(array)
let min = Math.abs(array[0] + array[1]);
//console.log(min);
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        somme = Math.abs(array[j] + array[i]);
        if(somme <= min){
            min = somme;
        }
        
    }; 
    //console.log(min)
}
