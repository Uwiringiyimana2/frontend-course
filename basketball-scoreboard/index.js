// HOME scoreboard

let homeScore = document.getElementById("home-score");
let homeScore1 = 0;

let guestScore = document.getElementById("guest-score");
let homeScore2 = 0;

function increment1() {
  homeScore1 += 1;
  homeScore.textContent = homeScore1;
}

function increment2() {
  homeScore1 += 2;
  homeScore.textContent = homeScore1;
}

function increment3() {
  homeScore1 += 3;
  homeScore.textContent = homeScore1;
}

// GUEST Team

function incr1() {
  homeScore2 += 1;
  guestScore.textContent = homeScore2;
}

function incr2() {
  homeScore2 += 2;
  guestScore.textContent = homeScore2;
}

function incr3() {
  homeScore2 += 3;
  guestScore.textContent = homeScore2;
}
