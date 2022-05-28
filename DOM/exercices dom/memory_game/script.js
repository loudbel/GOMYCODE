const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon"
  ];

//melanger l'ordre de l'array
let shuffle = icons.sort((a, b) => 0.5 - Math.random()); 

//selectioner back card icon
let cards = document.querySelectorAll('.card_face.card_front i')

//ajouter la class icone au back card
for (let i = 0; i < shuffle.length; i++) {
  cards[i].classList.add(shuffle[i]);
  document.getElementsByClassName('card')[i].setAttribute('card', i);
  document.getElementsByClassName('card')[i].addEventListener("click", turnCard);
  //document.getElementsByClassName('card')[i].addEventListener("click", compareCards);
}
//fin de start
};

//executer start() une fois la page chargé
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}



//tourner la carte après click
function turnCard() {
   let el = this;
   if(el.classList.contains('visible'))return;
   
   //if(compare.length === 2)return;
   el.classList.add("visible");
   compareCards(el);
   initComp();
}



var compare = [];
var lastClicked = [];

function compareCards(el){
  //let el = this;

  //id de l'element clické
  var id = el.getAttribute('card');
 
  var laClass = el.querySelector('.card_face.card_front i').className;
  //si plus que deux cliqué retourner
  
  //si compare plus que deux , réinitialiser
  if(compare.length >= 2){
    compare = [];
    if(lastClicked.length > 2){
      document.getElementsByClassName('card')[lastClicked[0]].classList.remove("visible");
      document.getElementsByClassName('card')[lastClicked[1]].classList.remove("visible");
    }
    lastClicked = [];
  }
  
  //si meme index ne pas comparer
  if(compare.length <2 || lastClicked[0] != lastClicked[1]){
    compare.push(laClass);
  }
  lastClicked.push(id);

console.log(compare);
console.log(lastClicked);
if(compare.length == 2 && compare[0] === compare[1] && lastClicked[0] != lastClicked[1]){

  console.log('match');
  document.querySelector('[card="'+lastClicked[0]+'"]').classList.add("visible");
  document.querySelector('[card="'+lastClicked[1]+'"]').classList.add("visible");

} else if(lastClicked.length >= 2) {
  setTimeout(
    function() {
      document.querySelector('[card="'+lastClicked[0]+'"]').classList.remove("visible");
      document.querySelector('[card="'+lastClicked[1]+'"]').classList.remove("visible");
    }, 1000);
}
}


function initComp(){
  console.log(compare.length);
  if(compare.length > 2){
    compare = [];
    if(lastClicked.length > 2){
      document.getElementsByClassName('card')[lastClicked[0]].classList.remove("visible");
      document.getElementsByClassName('card')[lastClicked[1]].classList.remove("visible");
    }
    lastClicked = [];
  }
}
