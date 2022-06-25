
function search(x,str){
    let res = {
        pos : '-1',
        find : false
    }
    for (let i = 0; i < str.length -1; i++) {
        if(str[i]==x || str[i].toUpperCase()==x  ){
            res.pos = i;
            res.find = true;
            break;
        }
    }
    return res;
}

function deleteEl(x,str){
    let res;
    let f = search(x,str);
    if(f.find == true){
        res = str.slice(0, f.pos) + str.slice(f.pos+1);
    } else { res = 'not found';}
    return res;
}

function deleteAll(x,str){
    let res = str.slice(0);
    let r = search(x,res);

    while (r.find == true) {
        res = deleteEl(x,res);
        r = search(x,res)
    }
    return res;
}

let x = 'c';
let str = 'ma recherche';
console.log(' resultat de recherche : ', search(x,str));
console.log(' suppression du premier : ', deleteEl(x,str));
console.log(' suppression de tous : ', deleteAll(x,str));
