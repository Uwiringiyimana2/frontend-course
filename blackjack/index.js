let cards = [];
let sum = 0
let hasBlackJack = false
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Eric",
  chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num === 1) {
    return 11;
  } else if (num >= 11 && num <= 13) {
    return 10;
  } else {
    return num;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];

  renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "Sum " + sum;
    for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}


function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}