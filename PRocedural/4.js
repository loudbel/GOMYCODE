function anagram(w1,w2){
    let res = `${w1} and ${w2} are NOT anagrams`;
    var sortAz = (text) => { return text.split('').sort().join(''); };
    wr1 = sortAz(w1);
    wr2 = sortAz(w2);
    if (wr1 === wr2){ res = `${w1} and ${w2} are Anagrams`; }
    return res;
}

let wrd1 = 'marie';
let wrd2 = 'aimer';
console.log(anagram(wrd1,wrd2));
//-------------------------------------------


function mirror(str){
    return str.split('').reverse().join('');
}

str = 'MIRROR';
console.log(mirror(str));

