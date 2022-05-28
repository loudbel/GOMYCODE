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
  document.getElementsByClassName('card')[i].addEventListener("click", turnCard);
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
//document.getElementsByClassName('card').addEventListener("click", turnCard);
function turnCard() {
  var element = this.document.querySelector('.card_face.card_front');
  element.classList.remove("card_front");
  
}
