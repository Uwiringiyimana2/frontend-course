let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() {
  renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum " + sum;
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
  console.log("Drawing new card from a deck");
  let card = 6;
  sum += card;
  cards.push(card);
  renderGame();
}