let x = 'c';
let str = 'ma reherche';

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
console.log(search(x,str))


function deleteEl(x,str){
    let f = search(x,str);

    if(f.find == true){
        str.slice(f.pos,1)
    }
    return str;
}
console.log(deleteEl(x,str))

function deleteAll(x,str){
    let res;
    let r = search(x,str);

    console.log(r.find)
    if(r.find == true){
        res = str.replaceAll(x, "");
    }
    
    return res;
}

console.log(deleteAll(x,str))