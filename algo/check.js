let str = prompt("Please enter a sentence", "Harry Potter").split('.').join("");

function algo(str){
let char = str.length;
let words = str.split(' ').length;
let vowels = str.match(/[aeiou]/gi).length;
return `charachters : ${char} <br>
words : ${words} <br>
vowels : ${vowels} <br>`;
}

document.getElementById("return").innerHTML = algo(str);
/*
for (var i = 0; i < char; i++) {
    console.log(str[i]);
  }
*/