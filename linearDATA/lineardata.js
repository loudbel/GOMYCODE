//Solution 1
function sumDiff(a,b){
let sum = 0

for (let i = 0; i < a.length; i++) {
    if(!b.find(e => e === a[i])){
        sum += a[i];
    }
}

for (let j = 0; j < b.length; j++) {
    if(!a.find(e => e === b[j])){
        sum += b[j];
    }
}
return sum;
}

/*-------------------------*/
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

console.log(sumDiff(set1,set2));
/* ------------------------ */



//Solution 2
function sumDiffMap(a,b){
const count = new Map();
let sum = 0

for (let i = 0; i < a.length; i++) {
    if(count.get(a[i])){
        count.set(a[i], count.get(a[i]) +1);
    } else {
        count.set(a[i], +1);
    }
}

for (let j = 0; j < b.length; j++) {
    if(count.get(b[j])){
        count.set(b[j], count.get(b[j]) +1);
    } else {
        count.set(b[j], +1);
    }
}

for (let [key, val] of count) {
    if(val === 1){
        sum += key;
    }
  }

return sum;
}

let set1map = [3, 1, 7, 9];
let set2map = [2, 4, 1, 9, 3];
console.log(sumDiffMap(set1map,set2map)); 