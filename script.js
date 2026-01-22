"strict mode";

// Function to calculate the factorial of a number

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const chknum = function (num) {
  document.querySelector(".number").textContent = num;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMessage("No number!");
  } else if (guess === secretnumber) {
    // document.querySelector(".number").textContent = secretnumber;
    chknum(secretnumber);
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      chknum(secretnumber);
      document.querySelector("body").style.backgroundColor = "#ff5c5c";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  chknum("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
