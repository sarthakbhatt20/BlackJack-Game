let hasBlackJack = false;
let isAlive = false;
let cards = [];
let sum = 0;
let mssgEl = document.getElementById("mssg");
let sumEl = document.getElementById("sum");
let cardEl = document.getElementById("cards");
/*let player = {
  name: "User",
  chips: 1690,
};*/

/*let playerEl = document.getElementById("person");
playerEl.textContent = player.name + ": ₹" + player.chips;*/

function game() {
  cardEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent = cardEl.textContent + cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    mssgEl.textContent = "do you want to draw a new card?";
  } else if (sum === 21) {
    mssgEl.textContent = "You won!!!";
    hasBlackJack = true;
  } else {
    mssgEl.textContent = "You lost!";
    isAlive = false;
  }
}

function startgame() {
  isAlive = true;
  let firstcard = getRandomNumber();
  let secondcard = getRandomNumber();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  game();
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumber();
    cards.push(card);
    sum += card;
    game();
  }
}

function getRandomNumber() {
  let random = Math.ceil(Math.random() * 13);
  if (random == 11 || random == 12 || random == 13) {
    random = 10;
  } else if (random == 1) {
    random = 11;
  }
  return random;
}
