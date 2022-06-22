//conter chaque entrée de l'array entre debut et FUNCTION function_name(parameters) : return_type
//passer de ca : 
var array1 = [[1,5],[6,10],[12,15],[3,7]];
var array2 = [[1,5],[6,10],[12,15]];
//a ca
//[[1,2,3,4,5],[6,7,8,9,10],[12,13,14,15],[3,4,5,6,7]]

function interval(a){
var newa = [];
let result = '';

//convertir array interval en array avec chiffres entre intervales
a.forEach(e => {
    var list = [];
    for (var i = e[0]; i <=  e[1]; i++) {
        list.push(i); 
    }
    newa.push(list);
    //console.log(list);
});
//console.log(newa);

//comparer si entre les array il y a le meme chiffre
for (let i = 0; i < newa.length; i++) {
 /*
    let i2 = newa[i++].sort().join(',');
    console.log(i2);
   
    if(newa[i].sort().join(',')=== newa[i2].sort().join(',')){
        console.log(newa[i] +' compare to '+newa[i2]);
        result += 'MATCH : [' + a[i] + '] ';
    }else{
         result += 'PAS DE MATCH';
        }*/
}

return result;
}

//console.log(interval(array2));
/*
var array3 = [5, 7 , 2, 4];
let a2 = array3.slice().sort(function(a,b){
    return a-b;
})
let a1 = array3.slice().sort(function(a,b){
    return b-a;
})
console.log('A1::::::', a1);
console.log('A2 ::::::', a2);
*/