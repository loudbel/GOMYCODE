let tab = [3.4,2.2,5.1,3.4,7.1,0.5,3.4,0.2]
let x = '3.4';

function firstLast(x,tab){
    let res = {
        first : '-1',
        last : '-1'
    }
    for (let i = 0; i < tab.length -1; i++) {
        if(tab[i]==x && i != res.first){
            res.first = i;
            break;
        }
    }
    for (let i = tab.length - 1; i >= 0; i--) {
        if(tab[i]==x){
        res.last = i;
        break;
        } 
    }
    return res;
}

console.log(firstLast(x,tab));